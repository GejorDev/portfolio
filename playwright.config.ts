// Note: @playwright/test is pinned to 1.61.0-alpha for Ubuntu 26.04 compatibility.
// Ubuntu 26.04 ships with libnss ≥4.0, which Playwright 1.60 stable does not bundle.
// Revisit when Playwright publishes a stable build with updated libnss.
import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:4321',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: 'npm run dev',
    port: 4321,
    reuseExistingServer: !process.env.CI,
  },
})
