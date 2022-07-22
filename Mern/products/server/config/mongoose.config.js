const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/products", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("found mongoose"))
    .catch(err => console.log("lost it", err));