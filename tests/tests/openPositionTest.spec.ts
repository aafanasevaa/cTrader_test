import {test} from "../../fixtures";

test('Open position and check if it is displayed in TradeWatch', async ({pageManager}) => {

    await test.step('Log in to the test account', async () => {
        await pageManager.onMainPage().clickOnTheLoginButton();
        await pageManager.inLoginModalWindow().checkTheDisplayOfTheElements();
        await pageManager.inLoginModalWindow().switchToLogInTab();
        await pageManager.inLoginModalWindow().logInWithBothCredentials(process.env.EMAIL, process.env.PASSWORD);
        await pageManager.onMainPage().checkTheDisplayOfTheElements();
        await pageManager.onMainPage().checkTheContentsOfPopUp('Workspace Loaded', 'Workspace "Demo workspace" has been successfully loaded.');
        await pageManager.onMainPage().closeNotificationPopup();
    });

    await test.step('Click on the "New Order" button in the TradeWatch section', async () => {
        await pageManager.onMainPage().clickOnNewOrderButtonInTradeWatch();
        await pageManager.inNewMarketOrderModalWindow().checkTheDisplayOfTheElements();
    });

    await test.step('Click on "Place Order" button in the "New Market Order" tab', async () => {
        // this is not mentioned in the test task, done to decrease the possible loss after the position is closed
        await pageManager.inNewMarketOrderModalWindow().fillInValueInVolumeField('0.01');
        await pageManager.inNewMarketOrderModalWindow().clickOnThePlaceOrderButton();
        await pageManager.inPositionOpenedModalWindow().checkTheDisplayOfTheElements();
        await pageManager.onMainPage().checkTheContentsOfPopUp('Order Filled', 'Your request to Buy 0.01 BTC of BTCUSD was filled');
    });

    await test.step('Check that the number of opened positions equals to 1', async () => {
        await pageManager.inPositionOpenedModalWindow().clickOnOkButton();
        await pageManager.onMainPage().checkTheDisplayOfTheElements();
        await pageManager.onMainPage().checkTheContentsOfPopUp('Order Filled', 'Your request to Buy 0.01 BTC of BTCUSD was filled');

        await pageManager.onMainPage().checkTheNumberOfTheOpenedPositionsInTradeWatch("1");
        await pageManager.onMainPage().checkTheSymbolOfTheFirstOpenedPositionInTradeWatch('BTCUSD');
    });
});


test.afterEach(async ({ pageManager }) => {
    await pageManager.onMainPage().closePositions();
    await pageManager.onMainPage().checkTheNumberOfTheOpenedPositionsInTradeWatch("0");
});
