// Require Mongoose
var mongoose = require('mongoose');

// Create a Schema Class
const Schema = mongoose.Schema;

// Create Article Schema
const ArticleSchema = new Schema({

  // Title of Article
  title: {
    type: String,
    required: true
  },

  // Date of Article
  date: {
    type: String,
    required: true
  },
  
  // Link to Article
  url: {
    type: String,
    required: true
  }

});

// Create the Article model with Mongoose
const Article = mongoose.model('Article', ArticleSchema);

// Export the Model
module.exports = Article;