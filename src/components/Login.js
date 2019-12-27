import React from 'react';

const Login = ( { login, handleChange, handleLogin } ) => {
    
    const handleClick = () => {
        console.log('yo')
    }

    return(

        <div  className="login-form">

            <form onSubmit={handleLogin} id="login">

                <input type="text" placeholder="username" name="loginUsername" value={login.loginUsername} onChange={handleChange} onClick={handleClick} />
                <input type="password" placeholder="password" name="password" value={login.password} onChange={handleChange} />
                <button type="submit">Log in</button>

            </form>

        </div>
    )
}

export default Login