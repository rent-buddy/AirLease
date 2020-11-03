import React, { Component } from 'react';
import {Button, Modal} from 'react-bootstrap'

function Sign(props){
  return(
    <div>
          <Modal id = "login" show = {props.show} onHide = {props.onRequestClose}>
            <Modal.Header className = "text-center">
                <h4 className="w-100 font-weight-bold">Sign Up</h4>
                <button type="button" class="close"  onClick = {props.onRequestClose} aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </Modal.Header>
            <Modal.Body>
                <div className="row mb-4">
                    <div className="col-6">
                        <input type="text" id="firstName" className="form-control" placeholder = "First Name"></input>
                    </div>
                    <div className="col-6">
                        <input type="text" id="firstName" className="form-control" placeholder = "Last Name"></input>
                    </div>
                </div>
                <input type="email" id="email" className="form-control mb-4" placeholder = "Email"></input>
                <input type="password" id="email" className="form-control mb-4" placeholder = "Create a Password"></input>
                <Button type="submit" className="btn-block">Sign Up</Button>
            </Modal.Body>
            <Modal.Footer>
                <p>Already a Member?</p>
                <Button className="btn-secondary" onClick = {props.onClick}>Login</Button>
            </Modal.Footer>
          </Modal>

    </div>
  )
}



class SignUp extends Component{


  render() {
    return (
      <>
        <Sign show = {this.props.show} onRequestClose = {this.props.onRequestClose} onClick={this.props.onClick}/>
      </>
    );
  }
}

export default SignUp;
