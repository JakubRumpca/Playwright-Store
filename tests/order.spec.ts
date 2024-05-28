import { test, expect, Locator } from '@playwright/test';
import { LoginPage } from '../page_object/login';
import { Order } from '../page_object/order'

const orderData: orderData = {
  firstName: "John",
  lastName: "Wick",
  postalCode: "84-200"
};
const inventoryItemListLocator: string = '[data-test="inventory-item"]';

test('Should order backpack and bike light', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const order = new Order(page);
  await loginPage.login(process.env.STANDARD_USER, process.env.PASSWORD);
  await order.addProduct("Backpack");
  await order.addProduct("BikeLight");
  await order.goToOrderDetails();
  expect(await page.locator(inventoryItemListLocator).count()).toBe(2);
  await order.orderDetails(orderData);
  await expect(page.locator('[data-test="complete-header"]')).toContainText('Thank you for your order!');
});

test('Should add three products to the cart and then remove one of them', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const order = new Order(page);
  await loginPage.login(process.env.STANDARD_USER, process.env.PASSWORD);
  await order.addProduct("Backpack");
  await order.addProduct("BikeLight");
  await order.addProduct("Onesie");
  await order.goToOrderDetails();
  expect(await page.locator(inventoryItemListLocator).count()).toBe(3);
  await order.removeOnesieFromProduct();
  expect(await page.locator(inventoryItemListLocator).count()).toBe(2);
});
