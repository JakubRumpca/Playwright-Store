import { type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButtor: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('[data-test="username"]')
    this.passwordInput = page.locator('[data-test="password"]')
    this.loginButtor = page.locator('[data-test="login-button"]')
  }

  async login(username, password) {
    await this.page.goto('/');
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButtor.click();
  }
}