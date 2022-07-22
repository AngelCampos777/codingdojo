const ProductController = require("../controllers/product.controller");

module.exports = app => {
    // create
    app.post("/api/products/create", ProductController.createProduct);
    // readA
    app.get("/api/products", ProductController.findAllProducts);
    // read1
    app.get("/api/products/:_id", ProductController.findOneProduct);
    // update
    app.put("/api/products/update/:_id", ProductController.updateProduct);
    // delete
    app.delete("/api/products/delete/:_id", ProductController.deleteProduct);
}