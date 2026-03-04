// @ts-check
import { test, expect } from '@playwright/test';

test('Input Box ', async ({ page }) => {

    //Increase the timeout only for this test
    test.setTimeout(60000)

    // open the application and wait only for DOM content to load 
    // this avoid waiting for ads and video content

    // open url  
    await page.goto('https://www.techlistic.com/p/selenium-practice-form.html', { waitUntil: 'domcontentloaded' })

    // locate firstname inputbox
    const firstnameInput = page.locator('[name="firstname"]')

    // Input box is visible or not
    await expect(firstnameInput).toBeVisible()

    // Input box is empty or not
    await expect(firstnameInput).toBeEmpty()

    // Input box is enable or not
    await expect(firstnameInput).toBeEnabled()

    // Input box is editable or not
    await expect(firstnameInput).toBeEditable()

    await firstnameInput.fill('Asad')
    await page.waitForTimeout(5000) // pause for 5 seconds for demo purpose only

});

test('Radio Button ', async ({ page }) => {

    //Increase the timeout only for this test
    test.setTimeout(60000)

    // open the application and wait only for DOM content to load 
    // this avoid waiting for ads and video content

    // open url  
    await page.goto('https://www.techlistic.com/p/selenium-practice-form.html', { waitUntil: 'domcontentloaded' })

    // locate radio button
    const RadiobtnYear3 = page.locator("//input[@value='3']")

    // select radiobtn 3
    await RadiobtnYear3.check()

    // verify radio btn is checked
    await expect(RadiobtnYear3).toBeChecked()

    await page.waitForTimeout(5000) // pause for 5 seconds for demo purpose only

});

