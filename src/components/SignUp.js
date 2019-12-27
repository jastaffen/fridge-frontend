import React from 'react'

const SignUp = ( { signUp, handleChange, handleSignUp } ) => {
    return(

        <div className="signup-page">

            <h3>Sign up</h3>

            <form onSubmit={handleSignUp} id="signUp" >

                <input type="text" name="first_name" placeholder="First Name" value={signUp.first_name} onChange={handleChange} /><br />

                <input type="text" name="last_name" placeholder="Last Name" value={signUp.last_name} onChange={handleChange} /><br />

                <input type="text" name="username" placeholder="Username" value={signUp.username} onChange={handleChange} /><br />

                <input type="password" name="password_digest" placeholder="Password" value={signUp.password_digest} onChange={handleChange} /><br />

                <button type="submit" >Sign Up</button>

            </form>

        </div>

    )
}

export default SignUp