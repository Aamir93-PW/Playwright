import {test,expect} from '@playwright/test'

test("Calneder handeling", async ({page})=>{

    await page.goto("https://www.hyrtutorials.com/p/calendar-practice.html")

    await page.locator('.ui-datepicker-trigger').click()


    let targetDate ="10"
    let targetMonth = "May"
    let targetYear = "2027"

    const monthPicker = page.locator('.ui-datepicker-month')
    const yearPicker = page.locator('.ui-datepicker-year')

    while(true){

        if((await monthPicker.textContent() === targetMonth) && (await yearPicker.textContent() === targetYear))

         {
               await page.getByText(targetDate, {exact:true}).click()
               break
         } 
         
         else{

              await page.getByText('Next', {exact:true}).click()
         }
    }


    await page.waitForTimeout(3000)

})