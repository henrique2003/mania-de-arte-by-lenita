const { ok, serverError, badRequest, notFound, unauthorized } = require('http-server-res')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth.json')
const { Admin } = require('../models')
const { dateNow } = require('../utils')

module.exports = {
    async index(req, res) {
        try {
            const { page = 1 } = req.query

            const admins = await Admin.paginate({}, { page, limit: 40 })

            return ok(res, admins)
        } catch (error) {
            console.error(error.message)
            return serverError(res, 'Server error in read Admin')
        }
    },

    async store(req, res) {
        const { email, password } = req.body
        try {
            if (await Admin.findOne({ email }))
                return badRequest(res, "Admin already exists")

            req.body.password = await bcrypt.hash(password, 10)

            const admins = await Admin.create(req.body)
            admins.password = undefined

            return ok(res, admins)
        } catch (error) {
            console.log(error.message)
            return serverError(res, 'Server error in create Admin')
        }
    },

    async update(req, res) {
        try {
            const id = req.userId

            if (!await Admin.findById(id))
                return notFound(res, "Admin not found")

            req.body.updateAt = dateNow()

            const admin = await Admin.findOneAndUpdate(
                {
                    _id: id
                },
                {
                    $set: req.body
                },
                {
                    upsert: true
                });

            return ok(res, admin)
        }
        catch (error) {
            console.log(error.message)
            return serverError(res, "Server error in update Admin")
        }
    },

    async update_access(req, res) {
        try {
            const { id } = req.params
            const { role } = req.body

            if(!role) return badRequest(res, "Campo role requerido")

            const admin = await Admin.findByIdAndUpdate({
                _id: id
            },
                {
                    $set: { role }
                }, {
                upsert: true
            })

            return ok(res, admin)
        } catch (error) {
            console.log(error.message)
            return serverError(res, "Server Error in update_access")
        }
    },

    async show(req, res) {
        try {
            const admin = await Admin.findById(req.params.id)

            if (!admin) return notFound(res, "Admin not found")

            return ok(res, admin)
        }
        catch (error) {
            console.error(error.message)
            return serverError(res, "Server error in show admin")
        }
    },

    async destroy(req, res) {
        try {
            const { id } = req.params

            if (!await Admin.findById(id))
                return notFound(res, "Admin not found")

            await Admin.findByIdAndRemove({ _id: id })
            return ok(res, "Apagado com sucesso")
        } catch (error) {
            console.log(error.message)
            return serverError(res, "Server error in destroy Admin")
        }
    },

    async destroyAll(req, res) {
        try {
            await Admin.remove({ role: "Secondary" })

            return ok(res, "Deletados com sucesso")
        } catch (error) {
            return serverError(res, "Server error in destroy all Admins")
        }
    },

    async count(req, res) {
        try {
            const admin = await Admin.find({}).count()

            return ok(res, admin)
        }
        catch (error) {
            console.log(error.message)
            return serverError(res, 'Server error in all Admin')
        }
    },

    async auth(req, res) {
        try {
            const { email, password } = req.body;

            const user = await Admin.findOne({ email }).select('+password');

            if (!user) return badRequest(res, "User not found")

            if (!await bcrypt.compare(password, user.password)) return badRequest(res, "Invalid password")

            user.password = undefined;

            //token
            const token = jwt.sign({ id: user.id }, authConfig.secret, { expiresIn: 86400, });

            return ok(res, { user, token })
        } catch (error) {
            console.log(error.message)
            return serverError(res, 'Server error in auth')
        }
    },

    async load(req, res) {
        try {
            const id = req.userId
            if(!id) unauthorized(res, "Acesso negado")

            let user = await Admin.findById(id)
            if(!user) return unauthorized(res, "Acesso negado")

            return ok(res, user)
        } catch (error) {
            return serverError(res, "Server error in load user")
        }
    }
}