import { test, expect } from '@playwright/test';
import { LoginPage } from '../page_object/loginPage';

test('Should check if the standard user can log in', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login(process.env.STANDARD_USER, process.env.PASSWORD)
  await expect(page.locator('[data-test="title"]')).toContainText('Products');
});

test('Should check if the locked user can not log in', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login(process.env.LOCKED_USER, process.env.PASSWORD)
  await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Sorry, this user has been locked out.');
});