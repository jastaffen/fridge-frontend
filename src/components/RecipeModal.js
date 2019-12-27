import React from 'react';

const RecipeModal = ({recipeClicked, closeModal}) => {
    return(
        <div id="modal">
            <button onClick={closeModal}>x</button>
            <h2>{recipeClicked.recipe.title}</h2>
            <img src={recipeClicked.recipe.image} alt={recipeClicked.recipe.title} />
            <ol>
                {recipeClicked.recipe.instructions.map(instruction => <li>{instruction}</li>)}
            </ol>
        </div>
    )
}

export default RecipeModal;