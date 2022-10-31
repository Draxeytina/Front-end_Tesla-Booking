/* eslint-disable */

import React, { Component } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
      <>
        <Container className="p-3">
    <Jumbotron>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <form onSubmit={this.handleSubmit}>
        <Form.Label>Email address</Form.Label>   <input type="email" name="email" id="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} required />
        <Form.Label>Password </Form.Label>       <input type="password" name="password" id="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required />
        </form>
        </Form.Group>
        </Jumbotron>
        </Container>
      </>
    );
  }
}
