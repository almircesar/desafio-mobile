const BasePage = require('./base.page')

class LoginPage extends BasePage {
    get loginTab() {
        return $('~Login')
    }

    get emailInput() {
        return $('~input-email')
    }

    get passwordInput() {
        return $('~input-password')
    }

    get loginButton() {
        return $('~button-LOGIN')
    }

    get successMessage() {
        return $('android=new UiSelector().textContains("You are logged in!")')
    }

    get emailRequiredError() {
        return $('android=new UiSelector().textContains("Please enter a valid email address")')
    }

    get passwordRequiredError() {
        return $('android=new UiSelector().textContains("Please enter at least 8 characters")')
    }

    async openLoginTab() {
        await this.click(this.loginTab)
    }

    async login(email, password) {
        await this.setValue(this.emailInput, email)
        await this.setValue(this.passwordInput, password)
        await this.click(this.loginButton)
    }
}

module.exports = new LoginPage()
