import react, { useState } from "react";
import Link from "next/link";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
} from "react-bootstrap";
import "./styles.css";
import SignupModal from "../auth/signup";
import Router from "next/router";

export default class LoginWallModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      setModalShow: false,
      showSignUp: false,
    };
  }

  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };

  showSignUp = (e) => {
    this.onClose(e)
    this.props.showSignUp(e);
  };

  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div>
        <Modal show={this.props.show} centered>
          <Modal.Header>
            <Modal.Title>Log in to continue</Modal.Title>
            <span
              className="closebutton"
              onClick={e => {
                this.onClose(e);
              }}
            >
              X
            </span>
          </Modal.Header>
          <ModalBody>
            <div className="row">
              <div className="form-group col-md-12">
                <button className="btn btn-primary btn-block">
                  Log in with facebook
                </button>
                <Link href="/client/login">
                  <button className="btn btn-primary btn-block">
                    Log in with email
                  </button>
                </Link>
              </div>

              <div className="form-group col-md-12">
                <label>Don't have an account yet?</label>
                <button className="btn btn-primary btn-block" onClick={this.showSignUp}>Sign up</button>                
              </div>
            </div>
          </ModalBody>
        </Modal>
       
      </div>
    );
  }
}
