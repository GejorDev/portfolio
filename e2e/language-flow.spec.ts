import { test, expect } from '@playwright/test'

test.describe('Language flow', () => {
  test('root redirects to detected locale', async ({ page }) => {
    await page.goto('/')
    expect(page.url()).toMatch(/\/[a-z]{2}\/$/)
  })

  test('direct /es/ shows Spanish content', async ({ page }) => {
    await page.goto('/es/')
    const nav = page.locator('[data-testid="nav-desktop"]')
    await expect(nav.getByText('Inicio')).toBeVisible()
    await expect(nav.getByText('Sobre mí')).toBeVisible()
  })

  test('direct /en/ shows English content', async ({ page }) => {
    await page.goto('/en/')
    const nav = page.locator('[data-testid="nav-desktop"]')
    await expect(nav.getByText('Home')).toBeVisible()
    await expect(nav.getByText('About me')).toBeVisible()
  })

  test('language toggle switches locale via cookie', async ({ page, context }) => {
    await page.goto('/es/')
    const nav = page.locator('[data-testid="nav-desktop"]')
    await expect(nav.getByText('Inicio')).toBeVisible()

    const toggle = page.locator('[data-lang-toggle]').first()
    await expect(toggle).toBeVisible()
    await toggle.click()

    await page.waitForURL('/en/')
    await expect(nav.getByText('Home')).toBeVisible()

    // Verify cookie was set
    const cookies = await context.cookies()
    const langCookie = cookies.find(c => c.name === 'lang')
    expect(langCookie).toBeDefined()
    expect(langCookie!.value).toBe('en')
    expect(langCookie!.sameSite).toBe('Lax')
    expect(langCookie!.secure).toBe(true)
  })

  test('unknown locale redirects to default', async ({ page }) => {
    await page.goto('/fr/')
    await page.waitForURL('/es/')
    expect(page.url()).toMatch(/\/es\//)
  })
})
