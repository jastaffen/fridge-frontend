import React from 'react';
import IngredientCard from '../components/IngredientCard';


const YourIngredientsForRecipeSearchContainer = ({userSearchAllIngredients, handleUiClick}) => {

    const [yiContainer] = React.useState(true)

    return(
        <>
            <div className='yi-page sr-yi-ingredients-container'>
            
                {userSearchAllIngredients.map(userIngredient => <IngredientCard key={userIngredient.ingredient.id} userIngredient={userIngredient} handleUiClick={handleUiClick} yiContainer={yiContainer} />)}

            </div>
        </>
    )
}

export default YourIngredientsForRecipeSearchContainer;