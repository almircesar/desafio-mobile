const navigationPage = require('../pageobjects/navigation.page')

describe('Navegação entre abas', () => {
    it('deve navegar entre Login e Forms', async () => {
        await navigationPage.openLogin()
        await driver.pause(1000)

        await navigationPage.openForms()
        await driver.pause(1000)

        await expect(navigationPage.formsTab).toBeDisplayed()
    })

    it('deve navegar para Swipe e Drag', async () => {
        await navigationPage.openSwipe()
        await driver.pause(1000)

        await navigationPage.openDrag()
        await driver.pause(1000)

        await expect(navigationPage.dragTab).toBeDisplayed()
    })
})
