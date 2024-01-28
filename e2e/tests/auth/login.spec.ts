import { expect, test } from '@playwright/test';
import { Users } from '../../config/users';
import { LoginPage } from '../../pages/LoginPage';
import { EventsPage } from '../../pages/EventsPage';

const users: Users[] = [Users.EventManager, Users.Test];

let loginPage: LoginPage;
let eventsPage: EventsPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  eventsPage = new EventsPage(page);
});

for (const user of users) {
  test(`Login with valid credentials - ${user}`, async ({ page }) => {
    const {name} = await loginPage.login(user);
  
    await expect(eventsPage.sideMenu.userDetails).toHaveText(name);
  }); 
}

