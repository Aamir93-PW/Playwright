import {test , expect} from '@playwright/test'
import { LoginPage } from '../../pages/LoginPage'



const url = "https://rahulshettyacademy.com/client/"
const email = "aamir.mithabhai@allata.com"
const password = "Amm@7865"
const incorrectpassword = "abduduiodp"

test("Valid Login test", async ({page})=>{
    const loginPage = new LoginPage(page)
    await loginPage.launchURL(url)
    await loginPage.loginIntoApplication(email, password)
    await expect(loginPage.homePageIdentifier).toBeVisible()
    
})

test("Invalid Login test", async ({page})=>{
    const loginPage = new LoginPage(page)
    await loginPage.launchURL(url)
    await loginPage.loginIntoApplication(email, incorrectpassword)
    await expect(loginPage.errorMsg).toHaveText("Incorrect email or password.")
    
})
