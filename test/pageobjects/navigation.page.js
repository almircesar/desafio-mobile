const BasePage = require('./base.page')

class NavigationPage extends BasePage {
    get homeTab() {
        return this.$('~Home')
    }

    get webviewTab() {
        return this.$('~Webview')
    }

    get loginTab() {
        return this.$('~Login')
    }

    get formsTab() {
        return this.$('~Forms')
    }

    get swipeTab() {
        return this.$('~Swipe')
    }

    get dragTab() {
        return this.$('~Drag')
    }

    async openHome() {
        await this.click(this.homeTab)
    }

    async openWebview() {
        await this.click(this.webviewTab)
    }

    async openLogin() {
        await this.click(this.loginTab)
    }

    async openForms() {
        await this.click(this.formsTab)
    }

    async openSwipe() {
        await this.click(this.swipeTab)
    }

    async openDrag() {
        await this.click(this.dragTab)
    }
}

module.exports = new NavigationPage()
