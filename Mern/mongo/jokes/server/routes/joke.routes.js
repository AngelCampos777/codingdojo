const JokeController = require("../controllers/joke.controller");
const Joke = require("../models/joke.model");

module.exports = app => {
    // create
    app.post("/api/jokes/create", JokeController.createJoke);
    // read1
    app.get("/api/jokes/:_id", JokeController.findOneJoke);
    // readA
    app.get("/api/jokes", JokeController.findAllJokes);
    // update
    app.put("/api/jokes/update/:_id", JokeController.updateJoke);
    // delete 
    app.delete("/api/jokes/delete/:_id", JokeController.deleteJoke);
}