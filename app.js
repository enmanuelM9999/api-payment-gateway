/**
 * Set environment vars
 */
require("dotenv").config()


/** 
 * Init api rest
 */
const ApiRest = require("./src/ApiRest")
const api = new ApiRest()
api.listen()


/** 
 * Init service bus 
*/

/** 
 * Init socket
*/
