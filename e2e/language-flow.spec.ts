import { test, expect } from '@playwright/test';

test.describe('Multilanguage flow', () => {
  test.beforeEach(async ({ page }) => {
    // Clear localStorage before each test to start fresh
    await page.goto('/');
    await page.evaluate(() => localStorage.clear());
  });

  test('default language detection and toggle', async ({ page }) => {
    await page.goto('/');
    
    // Wait for app to load
    await page.waitForSelector('header');
    
    // Default language should be Spanish (assuming browser locale is not English)
    // Check that a Spanish text is visible
    await expect(page.locator('text=Inicio')).toBeVisible();
    
    // Find the language toggle button (desktop)
    const toggleButton = page.locator('button[aria-label="Switch to English"]');
    await expect(toggleButton).toBeVisible();
    await expect(toggleButton).toHaveText('ES');
    
    // Click toggle to switch to English
    await toggleButton.click();
    
    // Wait for UI to update
    await expect(page.locator('text=Home')).toBeVisible();
    await expect(toggleButton).toHaveText('EN');
    await expect(toggleButton).toHaveAttribute('aria-label', 'Cambiar a español');
    
    // Verify language persists after reload
    await page.reload();
    await page.waitForSelector('header');
    
    // After reload, language should still be English
    const toggleButtonAfterReload = page.locator('button[aria-label="Cambiar a español"]');
    await expect(toggleButtonAfterReload).toBeVisible();
    await expect(toggleButtonAfterReload).toHaveText('EN');
    
    // Verify translated content is still in English
    await expect(page.locator('text=Home')).toBeVisible();
  });
});