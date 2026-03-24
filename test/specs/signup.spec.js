const signupPage = require('../pageobjects/signup.page')
const { restartApp } = require('../utils/app.helper')

describe('Cadastro', () => {
    beforeEach(async () => {
        await restartApp()
    })

    it('deve realizar cadastro com sucesso', async () => {
        const email = `almir${Date.now()}@teste.com`

        await signupPage.openSignupTab()
        await signupPage.signup(email, '12345678', '12345678')

        await browser.pause(3000)
        await expect(signupPage.successMessage).toBeDisplayed()
    })

    it('deve exibir erro quando as senhas forem diferentes', async () => {
        const email = `almir${Date.now()}@teste.com`

        await signupPage.openSignupTab()
        await signupPage.signup(email, '12345678', '87654321')

        await browser.pause(2000)
        await expect(signupPage.passwordMismatchMessage).toBeDisplayed()
    })
})
