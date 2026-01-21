import {test,expect} from '@playwright/test'
import { text } from 'node:stream/consumers'

test("Calendar handelling using dropdown - Third Date", async ({page})=>{

    await page.goto("https://www.hyrtutorials.com/p/calendar-practice.html")
    await page.locator("#third_date_picker").click()

    await page.selectOption(".ui-datepicker-month" , {label: "Jul"})
    await page.selectOption(".ui-datepicker-year", {label: "2030"})
    await page.getByText('19').click()
    await page.waitForTimeout(3000)
  
})



test("Calendar hadlling - First Date", async ({page})=>{

    await page.goto("https://www.hyrtutorials.com/p/calendar-practice.html")
    await page.locator("#first_date_picker").click()

    let targetDate = "19"
    let targetMonth = "July"
    let targetYear = "2030"

    const monthPicker = page.locator(".ui-datepicker-month")
    const yearPicker = page.locator(".ui-datepicker-year")

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
      
})


test("Select Previous Date - Second Date", async ({page})=>{

    await page.goto("https://www.hyrtutorials.com/p/calendar-practice.html")
    await page.locator("#second_date_picker").click()

    let targetDate = "19"
    let targetMonth = "July"
    let targetYear = "2023"

    const monthPicker = page.locator(".ui-datepicker-month")
    const yearPicker = page.locator(".ui-datepicker-year")

    while(true){
        

        if((await monthPicker.textContent() === targetMonth) && (await yearPicker.textContent() === targetYear))
        {
            await page.getByText(targetDate, {exact:true}).click()
            break
        }

        else{

            await page.getByText('Prev', {exact:true}).click()
        }

        
             }
      
})



test("Select Date Only - Fifth Date", async ({page})=>{

    await page.goto("https://www.hyrtutorials.com/p/calendar-practice.html")
    await page.locator("#fifth_date_picker").click()
    await page.locator(".ui-datepicker-days-cell-over.ui-datepicker-today").click()
    await page.waitForTimeout(3000)
  
})