const fs = require('fs')
const auth = require('../config/auth.json')

module.exports = {
    async destroyImage (file) {
        const { filename: key } = file
        const { productsDir } = auth
        
        if (fs.existsSync(`${productsDir}${key}`)) {
            await fs.unlinkSync(`${productsDir}${key}`);
        }
    }
}