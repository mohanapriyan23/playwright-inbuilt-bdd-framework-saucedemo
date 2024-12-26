import { BasePage } from './base.page';
import { LoginLocators } from '../locators/login.locators';

export class LoginPage extends BasePage {
  async login(username: string, password: string) {
    await this.fill(LoginLocators.usernameInput, username);
    await this.fill(LoginLocators.passwordInput, password);
    await this.click(LoginLocators.loginButton);
  }

  async assertLoginError(expectedMessage: string) {
    await this.assertText(LoginLocators.errorMessage, expectedMessage);
  }
}
