const goodData = require('../test_data/goodData')
const selectors = require('../test_data/css_selectors')
const functions = require('../test_data/functions')

module.exports = {

    beforeEach: browser => {
        browser.url('https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html')
    },

    after: browser => {
        browser.end()
    },

    'Does the correct info display upon loading the page': browser => {
        functions.uiLoadCheck(browser)
    },

    'After clicking on an employee, does all the correct info display in the details card': browser => {
        functions.empCardUiCheck(browser)
    },

    'Can I successfully edit an employee\'s information, save it, and have the change(s) persist': browser => {
        browser
            .waitForElementVisible(selectors.employeeList.employee10, 3000)
            .click(selectors.employeeList.employee10)
            .waitForElementVisible(selectors.employeeDetailsBox.id, 2000)
        browser.expect.element(selectors.employeeDetailsBox.id).text.to.equal(goodData.globals.id10)
        browser.expect.element(selectors.employeeDetailsBox.nameTitle).text.to.equal(goodData.existingEmployeeName.employee10)

        browser
            .clearValue(selectors.employeeDetailsBox.nameInput)
            .setValue(selectors.employeeDetailsBox.nameInput, goodData.editedEmployeeName.employee10)
            .click(selectors.employeeDetailsBox.phoneInput)
            .clearValue(selectors.employeeDetailsBox.phoneInput)
            .setValue(selectors.employeeDetailsBox.phoneInput, goodData.editedEmployeePhone.employee10)
            .click(selectors.employeeDetailsBox.titleInput)
            .clearValue(selectors.employeeDetailsBox.titleInput)
            .setValue(selectors.employeeDetailsBox.titleInput, goodData.editedEmployeeTitle.employee10)
            .click(selectors.employeeDetailsBox.saveBtn)
            .click(selectors.employeeList.employee2)
            .expect.element(selectors.employeeList.employee10).text.to.equal('Snoop Dogg')
        browser
            .click(selectors.employeeList.employee10)
            .expect.element(selectors.employeeDetailsBox.nameInput).to.have.value.that.equals(goodData.editedEmployeeName.employee10)
        browser.expect.element(selectors.employeeDetailsBox.phoneInput).to.have.value.that.equals(goodData.editedEmployeePhone.employee10)
        browser.expect.element(selectors.employeeDetailsBox.titleInput).to.have.value.that.equals(goodData.editedEmployeeTitle.employee10)
    },

    'Can I successfully edit an employee\'s information, cancel it, and have the change(s) revert': browser => {
        browser
            .waitForElementVisible(selectors.employeeList.employee5, 2000)
            .click(selectors.employeeList.employee5)
            .waitForElementVisible(selectors.employeeDetailsBox.phoneInput, 2000)
            .clearValue(selectors.employeeDetailsBox.phoneInput)
            .setValue(selectors.employeeDetailsBox.phoneInput, goodData.editedEmployeePhone.employee5)
        browser.expect.element(selectors.employeeDetailsBox.phoneInput).to.have.value.that.equals(goodData.editedEmployeePhone.employee5)
        browser.click(selectors.employeeDetailsBox.cancelBtn)
        browser.expect.element(selectors.employeeDetailsBox.phoneInput).to.have.value.that.equals(goodData.existingEmployeePhone.employee5)
    }

}