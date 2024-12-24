import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = () => {
  const { id } = useParams();
  const recipe = useRecipeStore(state => state.recipes.find(r => r.id === Number(id)));
  const updateRecipe = useRecipeStore(state => state.updateRecipe);
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipe]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe({ id: Number(id), title, description });
    navigate(`/recipe/${id}`);
  };

  if (!recipe) return <div>Recipe not found</div>;

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Update Recipe</button>
    </form>
  );
};

export default EditRecipeForm;
