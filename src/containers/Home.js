import React from 'react';
import Logo from '../components/Logo';
import NavBar from './NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RecipeCollection from './RecipeCollection';
import IngredientsPage from './IngredientsPage';
import SearchRecipes from '../components/SearchRecipes';
import RecipeModal from '../components/RecipeModal';

export default class Home extends React.Component {
    
    state = {
        recipeClicked: null
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

    closeModal = () => {
        this.setState({
            recipeClicked: null
        })
    }

    closeModalOnWindowClick = e => {
        if (e.target.className !== 'modal-container' || e.target.id !== 'modal' || e.target.className !== "instructions-list" || e.target.className !== "im-container") {
            this.setState({
                recipeClicked: null
            })
        } else {
            console.log('false')
        }
    }

    render() {
        console.log(this.state);
        
        const {user} = this.props
        return(
            <div className={this.state.recipeClicked ? "modal-on" : null} onClick={this.closeModalOnWindowClick}>
                
                <div className="hn-container">
                    <Logo />
                
                    <Router>
                        <NavBar user={user} />
                        <Switch>
                            {/* <Route path="/" component={Home}/> */}
                            <Route exact path="/ingredients" render={() => <IngredientsPage />} /> 
                            <Route exact path="/your-recipes" render={() => <RecipeCollection recipes={user.recipes} handleRecipeClick={this.handleRecipeClick} />} />
                            <Route exact path="/recipe-search" render={() => <SearchRecipes />} /> />
                        </Switch>
                    </Router>
                </div>
                <div className="main-body">
                    <h2>Welcome {user.first_name}!</h2>
                    
                        {this.state.recipeClicked ? 
                        <div className="modal-container">
                            <RecipeModal recipeClicked={this.state.recipeClicked} closeModal={this.closeModal} user={user} />
                        </div>
                        : null}
                    <RecipeCollection recipes={user.recipes} handleRecipeClick={this.handleRecipeClick} />
                </div>
            </div>
        )
    }
    
}

