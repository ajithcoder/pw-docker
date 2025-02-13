import { Given,When,Then  } from "@cucumber/cucumber";
import {expect} from "@playwright/test"
import {page} from '../browserSetup'
import { LoginPage } from "../page objects/loginPage.pom";

let loginPage: LoginPage;

Given("the user is on login page", async() =>{
    loginPage = new LoginPage(page);
    await loginPage.goto();
})

When("the user enter valid {string} and {string}", async(email: string, password: string) =>{
    await loginPage.emailLocator.fill(email);
    await loginPage.passwordLocator.fill(password);
})

Then("the user should see their {string} and {string} in URL", async(email: string, password: string) =>{
    await loginPage.signInButtonLocator.click();
    await expect(page).toHaveURL(/example.com/)
    await expect(page).toHaveURL(/`${password}`/)
})