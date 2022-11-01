/* eslint-disable */

import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Main from './main';
import Components from '../App';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: 'NOT_LOGGED_IN',
      user: {},
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  handleLogout() {
    this.setState({
      loggedInStatus: 'NOT_LOGGED_IN',
      user: {},
    });
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: 'LOGGED_IN',
      user: data.user,
    });
  }

  checkLoginStatus() {
    axios.get('http://localhost:3000/logged_in', {
      withCredentials: true,
    }).then((response) => {
      if (response.data.logged_in && this.state.loggedInStatus === 'NOT_LOGGED_IN') {
        this.setState({
          loggedInStatus: 'LOGGED_IN',
          user: response.data.user,
        });
      } else if (!response.data.logged_in & this.state.loggedInStatus === 'LOGGED_IN') {
        this.setState({
          loggedInStatus: 'NOT_LOGGED_IN',
          user: {},
        });
      }
      // else{

      // }
    })
      .catch((error) => {
        console.log('check login error', error);
      });
  }

  render() {
    return (

      <div className="app">
        <BrowserRouter>
          { this.state.loggedInStatus == 'LOGGED_IN'
          ? <Components admin={this.state.user.admin} handleLogout={this.handleLogout}/>
          : <Main handleLogin={this.handleLogin} handleLogout={this.handleLogout} loggedInStatus={this.state.loggedInStatus} /> }
        </BrowserRouter>
      </div>
    );
  }
}
