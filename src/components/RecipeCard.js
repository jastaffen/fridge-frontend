import React from 'react';

const RecipeCard = ({recipe, handleRecipeClick, searchOnly, handleSearchedRecipeClick}) => {

    const renderMissedIngredients = () => {
        return recipe.missedIngredients.map((missedIngredient, index) => <li key={index}>{missedIngredient.name}</li>)
    }
    
    return(
        <div className="recipe-card" id={recipe.id} onClick={searchOnly && !handleRecipeClick ? () => null : (e) => handleRecipeClick(e, recipe.id)}>
            <img src={recipe.image} alt={recipe.title} />
            <h5>{recipe.title}</h5>
            
            {searchOnly ? 
            <>
                <ul>
                    {recipe.missedIngredientCount === 0 ? <p style={{color: 'green'}}>Your search contains all the ingredients for this recipe!</p> : <p style={{color: 'red'}}>ingredients not in your search:</p>}
                    {renderMissedIngredients()}
                </ul>
                <button id="add-recipe" onClick={() => handleSearchedRecipeClick(recipe)}>Add Recipe</button>
            </>
            : null
            }
            
        </div>
    )
}

export default RecipeCard;