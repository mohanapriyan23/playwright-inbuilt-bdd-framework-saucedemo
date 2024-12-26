import { test } from '@playwright/test';
import { LoginService } from '../src/services/login.service';
import testData from '../src/config/testData.json';

test.describe('Login Tests', () => {
  test('should login successfully with valid credentials', async ({ page }) => {
    const loginService = new LoginService(page);
    await loginService.loginWithValidCredentials(
      testData.users.validUser.username,
      testData.users.validUser.password
    );
  });

  test('should show error for invalid login', async ({ page }) => {
    const loginService = new LoginService(page);
    await loginService.loginWithInvalidCredentials(
      testData.users.invalidUser.username,
      testData.users.invalidUser.password
    );
  });
});
