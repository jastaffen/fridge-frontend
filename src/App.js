import React from 'react';
import './App.css';

import WelcomePage from './containers/WelcomePage';
import Home from './containers/Home';

class App extends React.Component {
  state = {
    signUp: {
      first_name: '',
      last_name: '',
      username: '',
      password_digest: ''
    },
    login: {
      loginUsername: '',
      password: ''
    },
    user: null,
    token: ''
  }

  handleChange = e => {
    let category = e.target.parentNode.id;
    this.setState({
      [category]: {
        ...this.state[category],
        [e.target.name]: e.target.value
      }
    })
  }

  handleSignUp = e => {
    e.preventDefault();

    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({"user": this.state.signUp})
    })
    .then(resp => resp.json())
    .then(obj => this.setState({
      user: obj.user,
      token: obj.jwt
    }))

  }

  handleLogin = e => {
    e.preventDefault();

    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        "user": {
          username: this.state.login.loginUsername,
          password: this.state.login.password
        }
      })
    })
    .then(resp => resp.json())
    .then(obj => this.setState({
      user: obj.user,
      token: obj.jwt
    }))
    .catch(console.log( resp => resp.message))
  }

  render() {
    console.log(this.state.user)
    return (
      <>
        {
          this.state.user ?
        <Home user={this.state.user} token={this.state.token} /> :
        <WelcomePage signUp={this.state.signUp} login={this.state.login} handleChange={this.handleChange} handleLogin={this.handleLogin} handleSignUp={this.handleSignUp} />
        }
      </>
      );
  }
  
}

export default App;
