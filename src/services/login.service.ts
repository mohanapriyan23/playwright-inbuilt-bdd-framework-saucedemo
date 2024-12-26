import { LoginPage } from '../pages/login.page';
import { Page } from '@playwright/test';

export class LoginService {
  private page: Page;
  private loginPage: LoginPage;

  constructor(page: Page) {
    this.page = page;
    this.loginPage = new LoginPage(page);
  }

  async loginWithValidCredentials(username: string, password: string) {
    await this.loginPage.navigate('https://www.saucedemo.com/');
    await this.loginPage.login(username, password);
  }

  async loginWithInvalidCredentials(username: string, password: string) {
    await this.loginPage.navigate('https://www.saucedemo.com/');
    await this.loginPage.login(username, password);
    await this.loginPage.assertLoginError('Epic sadface: Username and password do not match any user in this service');
  }
}
