import React from 'react';
import SearchedRecipesContainer from './SearchedRecipeContainer'



class RecipeHardSearch extends React.Component {

    state = {
        recipes: [],
        instructions: [],
        duration: '',
        searchOnly: true
    }

    handleSearchedRecipeClick = recipe => {
        fetch("http://localhost:3000/api/v1/recipes", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer: ${this.props.token}`
            },
            body: JSON.stringify({
                recipe: {
                    api_id: recipe.id,
                    title: recipe.title,
                    image: recipe.image
                }
            })
        })
        .then(resp => resp.json())
        .then(newRecipe => this.renderSelectedRecipeInfo(newRecipe))
    }

    renderSelectedRecipeInfo = (newRecipe) => {
        fetch(`https://api.spoonacular.com/recipes/${newRecipe.recipe.api_id}/information?includeNutrition=false&apiKey=${APIKEY}`)
        .then(resp => resp.json())
        .then(recipeExtract => this.renderSelectedRecipeInstructions(recipeExtract, newRecipe))
    }

    renderSelectedRecipeInstructions = (recipeExtract, newRecipe) => {
        fetch(`https://api.spoonacular.com/recipes/extract?url=${recipeExtract.sourceUrl}&apiKey=${APIKEY}`)
        .then(resp => resp.json())
        .then(recipeWithInstructions => {
            let instructions = recipeWithInstructions.analyzedInstructions[0].steps.map(instruction => instruction.step);
            // debugger;
            let recipeObj = recipeWithInstructions.extendedIngredients.map(ingredient => { return { [ingredient.name]: ingredient.image } } )
            let ingredientNames = recipeWithInstructions.extendedIngredients.map(ingredient => ingredient.name);
            this.setState({
                instructions: instructions
            }, () => {
                this.props.updateRecipe(newRecipe, recipeObj);
            });
        }
    )}

    
    

    componentDidMount() {
        let ingredientsFormatted = this.props.sendIngredients.join(',');

        fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientsFormatted}&number=50&apiKey=${APIKEY}`)
        .then(resp => resp.json())
        .then(recipes => {
            this.setState({
                recipes: recipes.filter(recipe => recipe.missedIngredientCount <= 3)
            })
        })
    }

    render() {
        return(<SearchedRecipesContainer recipes={this.state.recipes} searchOnly={this.state.searchOnly} handleSearchedRecipeClick={this.handleSearchedRecipeClick} goBack={this.props.goBack} />)
    }
}

export default RecipeHardSearch;