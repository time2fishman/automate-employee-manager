const functions = require('../test_data/functions')
const selectors = require('../test_data/selectors')
const data = require('../test_data/data')

module.exports = {
    beforeEach : browser => {
        browser
            .url('http://localhost:3000')
    },
    after : browser => {
        browser.end()
    },
    'test' : browser => {
        console.log(data.foo)
        browser
            .expect.element('body').to.be.present;
    },
    'Edit & Save Employee, Verify Persistence' : browser => {
        functions.clickByName(data.employees.existingEmployeeData.employee1.name, browser)
        functions.editFields(['nameField', 'phoneField', 'titleField'], [data.employees.editedEmployeeData.employee1.name,data.employees.editedEmployeeData.employee1.phoneNumber, data.employees.editedEmployeeData.employee1.title], browser)
        browser
        .click(selectors.infoCardItems.saveButton)
        functions.clickByName(data.employees.existingEmployeeData.employee4.name, browser)
        functions.clickByName(data.employees.existingEmployeeData.employee1.name, browser)
        functions.editorCheck(data.employees.editedEmployeeData.employee1, browser)
    }



}