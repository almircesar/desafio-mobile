const navigationPage = require('../pageobjects/navigation.page')

describe('Navegação para Home', () => {
    beforeEach(async () => {
        await driver.terminateApp('com.wdiodemoapp')
        await driver.activateApp('com.wdiodemoapp')
        await browser.pause(2000)
    })

    it('deve navegar para a aba Home com sucesso', async () => {
        await navigationPage.openHome()

        await browser.pause(1000)
        await expect(navigationPage.homeTab).toBeDisplayed()
    })
})
