var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/omdb");
module.exports.Movie = require("./movie");
module.exports.User = require("./user");