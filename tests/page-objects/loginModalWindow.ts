import {expect, Locator, Page} from '@playwright/test';

export class LoginModalWindow {
    readonly logInWindow: Locator;
    readonly signInTab: Locator;
    readonly signUpTab: Locator;
    readonly signUpEmailInput: Locator;
    readonly signUpPasswordInput: Locator;
    readonly signUpPasswordConfirm: Locator;
    readonly createAccountButton: Locator;
    readonly signInEmailInput: Locator;
    readonly signInPasswordInput: Locator;
    readonly keepLoggedInCheckbox: Locator;
    readonly logInButton: Locator;


    constructor(page: Page) {
        this.logInWindow = page.getByTestId('dialog-header').locator('xpath=/parent::*');
        this.signInTab = page.getByTestId('signin-tab');
        this.signUpTab = page.getByTestId('signup-tab');
        this.signUpEmailInput = page.getByTestId('email');
        this.signUpPasswordInput = page.getByTestId('password');
        this.signUpPasswordConfirm = page.getByTestId('confirm-password');
        this.createAccountButton = page.getByTestId('submit').getByRole('button', {name: 'Create cTrader ID'});
        this.signInEmailInput = page.getByPlaceholder('Enter your email or cTrader ID');
        this.signInPasswordInput = page.getByPlaceholder('Enter your password');
        this.keepLoggedInCheckbox = page.getByTestId('keep-me-logged-in');
        this.logInButton = page.getByTestId('submit').getByRole('button', {name: 'Log In'});
    };

    async checkTheDisplayOfTheElements() {
        // tabs
        await expect(this.signInTab).toBeVisible();
        await expect(this.signInTab).toBeEnabled();
        await expect(this.signUpTab).toBeVisible();
        await expect(this.signUpTab).toBeEnabled();
        // inputs
        await expect(this.signUpEmailInput).toBeVisible();
        await expect(this.signUpEmailInput).toBeEmpty();
        await expect(this.signUpPasswordInput).toBeVisible();
        await expect(this.signUpPasswordInput).toBeEmpty();
        await expect(this.signUpPasswordConfirm).toBeVisible();
        await expect(this.signUpPasswordConfirm).toBeEmpty();
        // button
        await expect(this.createAccountButton).toBeVisible();
        await expect(this.createAccountButton).toBeEnabled();
    };

    async switchToLogInTab() {
        await this.signInTab.click();
        await expect(this.signInEmailInput).toBeVisible();
        await expect(this.signInEmailInput).toBeEmpty();
        await expect(this.signInPasswordInput).toBeVisible();
        await expect(this.signInPasswordInput).toBeEmpty();
        // buttons + checkboxes
        await expect(this.keepLoggedInCheckbox).toBeVisible();
        await expect(this.keepLoggedInCheckbox).toHaveAttribute('data-test-checked', 'true');
        await expect(this.logInButton).toBeVisible();
        await expect(this.logInButton).toBeEnabled();
    };

    async logInWithBothCredentials(email, password) {
        // input value + assert it's displayed
        await this.signInEmailInput.fill(email);
        await expect(this.signInEmailInput).toHaveValue(email);
        await this.signInPasswordInput.fill(password);
        await expect(this.signInPasswordInput).toHaveValue(password);
        // click login button
        await this.logInButton.click();
        await expect(this.logInWindow).not.toBeVisible();
    }
}
