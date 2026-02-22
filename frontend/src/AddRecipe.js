import React, { useState } from "react";
import API from "./api";

function AddRecipe() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/recipes", {
        title,
        ingredients: ingredients.split(","),
        instructions
      });

      alert("Recipe Added Successfully!");
      setTitle("");
      setIngredients("");
      setInstructions("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Add Recipe</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Recipe Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br /><br />

        <input
          type="text"
          placeholder="Ingredients (comma separated)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
        />
        <br /><br />

        <textarea
          placeholder="Instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          required
        />
        <br /><br />

        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
}

export default AddRecipe;