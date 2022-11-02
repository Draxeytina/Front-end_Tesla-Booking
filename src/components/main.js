/* eslint-disable */

import React, { Component } from 'react';
import axios from 'axios';
import Registration from './auth/registration';
import Login from './auth/login';
import { withRouter } from './withrouter';
import '../assets/auth.scss'

// export default class Home extends Component {
//  This is the main page which combine both login and signup components.

export class Main extends Component {

  // calling the constructor

    constructor(props) {
    super(props);

    this.displayLogin = true;

    //  bindnig the successfulAuth logout and signup

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.toggleSignUp = this.toggleSignUp.bind(this);
  }

  // Acutal successful auth function.

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    this.props.navigate('/home');
  }

  // calling the logout function.

  handleLogoutClick(handleLogout) {
    axios.delete('http://localhost:3000/logout', { withCredentials: true })
      .then((response) => {
        handleLogout ?? this.props.handleLogout()
        window.location.reload(false);
      }).catch((error) => {
        console.log('logout error', error);
      });
  }

  //  show and hide signin signup

  toggleSignUp() {
    this.displayLogin = !this.displayLogin
    this.forceUpdate()
  }

  render() {

    return (
      <div>
        <div className='auth-container'>
        { 
        // Tertiary operation.

          this.displayLogin
          ? (
        // THe Signup  component.
        <div id="login-box">
            <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
            {<button id="toggleLogin" onClick={() => this.toggleSignUp()}>Sign up</button> }
          </div>
            )
          : (
          //  THe Login component
          <div id="login-box">
            <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
            {<button id="toggleLogin"  onClick={() => this.toggleSignUp()}>Login</button> }
          </div>
          )
        }
        </div>
        
      </div>
    );
  }
}

// This with router is used for switing page in Class base component.

export default withRouter(Main);
