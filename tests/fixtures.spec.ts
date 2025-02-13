import {expect,test} from '@playwright/test'

test('Sign In button visible', async ({page}) =>{
    await page.goto('https://binaryville.com/account');
    const signInButton = page.getByRole('button', {name: 'Sign in'});
    await expect(signInButton).toBeVisible();
})

