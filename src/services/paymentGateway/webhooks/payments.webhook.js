const logger = require('../../../config/logger.config')

const receivePaymentResult = async (paymentResult) => {
    logger.info(`Payment result received ${JSON.stringify(paymentResult)}`)
}

module.exports = { receivePaymentResult }
