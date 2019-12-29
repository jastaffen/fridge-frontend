import React from 'react';


const IngredientForm = () => {
    return (
        <form>
            <input type="text" placeholder="ingredient name" />
            <input type="number" placeholder="amount" />
            <input type="text" placeholder="unit" />
            <input type="submit" value="add ingredient" />
        </form>
    )
}

export default IngredientForm;