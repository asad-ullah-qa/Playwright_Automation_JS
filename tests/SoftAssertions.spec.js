// @ts-check
import { test, expect } from '@playwright/test';

test('Soft Assertions', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

