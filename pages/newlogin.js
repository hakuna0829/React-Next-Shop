import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import constants from '../constants';
import Layout from '../components/newlayout';

const loginValidation = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid e-mail address.')
    .required('Email is required.'),
  password: Yup.string()
    .required('Password is required.')
})

import css from "../style.css"

class LoginPage extends React.Component {

  handleSubmit = async(values, { setSubmitting, setErrors, resetForm }) => {
    
    axios.post(constants.serverUrl + 'api/login', values)
      .then((response) => {
        console.log('login response', response)
        
        if( response.data.auth == true ){
          //setErrors({ "success" : response.data.message})
          localStorage.setItem("token", response.data.token)
          if(response.data.role == "artist") {
            if(response.data.has_profile == false) {
              Router.push('/createProfile')
            }
            else {
              Router.push('/profile')
            }
          }
          else if(response.data.role == "client") {
            Router.push('/search')
          }
          else {
            Router.push('/')
          }
          
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
      <Layout title={ 'Login' } leftTitle={'Welcome Back'} leftDescription={'Trouble Logging in?'}>
        
                  <div className="right">
                    <Formik
                      initialValues={{ email: '', password: ''}}
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

                            <div className="form-group forget-link">
                              <Link href="/forgot_password"><a>Forgot your password?</a></Link>
                            </div>

                          <button 
                            type="submit" 
                            className="auth-btn" 
                            disabled={isSubmitting}>
                            Sign In
                          </button>
                        </form>
                        
                      )}
                    </Formik>
                    <div className="link">
                      <div className="d-flex justify-content-center links">
                        Don't have an account? <Link href="/register"><a>Sign Up</a></Link>
                      </div>
                    </div>
                      
                  </div>
              
  
      </Layout>
    );
  }
}

export default LoginPage;
