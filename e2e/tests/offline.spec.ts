import { expect, test } from '@playwright/test';

test.describe('Offline', () => {
  test('should load the runtime config when reloaded offline after one visit', async ({
    context,
    page,
  }) => {
    await page.goto('/');
    await page.waitForFunction(() => navigator.serviceWorker.controller);
    await expect
      .poll(() =>
        page.evaluate(async () => Boolean(await caches.match('/config.js')))
      )
      .toBe(true);

    await context.setOffline(true);
    await page.reload();

    expect(await page.evaluate(() => '__APP_CONFIG__' in window)).toBe(true);
    await expect(
      page.getByRole('heading', { name: 'React + Vite' })
    ).toBeVisible();
  });
});
