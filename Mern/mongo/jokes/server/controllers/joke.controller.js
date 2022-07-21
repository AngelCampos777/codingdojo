const Joke = require("../models/joke.model")

// create
module.exports.createJoke = (req,res) => {
    Joke.create(req.body)
        .then(newJoke => res.json(newJoke))
        .catch(err => res.json({message: "check create joke controller", error: err}))
}

// read 1
module.exports.findOneJoke = (req, res) => {
    Joke.find({_id: req.params._id})
        .then(singleJoke => res.json(singleJoke))
        .catch(err => res.json({message: "check read 1 joke controller", error: err}))
}

// read all
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json(allJokes))
        .catch(err => res.json({message: "check read all jokes controller", error: err}))
}

// update
module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate({_id: req.params._id}, req.body, {new: true})
        .then(updateJoke => res.json(updateJoke))
        .catch(err => res.json({message: "check update joke controller", error: err}))
}

// delete
module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params._id})
        .then(deleteJoke => res.json(deleteJoke))
        .catch(err => res.json({message: "check delete joke controller", error: err}))
}