import {test, expect} from '@playwright/test';

test.skip('TEST - fill', async ({page}) => {
  await page.goto('/login');

  await page.getByTestId('username-input').fill('user');
});

test.skip('TEST - click', async ({page}) => {
  await page.goto('/login');

  await page.getByTestId('login-button').click();
  await page.waitForTimeout(1)
});

test('TEST - get input value', async ({page}) => {
  // 1. Wejdz na podstrone /login
  await page.goto('/login');

  // 2. Wpisz w pole username text: "user"
  await page.getByTestId('username-input').fill('user');

  // 3. Pobierz wartosc z pola username
  const value = await page.getByTestId('username-input').inputValue();

  // 4. Porownaj wartosc z pola username z oczekiwana wartoscia
  expect(value).toBe('user');
});
