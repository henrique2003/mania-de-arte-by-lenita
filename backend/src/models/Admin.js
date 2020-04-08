const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const adminSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    role: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    updateAt: {
        type: Date
    }
})

adminSchema.plugin(mongoosePaginate);
const Admin = mongoose.model('Admin', adminSchema)

module.exports = Admin