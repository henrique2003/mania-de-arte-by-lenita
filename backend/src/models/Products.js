const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const productsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    cost: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true
    },
    image: {
        name: String,
        size: String,
        key: String,
        url: String
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
    updateAt: {
        name: String,
        date: Date
    }
})

productsSchema.plugin(mongoosePaginate);
const Products = mongoose.model('Products', productsSchema)

module.exports = Products;