# Playwright Inbuilt BDD Framework - SauceDemo

This repository contains an automated test framework for SauceDemo built using Playwright's inbuilt test runner and BDD-style tests.

## Features

- **Playwright Inbuilt BDD**: No external libraries like Cucumber, purely Playwright's test runner.
- **Page Object Model (POM)**: Clean separation of test logic and page interactions.
- **Reusable Utilities**: Common helpers and assertion utilities for maintainable tests.
- **Cross-Browser Testing**: Chromium, Firefox, and WebKit supported.

## Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd playwright-inbuilt-bdd-framework-saucedemo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run tests:
   ```bash
   npm run test
   ```

## Scripts

- `npm run test`: Run all tests in headless mode.
- `npm run test:headed`: Run tests in headed mode for debugging.
- `npm run test:ui`: Open Playwright Test Runner UI.
- `npm run test:trace-on`: Run tests with trace enabled for debugging.

## Folder Structure

- `src/`: Core source files, including pages, locators, utilities, and services.
- `tests/`: Test specifications.
- `config/`: Configuration files like test data and environment settings.
- `reports/`: Generated test reports.

Enjoy automated testing with Playwright!
