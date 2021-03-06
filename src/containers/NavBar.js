import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = ( {user, handleLogout} ) => {
    return(
        <div>
            {user ? 
            <div className="ln-container">
                {/* <NavLink to="/ingredients">Home</NavLink>  */}
                <NavLink to="/recipe-search">Search Recipes</NavLink>
                <NavLink to='/ingredients'>Ingredients</NavLink>
                <NavLink to="/your-recipes">Your Recipes</NavLink>
                <button id="logout" onClick={handleLogout}>Log Out</button>
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