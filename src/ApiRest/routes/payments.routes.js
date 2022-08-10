const express = require('express')
const router = express.Router()


//init open pay lib
const Openpay = require('openpay')
const isProductionMode = false
const openpay = new Openpay("mbllmclckdzbgdlxpies ", "sk_09b574df5c00473484d10b0e18eac7b5")
openpay.setProductionReady(isProductionMode)


router.post('/external-pay', async (req, res, next) => {
    try {

        //charge
        let chargeRequest = {
            'method': 'card',
            'amount': 111,
            'description': 'Cargo desde terminal virtual de 111',
            'customer': {
                'name': 'Mario',
                'last_name': 'Benedetti Farrugia',
                'phone_number': '1111111111',
                'email': 'c.martinez@nelumboconsultores.com'
            },
            'send_email': false,
            'confirm': false,
            'redirect_url': 'http://www.openpay.co/index.html'
        }

        openpay.charges.create(chargeRequest, function (error, charge) {
            console.log("payment error", error)
            console.log("--- please pay in the following link", charge)
            res.status(200).json({ charge })
        })


    } catch (error) {
        next(error)
    }
})

router.post('/create-webhook', async (req, res, next) => {
    try {

        var webhook_params = {
            'url': 'http://localhost:3040/api-openpay/receive-payment-info',
            'user': 'juanito',
            'password': 'passjuanito',
            'event_types': [
                'charge.refunded',
                'charge.failed',
                'charge.cancelled',
                'charge.created',
                'chargeback.accepted'
            ]
        }

        openpay.webhooks.create(webhook_params, function (error, webhook) {
            console.log("--- webhook error", error)
            console.log("--- webhook created", webhook)
            res.status(200).json({ webhook })
        })
    } catch (error) {
        next(error)
    }
})

router.post('/receive-payment-info', async (req, res, next) => {
    try {
        console.log("--- received payment info", req.body)
    } catch (error) {
        next(error)
    }
})


module.exports = router