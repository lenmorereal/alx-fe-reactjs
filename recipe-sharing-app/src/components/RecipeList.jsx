import React from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);
  const favorites = useRecipeStore(state => state.favorites);

  const isFavorite = (recipeId) => favorites.includes(recipeId);

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <button onClick={() => isFavorite(recipe.id) ? removeFavorite(recipe.id) : addFavorite(recipe.id)}>
            {isFavorite(recipe.id) ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
          <Link to={`/recipe/${recipe.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
