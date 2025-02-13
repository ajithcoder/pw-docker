import { Given,When,Then  } from "@cucumber/cucumber";
import {expect} from "@playwright/test"
import {page} from '../browserSetup'
import { LoginPage } from "../page objects/loginPage.pom";

let loginPage: LoginPage;

Given("the user is on login page", async() =>{
    loginPage = new LoginPage(page);
    await loginPage.goto();
})

When("the user enter valid email and password", async() =>{
    await loginPage.emailLocator.fill("test@example.com");
    await loginPage.passwordLocator.fill("pass123");
})

Then("the user should see their email and password URL", async() =>{
    await loginPage.signInButtonLocator.click();
    await expect(page).toHaveURL(/test%40example.com/)
    await expect(page).toHaveURL(/pass123/)
})