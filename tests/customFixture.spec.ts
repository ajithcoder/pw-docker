import { test as base, expect, TestFixture } from "@playwright/test";

// Define a type for the fixture
type TestFixtures = {
  testData: { email: string; password: string };
};

const test = base.extend<TestFixtures>({
  testData: async ({}, use) => {
    const data = { email: "test@example.com", password: "pass123" };
    await use(data);
  },
});

test("Should log in with test data", async ({ page, testData }) => {
    await page.goto('https://binaryville.com/account');

    const emailInput = page.getByRole("textbox", {name: "Email"});
    await emailInput.fill(testData.email);
    const passwordInput = page.getByRole("textbox", {name: "password"});
    await passwordInput.fill(testData.password);
    const signInButton = page.getByRole('button', {name: "Sign in"});
    await expect(signInButton).toBeVisible();
    await (signInButton).click();
    const url = page.url();
    expect (url).toContain(testData.password)
});
