import { expect, test } from '@playwright/test';

// Requests from a page controlled by the PWA service worker can bypass page.route, so the aborted
// chunk would be served anyway. These tests do not need the service worker.
test.use({ serviceWorkers: 'block' });

test.describe('Lazy routes', () => {
  test('should load the home screen from its own chunk', async ({ page }) => {
    const homeChunk = page.waitForResponse((response) =>
      /\/assets\/HomeRoute-[^/]+\.js$/.test(response.url())
    );
    await page.goto('/');

    expect((await homeChunk).ok()).toBe(true);
    await expect(
      page.getByRole('heading', { name: 'React + Vite' })
    ).toBeVisible();
  });

  test('should show the error screen when a screen chunk fails to load', async ({
    page,
  }) => {
    await page.route(/\/assets\/HomeRoute-[^/]+\.js$/, (route) =>
      route.abort()
    );
    await page.goto('/');

    await expect(
      page
        .getByRole('main')
        .getByRole('heading', { name: 'Something went wrong' })
    ).toBeVisible();
  });
});
