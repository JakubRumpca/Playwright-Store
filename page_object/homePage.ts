import { type Locator, type Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly shoppingCartButton: Locator;
  private addToCartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.shoppingCartButton = this.page.locator('[data-test="shopping-cart-link"]');
  }
  
  async addProduct(productName: "backpack" | "bike-light" | "onesie") {
    this.addToCartButton = this.page.locator(`[data-test="add-to-cart-sauce-labs-${productName}"]`)
    await this.addToCartButton.click();
  }

  async goToYourCart() {
    await this.shoppingCartButton.click();
  }
}
