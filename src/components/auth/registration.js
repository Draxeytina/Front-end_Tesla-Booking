/* eslint-disable */

import React, { Component } from 'react';
import axios from 'axios';

//  class for signup page.
export default class Registration extends Component {
  
  // calling the constructor
  constructor(props) {
    super(props);

    // initially the state will be empty
    this.state = {
      email: '',
      password: '',
      password_confirmation: '',
      registrationsErrors: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    const {
      email,
      password,
      password_confirmation,
    } = this.state;
    axios.post('http://localhost:3000/registrations', {
      user: {
        email,
        password,
        password_confirmation,
      },
    },

    { withCredentials: true }).then((response) => {
      if (response.data.status === 'created') {
        this.props.handleSuccessfulAuth(response.data);
      }
    })
      .catch((error) => {
        console.log('Registion error', error);
      });

    event.preventDefault();
  }

  render() {
    return (
        <form className="auth-form" onSubmit={this.handleSubmit}>
        <div className='auth-group auth-email-group2'>
          <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} required />
         </div>
         <div className='auth-group auth-password-group'>
          <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required />
          </div>
          
          <div className='auth-group auth-password-group'>
          <input type="password" name="password_confirmation" placeholder="Password Confirmation" value={this.state.password_confirmation} onChange={this.handleChange} required />
          </div>
          <button className='auth-button' type="submit">Sign Up</button>
        </form>
    );
  }
}
