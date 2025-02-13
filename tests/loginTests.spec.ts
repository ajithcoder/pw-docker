import {test , expect} from '../page objects/fixtures.ts'

test("Login with POM structure", async({page, loginPage})=>{
  
    await loginPage.login('test@example.com','pass123')
    const url = page.url();
    expect (url).toContain('pass123')
    
})
