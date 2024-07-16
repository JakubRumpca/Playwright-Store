import { defineConfig, devices } from '@playwright/test';
import * as dotenv from "dotenv";
import { testPlanFilter } from "allure-playwright/dist/testplan";
dotenv.config({ path: __dirname + '/.env' });

export default defineConfig({
  testDir: './tests',
  retries: 3,
  grep: testPlanFilter(),
  reporter: [["line"], ["allure-playwright"]],
  use: {
    baseURL: 'https://www.saucedemo.com/',
    headless: true,
    trace: 'retain-on-failure',
    testIdAttribute: 'data-test',
    launchOptions: {
      slowMo: 100,
    },
  },
  projects: [
    {
      name: 'chromium',
      use: devices['Desktop Chrome'],
    },
    {
      name: 'firefox',
      use: devices['Desktop Firefox'],
      testIgnore: "tests/accessibility.spec.ts"
    },
    {
      name: 'webkit',
      use: devices['Desktop Safari'],
      testIgnore: "tests/accessibility.spec.ts"
    },
  ],
});
