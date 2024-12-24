import React from 'react';
import { useParams } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeDetails = () => {
  const { id } = useParams(); // Retrieve the recipe id from the URL params
  const recipe = useRecipeStore(state => state.recipes.find(r => r.id === Number(id))); // Find the recipe from the store based on the id

  if (!recipe) return <div>Recipe not found</div>; // Display an error if the recipe doesn't exist

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <p><strong>ID:</strong> {recipe.id}</p> {/* Display the recipe id */}
      {/* Add any other details about the recipe that you want to display */}
    </div>
  );
};

export default RecipeDetails;
