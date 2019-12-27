import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from '../containers/NavBar';
import SignUp from '../components/SignUp';
import About from '../components/About'
import Home from './Home'
import Login from '../components/Login';


import HeaderContainer from '../containers/HeaderContainer';

class WelcomePage extends React.Component {

    render() {

        return(

        <div>

          <HeaderContainer login={this.props.login} handleChange={this.props.handleChange} handleLogin={this.props.handleLogin} user={this.props.user} />
          
          <div className="main-container">

            <About />
            <SignUp signUp={this.props.signUp} handleChange={this.props.handleChange} handleSignUp={this.props.handleSignUp} />
          
          </div>


          <footer>
            <Router>
              <NavBar />
              <Switch>
                <Route exact path="/signup" render={() => <SignUp signUp={this.state.signUp} handleChange={this.handleChange} handleSignUp={this.handleSignUp} />} /> 
                <Route exact path="/login" render={() => <Login signUp={this.state.signUp} handleChange={this.handleChange} handleLogin={this.handleLogin} />} /> />
              </Switch>
            </Router>
          </footer>
        </div>
        )
    }
}

export default WelcomePage