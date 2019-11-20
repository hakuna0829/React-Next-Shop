import react, { useState } from "react";
import Link from "next/link";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
} from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import cookie from "js-cookie";
import Router from "next/router";
import constants from "../../../constants";
import * as Yup from "yup";

const loginValidation = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid e-mail address.")
    .required("Email is required."),
  password: Yup.string().required("Password is required.")
});

export default class NewServiceModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      artist: {},
      modalShow: false,
      setModalShow: false
    };
  }
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };

  showSignupModal = e => {
    this.onClose(e);
    this.props.showSignUp(e);
  };
  handleSubmit = async (values, { setSubmitting, setErrors, resetForm }) => {
    axios
      .post(constants.serverUrl + "api/auth/login", values)
      .then(response => {
        if (response.data.auth == true) {
          cookie.set("token", response.data.token, { expires: 1 });
          cookie.set("role", response.data.role, { expires: 1 });

          if (response.data.role == "artist") {
            Router.push(response.data.profile_completion);
          } else if (response.data.role == "client") {
            Router.push("/client/dashboard");
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
    const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    return (
      <div className="profile">
          <Modal show={this.props.show} onHide={this.props.onClose} centered>
            <Modal.Header>
              <Modal.Title>New Service</Modal.Title>
              <span
                className="closebutton"
                onClick={e => {
                  this.onClose(e);
                }}
              >
                <i className="fas fa-times"></i>
              </span>
            </Modal.Header>
            <ModalBody>
              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={loginValidation}
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
                  <Form onSubmit={handleSubmit}>
                    {errors.success && (
                      <p className="success">{errors.success}</p>
                    )}
                    {errors.total && <p className="error">{errors.total}</p>}
                    <div className="row">
                      <div className="form-group col-md-12">
                        <label>Service name</label>
                        <Field
                          type="text"
                          name="name"
                          placeholder="Name"
                          className={`form-control ${
                            touched.name && errors.name ? "is-invalid" : ""
                          }`}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                        />
                        <ErrorMessage
                          component="div"
                          name="name"
                          className="invalid-feedback"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-md-12">
                        <label>Description</label>
                        <Field
                          name="description"
                          component="textarea"
                          placeholder="Description"
                          className={`form-control ${
                            touched.description && errors.description
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="description"
                          className="invalid-feedback"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="column-2-start">
                        <div className="form-group col-md-6">
                          <label>Max number of people</label>
                          <Field
                            name="maxPeopleNum"
                            component="select"
                            placeholder=""
                            className={`form-control ${
                              touched.maxPeopleNum && errors.maxPeopleNum
                                ? "is-invalid"
                                : ""
                            }`}
                          >
                            <option value="1">1 person</option>
                            <option value="10">10 persons</option>
                            <option value="25">25 persons</option>
                          </Field>
                          <ErrorMessage
                            component="div"
                            name="maxPeopleNum"
                            className="invalid-feedback"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="column-2-start">
                        <div className="form-group col-md-6">
                          <label>Base price</label>
                          <Field
                            name="basePrice"
                            component="select"
                            className={`form-control ${
                              touched.basePrice && errors.basePrice
                                ? "is-invalid"
                                : ""
                            }`}
                          >
                            <option value="0">$0</option>
                            <option value="10">$10</option>
                            <option value="25">$25</option>
                          </Field>
                          <ErrorMessage
                            component="div"
                            name="basePrice"
                            className="invalid-feedback"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label>Extra per person</label>
                          <Field
                            name="extraPerPerson"
                            component="select"
                            className={`form-control ${
                              touched.extraPerPerson && errors.extraPerPerson
                                ? "is-invalid"
                                : ""
                            }`}
                          >
                            <option value="0">$0</option>
                            <option value="10">$10</option>
                            <option value="25">$25</option>
                          </Field>
                          <ErrorMessage
                            component="div"
                            name="extraPerPerson"
                            className="invalid-feedback"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="column-2-start">
                        <div className="form-group col-md-6">
                          <label className="small">How long will this service take?</label>
                          <Field
                            name="serviceTime"
                            component="select"
                            className={`form-control ${
                              touched.serviceTime && errors.serviceTime
                                ? "is-invalid"
                                : ""
                            }`}
                          >
                            <option value="0">$0</option>
                            <option value="10">$10</option>
                            <option value="25">$25</option>
                          </Field>
                          <ErrorMessage
                            component="div"
                            name="serviceTime"
                            className="invalid-feedback"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label>&nbsp;</label>
                          <Field
                            name="perPerson"
                            component="select"
                            className={`form-control ${
                              touched.perPerson && errors.perPerson
                                ? "is-invalid"
                                : ""
                            }`}
                          >
                            <option value="0">$0</option>
                            <option value="10">$10</option>
                            <option value="25">$25</option>
                          </Field>
                          <ErrorMessage
                            component="div"
                            name="perPerson"
                            className="invalid-feedback"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="column-2-start">
                        <div className="form-group col-md-6">
                          <label className="small">Where will this service happen?</label>
                          <Field
                            name="servicePlace"
                            component="select"
                            className={`form-control ${
                              touched.servicePlace && errors.servicePlace
                                ? "is-invalid"
                                : ""
                            }`}
                          >
                            <option value="0">$0</option>
                            <option value="10">$10</option>
                            <option value="25">$25</option>
                          </Field>
                          <ErrorMessage
                            component="div"
                            name="servicePlace"
                            className="invalid-feedback"
                          />
                        </div>                        
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-md-12">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                          disabled={isSubmitting}
                        >
                          {" "}
                          Save
                        </button>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </ModalBody>
          </Modal>
      </div>
    );
  }
}
