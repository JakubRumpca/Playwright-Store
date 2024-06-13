import { test, expect } from '@playwright/test';
import { LoginPage } from '../page_object/loginPage';
import { HomePage } from '../page_object/homePage'

let homePage: HomePage;

test.beforeEach(async ({page}) => {
  const loginPage = new LoginPage(page);
  homePage = new HomePage(page);
  await loginPage.login(process.env.STANDARD_USER, process.env.PASSWORD);
})

test('Should sort the products by name in descending and ascending order', async () => {
  await homePage.sortByName("desc");
  expect(await homePage.checkActiveSortingOption()).toContainText("Name (Z to A)");
  expect(await homePage.checkFirstItemOnProductList()).toContainText("T-Shirt (Red)");
  await homePage.sortByName("asc");
  expect(await homePage.checkActiveSortingOption()).toContainText("Name (A to Z)");
  expect(await homePage.checkFirstItemOnProductList()).toContainText("Sauce Labs Backpack");
});
  
test('Should sort the products by price in descending and ascending order', async () => {
  await homePage.sortByPrice("desc");
  expect(await homePage.checkActiveSortingOption()).toContainText("Price (high to low)");
  expect(await homePage.checkFirstItemOnProductList()).toContainText("Sauce Labs Fleece Jacket");
  await homePage.sortByPrice("asc");
  expect(await homePage.checkActiveSortingOption()).toContainText("Price (low to high)");
  expect(await homePage.checkFirstItemOnProductList()).toContainText("Sauce Labs Onesie");
});
