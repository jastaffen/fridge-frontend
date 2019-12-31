import React from 'react';

const IngredientIndex = props => {
    return(
        <div className="ingredient-index-card" id={props.ingredient.id} onClick={props.handleIngredientIndexCardClick}>
            <img src={props.ingredient.img} alt={props.ingredient.name} />
            <p>{props.ingredient.name}</p>
        </div>
    )
}

export default IngredientIndex