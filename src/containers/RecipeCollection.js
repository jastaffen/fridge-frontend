import React from 'react';
import RecipeCard from '../components/RecipeCard';

const RecipeCollection = ({userRecipes, handleRecipeClick}) => {
    
    const renderRecipes = () => {
        return userRecipes.map(recipe => <RecipeCard key={recipe.recipe.id} recipe={recipe.recipe} handleRecipeClick={handleRecipeClick} />)
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