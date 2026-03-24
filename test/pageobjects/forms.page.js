const BasePage = require('./base.page')

class FormsPage extends BasePage {
    get formsTab() {
        return this.$('~Forms')
    }

    get inputField() {
        return this.$('~text-input')
    }

    get inputResult() {
        return this.$('~input-text-result')
    }

    get switchField() {
        return this.$('~switch')
    }

    get switchText() {
        return this.$('~switch-text')
    }

    get dropdown() {
        return this.$('~Dropdown')
    }

    get activeButton() {
        return this.$('~button-Active')
    }

    async openFormsTab() {
        await this.click(this.formsTab)
    }

    async fillInput(text) {
        await this.setValue(this.inputField, text)
    }

    async toggleSwitch() {
        await this.click(this.switchField)
    }

    async openDropdown() {
        await this.click(this.dropdown)
    }

    async clickActiveButton() {
        await this.click(this.activeButton)
    }
}

module.exports = new FormsPage()
