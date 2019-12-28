import React from 'react';

const RecipeModal = ({recipeClicked, closeModal, user}) => {
    return(
        <div id="modal">

            <button onClick={closeModal}>x</button>
            <h2>{recipeClicked.recipe.title}</h2>
            <img src={recipeClicked.recipe.image} alt={recipeClicked.recipe.title} />

            <div className="im-container">
                <h4>Ingredients</h4>
                <ul>
                    {recipeClicked.recipe.ingredients.map(ingredient => <li>{ingredient.name}</li>)}
                </ul>
            </div>
            
            <ol className="instructions-list">
                {recipeClicked.recipe.instructions.map(instruction => <li>{instruction}</li>)}
            </ol>
        </div>
    )
}

export default RecipeModal;