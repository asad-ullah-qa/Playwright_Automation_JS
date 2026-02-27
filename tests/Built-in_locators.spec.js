/**Main built-in locators
getByRole -> element ka role (button , textbox , link)
getByText -> visisble text -> verify product on website
getByLabel -> form field ka getByLabel -> https://practice.expandtesting.com/secure
getByPlaceholder -> input placeholder text -> username & password
getByAltText -> image ka alt text
getByTitle -> title/tooptip
getByTestId -> test-only attribute (last option)**/


import { test, expect } from '@playwright/test';

test('Built-In locators', async ({ page }) => {

  // open sauce demo website  
  await page.goto('https://www.saucedemo.com/');

  //getByPlaceholder - enter user name 
  await page.getByPlaceholder('Username').fill('standard_user')

  // getByPlaceholder - enter password
  await page.getByPlaceholder('Password').fill('secret_sauce')

  // getByRole - click on login buton
  await page.getByRole('button',{name :'Login'}).click()

  // Assertions - verify successful login
  await expect(page).toHaveURL(/inventory.html/)

  //getbyText - verify product visibility on inventory page
  await expect(page.getByText('Product')).toBeVisible()

  //getbyRole() - add product to cart
  await page.getByRole('button', {name : 'add to cart'}).first().click()

  //getbyAltText() - click on image to see description
  await page.getByAltText('Sauce Labs Backpack').click()

  await page.waitForTimeout(10000)
  
});

test('Built-In locators more', async ({ page }) => {

  // open sauce demo website  
  await page.goto('https://practice.expandtesting.com/login');

  //getByLabel - enter user name 
  await page.getByLabel('username').fill('practice')

  //getByLabel - enter password 
  await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!')
 
  //getByRole - login 
  await page.getByRole('button' , {name : 'Login'}).click()

  //getByText - verify/Assertions
  await expect(page.getByText('You logged into a secure area!')).toBeVisible()

  //getByRole - link 
  await page.getByRole('link' , {name : 'Home'}).click()

  await page.waitForTimeout(10000)
  
});
