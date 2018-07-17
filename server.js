// Require Node Modules
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Controller = require('./controllers/controller.js');
const app = express();
const PORT = process.env.PORT || 3001;

// Initialize Express for debugging & body parsing


app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());


// Serve Static Content
app.use(express.static("client/build"));

// Import Routes/Controller
app.use(Controller);


// Database Configuration with Mongoose
// ---------------------------------------------------------------------------------------------------------------
// Connect to localhost if not a production environment
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nyt",
  {
    useMongoClient: true
  }
);
const db = mongoose.connection;

// Show any Mongoose errors
db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});

// Once logged in to the db through mongoose, log a success message
db.once('open', function() {
  console.log('Mongoose connection successful.');
});

// Import the Article model
const Article = require('./models/Article.js');
// ---------------------------------------------------------------------------------------------------------------


// Launch App

app.listen(PORT, function(){
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});