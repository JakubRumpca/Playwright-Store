import { type Locator, type Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly shoppingCartButton: Locator;
  readonly sortByButton: Locator;
  readonly menuButton: Locator;
  readonly activeSortingOption: Locator;
  readonly backToProductsButton: Locator;
  readonly firstProductOnList: Locator;
  private addToCartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.shoppingCartButton = this.page.locator('[data-test="shopping-cart-link"]');
    this.sortByButton = this.page.locator('[data-test="product-sort-container"]');
    this.menuButton = this.page.getByRole('button', { name: 'Open Menu' });
    this.activeSortingOption = this.page.locator('[data-test="active-option"]');
    this.backToProductsButton = this.page.locator('[data-test="back-to-products"]');
    this.firstProductOnList = this.page.locator('[data-test="inventory-item-name"]').first();
  }

  async addProduct(productName: "backpack" | "bike-light" | "onesie") {
    this.addToCartButton = this.page.locator(`[data-test="add-to-cart-sauce-labs-${productName}"]`);
    await this.addToCartButton.click();
  }

  async goToYourCart() {
    await this.shoppingCartButton.click();
  }

  async openMenu() {
    await this.menuButton.click();
  }

  async backToProducts() {
    await this.backToProductsButton.click();
  }

  async openFirstProductDetails() {
    await this.firstProductOnList.click();
  }

  async sortByName(order: "asc" | "desc") {
    await this.sortByButton.click();
    const optionValue = (order == "asc") ? "az" : "za";
    await this.sortByButton.selectOption(optionValue);
  }

  async sortByPrice(order: "asc" | "desc") {
    await this.sortByButton.click();
    const optionValue = (order == "asc") ? "lohi" : "hilo";
    await this.sortByButton.selectOption(optionValue);
  }

  async checkFirstItemOnProductList() {
    await this.firstProductOnList.waitFor();
    return this.firstProductOnList;
  }

  async checkActiveSortingOption() {
    await this.activeSortingOption.waitFor();
    return this.activeSortingOption;
  }
}
