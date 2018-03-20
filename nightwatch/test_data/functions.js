const selectors = require('./css_selectors')
const goodData = require('./goodData')

module.exports = {

    uiLoadCheck: function(browser) {
        // Expect Main Title to be visible and read what it should
        browser.expect.element(selectors.mainTitle).text.to.equal(goodData.globals.mainTitle)
            // Expect blank employee card to be visible (before clicking on an employee) and read what it should
        browser.expect.element(selectors.employeeDetailsBox.noneSelected).text.to.equal(goodData.globals.noEmpSelected)
            // Expect list of employees (selectors) to all be present and for the default names to match.
        for (var key in selectors.employeeList) {
            browser.expect.element(selectors.employeeList[key]).to.be.present
            browser.expect.element(selectors.employeeList[key]).text.to.equal(goodData.existingEmployeeName[key])
        }
    },

    empCardUiCheck: function(browser) {
        // Select random employee
        browser.click(selectors.employeeList.employee1)
            // Expect all required elements in employee detail card to be present
        browser.expect.element(selectors.employeeDetailsBox.id).to.be.present
        browser.expect.element(selectors.employeeDetailsBox.cancelBtn).to.be.present
        browser.useXpath()
        browser.expect.element(selectors.employeeDetailsBox.nameLabel).to.be.present
        browser.useCss()
        browser.expect.element(selectors.employeeDetailsBox.nameInput).to.be.present
        browser.expect.element(selectors.employeeDetailsBox.saveBtn).to.be.present
        browser.expect.element(selectors.employeeDetailsBox.nameTitle).to.be.present
        browser.useXpath()
        browser.expect.element(selectors.employeeDetailsBox.phoneLabel).to.be.present
        browser.useCss()
        browser.expect.element(selectors.employeeDetailsBox.phoneInput).to.be.present
        browser.useXpath()
        browser.expect.element(selectors.employeeDetailsBox.titleLabel).to.be.present
        browser.useCss()
        browser.expect.element(selectors.employeeDetailsBox.titleInput).to.be.present
    },

    // editEmployee: function(browser) {
    //     // Select random employee
    //     // Make changes to all fields
    //     // Click save
    //     // Select another employee
    //     // Select edited employee again 
    //     // Verify changes have persisted

    // }
}