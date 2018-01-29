const data = require('../test_data/test_data')
const selectors = require('../test_data/css_selectors')
const functions = require('../test_data/helper_functions')

module.exports = {


    'UI check': browser => {
        browser.expect.element(selectors.idCard.nameEntry).text.to.contain(data.goodData.transaction1.name)
        browser.expect.element(selectors.idCard.placeholderText).text.to.contain('Phone Number')
        browser.expect.element(selectors.idCard.placeholderText).text.to.contain('Title')
    }
}