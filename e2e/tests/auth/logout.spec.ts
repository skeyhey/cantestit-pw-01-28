import {test, expect} from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { EventsPage } from '../../pages/EventsPage';
import { Users } from '../../config/users';

let loginPage: LoginPage;
let eventsPage: EventsPage;

test.beforeEach(async ({page}) => {
  loginPage = new LoginPage(page);
  eventsPage = new EventsPage(page);

  await loginPage.login(Users.Test);
});

test('User should be able to logout', async ({page}) => {
  await eventsPage.sideMenu.logout();

  await expect.soft(page).toHaveURL('/login');
  await expect(loginPage.headerText).toHaveText('Welcome');
});
