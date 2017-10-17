const selectors = require('./selectors')

const listCheck = (employeeNames, browser) => {
// checks a list of employeeNames against the names on the screen.
// e.g. ['Ron Swanson', 'Todd Bergeron',...]
// should check browser for each name in the right position
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