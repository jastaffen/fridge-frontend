import React from 'react';

const RecipeModal = ({recipeClicked, closeModal, userIngredients}) => {

    const renderIngredients = () => {
        return recipeClicked.recipe.ingredients.map((ingredient, index) => <li key={index} className={renderClass(ingredient)}>{ingredient.name}</li>)
    }

    const renderClass = ingredient => {
        let names = userIngredients.map(userIngredient => userIngredient.ingredient.name);
        if (names.includes(ingredient.name)) {
            return ''
        } else {
            return 'red'
        }
    }
    

    return(
        <div id="modal">

            <button id="recipeClicked" onClick={closeModal}>x</button>
            <h2>{recipeClicked.recipe.title}</h2>
            <img src={recipeClicked.recipe.image} alt={recipeClicked.recipe.title} />

            <div className="im-container">
                <h4>Ingredients</h4>
                <ul>
                    {renderIngredients()}
                </ul>
            </div>
            
            <ol className="instructions-list">
                {recipeClicked.recipe.instructions.map(instruction => <li>{instruction}</li>)}
            </ol>
        </div>
    )
}

export default RecipeModal;