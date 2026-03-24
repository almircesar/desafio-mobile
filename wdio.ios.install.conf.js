const { config } = require('./wdio.conf.js')

config.maxInstances = 1

config.capabilities = [{
    platformName: 'iOS',
    'appium:automationName': 'XCUITest',
    'appium:deviceName': 'iPhone 15',
    'appium:platformVersion': '17.5',
    'appium:app': './app/ios.simulator.wdio.native.app.v2.2.0.zip',
    'appium:noReset': true,
    'appium:fullReset': false,
    'appium:newCommandTimeout': 240
}]

exports.config = config
