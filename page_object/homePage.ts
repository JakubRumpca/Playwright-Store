import { type Locator, type Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly addToCartBackpack: Locator;
  readonly addToCartBikeLight: Locator;
  readonly addToCartOnesie: Locator;
  readonly shoppingCartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToCartBackpack = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.addToCartBikeLight = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
    this.addToCartOnesie = page.locator('[data-test="add-to-cart-sauce-labs-onesie"]');
    this.shoppingCartButton = page.locator('[data-test="shopping-cart-link"]');
  }
  
  async addProduct(product: "Backpack" | "BikeLight" | "Onesie") {
    let locator: Locator
    if (product == "Backpack") {
      locator = this.addToCartBackpack
    } else if (product == "BikeLight") {
      locator = this.addToCartBikeLight
    } else if (product == "Onesie") {
      locator = this.addToCartOnesie
    }
    await locator.click();
  }

  async goToYourCart() {
    await this.shoppingCartButton.click();
  }
}