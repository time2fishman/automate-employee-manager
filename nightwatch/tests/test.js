const functions = require('../test_data/functions')
const selectors = require('../test_data/selectors')
const data = require('../test_data/data')

module.exports = {
    beforeEach: browser => {
        browser
            .url('http://localhost:3000')
            .waitForElementVisible(selectors.infoCardItems.blankinfoCard, 1000)
    },
    after: browser => {
        browser.end()
    },
    'Check that Simulated Employee List Loads': browser => {
        let employeeNames = [
            data.employees.existingEmployeeData.employee1.name,
            data.employees.existingEmployeeData.employee2.name,
            data.employees.existingEmployeeData.employee3.name,
            data.employees.existingEmployeeData.employee4.name,
            data.employees.existingEmployeeData.employee5.name,
            data.employees.existingEmployeeData.employee6.name,
            data.employees.existingEmployeeData.employee7.name,
            data.employees.existingEmployeeData.employee8.name,
            data.employees.existingEmployeeData.employee9.name,
            data.employees.existingEmployeeData.employee10.name
        ]
        functions.listCheck(employeeNames, browser)
    },
    'Click on Existing Employee, verify Data': browser => {
        let employees = data.employees.existingEmployeeData
        for (let employee in employees) {
            if (employees.hasOwnProperty(employee)) {
                let employeeObject = employees[employee];

                functions.clickByName(employeeObject.name, browser)
                browser.pause(100)
                functions.editorCheck(employeeObject, browser)
            }
        }
    },
    'cancel button does not save edited info': browser => {
        functions.clickByName(data.employees.existingEmployeeData.employee4.name, browser)
        functions.editFields(['nameField', 'phoneNumberField', 'titleField'], [data.employees.editedEmployeeData.employee3.name, data.employees.editedEmployeeData.employee3.phoneNumber, data.employees.editedEmployeeData.employee3.title], browser)
        browser.click(selectors.infoCardItems.clearButton)
        functions.editorCheck(data.employees.existingEmployeeData.employee4, browser)
    },
    'Edit & Save Employee, Verify Persistence': browser => {
        console.log('foobar')
    }
}
