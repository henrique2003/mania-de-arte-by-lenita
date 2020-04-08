const Admin = require('../models/Admin');

module.exports = {
    async isPrimary(req, res, next) {
        try {
            let user = await Admin.findById(req.userId);

            if(user.role !== "Primary")
                return res.status(400).send({ error: "access denied" });

            next();
        } catch (error) {
            console.log(error);
            return res.status(500).send({ error: "Error in aurth role" });
        }
    },

    async isSecondary(req, res, next) {
        try {
            let user = await Admin.findById(req.userId);

            if(user.role !== "Secondary")
                return res.status(400).send({ error: "access denied" });

            next();
        } catch (error) {
            console.log(error);
            return res.status(500).send({ error: "Error in aurth role" });
        }
    }
}