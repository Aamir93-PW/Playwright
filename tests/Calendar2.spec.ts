import {test, expect} from '@playwright/test'

test("Calendar handlling for blogspot", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("input#datepicker").click()

    let targetDate = "16"
    let targetMonth = "January"
    let targetYear = "2026"

    const monthPicker = page.locator(".ui-datepicker-month")
    const yearPicker = page.locator(".ui-datepicker-year")

    while(true){

        if ((await monthPicker.textContent() === targetMonth) && (await yearPicker.textContent() === targetYear))
            {
            await page.getByText(targetDate).click()
            break
            }

            else{

                await page.getByText("Next", {exact:true}).click()
            }
    
         }
         await page.waitForTimeout(3000)

})




test("Select from and to date for blogspot", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.getByPlaceholder('Start Date').fill('2026-01-20');
    await page.getByPlaceholder('End Date').fill('2026-03-31');
    await page.locator('#post-body-1307673142697428135').getByRole('button', { name: 'Submit' }).click();
    await expect(page.locator('#result')).toContainText('You selected a range of 70 days.');


     await page.waitForTimeout(3000)


})