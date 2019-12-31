import React from 'react';

const UserIngredientForm = props => {

    return(
        <>
            
            <button id="ingredientIndexCardClicked" onClick={props.closeModal}>x</button>
            
            <h5>How much {props.ingredientIndexCardClicked.name} do you have?</h5><br />

            <form id="userIngredient" onSubmit={(e) => props.handleUserIngredientSubmit(e, props.ingredientIndexCardClicked.id)} >

                

                <input name="amount" type="number" min="0.0" step="0.10" placeholder="amount" value={props.userIngredient.amount} onChange={props.handleUserIngredientFormChange} /><br /><br />

                <select name="unit" value={props.userIngredient.unit} onChange={props.handleUserIngredientFormChange}>
                    <option>Select a unit of measurement</option>
                    <option value={"cup"}>cup</option>
                    <option value={"oz"}>oz</option>
                    <option value={"pounds"}>pounds</option>
                    <option value={"tablespoons"}>tablespoons</option>
                    <option value={"number"}>quantity</option>
                </select><br /> <br />

                <button type="submit">Submit</button><br /><br />

            </form>
        </>
    )
}

export default UserIngredientForm;