# Playwright-Store
[![Tests status](https://github.com/JakubRumpca/Playwright-Store/actions/workflows/pipeline.yml/badge.svg)](https://github.com/JakubRumpca/Playwright-Store/actions/workflows/pipeline.yml)

The repository contains playwright automated tests of the online store available at https://www.saucedemo.com/. The website was created for training purposes, where you can practice testing web applications on it, so using bots such as automatic tests is allowed and does not violate the regulations.

## Technologies

- **TypeScript**
- **Node** - Version used -> 20. (It is required for dependency installation)
- **NPM** - Version used -> 10.
- **Java** - Version used -> 21. (Needed to run the Allure test reporting tool)

## Repository content

- **/tests** - Main location for all E2E tests.
- **/page_object** - Contains page definitions (Page Objects) that facilitate test maintenance and enable code reuse.
- **playwright.config.ts** - Playwright configuration file that contains settings for the test environment.
- **.env.template** - User data should be hidden, but the application was created for training purposes. Secrets are available on the home page so I do not hide them in this repository, but .env file was added to .gitignore file as should. After removing ".template" from the file name, you can run the tests.
- **/.github/workflows/pipeline.yml** - File that contains Continuous Integration/Continuous Deployment (CI/CD) configuration.
- **TEST_CASES.md** - File that contains test cases of the implemented tests.

## How to run tests

To run the tests, follow these steps:

1. Install dependencies:

```bash
npm install
```

2. Install playwright browsers:

```bash
npx playwright install
```

3. remove **.template** from the file name **.env.template**. It defines the secrets needed to log in.

```bash
cp .env.template .env
```

4. To runs all e2e tests:

```bash
npm run tests
```

5. To run the Allure tool which generates an HTML report that contains test results, which facilitates analysis:

```bash
npm run report
```

6. To run the selected test, add the file name at the end of the command. (**npm run tests 'file name'**) 

Example:

```bash
npm run tests users.spec.ts
```
