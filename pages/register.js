import React from 'react';
import Link from 'next/link';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import cookie from 'js-cookie';
import Router from 'next/router';

import constants from '../constants';
import Layout from '../components/Layout';

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

      axios.post(constants.serverUrl + 'api/auth/register', values)
        .then((response) => {
          console.log('register response', response)
          console.log('register response.data.auth', response.data.auth)
          
          if( response.data.auth == true  ){
            cookie.set("token", response.data.token, { expires : 1 })
              console.log('response.data.role', response.data.role)
            if(response.data.role == "artist") {
              console.log('artist')
              Router.push('/artist/create-profile')
            }
            if(response.data.role == "client") {
              console.log('client')
              Router.push('/search')
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
        <Layout title={ 'Register' } leftTitle={'Need Access?'} leftDescription={''}>
          <div className="login1">
              <div className="container">
                  <div className="row">
                      <div className="login_header">
                          <h3>Sign Up</h3>
                          <h6>Sign up via email and password.</h6>
                      </div>
                      <div className="divider"></div>
                      <div className="login_content">
                      <Formik
                        initialValues={{ first_name: '', last_name: '', email: '', role: 'client', password: ''}}
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
                      </div>
                      <div className="divider"></div>
                      <div className="login_footer">
                          <h3>Sign Up via Social Account</h3>
                          <div className="btn_group">
                              <button type="button" className="google">
                                  <i className="fas fa-circle"></i>
                                  <span>Google</span>
                              </button>
                              <button type="button" className="facebook">
                                  <i className="fas fa-circle"></i>
                                  <span>Facebook</span>
                              </button>
                          </div>
                          <div className="link">
                              <p><span>Already has an account?</span> &nbsp;<Link href="/login"><a>Log in</a></Link></p>
                              <button>Artist Register</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </Layout>
        );
    }
}

export default RegisterPage;
