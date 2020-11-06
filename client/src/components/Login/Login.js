import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

function Log(props) {
    return (
        <div>
            <Modal id="login" show={props.show} onHide={props.onRequestClose}>
                <Modal.Header className="text-center">
                    <h4 className="w-100 font-weight-bold">Login</h4>
                    <button type="button" class="close" onClick={props.onRequestClose} aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </Modal.Header>
                <Modal.Body>
                    <div class="md-form mb-4">
                        <input
                            type="text"
                            id="defaultForm-user"
                            className="form-control validate"
                            placeholder="Email"
                        ></input>
                    </div>
                    <div class="md-form mb-4">
                        <input
                            type="password"
                            id="defaultForm-pass"
                            className="form-control validate"
                            placeholder="Password"
                        ></input>
                    </div>
                    <Button type="submit" className="btn-block">
                        Login
                    </Button>
                </Modal.Body>
                <Modal.Footer>
                    <p>Not a Member?</p>
                    <Button className="btn-secondary" onClick={props.onClick}>
                        Sign Up
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

//<label data-error="wrong" data-success="right" for="defaultForm-pass">Password</label>

class Login extends Component {
    state = {
        userName: '',
        password: '',
    };

    render() {
        return (
            <>
                <Log show={this.props.show} onRequestClose={this.props.onRequestClose} onClick={this.props.onClick} />
            </>
        );
    }
}

export default Login;
