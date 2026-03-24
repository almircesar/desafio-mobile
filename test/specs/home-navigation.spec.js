const navigationPage = require('../pageobjects/navigation.page')
const { restartApp } = require('../utils/app.helper')

describe('Navegação para Home', () => {
    beforeEach(async () => {
        await restartApp()
    })

    it('deve navegar para a aba Home com sucesso', async () => {
        await navigationPage.openHome()

        await browser.pause(1000)
        await expect(navigationPage.homeTab).toBeDisplayed()
    })
})
