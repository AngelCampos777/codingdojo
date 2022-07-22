const Product = require("../models/product.model");

// create
module.exports.createProduct = (req,res) => {
    Product.create(req.body)
        .then(newProduct => res.json(newProduct))
        .catch(err => res.json({message: "error creating product", error: err}))
}

// readA
module.exports.findAllProducts = (req,res) => {
    Product.find()
        .then(allProducts => res.json(allProducts))
        .catch(err => res.json({message: "error read All products", error: err}))
}

// read1
module.exports.findOneProduct = (req,res) => {
    Product.find({_id: req.params._id})
        .then(oneProduct => res.json(oneProduct))
        .catch(err => res.json({message: "error read 1 product", error: err}))
}
// update
module.exports.updateProduct = (req,res) => {
    Product.findOneAndUpdate({_id: req.params._id}, req.body, {new: true, runValidators: true})
        .then(oneProduct => res.json(oneProduct))
        .catch(err => res.json({message: "error updating product", error: err}))
}

//  delete
module.exports.deleteProduct = (req,res) => {
    Product.deleteOne({_id: req.params._id})
        .then(res.json({message: "deletion success"}))
        .catch(err => res.json({message: "error deleting product", error: err}))
}