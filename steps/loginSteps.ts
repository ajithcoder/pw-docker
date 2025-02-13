import {Given, When, Then, Before, After} from '@cucumber/cucumber'
import { chromium, expect, Page, Browser } from '@playwright/test'

let page: Page
let browser: Browser

Before(async ()=>{
    browser = await chromium.launch({headless: true})
    const context = await browser.newContext()
    page = await context.newPage();
})

After(async () =>{
    await browser.close();
})

Given("the user is on login page", async() =>{
    await page.goto('https://binaryville.com/account');
})

When("the user enter valid email and password", async() =>{
    await page.getByRole("textbox", {name: "Email"}).fill("test@example.com");
    await page.getByRole("textbox", {name: "Password"}).fill("pass123");
})

Then("the user should see their email and password URL", async() =>{
    await page.getByRole("button", {name: "Sign in"}).click();
    await expect(page).toHaveURL(/test%40example.com/)
    await expect(page).toHaveURL(/pass123/)
})