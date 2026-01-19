import { test, expect } from '@playwright/test';

test ("Fill and Validate the textbox", async function({page}) {

    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator ("input#username").click()
    await page.locator ("input#username").fill("student")
    await page.locator ("input#password").click()
    await page.locator ("input#password").fill("Password123")
    await page.locator ("[id=submit]").click()
     await expect (page.locator("h1.post-title")).toHaveText("Logged In Successfully")


} )

test("Login to rahulshetty website", async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    await page.locator("#username").click()
    await page.locator("#username").fill("rahulshettyacademy")
    await page.locator("[name=password]").click()
    await page.locator("[name=password]").fill("learning")
    await page.getByText("Admin").click()
    //await page.locator("select.form-control").click()
    await page.locator('span').nth(2).click();
    await page.getByRole('combobox').selectOption('consult');
    await page.locator("#terms").click()
    await page.locator("#signInBtn").click()
    await expect(page.getByText("Shop Name")).toBeVisible()

    







})