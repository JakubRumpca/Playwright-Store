# Playwright-Store

The repository contains playwright automated tests of the online store available at https://www.saucedemo.com/. The website was created for training purposes, where you can practice testing web applications on it, so using bots such as automatic tests is allowed and does not violate the regulations.

## Technologies

- **TypeScript**
- **Node** - The version I use is v18.18.0. (It is required for dependency installation)
- **NPM** - The version I use is 9.8.1.
- **Java** - The version I use is 17.0.11. (Needed to run the Allure test reporting tool)

## Repository content

- **/tests** - Main location for all E2E tests.
- **/page_object** - Contains page definitions (Page Objects) that facilitate test maintenance and enable code reuse.
- **playwright.config.ts** - Playwright configuration file that contains settings for the test environment.
- **.env.template** - User data should be hidden, but the application was created for training purposes. Secrets are available on the home page so I do not hide them in this repository, but .env file was added to .gitignore file as should. After removing ".template" from the file name, you can run the tests.
- **/.github/workflows/pipeline.yml** - File that contains Continuous Integration/Continuous Deployment (CI/CD) configuration.
- **TEST_CASES.md** - File that contains test cases of the implemented tests.

## How to run tests

To run the tests, follow these steps:

- **npm install** - to install dependencies.
- remove **.template** from the file name **.env.template**. It defines the secrets needed to log in.
- **npm run tests** - runs all e2e tests.
- **npm run report** - runs the Allure tool which generates an HTML report that contains test results, which facilitates analysis.
- **npm run tests 'file name'** - To run the selected test, add the file name at the end of the command. Example -> **npm run tests users.spec.ts**
