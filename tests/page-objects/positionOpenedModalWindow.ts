import {expect, Locator, Page} from '@playwright/test';

export class PositionOpenedModalWindow {
    readonly positionOpenedWindow: Locator;
    readonly positionOpenedWindowTitle: Locator;
    readonly okButton: Locator;

    constructor(page: Page) {
        this.positionOpenedWindowTitle = page.getByTestId('dialog-header-title').getByText('Thank you! - Spotware cTrader');
        this.positionOpenedWindow = this.positionOpenedWindowTitle.locator('//ancestor::*[@data-test-id=\'trade-dialog\']');
        this.okButton = page.getByTestId('ok-button');
    };

    async checkTheDisplayOfTheElements() {
        await expect(this.positionOpenedWindow).toBeVisible();
        await expect(this.positionOpenedWindowTitle).toBeVisible();
        await expect(this.okButton).toBeVisible();
        await expect(this.okButton).toBeEnabled();
    };

    async clickOnOkButton() {
        await this.okButton.click();
        await expect(this.positionOpenedWindow).not.toBeVisible();
    }
}
