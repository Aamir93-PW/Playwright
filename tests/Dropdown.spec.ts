import {test , expect} from '@playwright/test'

test("Dropdown", async({page})=>{

    await page.goto("https://qa-practice.razvanvancea.ro/dropdowns.html#3rd-another-level")
    await page.locator("#multi-level-dropdown-btn").click()
    await page.hover('[href="#hover-me"]')
    await page.hover('[href="#even-more"]')
    await page.hover('[href="#3rd-another-level"]')
    await page.hover('[href="#4th-level-1"]')
    await expect(page.getByText('4th level - 3')).toBeVisible()
    await page.waitForTimeout(3000)

})

test('Single Dropdown', async ({page})=>{

    await page.goto("https://qa-practice.razvanvancea.ro/dropdowns.html")
    await page.locator("#dropdown-menu").click()
    await page.locator("#dropdown-menu").selectOption('India')
    await expect(page.locator('#dropdown-menu')).toHaveValue('India')
    await page.waitForTimeout(3000)



})

