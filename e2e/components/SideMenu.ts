import { Locator, Page } from "@playwright/test";

export class SideMenu {
  userDetails: Locator;
  logoutButton: Locator;

  private page: Page;

  constructor(page: Page) {
    this.page = page;

    this.userDetails = this.page.getByTestId('user-details');
    this.logoutButton = this.page.getByTestId('logout-button');
  }

  async logout(): Promise<void> {
    await this.userDetails.click();
    await this.logoutButton.click();
    await this.page.waitForURL('/login');
  }
}
