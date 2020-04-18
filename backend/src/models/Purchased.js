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
	user: {
		name: {
			type: String,
			require: true
		},
		zip_code: {
			type: String,
			require: true
		},
		state: {
			type: String,
			require: true
		},
		city: {
			type: String,
			require: true
		},
		neighborhood: {
			type: String,
			require: true
		},
		street: {
			type: String,
			require: true
		},
		number: {
			type: Number,
			require: true
		},
		complement: {
			type: String
		}
	},
	createAt: {
		type: Date,
		default: Date.now()
	}
})

purchasedSchema.plugin(mongoosePaginate)
let Purchased = mongoose.model('Purchased', purchasedSchema)

module.exports = Purchased