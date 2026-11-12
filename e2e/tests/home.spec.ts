import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test.describe('Home', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have the correct title', async ({ page }) => {
    await expect(page).toHaveTitle('React + Vite + TS');
  });

  test('should show the correct heading', async ({ page }) => {
    const heading = page.getByRole('heading', { name: 'React + Vite' });

    await expect(heading).toBeVisible();
  });

  test('should render the page inside the main landmark', async ({ page }) => {
    const main = page.getByRole('main');

    await expect(
      main.getByRole('heading', { name: 'React + Vite' })
    ).toBeVisible();
  });

  test('should have no detectable accessibility violations', async ({
    page,
  }) => {
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
