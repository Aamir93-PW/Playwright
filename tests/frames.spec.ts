import {test,expect} from '@playwright/test'

test("Handeling frames", async({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await page.locator('#checkBoxOption1').check()

    // frameLocator() - It helps us in terms of entering inside the iframe and then using that variable where we store the frameLocator we can access
    // and perform the validations or actions inside the iframe

    const framepage = await page.frameLocator("#courses-iframe")
    await framepage.getByText('All Access plan').first().click()
    await expect(framepage.locator('[class="inner-box"]')).toHaveText('All Access Subscription')






    
})