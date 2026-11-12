import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test.describe('Not found', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/this-page-does-not-exist');
  });

  test('should show the not-found heading inside the main landmark', async ({
    page,
  }) => {
    const main = page.getByRole('main');

    await expect(
      main.getByRole('heading', { name: 'Page not found' })
    ).toBeVisible();
  });

  test('should return to the home page from the recovery link', async ({
    page,
  }) => {
    await page.getByRole('link', { name: 'Go to the home page' }).click();

    await expect(page).toHaveURL('/');
    await expect(
      page.getByRole('heading', { name: 'React + Vite' })
    ).toBeVisible();
  });

  test('should have no detectable accessibility violations', async ({
    page,
  }) => {
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
