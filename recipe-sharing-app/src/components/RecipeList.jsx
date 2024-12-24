import React from 'react';
import { useRecipeStore } from '../store/recipeStore'; // Ensure correct path for the store
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const RecipeList = () => {
  // Access the filtered recipes from Zustand store
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);

  return (
    <div>
      {filteredRecipes.length === 0 ? (
        <p>No recipes found</p>
      ) : (
        // Use map to iterate over the filtered recipes
        filteredRecipes.map(recipe => (
          <div key={recipe.id}>
            <h2>
              {/* Link component for navigating to the RecipeDetails page */}
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </h2>
            <p>{recipe.description}</p>
            {/* Display other recipe details here if necessary */}
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
