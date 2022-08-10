
//--------------------------------------------HELPERS


//--------------------------------------------TO EXPORTS

/**
     * Make a payment without save the customer or card. Just a payment.
     * 
     * Data has the following structure:
     * {
        "method": "card",
        "amount": 200000,
        "description": "Cargo desde terminal virtual de 111",
        "customer": {
            "name": "Mario",
            "last_name": "Benedetti Farrugia",
            "phone_number": "1111111111",
            "email": "c.martinez@nelumboconsultores.com"
        },
        "send_email": true,
        "confirm": false,
        "redirect_url": "http://www.openpay.co/index.html",
        "currency":"COP"
        }
     * @param {*} paymentData 
     */
const payRedirect = async (paymentData) => {

    //...

    /**
     * Response to redirect to pay (no saved customer) has the following structure:
     * {
        "id": "tr00mcerrr4paeunosyf",
        "authorization": null,
        "operation_type": "in",
        "transaction_type": "charge",
        "status": "charge_pending",
        "conciliated": false,
        "iva": "0",
        "creation_date": "2022-08-10T14:12:36-05:00",
        "operation_date": "2022-08-10T14:12:36-05:00",
        "description": "Cargo desde terminal virtual de 111",
        "error_message": null,
        "order_id": null,
        "payment_method": {
            "type": "redirect",
            "url": "https://sandbox-api.openpay.co/v1/mbllmclckdzbgdlxpies/charges/tr00mcerrr4paeunosyf/card_capture"
        },
        "amount": 111.00,
        "currency": "COP",
        "customer": {
            "name": "Mario",
            "last_name": "Benedetti Farrugia",
            "email": "c.martinez@nelumboconsultores.com",
            "phone_number": "1111111111",
            "address": null,
            "creation_date": "2022-08-10T14:12:36-05:00",
            "external_id": null,
            "clabe": null
        },
        "method": "card"
}
     */
    let chargeResponse = {}
}

/**
 * 
 * @param {*} paymentData 
 */
const payAndSave = async (paymentData) => {

}

module.exports = {
    pay: payRedirect, payAndSave
}