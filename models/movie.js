var mongoose = require("mongoose");
var movieSchema = new mongoose.Schema({
    title: String,
    year: String,
});

var Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;