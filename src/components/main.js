/* eslint-disable */

import React, { Component } from 'react';
import axios from 'axios';
import Registration from './auth/registration';
import Login from './auth/login';
import { withRouter } from './withrouter';

// export default class Home extends Component {
export class Main extends Component {
  constructor(props) {
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    this.props.navigate('/home');
  }

  handleLogoutClick(handleLogout) {
    axios.delete('http://localhost:3000/logout', { withCredentials: true })
      .then((response) => {
        handleLogout ?? this.props.handleLogout()
        window.location.reload(false);
      }).catch((error) => {
        console.log('logout error', error);
      });
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <h1>
          {' '}
          Status:
          {this.props.loggedInStatus}
        </h1>
        <button onClick={() => this.handleLogoutClick()}>LogOut</button>
        <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
        <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />

      </div>
    );
  }
}

export default withRouter(Main);
