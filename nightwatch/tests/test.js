const functions = require('../test_data/functions')
const selectors = require('../test_data/selectors')
const data = require('../test_data/data')

module.exports = {
    beforeEach: browser => {
        browser
            .url('http://localhost:3000')
    },
    after: browser => {
        browser.end()
    },
    'test': browser => {
        console.log(data.foo)
        browser
            .expect.element('body').to.be.present;
    },
    'cancel button does not save edited info': browser => {
        functions.clickByName(data.employees.existingEmployeeData.employee4.name, browser)
        functions.editFields(['nameField', 'phoneField', 'titleField'], [data.employees.editedEmployeeData.employee3.name, data.employees.editedEmployeeData.employee3.phoneNumber, data.employees.editedEmployeeData.employee3.title], browser)
        browser.click(selectors.infoCardItems.clearButton)
        functions.editorCheck(['nameField', 'phoneField', 'titleField'], [data.employees.existingEmployeeData.employee4.name, data.employees.existingEmployeeData.employee4.phoneNumber, data.employees.existingEmployeeData.employee4.title])
    }
}