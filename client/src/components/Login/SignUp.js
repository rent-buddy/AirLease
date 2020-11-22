/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

class SignUp extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    success: false,
  };

  signUp = (event) => {
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
          this.setState({success: true});
          return res.json();
        }
        throw new Error(res.json());
      })
      .catch((err) => {
        this.setState({ error: err });
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
      <form onClick={this.signUp}>
        <Modal id="login" show={this.props.show && !this.state.success} onHide={this.props.onRequestClose || this.state.success}>
          <Modal.Header className="text-center">
            <h4 className="w-100 font-weight-bold">Sign Up</h4>
            <button type="button" className="close" onClick={this.props.onRequestClose} aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
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
              onChange={this.fieldChanged('password')}
            ></input>
            <Button type="submit" className="btn-block" >
              Sign Up
            </Button>
          </Modal.Body>
          <Modal.Footer>
            <p>Already a Member?</p>
            <Button className="btn-secondary" onClick={this.props.onClick}>
              Login
            </Button>
          </Modal.Footer>
        </Modal>
      </form>
    );
  }
}

export default SignUp;
