import react, { useState } from "react";
import Link from "next/link";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
} from "react-bootstrap";
import styles from "./styles.css";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import cookie from "js-cookie";
import Router from "next/router";

import constants from "../../constants";
import Layout from "../../components/Layout";

const registerValidation = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid e-mail address.")
    .required("Email is required."),
  password: Yup.string().required("Password is required."),
  repassword: Yup.string().required("Confrim password is required.")
});

export default class SignupModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      setModalShow: false
    };
  }
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };

  handleSubmit = async (values, { setSubmitting, setErrors, resetForm }) => {
    alert('s');return;
    axios
      .post(constants.serverUrl + "api/auth/signup", values)
      .then(response => {
        if (response.data.auth == true) {
          cookie.set("token", response.data.token, { expires: 1 });

          if (response.data.role == "artist") {
            Router.push("/artist/create-profile");
          } else if (response.data.role == "client") {
            Router.push("/client/account");
          } else {
            Router.push("/");
          }
        } else {
          setErrors({ total: response.data.message });
        }
      })
      .catch(error => {
        this.setState({ loading: false });
        setErrors({ total: error.message });
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <Formik
        initialValues={{ email: "", role: "artist", password: "", repassword: "" }}
        validationSchema={registerValidation}
        onSubmit={this.handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <form onSubmit={handleSubmit}>
            <Modal show={this.props.show} centered>
              <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                  Sign up
                </Modal.Title>
                <span
                  className="closebutton"
                  onClick={e => {
                    this.onClose(e);
                  }}
                >
                  X
                </span>
                {errors.success && <p className="success">{errors.success}</p>}
                {errors.total && <p className="error">{errors.total}</p>}
              </Modal.Header>
              <ModalBody>
                <div className="row">
                  <div className="form-group col-md-12">
                    <input
                      id="sign_email"
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    {errors.email && touched.email && (
                      <p className="error">{errors.email}</p>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-12">
                    <input
                      id="sign_pwd"
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    {errors.password && touched.password && (
                      <p className="error">{errors.password}</p>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-12">
                    <input
                      type="password"
                      onChange={this.handleChangeRePwd}
                      className="form-control"
                      name="repassword"
                      placeholder="Confirm Password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.repassword}
                    />
                    {errors.repassword && touched.repassword && (
                      <p className="error">{errors.repassword}</p>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-12 ">
                    <input type="checkbox" className="" name="agreeTerm" />I
                    agree to the terms and conditions
                  </div>
                  <div className="form-group col-md-12">
                    <input type="checkbox" className="" name="newsletter" />
                    <label>Sign me up for the newsletter</label>
                  </div>
                  <div className="form-group col-md-12">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block"
                      
                    > Sign Up
                    </button>                    
                  </div>
                </div>
                <div className="row bottomCenter">
                  <div className="">
                    <p>
                      Already have an account?{" "}
                      <Link href="/client/login">
                        <a>
                          <b>Log in</b>
                        </a>
                      </Link>
                    </p>
                  </div>
                </div>
              </ModalBody>
            </Modal>
          </form>
        )}
      </Formik>
      // <Modal.Dialog centered size="lg">
      //   <Modal.Header closeButton>
      //     <Modal.Title>Modal title</Modal.Title>
      //   </Modal.Header>

      //   <Modal.Body>
      //     <p>Modal body text goes here.</p>
      //   </Modal.Body>

      //   <Modal.Footer>
      //     <Button variant="secondary" onClick={(e) => { this.onClose(e) }}>Close</Button>
      //     <Button variant="primary">Save changes</Button>
      //   </Modal.Footer>
      // </Modal.Dialog>
    );
  }
}
