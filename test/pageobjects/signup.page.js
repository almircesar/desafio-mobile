const BasePage = require('./base.page')

class SignupPage extends BasePage {
    get loginTab() {
        return $('~Login')
    }

    get signupTab() {
        return $('~button-sign-up-container')
    }

    get emailInput() {
        return $('~input-email')
    }

    get passwordInput() {
        return $('~input-password')
    }

    get confirmPasswordInput() {
        return $('~input-repeat-password')
    }

    get signupButton() {
        return $('~button-SIGN UP')
    }

    get successMessage() {
        return $('android=new UiSelector().textContains("You successfully signed up!")')
    }

    get passwordMismatchMessage() {
        return $('android=new UiSelector().textContains("Please enter the same password")')
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
