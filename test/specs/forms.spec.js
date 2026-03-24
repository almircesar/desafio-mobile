const formsPage = require('../pageobjects/forms.page')

describe('Forms', () => {
    it('deve preencher o campo de texto com sucesso', async () => {
        await formsPage.openFormsTab()
        await formsPage.fillInput('Teste WDIO Mobile')

        await expect(formsPage.inputResult).toBeDisplayed()
    })

    it('deve alternar o switch com sucesso', async () => {
        await formsPage.openFormsTab()
        await formsPage.toggleSwitch()

        await driver.pause(1000)
        await expect(formsPage.switchText).toBeDisplayed()
    })

    it('deve abrir o dropdown com sucesso', async () => {
        await formsPage.openFormsTab()
        await formsPage.openDropdown()

        await driver.pause(1000)
    })
})
