const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Recipe = require("./models/Recipe");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/recipesDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Test Route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// POST - Add Recipe
app.post("/recipes", async (req, res) => {
  try {
    const recipe = new Recipe(req.body);
    await recipe.save();
    res.status(201).json(recipe);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET - Fetch Recipes
app.get("/recipes", async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Server Start
app.listen(5000, () => {
  console.log("Server started on port 5000");
});
