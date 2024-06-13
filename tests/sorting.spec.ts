import { test, expect } from '@playwright/test';
import { LoginPage } from '../page_object/loginPage';
import { HomePage } from '../page_object/homePage'

test('Should sort the products by name in descending and ascending order', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  await loginPage.login(process.env.STANDARD_USER, process.env.PASSWORD);
  await homePage.sortByName("desc");
  expect(await homePage.checkFirstItemOnProductList()).toContainText("T-Shirt (Red)");
  await homePage.sortByName("asc");
  expect(await homePage.checkFirstItemOnProductList()).toContainText("Sauce Labs Backpack");
});
