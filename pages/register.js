import React from 'react';
import Link from 'next/link';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Router from 'next/router';

import constants from '../constants';
import AuthLayout from '../components/authLayout';

import css from "../style.css"

const registerValidation = Yup.object().shape({
  first_name: Yup.string()
    .required('First Name is required.'),
  last_name: Yup.string()
    .required('Last Name is required.'),
  email: Yup.string()
    .email('Please enter a valid e-mail address.')
    .required('Email is required.'),
  password: Yup.string()
    .required('Password is required.')
})

class RegisterPage extends React.Component {

    handleSubmit = async(values, { setSubmitting, setErrors, resetForm }) => {
        console.log(values)

        axios.post(constants.serverUrl + 'api/register', values)
        .then((response) => {
          console.log(response)
          
          if( response.data.auth == true && response.data.role == "artist" ){
            // setErrors({ "success" : response.data.message})
            Router.push('/createProfile')
          }
          else {
            setErrors({ "total" : response.data.message})
          }

        })
        .catch((error) => {
          this.setState({loading: false});
        })
        .finally(() => {
            setSubmitting(false);
        });
    }

    render() {
        return (
        <AuthLayout title={ 'Register' } leftTitle={'Need Access?'} leftDescription={''}>

                    <div className="right">
                        <Formik
                        initialValues={{ first_name: '', last_name: '', email: '', role: '', password: ''}}
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
                            isSubmitting,
                        }) => (
                            <form onSubmit={handleSubmit}>
                                {errors.success && 
                                    (<p className="success">{errors.success}</p>) }
                                {errors.total && 
                                    (<p className="error">{errors.total}</p>) }
                                <div className="form-group">
                                    <label htmlFor="first_name">First Name</label>
                                    <input
                                        className="form-control"
                                        placeholder="First Name"
                                        type="input"
                                        name="first_name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.first_name}
                                    />
                                    {errors.first_name && touched.first_name && 
                                    (<p className="error">{errors.first_name}</p>) }
                                </div>

                                <div className="form-group">
                                    <label htmlFor="last_name">Last Name</label>
                                    <input
                                        className="form-control"
                                        placeholder="Last Name"
                                        type="input"
                                        name="last_name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.last_name}
                                    />
                                    {errors.last_name && touched.last_name && 
                                    (<p className="error">{errors.last_name}</p>) }
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        className="form-control"
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />
                                    {errors.email && touched.email && 
                                    (<p className="error">{errors.email}</p>) }
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        className="form-control"
                                        placeholder="Password"
                                        type="password"
                                        name="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                    />
                                    {errors.password && touched.password && 
                                    (<p className="error">{errors.password}</p>) }                 
                                </div>

                                <div className="form-group">
                                    <label htmlFor="role">User Type</label>
                                    <select 
                                      className="form-control" 
                                      name="role" 
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.role}>
                                      <option value="client">Client</option>
                                      <option value="artist">Artist</option>
                                    </select>
                                    {errors.role && touched.role && 
                                    (<p className="error">{errors.role}</p>) }
                                </div>

                            <button 
                                type="submit" 
                                className="auth-btn" 
                                disabled={isSubmitting}>
                                Sign Up
                            </button>
                        </form>
                            
                        )}
                        </Formik>
                        <div className="link">
                        <div className="d-flex justify-content-center links">
                            Already have an account? <Link href="/login"><a>Log In</a></Link>
                        </div>
                        </div>
                        
                    </div>

         {/* <style jsx>{`
  
    .right p {
      margin: 2em 0 1em;
    }

    input, button {
      width: calc(100% - 3em);
      padding: .5em;
      font-size: 1.3rem;
      outline: none;
      margin: 1em;
    }

     button {
      width: calc(100% - 2em);
      margin: 0;
      color: white;
      border: none;
      cursor: pointer;
    }

    @media only screen and (min-width: 1024px) {
 
      .right {
        text-align: center;
        -ms-flex-item-align: center;
        -ms-grid-row-align: center;
        align-self: center;
        padding: 0 2em 1.5em;
        -ms-grid-column-align: center;
        justify-self: center;
      }

      .right input {
        width: 100% !important;
        margin: 1em 0;
      }

      .right button {
        width: 100% !important;
      }
    }

    @media only screen and (min-width: 1600px) {

      .right {
        padding: 0 !important;
      }
    }

      `}
    </style> */}
        </AuthLayout>
        );
    }
}

export default RegisterPage;
