const { config } = require('./wdio.conf.js')

config.maxInstances = 1

config.capabilities = [{
    platformName: 'iOS',
    'appium:automationName': 'XCUITest',
    'appium:deviceName': 'iPhone 15',
    'appium:platformVersion': '17.5',
    'appium:bundleId': 'org.wdiodemoapp',
    'appium:noReset': true,
    'appium:fullReset': false,
    'appium:newCommandTimeout': 240
}]

exports.config = config
