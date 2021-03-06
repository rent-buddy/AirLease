/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Button, Modal, Alert } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
class SignUp extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    success: false,
    message: '',
  };

  signUp = (event) => {
    event.preventDefault();
    fetch('/api/auth/signup', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((res) => {
        if (res.ok) {
          this.setState({
            success: true,
            message: 'Sign up success! Please Login'
          });
          return res.json();
        }
        throw new Error(res.json());
      })
      .catch((err) => {
        this.setState({ message: 'Try again!' });
      });
  };

  fieldChanged = (name) => {
    return (event) => {
      let { value } = event.target;
      this.setState({ [name]: value });
    };
  };

  render() {
    return (
      <div>
        <Modal
          id="signup"
          show={this.props.show}
          onHide={this.props.onRequestClose && this.props.renderAsPage}
        >
          <form onSubmit={this.signUp}>
            <Modal.Header className="text-center">
              <h4 className="w-100 font-weight-bold">Sign Up</h4>
             {!this.props.renderAsPage && (<button type="button" className="close" onClick={this.props.onRequestClose} aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>)}
            </Modal.Header>
            <Modal.Body>
              <div className="row mb-4">
                <div className="col-6">
                  <input
                    type="text"
                    id="firstName"
                    value={this.state.firstName}
                    className="form-control"
                    placeholder="First Name"
                    onChange={this.fieldChanged('firstName')}
                  ></input>
                </div>
                <div className="col-6">
                  <input
                    type="text"
                    id="lastName"
                    value={this.state.lastName}
                    className="form-control"
                    placeholder="Last Name"
                    onChange={this.fieldChanged('lastName')}
                  ></input>
                </div>
              </div>
              <input
                type="email"
                id="email"
                value={this.state.email}
                className="form-control mb-4"
                placeholder="Email"
                onChange={this.fieldChanged('email')}
              ></input>
              <input
                type="password"
                id="password"
                value={this.state.password}
                className="form-control mb-4"
                placeholder="Create a Password"
                minlength="8"
                onChange={this.fieldChanged('password')}
              ></input>
               <p style = {{textAlign: 'center', color: this.state.success ? 'blue' : 'red'}}>{this.state.message}</p>
              <Button type="submit reset" valuue = 'reset' className="btn-block">
                Sign Up
              </Button>
            </Modal.Body>
            <Modal.Footer>
              <p>Already a Member?</p>
              <Button className="btn-secondary" onClick={this.props.onClick}>
                Login
              </Button>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    );
  }
}

export default SignUp;
