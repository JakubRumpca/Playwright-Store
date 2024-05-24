import { defineConfig } from '@playwright/test';
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname+'/.env' });

export default defineConfig({
  testDir: './tests',
  reporter: 'html',
  use: {
    baseURL: 'https://www.saucedemo.com/',
    headless: true,
    testIdAttribute: 'data-test'
  },
});
