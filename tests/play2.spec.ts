import {test , expect} from '@playwright/test'

test('Layout testing', async ({page})=>{

    await page.goto("https://play2.automationcamp.ir/")
    await page.locator("#fname").fill('Ajay')
    await page.locator("[name = 'lname']").fill('Patel')
    await page.locator('#male').click()
    await page.locator("#option").selectOption('option 3')
    await page.locator("[name= 'option1']").click()
    await page.locator("[name= 'option2']").click()
    await page.locator("[name= 'option3']").click()
    await page.locator("[list= 'datalists']").click()
    await page.locator("[list= 'datalists']").fill('Chocolate')
    await page.waitForTimeout(3000)
    await expect(page.locator("[list= 'datalists']")).toHaveValue("Chocolate")

    
})

