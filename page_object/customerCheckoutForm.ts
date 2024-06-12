import { type Locator, type Page } from '@playwright/test';

export class CustomerCheckoutForm {
  readonly page: Page;
  readonly continueButton: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly postalCodeInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.continueButton = this.page.locator('[data-test="continue"]');
    this.firstNameInput = this.page.locator('[data-test="firstName"]');
    this.lastNameInput = this.page.locator('[data-test="lastName"]');
    this.postalCodeInput = this.page.locator('[data-test="postalCode"]');
  }

  async orderDetails(data: customerData) {
    await this.firstNameInput.fill(data.firstName);
    await this.lastNameInput.fill(data.lastName);
    await this.postalCodeInput.fill(data.postalCode);
    await this.continueButton.click();
  }
}
