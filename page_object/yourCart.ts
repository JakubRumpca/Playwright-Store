import { type Locator, type Page } from '@playwright/test';

export class Cart {
  readonly page: Page;
  readonly checkoutButton: Locator;
  private removeButton: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }
    
  async removeProduct(productName: string) {
    this.removeButton = this.page.locator(`[data-test="remove-sauce-labs-${productName}"]`);
    await this.removeButton.click();
  }
  
  async goToOrderDetails() {
    await this.checkoutButton.click();
  }
}
