import { type Locator, type Page } from '@playwright/test';

export class Cart {
  readonly page: Page;
  readonly removeOnesieFromCart: Locator;
  readonly checkoutButton: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.removeOnesieFromCart = page.locator('[data-test="remove-sauce-labs-onesie"]');
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }
  
  async removeOnesieFromProduct() {
    await this.removeOnesieFromCart.click();
  }
  
  async goToOrderDetails() {
    await this.checkoutButton.click();
  }
}