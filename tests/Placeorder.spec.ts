import {test,expect} from '@playwright/test'
test("Add product in the cart and checkout", async({page})=>{

    await page.goto("https://rahulshettyacademy.com/client")
    await page.locator('#userEmail').click()
    await page.locator('#userEmail').fill('aamir.mithabhai@allata.com')
    await page.locator('#userPassword').click()
    await page.locator('#userPassword').fill('Amm@7865')
    await page.locator('#login').click()
    await page.locator("[class='btn w-10 rounded']").nth(2).click() 
    await page.getByText('Cart', {exact:true}).click()
    await page.getByText('Checkout', {exact:true}).click()
    await page.getByPlaceholder('Select Country').click()
    await page.getByPlaceholder('Select Country').pressSequentially('Ind') 
    await page.locator("[class='ng-star-inserted']").nth(3).click()
    await page.getByText('Place Order').click()
    await page.waitForTimeout(3000)

    const message = page.locator("[class='ng-star-inserted']").nth(2)
    const orderid = await message.innerText() 
    console.log('orderid', orderid)





})
