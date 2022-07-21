const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1/jokes", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Found the mongoose"))
    .catch(err => console.log("Lost it", err))