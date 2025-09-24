import type { Locator, Page } from '@playwright/test';

class Home {
  readonly page: Page;
  readonly title = 'Vite + React + TS';
  readonly viteLink: Locator;
  readonly reactLink: Locator;
  readonly heading: Locator;
  readonly helperText: Locator;
  readonly counterButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.viteLink = page.locator('a[href="https://vite.dev"]');
    this.reactLink = page.locator('a[href="https://react.dev"]');
    this.heading = page.locator('h1');
    this.helperText = page.locator('.read-the-docs');
    this.counterButton = page.getByRole('button', { name: /count is \d+/ });
  }

  async goto() {
    await this.page.goto('/');
  }

  async incrementCounter(times: number) {
    for (let i = 0; i < times; i++) {
      await this.counterButton.click();
    }
  }
}

export default Home;
