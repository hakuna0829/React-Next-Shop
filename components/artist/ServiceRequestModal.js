import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
} from "react-bootstrap";
import axios from "axios";
import Router from "next/router";
import { Spinner } from "react-bootstrap";
import constants from "../../constants";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/src/stylesheets/datepicker.scss";

const serviceValidation = Yup.object().shape({
  name: Yup.string().required("Name is required."),
  description: Yup.string().required("Description is required."),
  max_number_of_people: Yup.string().required("Max people num is required."),
  duration_id: Yup.string().required("Service Time is required."),
  duration_unit_id: Yup.string().required("Per Person is required."),
  location_id: Yup.string().required("Service place is required."),
  base_price: Yup.string().required("Base price is required."),
  extra_per_person: Yup.string().required("Extra per person is required.")
});

const services = [
  { id: 1, name: "Bridal makeup", checked: true, price: 800 },
  { id: 2, name: "Prom", checked: false, price: 200 },
  { id: 3, name: "Photo shoot", checked: false, price: 800 }
];

export default class ServiceRequestModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      startDate: new Date()
    };
  }

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {
    console.log("modal props", nextProps);
    if (nextProps.mode == "edit") {
      this.setState({ loading: true });
      this.getServiceByID(nextProps.editId);
    } else {
      this.setState({ loading: false });
    }
  }
  
  // Modal Action

  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };

  //Action
  getServiceByID = async id => {
    let token = this.props.token;
    console.log("modal getServiceID", id);

    axios
      .get(constants.serverUrl + `api/services/2`, {
        headers: { Authorization: token }
      })
      .then(response => {
        this.setState({ service: response.data.service });
        this.setState({ loading: false });
      })
      .catch(error => {
        this.setState({ loading: false });
      })
      .finally(() => {});
  };

  handleSubmit = async (values, { setSubmitting, setErrors, resetForm }) => {
    let token = this.props.token;
    let { services } = this.state;

    axios
      .post(constants.serverUrl + "api/services/me/createService", values, {
        headers: { Authorization: token }
      })
      .then(response => {
        values.id = response.data.serviceInsert[0];
        this.props.action(values);
      })
      .catch(error => {
        this.setState({ loading: false });
        setErrors({ total: error.message });
        //this.setState({loading: false});
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  handleUpdateSubmit = async (
    values,
    { setSubmitting, setErrors, resetForm }
  ) => {
    let token = this.props.token;
    let { services } = this.state;

    //return;
    axios
      .put(constants.serverUrl + "api/services/me/updateService", values, {
        headers: { Authorization: token }
      })
      .then(response => {
        this.props.action(values);
        this.setState({ loading: false });
      })
      .catch(error => {
        this.setState({ loading: false });
        setErrors({ total: error.message });
        //this.setState({loading: false});
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  handleCategoryChange = e => {
    console.log("check click");
  };

  editService = idx => {
    console.log(idx);
  };

  deleteService = idx => {
    console.log(idx);
  };

  render() {
    //let data = this.props.services;
    let { service, loading } = this.state;
    let { show, onClose, mode } = this.props;

    if (!this.props.show) {
      return null;
    }

    return (
      <div>
        {loading ? (
          <Spinner animation="border" variant="dark" />
        ) : (
          <Modal
            show={show}
            onHide={onClose}
            centered
            className="full-screen-modal"
          >
            <div className="container">
              <Modal.Header>
                <div>Logo</div>
                <div>Estimate: $200</div>
                <div>
                  <span
                    className="closebutton"
                    onClick={e => {
                      onClose(e);
                    }}
                  >
                    <i className="fas fa-times"></i>
                  </span>
                </div>
              </Modal.Header>
              <ModalBody>
                <div className="modal-body-container">
                  <div className="modal-body-content">
                    <Formik
                      initialValues={{
                        name: "",
                        description: "",
                        base_price: "",
                        extra_per_person: "",
                        max_number_of_people: "",
                        duration_id: "",
                        duration_unit_id: "",
                        location_id: "",
                        id: ""
                      }}
                      validationSchema={serviceValidation}
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
                          {errors.total && (
                            <p className="error">{errors.total}</p>
                          )}
                          <div className="row">
                            <div className="form-group col-md-12">
                              <label>Choose your service:</label>

                              <div className="categoryList">
                                {Array.from(services).map((item, i) => (
                                  <div className="item" key={i}>
                                    <div className="cat_container">
                                      <input
                                        // type="radio"
                                        type="radio"
                                        //checked={item.checked}
                                        name="service"
                                        className="form-control"
                                        id={item.id}
                                        // value={item.name}
                                        onChange={e => {
                                          this.handleCategoryChange(e);
                                        }}
                                      />
                                      <div className="checkmark">
                                        <div className="service_name">
                                          <b>{item.name}</b>
                                        </div>
                                        <div className="service_price">
                                          <h6>{item.price}</h6>
                                          <span>Starting cost</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>

                              {/* <Field
                                type="text"
                                name="name"
                                placeholder="Name"
                                className={`form-control ${
                                  touched.name && errors.name
                                    ? "is-invalid"
                                    : ""
                                }`}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                              />
                              <ErrorMessage
                                component="div"
                                name="name"
                                className="invalid-feedback"
                              /> */}
                            </div>
                          </div>
                          <div className="row">
                            <div className="column-2-start">
                              <div className="form-group col-md-6">
                                <label>
                                  How many people need their makeup done
                                </label>
                                <Field
                                  name="max_number_of_people"
                                  component="select"
                                  placeholder=""
                                  className={`form-control ${
                                    touched.max_number_of_people &&
                                    errors.max_number_of_people
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                >
                                  <option value="" disabled={true}></option>
                                  <option value="1">1 person</option>
                                  <option value="10">10 persons</option>
                                  <option value="25">25 persons</option>
                                </Field>
                                <ErrorMessage
                                  component="div"
                                  name="max_number_of_people"
                                  className="invalid-feedback"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="form-group col-md-12">
                              <label>Description</label>
                              <Field
                                name="description"
                                component="textarea"
                                rows="3"
                                placeholder="Description"
                                className={`form-control ${
                                  touched.description && errors.description
                                    ? "is-invalid"
                                    : ""
                                }`}
                                value={values.description}
                              />
                              <ErrorMessage
                                component="div"
                                name="description"
                                className="invalid-feedback"
                              />
                            </div>
                          </div>

                          <div className="row">
                            <div className="form-group col-md-12">
                              <label>
                                What day do you need your makeup done?
                              </label>
                              <Field
                                type="text"
                                name="base_price"
                                placeholder="$0"
                                className={`form-control ${
                                  touched.base_price && errors.base_price
                                    ? "is-invalid"
                                    : ""
                                }`}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.base_price}
                              />

                              <ErrorMessage
                                component="div"
                                name="base_price"
                                className="invalid-feedback"
                              />
                            </div>
                          </div>

                          <div className="row">
                            <div className="cover_date">
                              <label>What day do you need your makeup done?</label>
                              <div className="date_input">
                                {/* <DatePicker
                                  selected={startDate}
                                  onChange={date => setStartDate(date)}
                                  locale="en-GB"
                                  placeholderText=""
                                />
                                <i className="far fa-calendar-alt"></i> */}
                              </div>                             
                            </div>
                          </div>

                          <div className="row">
                            <div className="column-2-start">
                              <div className="form-group col-md-6">
                                <label>
                                  What time would you like to start?
                                </label>
                                <Field
                                  name="service_time"
                                  component="select"
                                  placeholder=""
                                  className={`form-control ${
                                    touched.service_time && errors.service_time
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                >
                                  <option value="" disabled={true}></option>
                                  <option value="1">1:00</option>
                                  <option value="2">2:00</option>
                                  <option value="3">3:00</option>
                                </Field>
                                <ErrorMessage
                                  component="div"
                                  name="service_time"
                                  className="invalid-feedback"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="form-group col-md-6">
                              <label>
                                Please enter the address where the makeup artist
                                will meet you
                              </label>
                              <Field
                                type="text"
                                name="address1"
                                placeholder="$0"
                                className={`form-control ${
                                  touched.address1 && errors.address1
                                    ? "is-invalid"
                                    : ""
                                }`}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.address1}
                              />

                              <ErrorMessage
                                component="div"
                                name="address1"
                                className="invalid-feedback"
                              />

                              <Field
                                type="text"
                                name="address2"
                                placeholder="$0"
                                className={`form-control ${
                                  touched.address2 && errors.address2
                                    ? "is-invalid"
                                    : ""
                                }`}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.address2}
                              />

                              <ErrorMessage
                                component="div"
                                name="address2"
                                className="invalid-feedback"
                              />

                              <Field
                                type="text"
                                name="address3"
                                placeholder="$0"
                                className={`form-control ${
                                  touched.address3 && errors.address3
                                    ? "is-invalid"
                                    : ""
                                }`}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.address3}
                              />

                              <ErrorMessage
                                component="div"
                                name="address3"
                                className="invalid-feedback"
                              />
                            </div>
                          </div>

                          <div className="row">
                            <div className="form-group col-md-12">
                              <button
                                type="submit"
                                className="btn btn-primary btn-block"
                                disabled={isSubmitting}
                              >
                                Save
                              </button>
                            </div>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>
              </ModalBody>
            </div>
          </Modal>
        )}
      </div>
    );
  }
}
