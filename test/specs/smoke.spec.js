const { restartApp } = require('../utils/app.helper')

describe('Smoke Test', () => {
    beforeEach(async () => {
        await restartApp()
    })

    it('deve abrir o app com sucesso', async () => {
        await driver.pause(5000)
    })
})
