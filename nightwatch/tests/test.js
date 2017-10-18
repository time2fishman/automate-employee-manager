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
    'Click on Existing Employee, verify Data' : browser => {
        let object = data.employees.existingEmployeeData
        for (let employee in object) {
            if (object.hasOwnProperty(employee)) {
                let employeeObject = object[employee];

                functions.clickByName(employeeObject.name, browser)
                browser.pause (100)
                functions.editorCheck(employeeObject, browser)

                
            }
        }
            
    }   
}