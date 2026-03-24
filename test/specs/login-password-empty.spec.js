const loginPage = require('../pageobjects/login.page')
const { restartApp } = require('../utils/app.helper')

describe('Login sem senha', () => {
    beforeEach(async () => {
        await restartApp()
    })

    it('deve exibir erro ao tentar logar sem senha', async () => {
        await loginPage.openLoginTab()
        await loginPage.login('alice@webdriver.io', '')

        await expect(loginPage.passwordRequiredError).toBeDisplayed()
    })
})
