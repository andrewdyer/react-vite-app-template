import { expect, test } from '@playwright/test';

import { Home } from '../pages';

test.describe('Home', () => {
  let home: Home;

  test.beforeEach(async ({ page }) => {
    home = new Home(page);

    await home.goto();
  });

  test('Home has expected title', async ({ page }) => {
    await expect(page).toHaveTitle(home.title);
  });

  test('Vite and React logo links are correct', async () => {
    await expect(home.viteLink).toHaveAttribute('href', 'https://vite.dev');
    await expect(home.reactLink).toHaveAttribute('href', 'https://react.dev');
  });

  test('Page displays correct heading and text', async () => {
    await expect(home.heading).toHaveText('Vite + React');
    await expect(home.helperText).toHaveText(
      'Click on the Vite and React logos to learn more'
    );
  });

  test('Counter increments correctly', async () => {
    await home.incrementCounter(1);
    await expect(home.counterButton).toContainText('count is 1');

    await home.incrementCounter(1);
    await expect(home.counterButton).toContainText('count is 2');

    await home.incrementCounter(1);
    await expect(home.counterButton).toContainText('count is 3');
  });
});
