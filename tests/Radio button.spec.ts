import {test , expect} from "@playwright/test"

test("Radio button", async ({page})=>{

    await page.goto("https://practice.expandtesting.com/radio-buttons")
    await page.locator("#blue").click()
    await expect(page.locator("#blue")).toBeChecked()
    await page.reload()
    await page.locator("#red").click()
    await expect(page.locator("#red")).toBeChecked()
    await page.reload()
    await page.locator("#black").click()
    await expect(page.locator("#black")).toBeChecked()

})
