const fs = require('fs')
const auth = require('../config/auth.json')

module.exports = {
    async destroyImage (key) {
        const { productsDir } = auth
        
        if (fs.existsSync(`${productsDir}${key}`)) {
            await fs.unlinkSync(`${productsDir}${key}`);
        }
    }
}