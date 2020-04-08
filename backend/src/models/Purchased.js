const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const purchasedSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    quantify: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now()
    }
})

purchasedSchema.plugin(mongoosePaginate)
let Purchased = mongoose.model('Purchased', purchasedSchema)

module.exports = Purchased