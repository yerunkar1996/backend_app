const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    image: String,
    category: String,
    price: Number,
    description:String,
    rating: Object
})

module.exports = mongoose.model("products", productSchema)