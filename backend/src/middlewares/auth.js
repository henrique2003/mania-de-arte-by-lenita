const jwt = require("jsonwebtoken");
const authConfig = require('../config/auth.json');

module.exports = (req, res, next) => {
    const authHeaders = req.header('Authorization');
    
    if(!authHeaders)
        return res.status(401).send({ error: "No token provided" });

    try {
        const decoded = jwt.verify(authHeaders, authConfig.secret);
        req.userId = decoded.id;

        next();
    } catch (error) {
        return res.status(401).send({ error: "Invalid token" });
    }
};