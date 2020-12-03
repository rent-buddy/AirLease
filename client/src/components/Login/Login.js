import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import auth from '../../services/auth.js';
import { Redirect } from 'react-router-dom';
//<label data-error="wrong" data-success="right" for="defaultForm-pass">Password</label>

class Login extends Component {
  state = {
    email: '',
    password: '',
    success: false,
    err: '',
  };

  fieldChanged = (name) => {
    return (event) => {
      let { value } = event.target;
      this.setState({ [name]: value });
    };
  };

  login = (e) => {
    e.preventDefault();
    let { email, password } = this.state;
    auth.authenticate(email, password)
      .then((user) => {
        console.log(user);
          this.setState({ success: true });
      })
      .catch((err) => {
        this.setState({ success: false, err: 'Oops, that is not a match. Try again!'});
      });
  };

  render() {
    const { from } = this.props.location || { from: { pathname: '/' } };

    if (this.state.success) {
      return <Redirect to={from} />;
    }

    return (
      <Modal
        id="login"
        show={(this.props.show && !this.state.success)}
        onHide={(this.props.onRequestClose || this.state.success) && this.props.renderAsPage}
      >
        <form onSubmit={this.login}>
          <Modal.Header className="text-center">
            <h4 className="w-100 font-weight-bold">Login</h4>
            {!this.props.renderAsPage && ( <Button type="button" className="close" onClick={this.props.onRequestClose} aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </Button>)}
          </Modal.Header>
          <Modal.Body>
            <div className="md-form mb-4">
              <input
                type="text"
                id="defaultForm-user"
                className="form-control validate"
                placeholder="Email"
                value={this.state.email} 
                onChange={this.fieldChanged('email')}
              ></input>
            </div>
            <div className="md-form mb-4">
              <input
                type="password"
                id="defaultForm-pass"
                className="form-control validate"
                placeholder="Password"
                value={this.state.password} 
                onChange={this.fieldChanged('password')}
              ></input>
            </div>
            <p style = {{color:'red'}}>{this.state.err}</p>
            <Button type="submit" className="btn-block">
              Login
            </Button>
          </Modal.Body>
          <Modal.Footer>
            <p>Not a Member?</p>
            <Button className="btn-secondary" onClick={this.props.onClick}>
              Sign Up
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    );
  }
}

export default Login;
