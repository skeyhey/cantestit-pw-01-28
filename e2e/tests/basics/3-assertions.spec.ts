import {test, expect} from '@playwright/test';

test.skip('heading to have test "Welcome"', async ({page}) => {
  await page.goto('/login');

  await expect(page.locator('h4')).toHaveText('Welcome');
});

test.skip('heading to not have text "Welcome"', async ({page}) => {
  await page.goto('/login');

  await expect(page.locator('h4')).not.toHaveText('Welcome');
});

test.skip('soft assertions', async ({page}) => {
  await page.goto('/login');

  await expect.soft(page.locator('h4')).toHaveText('Welcome1');
  await expect(page.locator('h4')).toHaveText('Welcome2');

  await page.waitForTimeout(1000);
});

test('custom message in assertion', async ({page}) => {
  await page.goto('/login');

  await expect(page.locator('h4'), "Heading is not correct").toHaveText('welcome');
});
