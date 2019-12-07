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
const serverUrl = process.env.SERVER_URL
  ? process.env.SERVER_URL
  : "https://tigerdeveloper.net/";
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

 function ServiceRequestModal (props) {
  // const {show , mode } = props;

  const [loading, setLoading] = useState(true);
  const [startDate,setStartDate] = useState(new Date());
  const [service, setService] = useState([]);
  const [showModal, setShowModal] = useState(false);
  // const [onClose, setOnClose] = useState(props.onClose);
  // const [actionMode, setActionMode] = useState(mode);
  
  useEffect(() => {
    console.log("show---------", props.show);    
  }, []);
  console.log('a')
  
  

  // console.log('props', props.show);
  // // setShow(props.show);
  // console.log('showModal',showModal);
  
  // if (!showModal) {
  //   return null;
  // }

  // useEffect(() => {
  //   console.log("modal props", props);
  //   if (props.mode == "edit") {
  //     setLoading( true);
  //     // this.getServiceByID(props.editId);
  //   } else {
  //     setLoading( false);
  //   }
  // });

 
  //  Modal Action

//    const handleClose = e => {
//     onClose && onClose(e);
//   };


//    //Action
//    const getServiceByID = async id => {
//     let token = props.token;
//     console.log("modal getServiceID", id);

//     axios
//       .get(serverUrl + `api/services/2`, {
//         headers: { Authorization: token }
//       })
//       .then(response => {
//         setService(response.data.service)
//         setLoading( false );
//       })
//       .catch(error => {
//         setLoading( true );
//       })
//       .finally(() => {});
//   };

//   const handleSubmit = async (values, { setSubmitting, setErrors, resetForm }) => {
       
    
//   };

//   const handleUpdateSubmit = async (
//     values,
//     { setSubmitting, setErrors, resetForm }
//   ) => {
//     let token = props.token;
    

//     //return;
//     // axios
//     //   .put(serverUrl + "api/services/me/updateService", values, {
//     //     headers: { Authorization: token }
//     //   })
//     //   .then(response => {
//     //     this.props.action(values);
//     //     this.setState({ loading: false });
//     //   })
//     //   .catch(error => {
//     //     this.setState({ loading: false });
//     //     setErrors({ total: error.message });
//     //     //this.setState({loading: false});
//     //   })
//     //   .finally(() => {
//     //     setSubmitting(false);
//     //   });
//   };

//   const handleCategoryChange = e => {
//     console.log("check click");
//   };

//   const handleMakeupDateChange = date => {
//     console.log("date change", date);
//     setStartDate(date);
//   };

// console.log(loading);
// console.log(showModal);

  return (
    <div>
      {loading ? (
        <Spinner animation="border" variant="dark" />
      ) : (
        <Modal
          show={showModal}
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
                    handleClose(e);
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
                    onSubmit={handleSubmit}
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
                                        handleCategoryChange(e);
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
                          </div>
                        </div>
                        <div className="row">
                          <div className="column-2-start">
                            <div className="form-group col-md-12">
                              <label>
                                How many people need their makeup done
                              </label>
                              <div className="row col-sm-6">
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
                        </div>
                        <div className="row">
                          <div className="form-group col-md-12">
                            <label>
                              What day do you need your makeup done?
                            </label>
                            <div className="cover_date noborder row">
                              <div className="date_input">
                                <DatePicker
                                  selected={startDate}
                                  onChange={date =>
                                    handleMakeupDateChange(date)
                                  }
                                  locale="en-GB"
                                  placeholderText=""
                                />
                                <i className="far fa-calendar-alt"></i>
                              </div>
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
                          <div className="form-group col-md-12">
                            <label>Where will the service happen?</label>

                            <div className="categoryList">
                              <div className="item">
                                <div className="cat_container">
                                  <input
                                    type="radio"
                                    name="service"
                                    className="form-control"
                                    onChange={e => {
                                      handleCategoryChange(e);
                                    }}
                                  />
                                  <div className="checkmark">
                                    <b className="single_label">Artists studio</b>
                                  </div>
                                </div>
                              </div>
                              <div className="item">
                                <div className="cat_container">
                                  <input
                                    type="radio"
                                    name="service"
                                    className="form-control"
                                    onChange={e => {
                                      handleCategoryChange(e);
                                    }}
                                  />
                                  <div className="checkmark">
                                    <b className="single_label">My home or venue</b>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="form-group col-md-12">
                            <label>
                              Please enter the address where the makeup artist
                              will meet you
                            </label>
                            <div className="form-group row col-md-6">
                              <Field
                                type="text"
                                name="address1"
                                placeholder="Address line 1"
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
                            </div>
                            <div className="form-group row col-md-6">
                              <Field
                                type="text"
                                name="address2"
                                placeholder="Address line 2"
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
                            </div>
                            <div className="form-group row col-md-6">
                              <Field
                                type="text"
                                name="zip_code"
                                placeholder="Zip code"
                                className={`form-control ${
                                  touched.zip_code && errors.zip_code
                                    ? "is-invalid"
                                    : ""
                                }`}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.zip_code}
                              />

                              <ErrorMessage
                                component="div"
                                name="zip_code"
                                className="invalid-feedback"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="form-group col-md-12">
                            <label>Any special instructions?</label>
                            <Field
                              name="service_instrunction"
                              component="textarea"
                              rows="3"
                              placeholder="Type here..."
                              className={`form-control ${
                                touched.service_instrunction &&
                                errors.service_instrunction
                                  ? "is-invalid"
                                  : ""
                              }`}
                              value={values.service_instrunction}
                            />
                            <ErrorMessage
                              component="div"
                              name="service_instrunction"
                              className="invalid-feedback"
                            />
                          </div>
                        </div>
                        <div className="row col-md-12 form-group">
                          <span className="mbutton">
                            <a
                              className="btn btn-secondary btn-block"
                              href="#"
                            >
                              Attach pictures
                            </a>
                          </span>
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

//  export default class ServiceRequestModal2 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       loading: true,
//       startDate: new Date()
//     };
//   }

//   componentDidMount() {}

//   componentWillReceiveProps(nextProps) {
//     console.log("modal props", nextProps);
//     if (nextProps.mode == "edit") {
//       this.setState({ loading: true });
//       this.getServiceByID(nextProps.editId);
//     } else {
//       this.setState({ loading: false });
//     }
//   }

//   // Modal Action

//   onClose = e => {
//     this.props.onClose && this.props.onClose(e);
//   };

//   //Action
//   getServiceByID = async id => {
//     let token = this.props.token;
//     console.log("modal getServiceID", id);

//     axios
//       .get(serverUrl + `api/services/2`, {
//         headers: { Authorization: token }
//       })
//       .then(response => {
//         this.setState({ service: response.data.service });
//         this.setState({ loading: false });
//       })
//       .catch(error => {
//         this.setState({ loading: false });
//       })
//       .finally(() => {});
//   };

//   handleSubmit = async (values, { setSubmitting, setErrors, resetForm }) => {
//     let token = this.props.token;
//     let { services } = this.state;

//     axios
//       .post(serverUrl + "api/services/me/createService", values, {
//         headers: { Authorization: token }
//       })
//       .then(response => {
//         values.id = response.data.serviceInsert[0];
//         this.props.action(values);
//       })
//       .catch(error => {
//         this.setState({ loading: false });
//         setErrors({ total: error.message });
//         //this.setState({loading: false});
//       })
//       .finally(() => {
//         setSubmitting(false);
//       });
//   };

//   handleUpdateSubmit = async (
//     values,
//     { setSubmitting, setErrors, resetForm }
//   ) => {
//     let token = this.props.token;
//     let { services } = this.state;

//     //return;
//     axios
//       .put(serverUrl + "api/services/me/updateService", values, {
//         headers: { Authorization: token }
//       })
//       .then(response => {
//         this.props.action(values);
//         this.setState({ loading: false });
//       })
//       .catch(error => {
//         this.setState({ loading: false });
//         setErrors({ total: error.message });
//         //this.setState({loading: false});
//       })
//       .finally(() => {
//         setSubmitting(false);
//       });
//   };

//   handleCategoryChange = e => {
//     console.log("check click");
//   };

//   handleMakeupDateChange = date => {
//     console.log("date change", date);
//     this.setState({ startDate: date });
//   };

//   editService = idx => {
//     console.log(idx);
//   };

//   deleteService = idx => {
//     console.log(idx);
//   };

//   render() {
//     //let data = this.props.services;
//     let { service, loading, startDate } = this.state;
//     let { show, onClose, mode } = this.props;

//     if (!this.props.show) {
//       return null;
//     }

//     return (
//       <div>
//         {loading ? (
//           <Spinner animation="border" variant="dark" />
//         ) : (
//           <Modal
//             show={show}
//             onHide={onClose}
//             centered
//             className="full-screen-modal"
//           >
//             <div className="container">
//               <Modal.Header>
//                 <div>Logo</div>
//                 <div>Estimate: $200</div>
//                 <div>
//                   <span
//                     className="closebutton"
//                     onClick={e => {
//                       onClose(e);
//                     }}
//                   >
//                     <i className="fas fa-times"></i>
//                   </span>
//                 </div>
//               </Modal.Header>
//               <ModalBody>
//                 <div className="modal-body-container">
//                   <div className="modal-body-content">
//                     <Formik
//                       initialValues={{
//                         name: "",
//                         description: "",
//                         base_price: "",
//                         extra_per_person: "",
//                         max_number_of_people: "",
//                         duration_id: "",
//                         duration_unit_id: "",
//                         location_id: "",
//                         id: ""
//                       }}
//                       validationSchema={serviceValidation}
//                       onSubmit={this.handleSubmit}
//                     >
//                       {({
//                         values,
//                         errors,
//                         touched,
//                         handleChange,
//                         handleBlur,
//                         handleSubmit,
//                         isSubmitting
//                       }) => (
//                         <Form onSubmit={handleSubmit}>
//                           {errors.success && (
//                             <p className="success">{errors.success}</p>
//                           )}
//                           {errors.total && (
//                             <p className="error">{errors.total}</p>
//                           )}
//                           <div className="row">
//                             <div className="form-group col-md-12">
//                               <label>Choose your service:</label>

//                               <div className="categoryList">
//                                 {Array.from(services).map((item, i) => (
//                                   <div className="item" key={i}>
//                                     <div className="cat_container">
//                                       <input
//                                         // type="radio"
//                                         type="radio"
//                                         //checked={item.checked}
//                                         name="service"
//                                         className="form-control"
//                                         id={item.id}
//                                         // value={item.name}
//                                         onChange={e => {
//                                           this.handleCategoryChange(e);
//                                         }}
//                                       />
//                                       <div className="checkmark">
//                                         <div className="service_name">
//                                           <b>{item.name}</b>
//                                         </div>
//                                         <div className="service_price">
//                                           <h6>{item.price}</h6>
//                                           <span>Starting cost</span>
//                                         </div>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 ))}
//                               </div>
//                             </div>
//                           </div>
//                           <div className="row">
//                             <div className="column-2-start">
//                               <div className="form-group col-md-12">
//                                 <label>
//                                   How many people need their makeup done
//                                 </label>
//                                 <div className="row col-sm-6">
//                                   <Field
//                                     name="max_number_of_people"
//                                     component="select"
//                                     placeholder=""
//                                     className={`form-control ${
//                                       touched.max_number_of_people &&
//                                       errors.max_number_of_people
//                                         ? "is-invalid"
//                                         : ""
//                                     }`}
//                                   >
//                                     <option value="" disabled={true}></option>
//                                     <option value="1">1 person</option>
//                                     <option value="10">10 persons</option>
//                                     <option value="25">25 persons</option>
//                                   </Field>
//                                   <ErrorMessage
//                                     component="div"
//                                     name="max_number_of_people"
//                                     className="invalid-feedback"
//                                   />
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="row">
//                             <div className="form-group col-md-12">
//                               <label>
//                                 What day do you need your makeup done?
//                               </label>
//                               <div className="cover_date noborder row">
//                                 <div className="date_input">
//                                   <DatePicker
//                                     selected={startDate}
//                                     onChange={date =>
//                                       this.handleMakeupDateChange(date)
//                                     }
//                                     locale="en-GB"
//                                     placeholderText=""
//                                   />
//                                   <i className="far fa-calendar-alt"></i>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>

//                           <div className="row">
//                             <div className="column-2-start">
//                               <div className="form-group col-md-6">
//                                 <label>
//                                   What time would you like to start?
//                                 </label>
//                                 <Field
//                                   name="service_time"
//                                   component="select"
//                                   placeholder=""
//                                   className={`form-control ${
//                                     touched.service_time && errors.service_time
//                                       ? "is-invalid"
//                                       : ""
//                                   }`}
//                                 >
//                                   <option value="" disabled={true}></option>
//                                   <option value="1">1:00</option>
//                                   <option value="2">2:00</option>
//                                   <option value="3">3:00</option>
//                                 </Field>
//                                 <ErrorMessage
//                                   component="div"
//                                   name="service_time"
//                                   className="invalid-feedback"
//                                 />
//                               </div>
//                             </div>
//                           </div>

//                           <div className="row">
//                             <div className="form-group col-md-12">
//                               <label>Where will the service happen?</label>

//                               <div className="categoryList">
//                                 <div className="item">
//                                   <div className="cat_container">
//                                     <input
//                                       type="radio"
//                                       name="service"
//                                       className="form-control"
//                                       onChange={e => {
//                                         this.handleCategoryChange(e);
//                                       }}
//                                     />
//                                     <div className="checkmark">
//                                       <b className="single_label">Artists studio</b>
//                                     </div>
//                                   </div>
//                                 </div>
//                                 <div className="item">
//                                   <div className="cat_container">
//                                     <input
//                                       type="radio"
//                                       name="service"
//                                       className="form-control"
//                                       onChange={e => {
//                                         this.handleCategoryChange(e);
//                                       }}
//                                     />
//                                     <div className="checkmark">
//                                       <b className="single_label">My home or venue</b>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>

//                           <div className="row">
//                             <div className="form-group col-md-12">
//                               <label>
//                                 Please enter the address where the makeup artist
//                                 will meet you
//                               </label>
//                               <div className="form-group row col-md-6">
//                                 <Field
//                                   type="text"
//                                   name="address1"
//                                   placeholder="Address line 1"
//                                   className={`form-control ${
//                                     touched.address1 && errors.address1
//                                       ? "is-invalid"
//                                       : ""
//                                   }`}
//                                   onChange={handleChange}
//                                   onBlur={handleBlur}
//                                   value={values.address1}
//                                 />

//                                 <ErrorMessage
//                                   component="div"
//                                   name="address1"
//                                   className="invalid-feedback"
//                                 />
//                               </div>
//                               <div className="form-group row col-md-6">
//                                 <Field
//                                   type="text"
//                                   name="address2"
//                                   placeholder="Address line 2"
//                                   className={`form-control ${
//                                     touched.address2 && errors.address2
//                                       ? "is-invalid"
//                                       : ""
//                                   }`}
//                                   onChange={handleChange}
//                                   onBlur={handleBlur}
//                                   value={values.address2}
//                                 />

//                                 <ErrorMessage
//                                   component="div"
//                                   name="address2"
//                                   className="invalid-feedback"
//                                 />
//                               </div>
//                               <div className="form-group row col-md-6">
//                                 <Field
//                                   type="text"
//                                   name="zip_code"
//                                   placeholder="Zip code"
//                                   className={`form-control ${
//                                     touched.zip_code && errors.zip_code
//                                       ? "is-invalid"
//                                       : ""
//                                   }`}
//                                   onChange={handleChange}
//                                   onBlur={handleBlur}
//                                   value={values.zip_code}
//                                 />

//                                 <ErrorMessage
//                                   component="div"
//                                   name="zip_code"
//                                   className="invalid-feedback"
//                                 />
//                               </div>
//                             </div>
//                           </div>

//                           <div className="row">
//                             <div className="form-group col-md-12">
//                               <label>Any special instructions?</label>
//                               <Field
//                                 name="service_instrunction"
//                                 component="textarea"
//                                 rows="3"
//                                 placeholder="Type here..."
//                                 className={`form-control ${
//                                   touched.service_instrunction &&
//                                   errors.service_instrunction
//                                     ? "is-invalid"
//                                     : ""
//                                 }`}
//                                 value={values.service_instrunction}
//                               />
//                               <ErrorMessage
//                                 component="div"
//                                 name="service_instrunction"
//                                 className="invalid-feedback"
//                               />
//                             </div>
//                           </div>
//                           <div className="row col-md-12 form-group">
//                             <span className="mbutton">
//                               <a
//                                 className="btn btn-secondary btn-block"
//                                 href="#"
//                               >
//                                 Attach pictures
//                               </a>
//                             </span>
//                           </div>

//                           <div className="row">
//                             <div className="form-group col-md-12">
//                               <button
//                                 type="submit"
//                                 className="btn btn-primary btn-block"
//                                 disabled={isSubmitting}
//                               >
//                                 Save
//                               </button>
//                             </div>
//                           </div>
//                         </Form>
//                       )}
//                     </Formik>
//                   </div>
//                 </div>
//               </ModalBody>
//             </div>
//           </Modal>
//         )}
//       </div>
//     );
//   }
// }
export default ServiceRequestModal;