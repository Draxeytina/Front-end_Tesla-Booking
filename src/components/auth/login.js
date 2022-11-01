/* eslint-disable */

import React, { Component } from 'react';
import axios from 'axios';
import '../../assets/auth.scss'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loginErrors: '',
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

    } = this.state;

    axios.post('http://localhost:3000/sessions', {
      user: {
        email,
        password,
      },
    },

    { withCredentials: true }).then((response) => {
      if (response.data.logged_in === true) {
        this.props.handleSuccessfulAuth(response.data);
      }
    })
      .catch((error) => {
        console.log('Login error', error);
      });

    event.preventDefault();
  }

  render() {
    return (
    <form className="auth-form" onSubmit={this.handleSubmit}>
      <div className='auth-group auth-email-group'>
        <label for="email">Email</label>
        <input type="email" id="email"  name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} required />
      </div>
      <div className='auth-group auth-password-group'>
        <label for="email">Password</label>
        <input type="password" id="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required />
      </div>
        <button className='auth-button' type="submit">Login</button>
    </form>
    // here
    );
  }
}
