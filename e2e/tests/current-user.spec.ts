import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

/**
 * The signed-in user the routed API returns.
 */
const currentUser = {
  id: '1',
  name: 'Ada Lovelace',
  email: 'ada@example.com',
};

// Requests from a page controlled by the PWA service worker can bypass page.route, so the routed
// API would be skipped. These tests do not need the service worker.
test.use({ serviceWorkers: 'block' });

test.describe('Current user', () => {
  test.beforeEach(async ({ page }) => {
    await page.route('**/api/users/me', (route) =>
      route.fulfill({ json: currentUser })
    );
  });

  test('should show the signed-in user in the header', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('banner')).toHaveText(
      'Signed in as Ada Lovelace (ada@example.com)'
    );
  });

  test('should show the signed-in user on every screen', async ({ page }) => {
    await page.goto('/this-page-does-not-exist');

    await expect(page.getByRole('banner')).toContainText('Ada Lovelace');
  });

  test('should have no detectable accessibility violations', async ({
    page,
  }) => {
    await page.goto('/');
    await expect(page.getByRole('banner')).toContainText('Ada Lovelace');

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});

test.describe('Current user with a failing API', () => {
  test('should show an error and load the user after retrying', async ({
    page,
  }) => {
    let isApiFailing = true;
    await page.route('**/api/users/me', (route) =>
      isApiFailing
        ? route.fulfill({ status: 500 })
        : route.fulfill({ json: currentUser })
    );
    await page.goto('/');

    // The query retries three times with backoff, about seven seconds in total, before failing.
    await expect(page.getByRole('alert')).toContainText(
      'Your account could not be loaded.',
      { timeout: 15_000 }
    );
    isApiFailing = false;
    await page.getByRole('button', { name: 'Try again' }).click();

    await expect(page.getByRole('banner')).toContainText('Ada Lovelace');
  });
});
