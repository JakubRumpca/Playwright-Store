import { test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { createHtmlReport } from 'axe-html-reporter';
import { LoginPage } from '../page_object/loginPage';
import { HomePage } from '../page_object/homePage'
import { CustomerCheckoutForm } from '../page_object/customerCheckoutForm'
import { Cart } from '../page_object/yourCart'
import { Checkout } from '../page_object/checkoutOverview'

test.describe('Accessibility', () => {

    const orderData: customerData = {
        firstName: "John",
        lastName: "Wick",
        postalCode: "84-200"
    };

    async function generateReport(page, reportName: string) {

        const accessibilityScanResults = await new AxeBuilder({ page })
            .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
            .analyze()

        createHtmlReport({
            results: accessibilityScanResults,
            options: {
                projectKey: reportName,
                outputDir: 'test-results/accessibility',
                reportFileName: `${reportName}.html`
            },
        });
    }

    test('Should collect reports from all pages', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const homePage = new HomePage(page);
        const cart = new Cart(page);
        const customerCheckoutForm = new CustomerCheckoutForm(page);
        const checkout = new Checkout(page);
        await page.goto('/');
        await generateReport(page, "login-page");
        await loginPage.login(process.env.STANDARD_USER, process.env.PASSWORD);
        await homePage.openMenu();
        await generateReport(page, "home-page");
        await homePage.openFirstProductDetails();
        await generateReport(page, "home-page-product-details");
        await homePage.backToProducts();
        await homePage.addProduct("backpack");
        await homePage.goToYourCart();
        await generateReport(page, "cart-page");
        await cart.goToOrderDetails();
        await generateReport(page, "customer-checkout-form");
        await customerCheckoutForm.orderDetails(orderData);
        await generateReport(page, "checkout-overview");
        await checkout.confirmOrder();
        await generateReport(page, "checkout-complete");
    });
});
