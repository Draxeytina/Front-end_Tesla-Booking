/* eslint-disable */

import React, { Component } from 'react';
import axios from 'axios';
import '../../assets/auth.scss'
import { Link } from 'react-router-dom';

// The login class for checking the email and password 
//  it interacts with rails api.
export default class Login extends Component {

  // calling the constructor.
  constructor(props) {
    super(props);
    
    // initially the states will be empty.

    this.state = {
      email: '',
      password: '',
      loginErrors: '',
    };

    // for binding the handlesubmit to the form.
    this.handleSubmit = this.handleSubmit.bind(this);

    //  for binding the handle change to the form.
    this.handleChange = this.handleChange.bind(this);
  }

  // Actual handle change method.
  // if you remove it you will not able to type in the form.

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  //  The submission mechanism of the form.
  handleSubmit(event) {

    //  get email and password from the state.

    const {
      email,
      password,

    } = this.state;

    //  calling the api session route from port 3000

    axios.post('http://localhost:3000/sessions', {
      user: {
        email,
        password,
      },
    },

    // for handling sesssion.

    { withCredentials: true }).then((response) => {
     
    //  if in the server response if loggedin is true.
    //  send the reponse data to handle succesful Auth
      if (response.data.logged_in === true) {
        this.props.handleSuccessfulAuth(response.data);
      }
    })

    //  if there is some error show them.
      .catch((error) => {
        console.log('Login error', error);
      });

      // by defulat the form submit will not work.
    event.preventDefault();
  }

  //  the login form
  render() {
    return (
      <form className="auth-form" onSubmit={this.handleSubmit}>
        <div className='auth-group auth-email-group'>
          <input type="email" id="email"  name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} required />
        </div>
        <div className='auth-group auth-password-group'>
          <input type="password" id="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required />
        </div>
          <button className='auth-button' type="submit">Login</button>
      </form>
    );
  }
}
