const BasePage = require('./base.page')

class NavigationPage extends BasePage {
    get homeTab() {
        return $('~Home')
    }

    get webviewTab() {
        return $('~Webview')
    }

    get loginTab() {
        return $('~Login')
    }

    get formsTab() {
        return $('~Forms')
    }

    get swipeTab() {
        return $('~Swipe')
    }

    get dragTab() {
        return $('~Drag')
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
