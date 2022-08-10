const express = require('express')
const router = express.Router()

const { webhooks } = require('../../services/paymentGateway')

//Listen for all payments
router.post('/payment', async (req, res, next) => {
    try {
        webhooks.payments.receivePaymentResult(req.body)
        res.status(200).json({ message: 'Payment received' })
    } catch (error) {
        next(error)
    }
})

//Listen for all refunds...

//Listen for all cancellations...


module.exports = router