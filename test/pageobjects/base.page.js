class BasePage {
    $(androidSelector, iosSelector = androidSelector) {
        return driver.isAndroid ? $(androidSelector) : $(iosSelector)
    }

    async click(element) {
        await element.waitForDisplayed({ timeout: 10000 })
        await element.click()
    }

    async setValue(element, value) {
        await element.waitForDisplayed({ timeout: 10000 })
        await element.setValue(value)
    }

    async getText(element) {
        await element.waitForDisplayed({ timeout: 10000 })
        return await element.getText()
    }
}

module.exports = BasePage
