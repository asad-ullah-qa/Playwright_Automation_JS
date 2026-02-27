// @ts-check
import { test, expect } from '@playwright/test';

test('SauceDemo locator', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder('Username').fill('standard_user')
  await page.locator('#password').fill('secret_sauce')
  await page.locator('[data-test="login-button"]').click()

  // verifying successful login
  await expect (page).toHaveURL(/inventory.html/) // verify URL
  await expect (page.locator('.title')).toHaveText('Products') // verify text
  // await expect (page.locator('.title')).toContainText('Products') // verify text

  // verify element visibility
  const productElement = page.locator('title')
  await expect(productElement).toBeVisible()

  await page.waitForTimeout(10000)
  
});

