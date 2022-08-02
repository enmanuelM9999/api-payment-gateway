const axios = require('axios')
const ErrorsContainer = require('../../errors/ErrorsContainer')
let logger = require('../../config/logger.config')

module.exports = {
    post: async (url, body, options) => {
        let response
        try {
            response = await axios.post(url, body, options)
            return response.data
        } catch (error) {
            logger.error(
                `HttpError
                --- Req: ${JSON.stringify(error.config)}
                --- Res: ${JSON.stringify(error.response.data)}
                `)
            if (error.response.status >= 400 && error.response.data.errors) {
                let errors = new ErrorsContainer()
                errors.addJsonArray(error.response.data.errors)
                throw errors
            }
            else throw error
        }
    },
    get: async (url, options) => {
        let response
        try {
            response = await axios.get(url, options)
            return response.data
        } catch (error) {
            logger.error(
                `HttpError
                --- Req: ${JSON.stringify(error.config)}
                --- Res: ${JSON.stringify(error)}
                `)
            if (error?.response.status >= 400 && error?.response.data.errors) {
                let errors = new ErrorsContainer()
                errors.addJsonArray(error?.response.data.errors)
                throw errors
            }
            else throw error
        }

    },
    put: async (url, body, options) => {
        let response
        try {
            response = await axios.put(url, body, options)
            return response.data
        } catch (error) {
            logger.error(
                `HttpError
                --- Req: ${JSON.stringify(error.config)}
                --- Res: ${JSON.stringify(error.response.data)}
                `)
            if (error.response.status >= 400 && error.response.data.errors) {
                let errors = new ErrorsContainer()
                errors.addJsonArray(error.response.data.errors)
                throw errors
            }
            else throw error
        }
    }
}