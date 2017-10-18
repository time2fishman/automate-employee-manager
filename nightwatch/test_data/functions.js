const selectors = require('./selectors')

const listCheck = (employeeNames, browser) => {
// checks a list of employeeNames against the names on the screen.
// e.g. ['Ron Swanson', 'Todd Bergeron',...]
// should check browser for each name in the right position
  browser.expect.element(selectors.employeeList.employee1).text.to.equal(employeeNames[0])
  browser.expect.element(selectors.employeeList.employee2).text.to.equal(employeeNames[1])
  browser.expect.element(selectors.employeeList.employee3).text.to.equal(employeeNames[2])
  browser.expect.element(selectors.employeeList.employee4).text.to.equal(employeeNames[3])
  browser.expect.element(selectors.employeeList.employee5).text.to.equal(employeeNames[4])
  browser.expect.element(selectors.employeeList.employee6).text.to.equal(employeeNames[5])
  browser.expect.element(selectors.employeeList.employee7).text.to.equal(employeeNames[6])
  browser.expect.element(selectors.employeeList.employee8).text.to.equal(employeeNames[7])
  browser.expect.element(selectors.employeeList.employee9).text.to.equal(employeeNames[8])
  browser.expect.element(selectors.employeeList.employee10).text.to.equal(employeeNames[9])
}

const clickByName = (employeeName, browser) => {
// clicks the employee tag in the employee list for the name passed in
// this will populate the editor
}

const editorCheck = (employee, browser) => {
// takes the passed in employee object and compares against what is in
// the fields
}

const editFields = (fields, values, browser) => {
// edits the editor fields, based on fields named in the field array, and
// inputs the values from the value array at the same index
// e.g. ['nameField', 'titleField'], ['Ron Swanson', 'Director of Parks and Rec.']
//      would put Ron Swanson in the name field, Director... in the title field
}

module.exports = {
    listCheck: listCheck,
    clickByName: clickByName,
    editFields: editFields,
    editorCheck: editorCheck
}
