import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = ( {user} ) => {
    return(
        <div>
            {user ? 
            <div className="ln-container">
                <NavLink to="/">Home</NavLink> 
                <NavLink to="/recipes">Search Recipes</NavLink>
                <NavLink to='/ingredients'>Ingredients</NavLink>
                <NavLink to="/your-recipes">Your Recipes</NavLink>
                <button>Log Out</button>
            </div>
            :
            <>
                {/* <NavLink to="/">Home</NavLink> */}
                <NavLink to="/signup">Sign Up</NavLink>
                <NavLink to="/login">Log In</NavLink>
            </>
            }
            
        </div>
    )
}

export default NavBar