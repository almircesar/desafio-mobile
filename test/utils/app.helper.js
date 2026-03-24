const APP_ID = {
    android: 'com.wdiodemoapp',
    ios: 'org.wdiodemoapp'
}

function getAppId() {
    return driver.isAndroid ? APP_ID.android : APP_ID.ios
}

async function restartApp() {
    const appId = getAppId()
    await driver.terminateApp(appId)
    await driver.activateApp(appId)
    await browser.pause(2000)
}

module.exports = {
    getAppId,
    restartApp
}
