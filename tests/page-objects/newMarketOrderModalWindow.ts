import {expect, Locator, Page} from '@playwright/test';

export class NewMarketOrderModalWindow {
    readonly newMarketOrderWindow: Locator;
    readonly newMarketOrderWindowTitle: Locator;
    readonly positionSizeInput: Locator;
    readonly placeOrderButton: Locator;

    constructor(page: Page) {
        this.newMarketOrderWindowTitle = page.getByTestId('dialog-header-title').getByText('Market Order - Spotware cTrader');
        this.newMarketOrderWindow = this.newMarketOrderWindowTitle.locator('//ancestor::*[@data-test-id=\'trade-dialog\']');
        this.positionSizeInput = page.getByTestId('new-position').getByRole('textbox');
        this.placeOrderButton = page.getByTestId('trade-dialog-content').getByRole('button', { name: 'Place Order' });
    };

    async checkTheDisplayOfTheElements() {
        await expect(this.newMarketOrderWindow).toBeVisible();
        await expect(this.newMarketOrderWindowTitle).toBeVisible();
        await expect(this.positionSizeInput).toBeVisible();
        await expect(this.positionSizeInput).toBeEnabled();
        await expect(this.placeOrderButton).toBeVisible();
        await expect(this.placeOrderButton).toBeEnabled();
    };

    async fillInValueInVolumeField (volume: string) {
        await this.positionSizeInput.fill(volume);
        await expect(this.positionSizeInput).toHaveValue(volume);
    };

    async clickOnThePlaceOrderButton() {
        await this.placeOrderButton.click();
        await expect(this.newMarketOrderWindow).not.toBeVisible();
    }
}
