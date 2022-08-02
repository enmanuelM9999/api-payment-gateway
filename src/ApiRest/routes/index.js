/** 
 * Load dinamically all endpoints.
 * The directory structure looks like:
 *   [
 *     admin.routes.js
 *     index.routes.js
 *     product.routes.js
 *     user.routes.js
 *   ]
 * 
 * This function will load dinamically the follow endpoints:
 *  [
 *      admin
 *      product
 *      user
 *  ]
 * 
 * This function will ignore any file named 'index'
 * */



const express = require('express')
const router = express.Router()
const fs = require('fs')
const logger = require('../../config/logger.config')
const pathRouter = `${__dirname}`

const removeExtension = (fileName) => {
    fileName// at start, fileName is something like 'user.routes.js'

    let fileNameParts = fileName.split('.') // ['user','routes','js']

    let fileNameWithoutExtension = fileNameParts[0] // 'user'

    return fileNameWithoutExtension
}

const routes = async () => {
    fs.readdirSync(pathRouter).filter((file) => {
        const fileWithOutExt = removeExtension(file)
        const skip = ['index'].includes(fileWithOutExt)
        if (!skip) {
            router.use(`/${fileWithOutExt}`, require(`./${fileWithOutExt}.routes`))
            logger.info(`LOAD ROUTES ---> ${fileWithOutExt}`)
        }
    })
}

routes()

module.exports = router