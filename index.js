const mongoose = require("mongoose");

// Import of the model Recipe from './models/Recipe.model.js'

const Recipe = require("./models/Recipe.model");
// Import of the data from './data.json'
const data = require("./data");

const MONGODB_URI = "mongodb://localhost:27017/recipe-app";
const recipesNew = [
  {
    title: "omelet",
    level: "Easy Peasy",
    ingredients: ["eggs", "salt", "pepper", "bread"],
    cuisine: "normal",
    dishType: "breakfast",
    duration: 10,
    creator: "me"
  },
  {
    title: "tea",
    level: "Easy Peasy",
    ingredients: ["water", "tea"],
    cuisine: "normal",
    dishType: "drink",
    duration: 2,
    creator: "me"
  },
];

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then((x) => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    // return Recipe.deleteMany();
  })
  // .then(() => {
  //   return Recipe.create(recipesNew);
  // })
  // .then(() => {
  //   return Recipe.insertMany(recipesNew)
  // })
  .then((allRecipies) => {
    console.log(allRecipies)
  })
  .catch((error) => {
    console.error("Error connecting to the database", error);
  });
