const BasePage = require('./base.page')

class FormsPage extends BasePage {
    get formsTab() {
        return $('~Forms')
    }

    get inputField() {
        return $('~text-input')
    }

    get inputResult() {
        return $('~input-text-result')
    }

    get switchField() {
        return $('~switch')
    }

    get switchText() {
        return $('~switch-text')
    }

    get dropdown() {
        return $('~Dropdown')
    }

    get activeButton() {
        return $('~button-Active')
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
