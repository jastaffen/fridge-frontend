import React from 'react';

const SearchIngredientsContainer = ({searchIngredients}) => {
    
    return(
        <div className="si-box">

            <ul className="si-list">
                {searchIngredients ? searchIngredients.map(searchIngredient => <li className="si-tile" key={searchIngredient.id}>{searchIngredient.ingredient.name}</li>) : null}
            </ul>

        </div>
    )
}

export default SearchIngredientsContainer;