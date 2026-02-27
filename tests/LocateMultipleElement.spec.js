// @ts-check
import { test, expect } from '@playwright/test';

test('LocateMultipleElement First Approach', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder('Username').fill('standard_user')
  await page.locator('#password').fill('secret_sauce')
  await page.locator('[data-test="login-button"]').click()

  //verify successful login
  await expect (page).toHaveURL(/inventory.html/) // verify URL

const productNames = await page.$$('.inventory_item_name')

//count product and print
console.log('Total no of products:',productNames.length)

// loop through each element and print the product name
for(const product of productNames)
{
    const name =  await product.textContent() 
    console.log(name)
}

//   await page.waitForTimeout(10000)
  
});

test('LocateMultipleElement Second Approach', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder('Username').fill('standard_user')
  await page.locator('#password').fill('secret_sauce')
  await page.locator('[data-test="login-button"]').click()

//verify successful login
await expect (page).toHaveURL(/inventory.html/) // verify URL

// locate all product names
const productNames = page.locator('.inventory_item_name')

//get total count
const count = await productNames.count()
console.log('Total products:',count)

// print each product name
for(let i=0 ; i<count ; i++)
{
    const name = await productNames.nth(i).textContent()
    console.log(name)
}

//   await page.waitForTimeout(10000)
  
});

