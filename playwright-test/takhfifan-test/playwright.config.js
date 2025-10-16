// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 120000,      // ۲ دقیقه برای هر تست
  retries: 1,           // یک بار retry در صورت fail
  use: {
    headless: true,     // بدون GUI
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    actionTimeout: 60000
  }
});
