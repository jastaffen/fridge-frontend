import React from 'react';

const SearchIngredientsContainer = ({searchIngredients, handleSiClick}) => {
    
    return(
        <div className="si-box">

            <ul className="si-list">
                {searchIngredients ? searchIngredients.map(searchIngredient => <li className="si-tile" key={searchIngredient.id}>{searchIngredient.ingredient.name} <button onClick={() => handleSiClick(searchIngredient)}>x</button></li>) : null}
            </ul>

        </div>
    )
}

export default SearchIngredientsContainer;