// Mouse Operations

// click - click()
// right click - click({button: 'right'})
// double click - dbclick()
// scroll dowm - scrollIntoViewIfNeeded()
// Mouse Hover - hover()
// Drag and Drop - SourceLocator.dragTo(TargetLocation)

import {test , expect} from '@playwright/test';

// test("Double click and right click operation", async ({page})=> {

//     await page.goto("https://qa-practice.netlify.app/double-click")
//     await page.locator('#double-click-btn').dblclick()
//     await expect(page.locator("#double-click-result")).toBeVisible()
//     //await expect(page.getByText("Congrats, you double clicked!", {exact:true})).toBeVisible()


// } )

test("Right click Operation",async ({page})=>{

    await page.goto("https://vinothqaacademy.com/mouse-event/")
    await page.locator("#rightclick").click({button:'right'})
    await expect(page.getByRole('link', { name: 'Registration Form' })).toBeVisible()
    await page.waitForTimeout(3000)

} )

test("Scrolling on the page", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.waitForTimeout(3000)
    await page.getByText('Download Files').scrollIntoViewIfNeeded()
    await page.getByText('Download Files').click()
    await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/p/download-files_25.html")

})

test("Mouse hover over on an element", async ({page})=>{

    await page.goto("https://www.spicejet.com/")
    await page.getByText("Travel Policies").hover()
    await expect(page.getByTestId("test-id-Passenger Support")).toBeVisible()
    await page.waitForTimeout(3000)
})

test("Handling Drag and drop", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    const sourceElement = page.locator("div#draggable")
    const targetElement = page.locator("div#droppable")

    // sourceElement.dragTo(targetElement)
    await sourceElement.dragTo(targetElement)
    await expect(page.locator("div#droppable p")).toBeVisible()
    await page.waitForTimeout(3000)
})


