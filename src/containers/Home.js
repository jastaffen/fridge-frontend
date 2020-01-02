import React from 'react';
import Logo from '../components/Logo';
import NavBar from './NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RecipeCollection from './RecipeCollection';
import IngredientsPage from './IngredientsPage';
import SearchRecipes from './SearchRecipes';
import RecipeModal from '../components/RecipeModal';
import UserIngredientForm from '../components/UserIngredientForm';
import EditModal from '../components/EditModal';

export default class Home extends React.Component {
    
    state = {
        searchRecipeClicked: false,
        recipeClicked: null,
        ingredientIndexCardClicked: null,
        ingredients: [],
        userIngredients: [],
        userIngredient: {
            amount: 0,
            unit: ''
        },
        newIngredient: {
            name: ''
        }, 
        editIngredient: null,
        userRecipes: []
    }


    updateRecipe = (newRecipe, recipeObj) => {
        fetch(`http://localhost:3000/api/v1/recipes/${newRecipe.recipe.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer: ${this.props.token}`
            },
            body: JSON.stringify({
                recipe: {
                    id: newRecipe.recipe.id,
                    instructions: this.state.instructions
                },
                recipe_ingredients: recipeObj
            })
        })
        .then(resp => resp.json())
        .then(obj => {debugger;})
    }

    deleteIngredient = (editIngredient) => {
        fetch(`http://localhost:3000/api/v1/user_ingredients/${editIngredient.id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer: ${this.props.token}`
            }
        })
        this.setState({
            editIngredient: null
        }, () => {this.deleteFromIngredients(editIngredient)})
    }

    deleteFromIngredients = (editIngredient) => {
        let copy = [...this.state.userIngredients];
        let withoutEditIngredient = copy.filter(ingredient => ingredient.id !== editIngredient.id);
        this.setState({
            userIngredients: withoutEditIngredient
        })
    }

    handleEditChange = (e) => {
        this.setState({
            editIngredient: {
                ...this.state.editIngredient,
                [e.target.name]: e.target.value
            }
        })
    }

    handleEditSubmit = (e, editIngredient) => {
        e.preventDefault();
        fetch(`http://localhost:3000/api/v1/user_ingredients/${editIngredient.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer: ${this.props.token}`
            },
            body: JSON.stringify({
                user_ingredient: {
                    amount: this.state.editIngredient.amount,
                    unit: this.state.editIngredient.unit
                }
            })
        })
        .then(resp => resp.json())
        .then(editedUserIngredient => {

            let newUserIngredients = this.state.userIngredients.map(userIngredient => {
                
                if (userIngredient.id === editedUserIngredient.user_ingredient.id) {
                    return editedUserIngredient.user_ingredient
                } else {
                    return userIngredient
                }
            })

            this.setState({
                userIngredients: newUserIngredients,
                editIngredient: null
            })

        })
    }

    handleEditClick = (e, userIngredient) => {
        this.setState({
            editIngredient: userIngredient
        })
    }

    addNewIngredient = e => {

        e.preventDefault();

        if (this.state.ingredients.includes(this.state.newIngredient.name) || this.state.newIngredient.name === '') {
            this.setState({
                newIngredient: {
                    name: ''
                }
            }, () => {
                alert('whoops it appears that that ingredient must already be there.');
            })
        } else {
            fetch("http://localhost:3000/api/v1/ingredients", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization:  `Bearer: ${this.props.token}`
                },
                body: JSON.stringify({
                    ingredient: {
                        name: this.state.newIngredient.name
                    }
                })
            })
            .then(resp => resp.json())
            .then(ingredient => {
                if (ingredient.ingredient) {
                    this.setState({
                        ingredients: [...this.state.ingredients, ingredient.ingredient],
                        newIngredient: {
                            name: ''
                        }
                    })
                } else {
                    alert(ingredient.error);
                    this.setState({
                        newIngredient: {
                            name: ''
                        }
                    })
                }
            })
        }
    }

    handleUserIngredientSubmit = (e, id) => {
        e.preventDefault();

        fetch("http://localhost:3000/api/v1/user_ingredients", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer: ${this.props.token}`
            },
            body: JSON.stringify({
                user_id: this.props.user.id,
                ingredient_id: id,
                amount: this.state.userIngredient.amount,
                unit: this.state.userIngredient.unit
            })
        })
        .then(resp => resp.json())
        .then(userIngredient => {
            this.setState({
                userIngredients: [...this.state.userIngredients, userIngredient.user_ingredient],
                ingredientIndexCardClicked: null,
                userIngredient: {
                    amount: 0,
                    unit: ''
                }
            })
        })
    }

    handleUserIngredientFormChange = e => {
        let category = e.target.parentNode.id;
        this.setState({
            [category]: {
                ...this.state[category],
                [e.target.name]: e.target.value
            }  
        })
    }
    
    handleRecipeClick = (e, id) => {
        fetch(`http://localhost:3000/api/v1/recipes/${id}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer: ${this.props.token}`
            }
        })
        .then(resp => resp.json())
        .then(recipe => this.setState({
            recipeClicked: recipe
        }))
        
    }

    closeModal = (e) => {
        this.setState({
            [e.target.id]: null
        })
    }

    closeModalOnWindowClick = e => {
        if (e.target.id !== 'modal') {
            this.setState({
                recipeClicked: null
            })
        }
    }

    handleIngredientIndexCardClick = e => {
        let ingredientIndexCardClicked = this.state.ingredients.find(ingredient => ingredient.id === parseInt(e.target.id));
        this.setState({
            ingredientIndexCardClicked: ingredientIndexCardClicked
        });
    }

    componentDidMount() {
        fetch("http://localhost:3000/api/v1/ingredients", {
            method: "GET",
            headers: {
                Authorization: `bearer ${this.props.token}`
            }
        })
        .then(resp => resp.json())
        .then(ingredients => {
            this.setState({
                ingredients: ingredients.ingredients
            })
        })
        fetch("http://localhost:3000/api/v1/user_ingredients", {
            method: "GET",
            headers: {
                Authorization: `bearer ${this.props.token}`
            }
        })
        .then(resp => resp.json())
        .then(user_ingredients => {
            this.setState({
                userIngredients: user_ingredients
            })
        })
        fetch("http://localhost:3000/api/v1/user_recipes", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer: ${this.props.token}`
            }
        })
        .then(resp => resp.json())
        .then(recipes => this.setState({
            userRecipes: recipes
        }))
    }

    searchRecipeClick = () => {
        this.setState({
            searchRecipeClicked: true
        })
    }

    // componentDidUpdate(prevState) {
    //     if (this.state.searchRecipeClicked) {
    //         fetch("http://localhost:3000/api/v1/ingredients", {
    //             method: "GET",
    //             headers: {
    //                 Authorization: `bearer ${this.props.token}`
    //             }
    //         })
    //         .then(resp => resp.json())
    //         .then(ingredients => {
    //             this.setState({
    //                 ingredients: ingredients.ingredients,
    //                 searchRecipeClick: false
    //             })
    //     })
    //     }
        
    // }

    render() {
        console.log(this.state.userRecipes);
        

        const {user} = this.props;

        return(

            <div>
                <div className={this.state.recipeClicked || this.state.ingredientIndexCardClicked ? "modal-on" : null} onClick={this.closeModalOnWindowClick}>
                    <div className="hn-container">
                        <Logo />
                
                        <Router>
                            <NavBar user={user} handleLogout={this.props.handleLogout} />
                            <Switch>
                                {/* <Route path="/" render={() => <Home user={this.state.user} token={this.state.token} />}/> */}
                                <Route exact path="/ingredients" render={() => <IngredientsPage userIngredients={this.state.userIngredients} ingredients={this.state.ingredients} handleIngredientIndexCardClick={this.handleIngredientIndexCardClick} newIngredient={this.state.newIngredient} handleUserIngredientFormChange={this.handleUserIngredientFormChange} addNewIngredient={this.addNewIngredient} handleEditClick={this.handleEditClick} />} /> 
                                <Route exact path="/your-recipes" render={() => <RecipeCollection userRecipes={this.state.userRecipes} handleRecipeClick={this.handleRecipeClick}  />} />
                                <Route exact path="/recipe-search" render={() => <SearchRecipes userIngredients={this.state.userIngredients} />} token={this.props.token} searchRecipeClick={this.searchRecipeClick} updateRecipe={this.updateRecipe} /> />
                            </Switch>
                        </Router>
                    </div>
                    <div className="main-body">
                        <h2 id="welcome">Welcome {user.first_name}!</h2>
                
                    
                        {this.state.recipeClicked ? 
                        <div className="modal-container">
                            <RecipeModal recipeClicked={this.state.recipeClicked} closeModal={this.closeModal} userIngredients={this.state.userIngredients} />
                        </div>
                        : null}

                        {this.state.editIngredient ? <EditModal editIngredient={this.state.editIngredient} closeModal={this.closeModal} deleteIngredient={this.deleteIngredient} handleEditChange={this.handleEditChange} handleEditSubmit={this.handleEditSubmit} /> : null}

                    </div>

                    {this.state.ingredientIndexCardClicked ?
                        <div className="user-ingredient-form">
                            <UserIngredientForm ingredientIndexCardClicked={this.state.ingredientIndexCardClicked} closeModal={this.closeModal} userIngredient={this.state.userIngredient} handleUserIngredientFormChange={this.handleUserIngredientFormChange} handleUserIngredientSubmit={this.handleUserIngredientSubmit} />
                        </div> : null
                    }

                </div>

            </div>
        )
    }
    
}

