const mp = require('mercadopago')
const { Products } = require('../models')
const { serverError, success, badRequest } = require('../utils')

module.exports = {
    async mercadopago(req, res) {
        try {
            const { idProduct } = req.body

            if (!idProduct)
                return badRequest(res, "Id do produto requerido")

            // mp.configure({
            //     client_id: ,
            //     access_token: 'APP_USR-4120477970615454-040123-36209535af09d836f9993ce0530400a2-538194476'
            // })

            // const payment_data = {
            //     transaction_amount: 164,
            //     token: id,
            //     description: 'Gorgeous Steel Pants',
            //     installments: installments,
            //     payment_method_id: payment_method_id,
            //     issuer_id: issuer_id,
            //     payer: {
            //       email: 'lizeth.block@live.com'
            //     }
            //   }

            //   mercadopago.payment.save(payment_data).then(data => {
            //     console.log(data.status);
            //   }).catch(error => {

            //   })   

            //        
            // let lastValue = await Products.findById(idProduct)

            // let update = lastValue.purchased + 1

            // await Products.findByIdAndUpdate(idProduct, { $set: { purchased: update } }, { upsert: true })

            // return success(res, "Completo com sucesso")
        } catch (error) {
            serverError(res, error, "Server error in pay-pagseguro")
        }
    }
}