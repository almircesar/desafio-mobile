const BasePage = require('./base.page')

class LoginPage extends BasePage {
    get loginTab() {
        return this.$('~Login')
    }

    get emailInput() {
        return this.$('~input-email')
    }

    get passwordInput() {
        return this.$('~input-password')
    }

    get loginButton() {
        return this.$('~button-LOGIN')
    }

    get successMessage() {
        return this.$(
            'android=new UiSelector().textContains("You are logged in!")',
            '-ios predicate string:name CONTAINS "You are logged in!"'
        )
    }

    get emailRequiredError() {
        return this.$(
            'android=new UiSelector().textContains("Please enter a valid email address")',
            '-ios predicate string:name CONTAINS "Please enter a valid email address"'
        )
    }

    get passwordRequiredError() {
        return this.$(
            'android=new UiSelector().textContains("Please enter at least 8 characters")',
            '-ios predicate string:name CONTAINS "Please enter at least 8 characters"'
        )
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
