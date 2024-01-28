import { Locator, Page } from "@playwright/test";
import { User, Users, getUser } from "../config/users";

export class LoginPage {
  headerText: Locator;
  usernameInput: Locator;
  passwordInput: Locator;
  loginButton: Locator;

  private page: Page;

  constructor(page: Page) {
    this.page = page;

    this.headerText = this.page.locator('h4');
    this.usernameInput = this.page.getByTestId('username-input');
    this.passwordInput = this.page.getByTestId('password-input');
    this.loginButton = this.page.getByTestId('login-button');
  }

  async login(user: Users): Promise<User> {
    const dbUser = getUser(user);
    
    await this.page.goto('/login');

    await this.usernameInput.fill(dbUser.login);
    await this.passwordInput.fill(dbUser.password);

    await this.loginButton.click();
    await this.page.waitForURL('/');

    return dbUser;
  }
}
