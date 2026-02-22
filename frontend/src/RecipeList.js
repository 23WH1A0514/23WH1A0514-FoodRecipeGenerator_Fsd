import React, { useEffect, useState } from "react";
import API from "./api";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const res = await API.get("/recipes");
      setRecipes(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>All Recipes</h2>

      {recipes.map((recipe) => (
        <div
          key={recipe._id}
          style={{
            border: "1px solid black",
            padding: "10px",
            margin: "10px"
          }}
        >
          <h3>{recipe.title}</h3>

          <strong>Ingredients:</strong>
          <ul>
            {recipe.ingredients.map((ing, index) => (
              <li key={index}>{ing}</li>
            ))}
          </ul>

          <strong>Instructions:</strong>
          <p>{recipe.instructions}</p>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;