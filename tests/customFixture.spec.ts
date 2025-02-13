// import { test as base, expect } from "@playwright/test";

// // Define a type for the fixture
// type TestFixtures = {
//   testData: { email: string; password: string };
//   authenticateUser: (page: any) => Promise<void>;
// };

// const test = base.extend<TestFixtures>({
//   testData: async ({}, use) => {
//     const data = { email: "test@example.com", password: "pass123" };
//     await use(data);
//   },
//   authenticateUser: [async ({page,testData}, use) =>{
//     await page.goto('https://binaryville.com/account');
//     const emailInput = page.getByRole("textbox", {name: "Email"});
//     await emailInput.fill(testData.email);
//     const passwordInput = page.getByRole("textbox", {name: "password"});
//     await passwordInput.fill(testData.password);
//     const signInButton = page.getByRole('button', {name: "Sign in"});
//     await expect(signInButton).toBeVisible();
//     await (signInButton).click();
//     await use(page);
//   }, {auto:true}]
// });

// test("Should log in with test data", async ({ page, testData }) => {
    

//     const url = page.url();
//     expect (url).toContain(testData.password)
// });
