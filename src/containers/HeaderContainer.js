import React from 'react';
import Logo from '../components/Logo';
import Login from '../components/Login';



const HeaderContainer = props => {
    return (
        <nav className="nav-container" >
            <Logo />
            <div id="line"></div>
            <Login login={props.login} handleChange={props.handleChange} handleLogin={props.handleLogin} />
        </nav>
    )
   
}

export default HeaderContainer;