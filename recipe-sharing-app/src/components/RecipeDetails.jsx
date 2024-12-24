import { useRecipeStore } from '../store/recipeStore';
import { useParams } from 'react-router-dom';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === parseInt(id))
  );

  return (
    <div>
      {recipe ? (
        <>
          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>
          <EditRecipeForm recipe={recipe} />
          <DeleteRecipeButton recipeId={recipe.id} />
        </>
      ) : (
        <p>Recipe not found</p>
      )}
    </div>
  );
};

export default RecipeDetails;
