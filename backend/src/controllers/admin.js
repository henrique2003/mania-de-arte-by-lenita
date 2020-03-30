const { Admin } = require('../models');
const { success, serverError, badRequest, notFound, dateNow } = require('../utils')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

module.exports = {
    async index(req, res) {
        try {
            const admins = await Admin.find({});
            return success(res, admins)
        } catch (error) {
            return serverError(res, error, 'Server error in read Admin')
        }
    },

    async store(req, res) {
        const { email } = req.body;
        try {
            if (await Admin.findOne({ email })) {
                return badRequest(res, "Admin already exists")
            }

            const admins = await Admin.create(req.body);
            admins.password = undefined;

            return success(res, admins)
        } catch (error) {
            return serverError(res, error, 'Server error in create Admin')
        }
    },

    async update(req, res) {
        try {
            const { name, email, password, role } = req.body;
            const { id } = req.params

            if(!await Admin.findById(id))
                return notFound(res, "Admin not found")

            let AdminBody = {};

            if (name) AdminBody.name = name;
            if (email) AdminBody.email = email;
            if (password) AdminBody.password = password;
            if (role) AdminBody.role = role;
            AdminBody.updateAt = dateNow();

            const admin = await Admin.findOneAndUpdate(
                {
                    _id: id
                },
                {
                    $set: AdminBody
                },
                {
                    upsert: true
                });

            return success(res, admin)
        }
        catch (error) {
            return serverError(res, error, "Server error in update Admin")
        }
    },

    async show(req, res) {
        try {
            const admin = await Admin.findOne({ _id: req.params.id });

            if (admin) {
                return success(res, admin)
            }
            
            return notFound(res, "Admin not found");
        }
        catch (error) {
            return serverError(res, error, "Server error in show admin")
        }
    },

    async destroy(req, res) {
        try {
            const { id } = req.params

            if (!await Admin.findById(id))
                return notFound(res, "Admin not found")

            await Admin.findByIdAndRemove({ _id: id });
            return success(res, "Apagado com sucesso")
        } catch (error) {
            return serverError(res, error, "Server error in destroy Admin")
        }
    },

    async destroyAll(req, res) {
        try {
            await Admin.remove({ role: "Secondary" });
            return success(res, "Good job")
        } catch (error) {
            return serverError(res, error, "Server error in destroy all Admins")
        }
    },

    async allAdmin(req, res) {
        try {
            const admin = await Admin.find({}).select("_id");
            return success(res, admin)
        }
        catch (error) {
            return serverError(res, error, 'Server error in all Admin')
        }
    },

    async auth(req, res) {
        try {
            const { email, password } = req.body;

            const user = await Admin.findOne({ email }).select('+password');

            if (!user)
                return badRequest(res, "User not found")

            if (!await bcrypt.compare(password, user.password))
                return badRequest(res, "Invalid password")

            user.password = undefined;

            //token
            const token = jwt.sign({ id: user.id }, authConfig.secret, { expiresIn: 86400, });

            return success(res, { user, token })
        } catch (error) {
            return serverError(res, error, 'Server error in auth')
        }
    }
}