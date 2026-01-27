import {Locator , Page} from "playwright"

export class LoginPage{

    // Locators related to Login Page only
    page : Page
    username : Locator
    password : Locator
    loginBtn : Locator
    errorMsg : Locator
    homePageIdentifier : Locator

    // Constructor - initializing the variables

    constructor(page:Page) {
        this.page = page
        this.username = this.page.locator('#userEmail')
        this.password = this.page.locator('#userPassword')
        this.loginBtn = this.page.locator("#login")
        this.errorMsg = this.page.locator("#toast-container")
        this.homePageIdentifier = this.page.locator("[routerlink='/dashboard/myorders']")

    }

    // Methods related to Login Page

    async launchURL(url:string) {
        await this.page.goto(url)
    }

    async loginIntoApplication(username:string, password:string){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginBtn.click()
    }

    async invalidLogin(username:string, incorrectpassword:string){
        await this.username.fill(username)
        await this.password.fill(incorrectpassword)
        await this.loginBtn.click()
    }

}