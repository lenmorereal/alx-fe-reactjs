import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [recipe, setRecipe] = useState({
    title: '',
    ingredients: '',
    steps: '',
  });
  const [errors, setErrors] = useState({});

  // Handling input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }));
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    if (!recipe.title) newErrors.title = 'Title is required';
    if (!recipe.ingredients) newErrors.ingredients = 'Ingredients are required';
    if (!recipe.steps) newErrors.steps = 'Steps are required';
    return newErrors;
  };

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log('Recipe added:', recipe);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Add New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={recipe.title}
            onChange={handleChange}
            className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
          {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
        </div>

        <div>
          <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">
            Ingredients
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleChange}
            rows="4"
            className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
          {errors.ingredients && <p className="text-red-500 text-xs mt-1">{errors.ingredients}</p>}
        </div>

        <div>
          <label htmlFor="steps" className="block text-sm font-medium text-gray-700">
            Cooking Steps
          </label>
          <textarea
            id="steps"
            name="steps"
            value={recipe.steps}
            onChange={handleChange}
            rows="4"
            className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
          {errors.steps && <p className="text-red-500 text-xs mt-1">{errors.steps}</p>}
        </div>

        <div>
          <button
            type="submit"
            className="w-full py-3 px-6 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
