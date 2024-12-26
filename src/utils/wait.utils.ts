import { Page } from '@playwright/test';

export class WaitUtils {
  constructor(private page: Page) {}

  async waitForElementVisible(locator: string, timeout = 5000) {
    await this.page.waitForSelector(locator, { state: 'visible', timeout });
  }
}
