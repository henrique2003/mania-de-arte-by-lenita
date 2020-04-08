const { ok, serverError, badRequest } = require('http-server-res')
const { Purchased } = require('../models')

module.exports = {
    async index (req, res) {
        try {
            const { page = 1 } = req.query

            const purchased = await Purchased.paginate({}, { page, limit: 25 })

            ok(res, purchased)
        } catch (error) {
            return serverError(res, "Server Erros in purchased index")
        }
    }
}