import React from "react";
import AddRecipe from "./AddRecipe";
import RecipeList from "./RecipeList";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>🍽 Food Recipe Generator</h1>
      <AddRecipe />
      <RecipeList />
    </div>
  );
}

export default App;