import {test , expect} from "@playwright/test"

test("Checkbox Selection", async ({page})=>{

    await page.goto("https://www.qa-practice.com/elements/checkbox/mult_checkbox")
    await page.locator("#id_checkboxes_0").click()
    await page.locator("#id_checkboxes_1").click()
    await page.locator("#id_checkboxes_2").click()
    await page.locator("#submit-id-submit").click()
    await expect(page.locator("#result")).toContainText("one, two, three")

    



})