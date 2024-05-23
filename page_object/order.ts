import { type Locator, type Page } from '@playwright/test';

export class Order {
  readonly page: Page;
  readonly addToCartBackpack: Locator;
  readonly addToCartBikeLight: Locator;
  readonly addToCartBoltTShirt: Locator;
  readonly addToCartJacket: Locator;
  readonly addToCartOnesie: Locator;
  readonly addToCartRedTShirt: Locator;
  readonly shoppingCartButton: Locator;
  readonly checkoutButton: Locator;
  readonly continueButton: Locator;
  readonly finishButton: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly postalCodeInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToCartBackpack = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.addToCartBikeLight = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
    this.addToCartBoltTShirt = page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
    this.addToCartJacket = page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]');
    this.addToCartOnesie = page.locator('[data-test="add-to-cart-sauce-labs-onesie"]');
    this.addToCartRedTShirt= page.locator('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]');
    this.shoppingCartButton = page.locator('[data-test="shopping-cart-link"]');
    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.continueButton = page.locator('[data-test="continue"]');
    this.finishButton = page.locator('[data-test="finish"]');
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.postalCodeInput = page.locator('[data-test="postalCode"]');
  }

  async addProduct(product: "Backpack" | "BikeLight" | "BoltTShirt" | "Jacket" | "Onesie" | "RedTShirt") {
      let locator: Locator
      if (product == "Backpack") {
        locator = this.addToCartBackpack
      } else if (product == "BikeLight") {
        locator = this.addToCartBikeLight
      } else if (product == "BoltTShirt") {
        locator = this.addToCartBoltTShirt
      } else if (product == "Jacket") {
        locator = this.addToCartJacket
      } else if (product == "Onesie") {
        locator = this.addToCartOnesie
      } else if (product == "RedTShirt") {
        locator = this.addToCartRedTShirt
      }
      await locator.click();
  }

  async orderDetails (data: orderData) {
    await this.shoppingCartButton.click();
    await this.checkoutButton.click();
    await this.firstNameInput.fill(data.firstName);
    await this.lastNameInput.fill(data.lastName);
    await this.postalCodeInput.fill(data.postalCode);
    await this.continueButton.click();
    await this.finishButton.click();
  }
}