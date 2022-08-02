const logger = require('../../config/logger.config')
const GeneralError = require('../../errors/GeneralError')
const ErrorsContainer = require('../../errors/ErrorsContainer')

module.exports = (error, req, res, next) => {
    let errorsContainer

    //Parse the error received into an instance of ErrorsContainer

    if (error.isCustomError) {
        /**The received error is a custom error
         * Needs wrap the unique error in a container before to send it to the client
        */
        errorsContainer = new ErrorsContainer()
        errorsContainer.add(error)
    }
    else if (error.isErrorsContainer) {
        /**The received error is already an ErrorsContainer
        */
        errorsContainer = error
    }

    else {
        /**The received error is an Unknown error
         * Create a default error
         */
        error = new GeneralError({ traceId: error.stack, description: error.message })
        errorsContainer = new ErrorsContainer()
        errorsContainer.add(error)
    }

    //At this point, the error received is already parsed to ErrorsContainer

    /**Error logger 
     * Map each error, then log it
    */
    let errors = errorsContainer.errors
    errors.forEach(error => logger.error(error.description))

    /**Send a error response */
    res.status(errorsContainer.status).json({ errors })
}

