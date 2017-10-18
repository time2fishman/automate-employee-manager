const functions = require('../test_data/commonFunctions')
const selectors = require('../test_data/css_selectors')
const data = require('../test_data/test_data')
module.exports = {
  beforeEach: browser => {
        browser.url('http://localhost:3000')
      },
      after : browser => {
        browser.end()
      },
    '2': browser => {
    browser.expect.element('body').to.be.present;
  }
}
