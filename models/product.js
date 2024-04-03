const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema(
    {
        productName: {
            type: String,
            required: [true, "Please enter product name"]
        },
        imageURLs: {
            type: Array,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        rarity: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Product', ProductSchema)