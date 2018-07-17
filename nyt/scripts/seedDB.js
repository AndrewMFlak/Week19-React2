const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/nyt",
    {
        useMongoClient: true
    }
);

const articleSeed = [
    {
        title: "Test Title",
        type: "Test Type",
        required: true
    },
    {
        title: "Test Title2",
        type: "Test Type2",
        required: true
    }
];

db.Article
.remove({})
.then(()=>db.Article.collection.insertMany(articleSeed))
.then(data=> {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
});