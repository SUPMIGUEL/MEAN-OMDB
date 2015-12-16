var express = require("express"),
app = express(),
bodyParser = require("body-parser"),
methodOverride = require("method-override"),
db = require("./models"),
morgan = require("morgan"),
request = require("request");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));   
app.use(methodOverride("_method"));
app.use(morgan("tiny"));
app.use(bodyParser.json());

var apiRouter = express.Router();
app.use('/api', apiRouter);


app.get('/', function(req,res){
  res.redirect('/movie');
});

app.get('/movie', function(req,res){
  res.render('home');
});

app.post('/movie', function(req,res){
  res.render('home');
});




var server = app.listen(3000, function () {
  console.log('Example app listening 3000');
});




