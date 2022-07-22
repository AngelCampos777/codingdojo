const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Must have a title"]
    },
    price: {
        type: Number,
        required: [true, "Nothing comes without a price"],
        min: [0.01, "Positive only please"]
    },
    description: {
        type: String,
        required: [true, "Must have a description"],
        min: [5, "Tell us a bit more"]
    }
}, {timestamps: true})

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;