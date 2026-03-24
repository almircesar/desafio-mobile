const formsPage = require('../pageobjects/forms.page')
const { restartApp } = require('../utils/app.helper')

describe('Forms - botão ativo', () => {
    beforeEach(async () => {
        await restartApp()
    })

    it('deve clicar no botão ativo com sucesso', async () => {
        await formsPage.openFormsTab()
        await formsPage.clickActiveButton()

        await browser.pause(2000)
    })
})
