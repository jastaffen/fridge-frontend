import React from 'react';
import RecipeCard from '../components/RecipeCard';

const RecipeCollection = ({recipes, handleRecipeClick}) => {
    
    const renderRecipes = () => {
        return recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} handleRecipeClick={handleRecipeClick} />)
    }

    return(
        <div className="recipe-container">
            <div>
                <h5>Your Recipes</h5>
                {renderRecipes()}
            </div>   
        </div>
    )
}

export default RecipeCollection;