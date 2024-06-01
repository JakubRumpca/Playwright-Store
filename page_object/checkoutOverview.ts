import { type Locator, type Page } from '@playwright/test';

export class Checkout {
    readonly page: Page;
    readonly finishButton: Locator;
  
    constructor(page: Page) {
      this.page = page;
      this.finishButton = page.locator('[data-test="finish"]');
    }

    async confirmOrder() {
      await this.finishButton.click();
    }
}