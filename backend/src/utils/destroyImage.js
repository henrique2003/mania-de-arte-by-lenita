const fs = require('fs')

module.exports = {
    async destroyImage (file) {
        const { filename: key } = file
        
        if (fs.existsSync(`tmp/uploads/${key}`)) {
            await fs.unlinkSync(`tmp/uploads/${key}`);
        }
    }
}