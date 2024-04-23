import {test as base} from '@playwright/test'
import {PageManager} from "./tests/page-objects/pageManager";

export type Fixtures = {
    pageManager: PageManager
}

export const test = base.extend<Fixtures>({
    page: async ({ baseURL, page }, use) => {
        await page.goto(baseURL);
        await use(page);
    },

    pageManager: async({page}, use) => {
        const pm = new PageManager(page);
        await use(pm);
    }
})
