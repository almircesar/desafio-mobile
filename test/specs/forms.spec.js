const formsPage = require('../pageobjects/forms.page')
const { restartApp } = require('../utils/app.helper')

describe('Forms', () => {
    beforeEach(async () => {
        await restartApp()
    })

    it('deve preencher o campo de texto com sucesso', async () => {
        await formsPage.openFormsTab()
        await formsPage.fillInput('Teste WDIO Mobile')

        await expect(formsPage.inputResult).toBeDisplayed()
    })

    it('deve alternar o switch com sucesso', async () => {
        await formsPage.openFormsTab()
        await formsPage.toggleSwitch()

        await browser.pause(1000)
        await expect(formsPage.switchText).toBeDisplayed()
    })

    it('deve abrir o dropdown com sucesso', async () => {
        await formsPage.openFormsTab()
        await formsPage.openDropdown()

        await browser.pause(1000)
    })
})
