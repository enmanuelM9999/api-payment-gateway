/**
 * Validator lib needs the params to be string, no numbers, no objects, no booleans
 * */
const validator = require('validator')
const config = require('../../config')

module.exports = {
    isNumeric: (value) => {
        return typeof value === 'string' || typeof value === 'number' ? !isNaN(value) : false
    },
    isMobilePhoneWithCountryCode: (value) => {
        value = '' + value
        let country = config.PHONES_ALLOWED
        return validator.isMobilePhone(value, country, { strictMode: true })
    },
    isEmpty: (value) => {
        value = '' + value
        return validator.isEmpty(value)
    },
    isJSON: (value) => {
        value = '' + value
        return validator.isJSON(value)
    }


}