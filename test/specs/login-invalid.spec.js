const loginPage = require('../pageobjects/login.page')

describe('Login inválido', () => {
    it('deve exibir erro ao tentar logar com campos vazios', async () => {
        await loginPage.openLoginTab()
        await loginPage.login('', '')

        await expect(loginPage.emailRequiredError).toBeDisplayed()
        await expect(loginPage.passwordRequiredError).toBeDisplayed()
    })
})
