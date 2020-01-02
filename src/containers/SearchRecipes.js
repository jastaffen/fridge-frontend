import React from 'react';
import SearchRecipeDescription from '../components/SearchRecipeDescription';
import YourIngredientsForRecipeSearchContainer from './YourIngredientsForRecipeSearchContainer';
import SearchIngredientsContainer from './SearchIngredientsContainer';
import RecipeHardSearch from './RecipeHardSearch';

class SearchRecipes extends React.Component {

    state = {
        recipeResults: null,
        userSearchAllIngredients: this.props.userIngredients,
        searchIngredients: [],
        sendIngredients: null
    }

    handleUiClick = (e, userIngredient) => {
        let copy = [...this.state.userSearchAllIngredients];
        let userIngWithoutIng = copy.filter(ingredient => ingredient !== userIngredient);
        this.setState({
            searchIngredients: [...this.state.searchIngredients, userIngredient],
            userSearchAllIngredients: userIngWithoutIng
        })
    }

    handleSiClick = searchIngredient => {
        let copy = [...this.state.searchIngredients];
        let IngredientsWithoutSearchIngredient = copy.filter(ingredient => ingredient !== searchIngredient);
        this.setState({
            searchIngredients: IngredientsWithoutSearchIngredient,
            userSearchAllIngredients: [...this.state.userSearchAllIngredients, searchIngredient]
        })
    }

    handleSearchClick = e => {
        let copy = [...this.state[e.target.name]]
        let ingNames = copy.map(userIngredient => userIngredient.ingredient.name.toLowerCase())
        this.setState({
            sendIngredients: ingNames
        })
    }

    goBack = () => {
        this.setState({
            sendIngredients: null
        })
    }
    
    render() {

        return(
            <div className="sr-container">
                { !this.state.sendIngredients ? 
                <>
                    <SearchRecipeDescription />

                    <br /><hr /><br />

                    <div>
                        { this.state.userSearchAllIngredients.length > 0 ? <button id="search-aui" name='userSearchAllIngredients' onClick={this.handleSearchClick}>Search By All Ingredients</button> : <p style={{color: 'red'}}>Add ingredients in the ingredient section!</p>}
                        { this.state.searchIngredients.length > 0 ? <button id="search-sui" name='searchIngredients' onClick={this.handleSearchClick}>Search By Selected Ingredients</button> : null}
                    </div>

                    <div className="sri-container">
                
                        <YourIngredientsForRecipeSearchContainer userSearchAllIngredients={this.state.userSearchAllIngredients} handleUiClick={this.handleUiClick} />
                
                        <SearchIngredientsContainer searchIngredients={this.state.searchIngredients} handleSiClick={this.handleSiClick} />

                    </div>
                </>
                    : <RecipeHardSearch sendIngredients={this.state.sendIngredients} goBack={this.goBack} />}
            </div> 
        )
    }

}

export default SearchRecipes;