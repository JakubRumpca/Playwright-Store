import { test, expect } from '@playwright/test';
import { LoginPage } from '../page_object/loginPage';
import { HomePage } from '../page_object/homePage'
import { Order } from '../page_object/orderDetails'
import { Cart } from '../page_object/yourCart'
import { Checkout } from '../page_object/checkoutOverview'

const orderData: orderData = {
  firstName: "John",
  lastName: "Wick",
  postalCode: "84-200"
};
const inventoryItemListLocator: string = '[data-test="inventory-item"]';

test('Should order backpack and bike light', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  const order = new Order(page);
  const cart = new Cart(page);
  const checkout = new Checkout(page);
  await loginPage.login(process.env.STANDARD_USER, process.env.PASSWORD);
  await homePage.addProduct("Backpack");
  await homePage.addProduct("BikeLight");
  await homePage.goToYourCart();
  expect(await page.locator(inventoryItemListLocator).count()).toBe(2);
  await cart.goToOrderDetails();
  await order.orderDetails(orderData);
  await checkout.confirmOrder();
  await expect(page.locator('[data-test="complete-header"]')).toContainText('Thank you for your order!');
});

test('Should add three products to the cart and then remove one of them', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  const cart = new Cart(page);
  await loginPage.login(process.env.STANDARD_USER, process.env.PASSWORD);
  await homePage.addProduct("Backpack");
  await homePage.addProduct("BikeLight");
  await homePage.addProduct("Onesie");
  await homePage.goToYourCart();
  expect(await page.locator(inventoryItemListLocator).count()).toBe(3);
  await cart.removeOnesieFromProduct();
  expect(await page.locator(inventoryItemListLocator).count()).toBe(2);
});
