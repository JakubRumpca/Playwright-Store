import { test, expect } from '@playwright/test';
import { LoginPage } from '../page_object/login';
import { Order } from '../page_object/order'

const orderData: orderData = {
  firstName: "John",
  lastName: "Wick",
  postalCode: "84-200"
}

test('Should order backpack and bike light', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const order = new Order(page);
  await loginPage.login(process.env.STANDARD_USER, process.env.PASSWORD)
  await order.addProduct("Backpack")
  await order.addProduct("BikeLight")
  await order.orderDetails(orderData)
  await expect(page.locator('[data-test="complete-header"]')).toContainText('Thank you for your order!');
});
