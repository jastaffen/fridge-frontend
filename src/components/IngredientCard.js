import React from 'react';


const IngredientCard = props => {
    return(
        <div className="ingredient-card" id={props.ingredient.id}>
            <h6>{props.ingredient.name}</h6>
            <img src={props.ingredient.img} alt={props.ingredient.name} />
            <p>{props.ingredient.amount} - {props.ingredient.unit}</p>
        </div>
    )
}

export default IngredientCard