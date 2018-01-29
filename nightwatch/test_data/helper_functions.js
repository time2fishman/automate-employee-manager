module.exports = {
    /**
     * enterInfo takes the browser, selector, and data for a field, enters and verifies the info.
     * 
     * @param {object} browser Browser is the nightwatch browser object.
     * @param {string} selector Selector is the CSS_Selector for the field.
     * @param {string} data Data is the string to enter into the field.
     * 
     */
    enterInfo: (browser, selector, data) => {
        browser
            .clearValue(selector)
            .setValue(selector, data)
            .verify.value(selector, data)
    },

    /**
     * setFields sets the value of every field that is passed in with its corresponding input value.
     * Note: The keys for 'selectors' and 'inputs' need to match
     * 
     * @param {object} browser This is the Nightwatch browser controlling object.
     * @param {object} selectors This is an object of all the field selectors.
     * @param {object} inputs This is an objeect of all the fields' inputs
     */
    setFields: (browser, selectors, inputs) => {
        let keys = Object.getOwnPropertyNames(selectors) // This gives me an array aof all the keys in the selectors object.
        keys.forEach((key) => { //This function will iterate through each key, clearing, setting, and verifying the fields.
            browser
                .clearValue(selectors[key])
                .setValue(selectors[key], inputs[key])
                .verify.value(selectors[key], inputs[key])
        })
    }
}