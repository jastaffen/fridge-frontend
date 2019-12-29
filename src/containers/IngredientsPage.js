import React from 'react';
import IngredientCard from '../components/IngredientCard';
import IngredientForm from '../components/IngredientForm';
import IngredientIndex from '../components/IngredientIndex'

const IngredientsPage = ({userIngredients, ingredients}) => {

    const renderIngredientCards = () => {
        return userIngredients.map((ingredient, index) => <IngredientCard key={index} ingredient={ingredient} />)
    }

    const renderAllIngredients = () => {
        return ingredients.map(ingredient => <IngredientIndex key={ingredient.id} ingredient={ingredient} />)
    }

    return(
        <>
            <h4 id="yi-header">Your Ingredients!</h4>

            <div className="ingredients-page">

                <div className="yi-page-container">
                    <h5>Your Ingredients</h5>
                    <div className="yi-page">
                        {renderIngredientCards()}
                    </div>
                </div>

                <div className="ai-container">
                    <h5>All Ingredients</h5>
                    <div className="ai-card-container">
                        {renderAllIngredients()}
                    </div>
                    
                </div>
                
                <div className="ni-container">
                    <h3>Add New Ingredients</h3>
                    <IngredientForm />
                </div>
                
            </div>
            

            
        </>
    )
}

export default IngredientsPage;