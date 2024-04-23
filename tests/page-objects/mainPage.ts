import {expect, Locator, Page} from '@playwright/test';

export class MainPage {
    readonly loginButton: Locator;
    readonly notificationPopup: Locator;
    readonly notificationPopUpTitle: Locator;
    readonly notificationPopUpBody: Locator;
    readonly notificationPopUpCloseButton: Locator;
    readonly tradeWatchSection: Locator;
    readonly newOrderButtonInTradeWatch: Locator;
    readonly positionsTab: Locator;
    readonly closePositionButton: Locator;
    readonly closePositionsDialog: Locator;
    readonly yesButtonInClosePositionsDialog: Locator;

    constructor(page: Page) {
        this.loginButton = page.getByRole('button', {name: "Log In"});
        this.notificationPopup = page.getByTestId('notification-list');
        this.notificationPopUpTitle = this.notificationPopup.getByTestId('notification-title');
        this.notificationPopUpBody = this.notificationPopup.getByTestId('notification-body');
        this.notificationPopUpCloseButton = page.getByTestId('close')
        this.tradeWatchSection = page.getByTestId('trade-watch');
        this.newOrderButtonInTradeWatch = this.tradeWatchSection.getByTestId('new-order-button');
        this.positionsTab = page.getByTestId('positions-tab');
        this.closePositionButton = page.getByTestId('position-close-button');
        this.closePositionsDialog = page.getByTestId('close-selected-positions-dialog');
        this.yesButtonInClosePositionsDialog = this.closePositionsDialog.getByTestId('submit')
    };

    async clickOnTheLoginButton() {
        await this.loginButton.click();
    };

    async checkTheDisplayOfTheElements() {
        await expect(this.tradeWatchSection).toBeVisible();
        await expect(this.newOrderButtonInTradeWatch).toBeVisible()
        await expect(this.newOrderButtonInTradeWatch).toBeEnabled();
        await expect(this.positionsTab).toBeVisible();
        await expect(this.closePositionButton).toBeVisible();
    };

    async checkTheContentsOfPopUp(title: string, body: string) {
        await expect(this.notificationPopUpTitle).toContainText(title);
        await expect(this.notificationPopUpBody).toContainText(body);
    };

    async closeNotificationPopup() {
        await this.notificationPopUpCloseButton.click();
        await expect(this.notificationPopup).not.toBeVisible();
    };

    async clickOnNewOrderButtonInTradeWatch() {
        await this.newOrderButtonInTradeWatch.click();
    };

    async checkTheNumberOfTheOpenedPositionsInTradeWatch(number: string) {
        await expect(this.positionsTab.getByTestId('counter')).toHaveText(number);
    };

    async closePositions() {
        await this.closePositionButton.click();
        await this.yesButtonInClosePositionsDialog.click();
        await expect(this.closePositionsDialog).not.toBeVisible();
    }
}
