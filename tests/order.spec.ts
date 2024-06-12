import { test, expect } from '@playwright/test';
import { LoginPage } from '../page_object/loginPage';
import { HomePage } from '../page_object/homePage'
import { CustomerCheckoutForm } from '../page_object/customerCheckoutForm'
import { Cart } from '../page_object/yourCart'
import { Checkout } from '../page_object/checkoutOverview'

const orderData: customerData = {
  firstName: "John",
  lastName: "Wick",
  postalCode: "84-200"
};
const inventoryItemListLocator: string = '[data-test="inventory-item"]';

test('Should order backpack and bike light', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  const customerCheckoutForm = new CustomerCheckoutForm(page);
  const cart = new Cart(page);
  const checkout = new Checkout(page);
  await loginPage.login(process.env.STANDARD_USER, process.env.PASSWORD);
  await homePage.addProduct("backpack");
  await homePage.addProduct("bike-light");
  await homePage.goToYourCart();
  expect(await page.locator(inventoryItemListLocator).count()).toBe(2);
  await cart.goToOrderDetails();
  await customerCheckoutForm.orderDetails(orderData);
  await checkout.confirmOrder();
  await expect(page.locator('[data-test="complete-header"]')).toContainText('Thank you for your order!');
});

test('Should add three products to the cart and then remove one of them', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  const cart = new Cart(page);
  await loginPage.login(process.env.STANDARD_USER, process.env.PASSWORD);
  await homePage.addProduct("backpack");
  await homePage.addProduct("bike-light");
  await homePage.addProduct("onesie");
  await homePage.goToYourCart();
  expect(await page.locator(inventoryItemListLocator).count()).toBe(3);
  await cart.removeProduct("onesie");
  expect(await page.locator(inventoryItemListLocator).count()).toBe(2);
});
