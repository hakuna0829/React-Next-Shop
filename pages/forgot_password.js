import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import constants from '../constants';
import AuthLayout from '../components/AuthLayout';

const forgotPwdValidation = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid e-mail address.')
    .required('Email is required.'),
})

class ForgotPasswodPage extends React.Component {

  handleSubmit = async(values, { setSubmitting, setErrors, resetForm }) => {
    console.log(values)

    axios.post(constants.serverUrl + 'api/request_password', values)
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
      <AuthLayout title={ 'Login' }>
        <div className="auth">
          <div className="login-container">
              <div className="container-inner">
                  <div className="left">
                    <Link href="/"><a><img src="/images/logo.png" alt="Celeste Logo" className="logo"></img></a></Link>

                      <div className="content">
                          <h1>Forgot password?</h1>

                          <p><Link href="/contact"><a>Send us a message</a></Link></p>
                      </div>
                  </div>
                  <div className="right">
                    <Formik
                      initialValues={{ email: '', password: ''}}
                      validationSchema={forgotPwdValidation}
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

                          <button 
                            type="submit" 
                            className="auth-btn" 
                            disabled={isSubmitting}>
                            Send
                          </button>
                        </form>
                        
                      )}
                    </Formik>
                    <div className="link">
                      <div className="d-flex justify-content-center links">
                        <Link href="/login"><a>Back to Log In</a></Link>
                      </div>
                    </div>
                      
                  </div>
              </div>
          </div>
        </div>
      </AuthLayout>
    );
  }
}

export default ForgotPasswodPage;
