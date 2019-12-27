import React from 'react';

const RecipeCard = ({recipe, handleRecipeClick}) => {
    return(
        <div className="recipe-card" id={recipe.id} onClick={(e) => handleRecipeClick(e, recipe.id)}>
            <img src={recipe.image} alt={recipe.title} />
            <h5>{recipe.title}</h5>
        </div>
    )
}

export default RecipeCard;