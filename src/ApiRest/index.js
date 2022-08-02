const express = require("express")
const configs = require('../config')
const GeneralError = require("../errors/GeneralError")

module.exports = class ApiRest {
    constructor() {
        this.app = express()

        this.middleware()

        this.routes()

        this.errors()

        this.port = configs.SERVER_PORT
    }

    middleware() {
        // parse json request body
        this.app.use(express.json())
        // parse urlencoded request body
        this.app.use(express.urlencoded({
            extended: true
        }))

        /**
         * Sanitize request data
         */
        const xss = require('xss-clean')
        this.app.use(xss())

        /**
         * Cors
         */
        const cors = require('cors')
        this.app.use(cors({
            origin: '*'
        }))
    }

    routes() {
        const routes = require('./routes')
        const contextPath = configs.CONTEXT_PATH
        this.app.use(contextPath, routes)

        //The 404 Route (ALWAYS Keep this as the last route)
        this.app.use('*', function (req, res) {
            res.status(404)
            res.json({ errors: [new GeneralError({ status: 404, description: 'Not Found' }).toJson()] })
        })
    }

    errors() {
        const errorHandler = require('./middlewares/errorHandler')
        this.app.use(errorHandler)
    }

    listen() {
        const logger = require('../config/logger.config')
        this.app.listen(this.port, logger.info(`***ApiRest Listening on port ${this.port}`))
    }
}

