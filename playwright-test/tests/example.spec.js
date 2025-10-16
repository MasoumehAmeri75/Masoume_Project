// فایل: tests/example.spec.js
const { test, expect } = require('@playwright/test');

test('صفحه اصلی باید درست باز شود', async ({ page }) => {
  // باز کردن وب‌سایت مورد نظر
  await page.goto('https://example.com');

  // چک کردن عنوان صفحه
  await expect(page).toHaveTitle('Example Domain');

  // چک کردن وجود یک متن در صفحه
  const heading = page.locator('h1');
  await expect(heading).toHaveText('Example Domain');
});
