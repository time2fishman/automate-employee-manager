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
    'Click on Existing Employee, verify Data' : browser => {
        let object = data.employees.existingEmployeeData
        for (let employee in object) {
            if (object.hasOwnProperty(employee)) {
                let employeeObject = object[employee];

                functions.clickByName(employeeObject.employee1, browser)
                browser.pause (100)
                functions.editorCheck(employeeObject, browser)

                functions.clickByName(employeeObject.employee2, browser)
                browser.pause (100)
                functions.editorCheck(employeeObject, browser)

                functions.clickByName(employeeObject.employee3, browser)
                browser.pause (100)
                functions.editorCheck(employeeObject, browser)





                
            }
        }
            
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

    }
}