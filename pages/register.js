import React from 'react';
import Link from 'next/link';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import constants from '../constants';
import AuthLayout from '../components/authLayout';

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
        <AuthLayout title={ 'Login' }>
            <div className="auth">
            <div className="login-container">
                <div className="container-inner">
                    <div className="reg-left">
                        <Link href="/"><a><img src="/images/logo.png" alt="Celeste Logo" className="logo"></img></a></Link>

                        <div className="content">
                            <h1>Need Access?</h1>

                            <p><Link href="/contact"><a>Send us a message</a></Link></p>
                        </div>
                    </div>
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
                </div>
            </div>
            </div>
        </AuthLayout>
        );
    }
}

export default RegisterPage;
