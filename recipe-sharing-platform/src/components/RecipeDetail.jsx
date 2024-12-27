import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import data from '../data.json'; // Assuming your mock data is in data.json

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find the recipe by id
    const foundRecipe = data.find((recipe) => recipe.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <button
        onClick={() => navigate('/')}
        className="text-blue-500 hover:text-blue-700 mb-4"
      >
        Back to Home
      </button>
      <div className="shadow-lg rounded-lg overflow-hidden">
        <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h1 className="text-3xl font-semibold mb-2">{recipe.title}</h1>
          <p className="text-gray-700 mb-4">{recipe.summary}</p>

          <div className="mb-6">
            <h2 className="text-xl font-medium">Ingredients:</h2>
            <ul className="list-disc pl-5 mt-2 text-gray-600">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-medium">Instructions:</h2>
            <ol className="list-decimal pl-5 mt-2 text-gray-600">
              {recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
