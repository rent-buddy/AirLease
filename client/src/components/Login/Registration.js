import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import Login from './Login';
import SignUp from './SignUp';
class Registration extends Component {
  state = {
    loginOpened: false,
    signupOpened: false,
  };

componentDidMount(){
  if(this.props.renderAsPage){
    this.openModal('login')();
  }
}

  openModal = (modalType) => () => {
    if (modalType === 'login') {
      this.setState({
        loginOpened: true,
        signupOpened: false,
      });
    } else if (modalType === 'signup') {
      this.setState({
        loginOpened: false,
        signupOpened: true,
      });
    }
  };

  closeModal = (modalType) => () => {
    this.setState({
      loginOpened: false,
      signupOpened: false,
    });
  };

  render() {
    const { loginOpened, signupOpened } = this.state;
    return (
      <>
        <Button onClick={this.openModal('login')}> Login/Sign Up</Button>
        <Login show={loginOpened} renderAsPage = {this.props.renderAsPage} onRequestClose={this.closeModal()} onClick={this.openModal('signup')} />
        <SignUp show={signupOpened} renderAsPage = {this.props.renderAsPage} onRequestClose={this.closeModal()} onClick={this.openModal('login')} />
      </>
    );
  }
}

export default Registration;
