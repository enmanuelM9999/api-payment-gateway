const GeneralError = require('./GeneralError')

module.exports = class ErrorsContainer extends Error {
    constructor() {
        super("ErrorsContainer")
        this.errors = []
        this.status = 400

        this.isErrorsContainer = true
    }

    /**
     * 
     * @param {*} error must be an instance of GeneralError
     */
    add(error) {
        if (error.isCustomError)
            this.errors.push(error.toJson())
    }

    addJsonArray(errors) {
        errors.forEach(error => {
            this.errors.push(error)
        })
    }

    isEmpty() {
        return this.errors.length == 0
    }

    hasErrors() {
        return !this.isEmpty()
    }

    toJson() {
        return {
            errors: this.errors,
            status: this.status
        }
    }
}