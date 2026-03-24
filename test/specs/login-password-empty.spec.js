const loginPage = require('../pageobjects/login.page')

describe('Login sem senha', () => {
    beforeEach(async () => {
        await driver.terminateApp('com.wdiodemoapp')
        await driver.activateApp('com.wdiodemoapp')
        await browser.pause(2000)
    })

    it('deve exibir erro ao tentar logar sem senha', async () => {
        await loginPage.openLoginTab()
        await loginPage.login('alice@webdriver.io', '')

        await browser.pause(2000)
        await expect(loginPage.passwordRequiredError).toBeDisplayed()
    })
})
