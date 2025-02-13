import {test, expect} from '@playwright/test'
import { LoginPage } from '../page objects/loginPage.pom'

test("Login with POM structure", async({page})=>{
  
    const loginPage = new LoginPage(page);
    await page.goto('https://binaryville.com/account');
    await loginPage.emailLocator.fill('test@example.com');
    await loginPage.passwordLocator.fill('pass123');
    await loginPage.signInButtonLocator.click();
    const url = page.url();
    expect (url).toContain('pass123')
    
})
