const formsPage = require('../pageobjects/forms.page')

describe('Forms - botão ativo', () => {
    beforeEach(async () => {
        await driver.terminateApp('com.wdiodemoapp')
        await driver.activateApp('com.wdiodemoapp')
        await browser.pause(2000)
    })

    it('deve clicar no botão ativo com sucesso', async () => {
        await formsPage.openFormsTab()
        await formsPage.clickActiveButton()

        await browser.pause(2000)
    })
})
