import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import AuthLayout from '../components/authLayout';

const loginValidation = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid e-mail address.')
    .required('Email is required.'),
  password: Yup.string()
    .required('Password is required.')
})

class LoginPage extends React.Component {

  handleSubmit = async(values, { setSubmitting, setErrors, resetForm }) => {
    console.log(values)

    axios.post('https://next-celeste.herokuapp.com/api/login', values)
      .then((response) => {
        console.log(response)
        
        if( response.data.auth == true ){
          setErrors({ "success" : response.data.message})
          localStorage.setItem("token", response.data.token)
          Router.push('/profile')
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
                          <h1>Welcome Back</h1>

                          <p>Trouble Logging in? <Link href="/contact"><a>Send us a message</a></Link></p>
                      </div>
                  </div>
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
              </div>
          </div>
        </div>
        <style jsx global>{`
          
            .forget-link a {
              color: #aaaaaa;
              font-size: 14px;
              margin-bottom: 10px;
            }


            .forget-link a:hover {
              color: white;
            }
             
          `}</style>
      </AuthLayout>
    );
  }
}

export default LoginPage;
