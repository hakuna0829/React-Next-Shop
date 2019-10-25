import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import constants from '../constants';
import AuthLayout from '../components/authLayout';

const loginValidation = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid e-mail address.')
    .required('Email is required.'),
  password: Yup.string()
    .required('Password is required.')
})

//import css from "../style.css"

class LoginPage extends React.Component {

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    let token = localStorage.getItem("token")
    if(token) {
      Router.push('/profile')
    }
  }

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
      <AuthLayout title={ 'Login' } leftTitle={'Welcome Back'} leftDescription={'Trouble Logging in?'}>
        
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
              
        {/* <style jsx global>
        {`
          
            .forget-link a {
              color: #aaaaaa;
              font-size: 14px;
              margin-bottom: 10px;
            }


            .forget-link a:hover {
              color: white;
            }
             
          `}
          </style>

      <style jsx>{`
	
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

export default LoginPage;
