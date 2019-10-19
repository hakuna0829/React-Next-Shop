import React from 'react';
import Link from 'next/link';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import constants from '../constants';
import AuthLayout from '../components/authLayout';

import css from "../style.css"

const registerValidation = Yup.object().shape({
  full_name: Yup.string()
    .required('Full Name is required.'),
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
          
          if( response.data.auth == true ){
            setErrors({ "success" : response.data.message})
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
                        initialValues={{ full_name: '', email: '', password: ''}}
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
                                    <label htmlFor="full_name">Full Name</label>
                                    <input
                                        className="form-control"
                                        placeholder="Full Name"
                                        type="input"
                                        name="full_name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.full_name}
                                    />
                                    {errors.full_name && touched.full_name && 
                                    (<p className="error">{errors.full_name}</p>) }
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
