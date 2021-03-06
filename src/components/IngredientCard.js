import React from 'react';


const IngredientCard = props => {
    
    return(
        <div className="ingredient-card" id={props.userIngredient.id} onClick={props.yiContainer ? (e) => props.handleUiClick(e, props.userIngredient) : (e) => props.handleEditClick(e, props.userIngredient)}>
            <h6>{props.userIngredient.ingredient.name}</h6>
            <img src={props.userIngredient.ingredient.image} alt={props.userIngredient.ingredient.name} />
            <p>{parseFloat(props.userIngredient.amount).toFixed(2)} - {props.userIngredient.unit}</p>
        </div>
    )
}

export default IngredientCard