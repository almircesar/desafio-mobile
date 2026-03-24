const loginPage = require('../pageobjects/login.page')

describe('Login', () => {
    it('deve realizar login com credenciais válidas', async () => {
        await loginPage.openLoginTab()
        await loginPage.login('alice@webdriver.io', '10203040')

        await expect(loginPage.successMessage).toBeDisplayed()
    })
})
