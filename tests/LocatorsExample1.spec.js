// @ts-check
import { test, expect } from '@playwright/test';

test('OrangeHRM locator', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com');

  // locators
  console.log(await page.getByLabel('Username'))
  await page.getByPlaceholder('Username').fill('admin')
  await page.locator('[name="password"]').fill('admin123')
  await page.getByRole('button' , {name:'Login'}).click()
  await page.getByAltText('profile picture').click()
  await page.waitForTimeout(10000)
  await page.getByText('Logout').click()
});


test('OrangeHRM xpath', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com');

  // X path
  // Playwright me XPath likhne ke 2 tareeqe hote hain:
  // Method 1 -> await page.locator('//tagname[@attribute="value"]').click()
  // Method 2 -> await page.locator('xpath=//tagname[@attribute="value"]').click()

  await page.locator('//input[@placeholder="Username"]').fill('admin')
  await page.locator('xpath=//input[@name="password"]').fill('admin123')
  await page.locator('//button[text()=" Login "]').click()
  await page.locator('xpath=//button[@type="submit"]').click()
});


test('OrangeHRM cssselector', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com');

  // cssselector
  await page.locator('css=input[placeholder="Username"]').fill("Admin")
  await page.locator('css=input[@name="password"]').fill("admin123")
  await page.locator('css=input[name="password"]').fill("admin123")
});
