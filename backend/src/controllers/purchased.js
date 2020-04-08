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
    },

    async store (req, res) {
        try {
            const { title, quantify, color } = req.body

            if(!title || !quantify || !color) return badRequest(res, "Campos em branco")

            let purchased = await Purchased.create(req.body)

            return ok(res, purchased)
        } catch (error) {
            return serverError(res, "Server Erros in purchased store")
        }
    },

    async destroy (req, res) {
        try {
            const { id } = req.params

            if(!id) return badRequest(res, "Id requerido")

            await Purchased.findByIdAndDelete(id)

            return ok(res, "Deletado com sucesso")
        } catch (error) {
            return serverError(res, "Server Erros in purchased destroy")
        }
    }
}