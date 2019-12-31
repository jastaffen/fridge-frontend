import React from 'react';


const IngredientForm = ({newIngredient, handleUserIngredientFormChange, addNewIngredient}) => {
    return (
        <form id='newIngredient' onSubmit={addNewIngredient}>
            <input type="text" name="name" value={newIngredient.name} placeholder="ingredient..." onChange={handleUserIngredientFormChange} />
            {/* <input type="number" placeholder="amount" />
            <input type="text" placeholder="unit" /> */}
            <button type="submit">Add Ingredient</button>
        </form>
    )
}

export default IngredientForm;