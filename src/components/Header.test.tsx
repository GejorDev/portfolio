import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n/index';
import Header from './Header';

// Helper to render component with i18n provider
const renderWithI18n = (ui: React.ReactElement) => {
  return render(<I18nextProvider i18n={i18n}>{ui}</I18nextProvider>);
};

describe('Header integration', () => {
  beforeEach(async () => {
    // Ensure i18n is initialized
    if (!i18n.isInitialized) {
      await i18n.init();
    }
    // Reset i18n to default language (es) before each test
    await i18n.changeLanguage('es');
  });

  const getToggleButton = () => {
    // There are two toggle buttons (desktop and mobile). Pick the first one.
    const buttons = screen.getAllByRole('button', { name: /switch to spanish|cambiar a inglés/i });
    return buttons[0];
  };

  it('should display language toggle button with current language', async () => {
    renderWithI18n(<Header />);
    const button = getToggleButton();
    expect(button).toBeInTheDocument();
    // Initially language is 'es', button text should be 'ES'
    expect(button).toHaveTextContent('ES');
  });

  it('should toggle language when button clicked', async () => {
    renderWithI18n(<Header />);
    const button = getToggleButton();
    
    // Click to switch to English
    fireEvent.click(button);
    
    // Wait for language change to propagate
    await waitFor(() => {
      expect(i18n.language).toBe('en');
    });
    
    // Button text should now be 'EN'
    expect(button).toHaveTextContent('EN');
    // aria-label should be 'Switch to Spanish'
    expect(button).toHaveAttribute('aria-label', 'Switch to Spanish');
  });

  it('should update navigation links text after language toggle', async () => {
    renderWithI18n(<Header />);
    // Initially Spanish
    expect(screen.getByText('Inicio')).toBeInTheDocument();
    expect(screen.getByText('Sobre mí')).toBeInTheDocument();
    
    // Toggle to English
    const button = getToggleButton();
    fireEvent.click(button);
    
    // Wait for translation to update (the links should now be in English)
    await waitFor(() => {
      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('About me')).toBeInTheDocument();
    });
  });

  it('should have aria-labels that match current language', async () => {
    renderWithI18n(<Header />);
    const button = getToggleButton();
    expect(button).toHaveAttribute('aria-label', 'Cambiar a inglés');
    
    fireEvent.click(button);
    await waitFor(() => {
      expect(button).toHaveAttribute('aria-label', 'Switch to Spanish');
    });
  });

  it('should have stable size to prevent layout shift', async () => {
    renderWithI18n(<Header />);
    const button = getToggleButton();
    expect(button).toHaveClass('min-w-[4rem]', 'h-8', 'whitespace-nowrap');
  });

  it('should have stable size for mobile button', async () => {
    renderWithI18n(<Header />);
    const buttons = screen.getAllByRole('button', { name: /switch to spanish|cambiar a inglés/i });
    expect(buttons.length).toBe(2);
    const mobileButton = buttons[1];
    expect(mobileButton).toHaveClass('min-w-[4rem]', 'h-8', 'whitespace-nowrap');
  });
});