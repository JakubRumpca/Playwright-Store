import { defineConfig } from '@playwright/test';
import * as dotenv from "dotenv";
import { testPlanFilter } from "allure-playwright/dist/testplan";
dotenv.config({ path: __dirname+'/.env' });

export default defineConfig({
  testDir: './tests',
  retries: 3,
  grep: testPlanFilter(),
  reporter: [["line"], ["allure-playwright"]],
  use: {
    baseURL: 'https://www.saucedemo.com/',
    headless: true,
    testIdAttribute: 'data-test'
  },
});
