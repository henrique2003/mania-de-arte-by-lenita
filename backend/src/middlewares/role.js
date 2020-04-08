const { unauthorized, serverError, notFound } = require('http-server-res')
const Admin = require('../models/Admin')

exports.isPrimary = async (req, res, next) => {
    try {
        let user = await Admin.findById(req.userId)

        if(!user) return notFound(res, { msg: "Usuátio não encontrado" })

        if (user.role !== "Primary") unauthorized(res, { error: "Acesso negado" })

        next()
    } catch (error) {
        console.log(error)
        return serverError(res, { error: "Error in aurth role" })
    }
}

exports.isAdmin = async (req, res, next) => {
    try {
        let user = await Admin.findById(req.userId)

        if(!user) return notFound(res, { msg: "Usuátio não encontrado" })

        if (user.role !== "Primary" && user.role !== "Secondary") unauthorized(res, { error: "Acesso negado" })

        next()
    } catch (error) {
        console.log(error)
        return serverError(res, { error: "Error in aurth role" })
    }
}