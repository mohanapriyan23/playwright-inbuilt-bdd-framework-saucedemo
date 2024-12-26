import { Page, expect } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async click(locator: string) {
    await this.page.click(locator);
  }

  async fill(locator: string, value: string) {
    await this.page.fill(locator, value);
  }

  async getText(locator: string) {
    return await this.page.textContent(locator);
  }

  async assertText(locator: string, expectedText: string) {
    const actualText = await this.getText(locator);
    expect(actualText?.trim()).toBe(expectedText);
  }

  async navigate(url: string) {
    await this.page.goto(url);
  }
}
