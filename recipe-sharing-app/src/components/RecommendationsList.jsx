import React, { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';

const RecommendationsList = () => {
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);
  const recommendations = useRecipeStore(state => state.recommendations);
  const recipes = useRecipeStore(state => state.recipes);

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div>
      <h2>Recommended for You</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations available.</p>
      ) : (
        recommendations.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;
