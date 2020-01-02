import React from 'react';
import RecipeCard from '../components/RecipeCard'

const SearchedRecipeContainer = ({recipes, searchOnly, handleSearchedRecipeClick, goBack}) => {

    const renderRecipeCards = () => {
        return recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} searchOnly={searchOnly} handleSearchedRecipeClick={handleSearchedRecipeClick} />)
    }

    return(
        <>
            <button onClick={goBack}>{"<--"}</button>
            <div className="recipe-search-container">
                {renderRecipeCards()}
            </div>
        </>
    )
}

export default SearchedRecipeContainer;