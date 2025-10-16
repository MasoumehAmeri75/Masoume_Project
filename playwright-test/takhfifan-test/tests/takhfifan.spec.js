// tests/takhfifan.spec.js
const { test, expect } = require('@playwright/test');

test('صفحه اصلی تخفیفان باز شود و عنوان درست باشد', async ({ page }) => {
  // رفتن به سایت تخفیفان
  await page.goto('https://takhfifan.com', { waitUntil: 'domcontentloaded' });

  // چک کردن عنوان صفحه
  await expect(page).toHaveTitle(/تخفیفان/);

  // چک کردن وجود فیلد جستجو
  const searchBox = page.locator('input[type="search"]');
  await expect(searchBox).toBeVisible();
});
