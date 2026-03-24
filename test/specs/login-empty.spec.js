const loginPage = require('../pageobjects/login.page')
const { restartApp } = require('../utils/app.helper')

describe('Login com campos vazios', () => {
    beforeEach(async () => {
        await restartApp()
    })

    it('deve exibir erro ao tentar logar sem preencher os campos', async () => {
        await loginPage.openLoginTab()
        await loginPage.login('', '')

        await expect(loginPage.emailRequiredError).toBeDisplayed()
        await expect(loginPage.passwordRequiredError).toBeDisplayed()
    })
})
