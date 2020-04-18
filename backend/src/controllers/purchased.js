const { ok, serverError, badRequest } = require('http-server-res')
const { Purchased } = require('../models')

// "husky": {
// 	"pre-commit": "lint-staged"
// },
// "lint-staged": {
// 	"backend/*sepc.js": [
// 		"",
// 		"git add"
// 	]
// },
module.exports = {
	async index(req, res) {
		try {
			const { page = 1 } = req.query

			const purchased = await Purchased.paginate({}, { page, limit: 8 })

			ok(res, purchased)
		} catch (error) {
			return serverError(res, "Server Erros in purchased index")
		}
	},

	async store(req, res) {
		try {
			const { title, quantify, color,	user } = req.body
			const {
				name,
				zip_code,
				state,
				city,
				neighborhood,
				street,
				number
			} = user

			if (
				!title || 
				!quantify || 
				!color ||
				!user ||
				!name ||
				!zip_code ||
				!state ||
				!city ||
				!neighborhood ||
				!street ||
				!number ) return badRequest(res, "Campos em branco")

				let valid_zip_code = /^[0-9]{8}$/
				if(!valid_zip_code.test(zip_code)) return badRequest(res, "Cep inválido")

			let purchased = await Purchased.create(req.body)

			return ok(res, purchased)
		} catch (error) {
			return serverError(res, "Server Erros in purchased store")
		}
	},

	async destroy(req, res) {
		try {
			const { id } = req.params
			const { page = 1 } = req.query

			if (!id) return badRequest(res, "Id requerido")

			await Purchased.findByIdAndDelete(id)

			let purchased = await Purchased.paginate({}, { page, limit: 8 })

			return ok(res, purchased)
		} catch (error) {
			return serverError(res, "Server Erros in purchased destroy")
		}
	},

	async detroyAll(req, res) {
		try {
			await Purchased.remove({})

			return ok(res, "Deletado com sucesso")
		} catch (error) {
			return serverError(res, "Server Erro in purchased destroy all")
		}
	},

	async count(req, res) {
		try {
			let purchased = await Purchased.find({}).count()

			return ok(res, purchased)
		} catch (error) {
			return serverError(res, "Server Erros in purchased count")
		}
	}
}