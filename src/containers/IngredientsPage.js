import React from 'react';
import IngredientCard from '../components/IngredientCard';
import IngredientForm from '../components/IngredientForm';
import IngredientIndex from '../components/IngredientIndex'

const IngredientsPage = ({userIngredients, ingredients, handleIngredientIndexCardClick, newIngredient, handleUserIngredientFormChange, addNewIngredient, handleEditClick}) => {

    const [searchTerm, setSearchTerm] = React.useState("")

    const handleChange = e => {
        setSearchTerm(e.target.value)
    }

    const renderIngredientCards = () => {
        return userIngredients.map((userIngredient, index) => <IngredientCard key={index} userIngredient={userIngredient} handleEditClick={handleEditClick} />)
    }

    const renderAllIngredients = () => {
        let ingredientsToDisplay = ingredients;
        if (searchTerm) {
            ingredientsToDisplay = ingredientsToDisplay.filter(ingredient => ingredient.name.toLowerCase().includes(searchTerm))
        }
        return ingredientsToDisplay.map(ingredient => <IngredientIndex key={ingredient.id} ingredient={ingredient} handleIngredientIndexCardClick={handleIngredientIndexCardClick} />)
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

                <input id="search-all" type="text" placeholder="filter ingredients..." value={searchTerm} onChange={handleChange} />

                <div className="ai-container">
                    <h5>All Ingredients</h5>
                    <div className="ai-card-container">
                        
                        {renderAllIngredients()}
                    </div>
                    
                </div>
                
                <div className="ni-container">
                    <h3>Add New Ingredients</h3>
                    <IngredientForm newIngredient={newIngredient} handleUserIngredientFormChange={handleUserIngredientFormChange} addNewIngredient={addNewIngredient} />
                </div>
                
            </div>
            

            
        </>
    )
}

export default IngredientsPage;