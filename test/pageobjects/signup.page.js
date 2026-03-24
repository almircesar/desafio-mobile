const BasePage = require('./base.page')

class SignupPage extends BasePage {
    get loginTab() {
        return this.$('~Login')
    }

    get signupTab() {
        return this.$('~button-sign-up-container')
    }

    get emailInput() {
        return this.$('~input-email')
    }

    get passwordInput() {
        return this.$('~input-password')
    }

    get confirmPasswordInput() {
        return this.$('~input-repeat-password')
    }

    get signupButton() {
        return this.$('~button-SIGN UP')
    }

    get successMessage() {
        return this.$(
            'android=new UiSelector().textContains("You successfully signed up!")',
            '-ios predicate string:name CONTAINS "You successfully signed up!"'
        )
    }

    get passwordMismatchMessage() {
        return this.$(
            'android=new UiSelector().textContains("Please enter the same password")',
            '-ios predicate string:name CONTAINS "Please enter the same password"'
        )
    }

    async openSignupTab() {
        await this.click(this.loginTab)
        await browser.pause(1000)
        await this.click(this.signupTab)
        await this.emailInput.waitForDisplayed({ timeout: 10000 })
    }

    async signup(email, password, confirmPassword) {
        await this.setValue(this.emailInput, email)
        await this.setValue(this.passwordInput, password)
        await this.setValue(this.confirmPasswordInput, confirmPassword)
        await this.click(this.signupButton)
    }
}

module.exports = new SignupPage()
