import { test, expect } from '@playwright/test';

test('Login to rahulshetty website and checkout', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/angularpractice/shop');
  await page.locator('app-card').filter({ hasText: 'iphone X $24.99 Lorem ipsum' }).getByRole('button').click();
  await page.getByText('Checkout ( 1 ) (current)').click();
  await page.getByRole('button', { name: 'Checkout' }).click();
  await page.getByRole('button', { name: 'Purchase' }).click();
  await expect(page.locator('app-checkout')).toContainText('× Success! Thank you! Your order will be delivered in next few weeks :-).');
});


test('test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  await page.getByRole('textbox', { name: 'Username:' }).click();
  await page.getByRole('textbox', { name: 'Username:' }).fill('rahulshettyacademy');
  await page.getByRole('textbox', { name: 'Password:' }).click();
  await page.getByRole('textbox', { name: 'Password:' }).fill('learning');
  await page.getByText('Admin').click();
  await page.locator('span').nth(2).click();
  await page.getByRole('combobox').selectOption('consult');
  await page.getByRole('checkbox', { name: 'I Agree to the terms and' }).check();
  await page.getByRole('button', { name: 'Sign In' }).click();
  await expect(page.locator('h1')).toContainText('Shop Name');
});