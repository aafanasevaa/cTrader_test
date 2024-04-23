import {Page} from "@playwright/test";
import {MainPage} from "./mainPage";
import {LoginModalWindow} from "./loginModalWindow";
import {NewMarketOrderModalWindow} from "./newMarketOrderModalWindow";
import {PositionOpenedModalWindow} from "./positionOpenedModalWindow";

export class PageManager {

    private readonly page: Page;
    private readonly mainPage: MainPage;
    private readonly loginModalWindow: LoginModalWindow;
    private readonly newMarketOrderModalWindow: NewMarketOrderModalWindow;
    private readonly positionOpenedModalWindow: PositionOpenedModalWindow;

    constructor(page: Page) {
        this.page = page;
        this.mainPage = new MainPage(this.page);
        this.loginModalWindow = new LoginModalWindow(this.page);
        this.newMarketOrderModalWindow = new NewMarketOrderModalWindow(this.page);
        this.positionOpenedModalWindow = new PositionOpenedModalWindow(this.page);
    };

    onMainPage() {
        return this.mainPage;
    };

    inLoginModalWindow() {
        return this.loginModalWindow;
    };

    inNewMarketOrderModalWindow() {
        return this.newMarketOrderModalWindow;
    };

    inPositionOpenedModalWindow() {
        return this.positionOpenedModalWindow;
    }
}
