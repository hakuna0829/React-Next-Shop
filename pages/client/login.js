import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import cookie from 'js-cookie';

import Layout from '../../components/Layout';
import constants from '../../constants';

const loginValidation = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid e-mail address.')
    .required('Email is required.'),
  password: Yup.string()
    .required('Password is required.')
})



class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            artist: {}
        };

    }

    componentDidMount() {
        this.fetchData();
      }
    
      fetchData() {
        let token = cookie.get('token')
        if(token) {
          Router.push('/artist/profile')
        }
      }
    
      handleSubmit = async(values, { setSubmitting, setErrors, resetForm }) => {
        
        axios.post(constants.serverUrl + 'api/auth/login', values)
          .then((response) => {
            console.log('login response', response)
            
            if( response.data.auth == true ){
              cookie.set("token", response.data.token, { expires: 1 });

              if(response.data.role == "artist") {
                console.log('artist')
                Router.push('/artist/dashboard')
              }
              if(response.data.role == "client") {
                console.log('client')
                Router.push('/client/dashboard')
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
            setErrors({ "total" : error.message})
          })
          .finally(() => {
              setSubmitting(false);
          });
      }

    render() {
        const { artist } = this.state
        return (
            <Layout title={'Login'}>
                <div className="login1">
                    <div className="container">
                        <div className="row">
                            <div className="login_header">
                                <h3>Sign In</h3>
                                <h6>Sign into your account via email and password or social account.</h6>
                            </div>
                            <div className="divider"></div>
                            <div className="login_content">
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

                                            <div className="form-group">
                                                <Link href="/forgot_password"><a>Forgot your password?</a></Link>
                                            </div>

                                        <button 
                                            type="submit" 
                                            disabled={isSubmitting}>
                                            Sign In
                                        </button>
                                        </form>
                                        
                                    )}
                                </Formik>
                            </div>
                            <div className="divider"></div>
                            <div className="login_footer">
                                <h3>Sign In via Social Account</h3>
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
                                    <p><span>New to Celeste?</span> &nbsp;<Link href="/client/signup"><a>Create an account</a></Link></p>
                                    <button>Client Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
  }
  
  export default LoginPage;