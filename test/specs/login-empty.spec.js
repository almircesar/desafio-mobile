const loginPage = require('../pageobjects/login.page')

describe('Login com campos vazios', () => {
    it('deve exibir erro ao tentar logar sem preencher os campos', async () => {
        await loginPage.openLoginTab()
        await loginPage.login('', '')

        await driver.pause(2000)
    })
})
