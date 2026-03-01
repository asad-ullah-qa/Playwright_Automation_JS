import { test, expect } from '@playwright/test';

test('Assertion test', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    /*1. PAGE LEVEL ASSERTIONS*/
    //verify page title 
    await expect(page).toHaveTitle('Swag Labs')

    //verify page title 
    await expect(page).toHaveURL('https://www.saucedemo.com/')

    /*2. ELEMENT STATE ASSERTIONS*/
    // Locate Username And Password
    const usernameInput = page.getByPlaceholder('Username')
    const passwordInput = page.locator('#password')
    const loginButton = page.locator('#login-button')
    const errMessage = page.locator('[data-test="error"]')

    // Verify input field username and password are visible
    await expect(usernameInput).toBeVisible()
    await expect(passwordInput).toBeVisible()
    await expect(loginButton).toBeVisible()

    // Verify if webelements are enable and editable
    await expect(usernameInput).toBeEnabled()
    await expect(passwordInput).toBeEnabled()
    await expect(loginButton).toBeEnabled()

    await expect(usernameInput).toBeEditable()
    await expect(passwordInput).toBeEditable()

    /*3. TEXT AND VALUE ASSERTIONS*/
    await usernameInput.fill('standard_user')
    await expect(usernameInput).toHaveValue('standard_user')

    await passwordInput.fill('secret_sauce')
    await expect(passwordInput).toHaveValue('secret_sauce')

    //verify error message to be hidden
    await expect(errMessage).toBeHidden()

    //Attribute - Assertions
    await expect(usernameInput).toHaveAttribute('placeholder', 'Username')
    await expect(loginButton).toHaveAttribute('type', 'submit')

    await loginButton.click()

    // PAGE AND TEXT ASSERTIONS AFTER LOGIN
    // Verify user navigated to inventory page
    await expect(page).toHaveURL(/inventory/)

    // Verify Product Page heading
    const productTitle = page.locator('.title')
    await expect(productTitle).toBeVisible()
    // for partial text verification
    await expect(productTitle).toContainText('Prod')

    //Class - Assertions
    await expect(productTitle).toHaveClass('title')

    //Id - Assertions - verify shopping cart id value - "shopping-cart-container"
    const cartIcon = page.locator('.shopping_cart_container')
    await expect(cartIcon).toHaveId('shopping_cart_container')

    //Count - Assertions
    //verify total no of product displayed
    const productItems = page.locator('.inventory_item_name ')
    await expect(productItems).toHaveCount(6)

    // Screenshot / visual assertions
    //locate web element sauce lab bag pack
    const bagitem = page.getByAltText('Sauce Labs Backpack')

    //compare screenshot with baseline screenshot -> first time jab update karna ha or jab previous koe image nhi ho to 
    // to run this -> npx playwright test Assertions.spec.js --update-snapsnots --headed
    // EXAMPLE 1
    await expect(bagitem).toHaveScreenshot('bagItem.png')
    // to run this -> npx playwright test Assertions.spec.js --headed

    // Visual Verification of shopping cart -> dynamic webelement comparision
    await expect(page).toHaveScreenshot('cartIcon.png', {
        mask: [page.locator('.shopping_cart_badge')]
    })

    // Method 2
    const cartElement = page.locator('.shopping_cart_badge')
    await expect(page).toHaveScreenshot('cartIcon.png', {
        mask: [cartElement]
    })


})

