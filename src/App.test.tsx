import { describe, it, expect, beforeEach } from 'vitest';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/index';
import App from './App';

// Helper to render component with i18n provider
const renderWithI18n = (ui: React.ReactElement) => {
  return render(<I18nextProvider i18n={i18n}>{ui}</I18nextProvider>);
};

describe('App HTML lang attribute integration', () => {
  beforeEach(async () => {
    // Ensure i18n is initialized
    if (!i18n.isInitialized) {
      await i18n.init();
    }
    // Reset i18n to default language (es) before each test
    await i18n.changeLanguage('es');
    // Reset HTML lang attribute to default
    document.documentElement.lang = 'es';
  });

  it('should have initial lang attribute matching default language', () => {
    renderWithI18n(<App />);
    expect(document.documentElement.lang).toBe('es');
  });

  it('should update lang attribute when language toggles', async () => {
    renderWithI18n(<App />);
    // Find the toggle button (desktop) by aria-label
    const toggleButton = document.querySelector('button[aria-label="Cambiar a inglés"]') as HTMLButtonElement;
    expect(toggleButton).toBeTruthy();
    
    fireEvent.click(toggleButton);
    
    await waitFor(() => {
      expect(document.documentElement.lang).toBe('en');
    });
    
    // Toggle back to Spanish
    const backButton = document.querySelector('button[aria-label="Switch to Spanish"]') as HTMLButtonElement;
    fireEvent.click(backButton);
    
    await waitFor(() => {
      expect(document.documentElement.lang).toBe('es');
    });
  });
});