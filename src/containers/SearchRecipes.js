import React from 'react';
import SearchRecipeDescription from '../components/SearchRecipeDescription';
import YourIngredientsForRecipeSearchContainer from './YourIngredientsForRecipeSearchContainer';
import SearchIngredientsContainer from './SearchIngredientsContainer';

class SearchRecipes extends React.Component {

    state = {
        recipeResults: null,
        userSearchAllIngredients: this.props.userIngredients,
        searchIngredients: []
    }

    handleUiClick = (e, userIngredient) => {
        let copy = [...this.state.userSearchAllIngredients];
        let ingIndexToRemove = copy.findIndex(userSearchIngredient => userSearchIngredient.id === userIngredient.id);
        let removedIngredient = copy.splice(ingIndexToRemove, (ingIndexToRemove + 1));
        this.setState({
            searchIngredients: [...this.state.searchIngredients, removedIngredient[0]],
            userSearchAllIngredients: copy
        })
    }
    
    render() {
        console.log(this.state.searchIngredients);
        return(
            <div className="sr-container">

                <SearchRecipeDescription />

                <div className="sri-container">
                
                    <YourIngredientsForRecipeSearchContainer userSearchAllIngredients={this.state.userSearchAllIngredients} handleUiClick={this.handleUiClick} />
                
                    <SearchIngredientsContainer searchIngredients={this.state.searchIngredients} />

                </div>
            </div>
        )
    }

}

export default SearchRecipes;