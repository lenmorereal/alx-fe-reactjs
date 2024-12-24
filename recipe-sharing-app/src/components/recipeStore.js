import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [], // All recipes
  favorites: [], // User's favorite recipes
  addFavorite: (recipeId) => set(state => ({
    favorites: [...state.favorites, recipeId]
  })),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  recommendations: [], // Personalized recommendations
  generateRecommendations: () => set(state => {
    // Example of generating recommendations based on favorites (can be extended)
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5 // Random selection for demo
    );
    return { recommendations: recommended };
  }),
}));

export { useRecipeStore };
