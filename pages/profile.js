import React from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import Router from 'next/router';
import axios from 'axios';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

import Layout from '../components/layout';
import ProfileForm from '../components/ProfileForm';

const profileValidation = Yup.object().shape({
    picture: Yup.string()
      .required('Picture is required.'),
    bio: Yup.string()
      .required('Bio is required.')
  })

import constants from '../constants';

import css from "../landing.css"

class PortfolioPage extends React.Component {
    // static getInitialProps ({ query: { id } }) {
    //   return { id };
    // }
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            user: {},
            step: 0,
            max_step: 6,
        };

    }

    logout() {
        localStorage.removeItem("token")
        Router.push('/login')
    }

    gotoStep = (dir) => {
        let step = this.state.step + dir
        if( step < 0)
            step = 0
        if(step > this.state.max_step)
            step = this.state.max_step
        this.setState({
            step : step
        })
    }
    
    saveProfile = () => {

    }

    handleSubmit = async(values, { setSubmitting, setErrors, resetForm }) => {
        console.log('sutbmit', values)
        return
    
        axios.post(constants.serverUrl + 'api/login', values)
          .then((response) => {
            console.log(response)
            
            if( response.data.auth == true ){
              //setErrors({ "success" : response.data.message})
              localStorage.setItem("token", response.data.token)
              if(response.data.type == "Artist") {
                Router.push('/profile')
              }
              else {
                Router.push('/client_profile')
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

    ProfileStep(values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting) {
        switch(this.state.step) {
          case 0:
            return (
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label htmlFor="picture" className="control-label">Picture</label> 
                            <input id="picture" placeholder="Bio" type="file" className="form-control" onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.picture}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="bio" className="control-label">Bio</label> 
                            <Field component="textarea" id="bio" placeholder="Bio" className="form-control" onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.bio}></Field>
                        </div>
                    </div>
                </div>
            );
          case 1:
            return (
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label htmlFor="portfolio" className="control-label">Your Work</label> 
                            <input id="portfolio" placeholder="yourwork.com" type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="rate" className="control-label">Rate</label> 
                            <input id="rate" placeholder="Just a range to give your clients a guide" type="text" className="form-control"/>
                        </div>
                    </div>
                </div>
            );
          case 2:
            return (
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label htmlFor="location" className="control-label">Your Location</label> 
                            <input id="location" placeholder="Brooklyn, New York, USA" type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="can_travel" className="control-label">Willing to travel?</label> 
                            <input id="can_travel" placeholder="100km" type="checkbox" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="max_travel_distance" className="control-label">How far are you willing to travel?</label> 
                            <input id="max_travel_distance" placeholder="100km" type="text" className="form-control"/>
                        </div>
                    </div>
                </div>
            );
        case 3:
            return (
                <div className="row">
                    <div className="col-lg-6">
                        <h2> Connect Social Accounts</h2>
                        <div className="form-group">
                            <label htmlFor="instagram" className="control-label">Instagram</label> 
                            <input id="instagram" placeholder="Instagram" type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="facebook" className="control-label">Facebook</label> 
                            <input id="facebook" placeholder="Facebook" type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="linkedin" className="control-label">Linkedin</label> 
                            <input id="linkedin" placeholder="Linkedin" type="text" className="form-control"/>
                        </div>
                    </div>
                </div>
            );
        case 4:
            return (
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label htmlFor="skills" className="control-label">Skills</label> 
                            <input id="skills" placeholder="Skills" type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="labels" className="control-label">More labels to pick</label> 
                            <input id="labels" placeholder="labels" type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="experience" className="control-label">Experience : When did you start your career?</label> 
                            <input id="experience" placeholder="Experience" type="text" className="form-control"/>
                        </div>
                    </div>
                </div>
            );
        case 5:
            return (
                <div className="row">
                    <div className="col-lg-6">
                        <h2>Pricing</h2>
                        <div className="form-group">
                            <input name="type[]" placeholder="Wedding makeup" type="text" className="form-control"/>
                            <input name="price[]" placeholder="250$" type="text" className="form-control"/>
                        </div>
                    </div>
                </div>
            );
        case 6:
            return (
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label htmlFor="skills" className="control-label">Add Photos of your work</label> 
                            <input id="skills" placeholder="Skills" type="text" className="form-control"/>
                        </div>
                    </div>
                </div>
            );
        default:
            return null;
        }
    }
    
    render() {
        const { user, step } = this.state
        return (
            <Layout title={'Profile Initial'}>
            <main>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" />
                <link rel="stylesheet" href="css/air2.global.responsive.12.9.0.min.css" />
                <div className="eo-tabset breadcrumbs col-md-3">
                    <ul  className="nav nav-pills nav-stacked">
                        <li className={step == 0 ? 'active' : 'disabled'}><a ><span  aria-hidden="true" className="glyphicon m-0-left air-icon-draw-tool"></span>
                            The basic
                            </a> <span  aria-hidden="true" className="completed-icon glyphicon air-icon-verified completed"></span>
                        </li>
                        <li className={step == 1 ? 'active' : 'disabled'}><a ><span  aria-hidden="true" className="glyphicon m-0-left air-icon-design"></span>
                            Personal
                            </a> <span  aria-hidden="true" className="completed-icon glyphicon air-icon-verified"></span>
                        </li>
                        <li className={step == 2 ? 'active' : 'disabled'}><a ><span  aria-hidden="true" className="glyphicon m-0-left air-icon-specifications"></span>
                            Location
                            </a> <span  aria-hidden="true" className="completed-icon glyphicon air-icon-verified"></span>
                        </li>
                        <li className={step == 3 ? 'active' : 'disabled'}><a ><span  aria-hidden="true" className="glyphicon m-0-left air-icon-complete"></span>
                            Social
                            </a> <span  aria-hidden="true" className="completed-icon glyphicon air-icon-verified"></span>
                        </li>
                        <li className={step == 4 ? 'active' : 'disabled'}><a ><span  aria-hidden="true" className="glyphicon m-0-left air-icon-complete"></span>
                            Skills, etc
                            </a> <span  aria-hidden="true" className="completed-icon glyphicon air-icon-verified"></span>
                        </li>
                        <li className={step == 5 ? 'active' : 'disabled'}><a ><span  aria-hidden="true" className="glyphicon m-0-left air-icon-complete"></span>
                            Pricing
                            </a> <span  aria-hidden="true" className="completed-icon glyphicon air-icon-verified"></span>
                        </li>
                        <li className={step == 6 ? 'active' : 'disabled'}><a ><span  aria-hidden="true" className="glyphicon m-0-left air-icon-complete"></span>
                            Work examples
                            </a> <span  aria-hidden="true" className="completed-icon glyphicon air-icon-verified"></span>
                        </li>

                    </ul>
                </div>
                <div className="col-md-9 right-box">
                    <div className="air-card m-0-top p-0-top-bottom">
                        <Formik
                        initialValues={{ 
                            picture: '', 
                            bio: ''
                        }}
                        validationSchema={profileValidation}
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
                                {this.ProfileStep(values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting)}
                                <div className="btn-row">
                                    {/* <a href="/freelancers/#specializedPortfolios" target="_self" className="btn btn-default ellipsis">
                                        Cancel
                                    </a> */}
                                    
                                    <button className="btn btn-default ellipsis" onClick={() => {this.gotoStep(-1)}}> Back </button>

                                    { step == 6 ? (<button className="btn btn-primary ellipsis" type="submit" > Save </button>) : ( <button className="btn btn-primary ellipsis" onClick={() => {this.gotoStep(1)}}> Next </button> ) }
                                </div>
                            </form>
                        
                        )}
                      </Formik>
                        
                    </div>
                </div>
                    <style jsx>{`
                        main {
                            width: 100%;
                            min-height: 600px;
                            padding-top: 100px;
                            background: white;
                            display: flex;
                        }

                        .eo-tabset.breadcrumbs li.active>a{
                            box-shadow: 0 1px 6px rgba(57,73,76,.35);
                        }

                        .eo-tabset.breadcrumbs .completed-icon.completed {
                            color: #37a000;
                        }

                        .right-box {
                            padding-left : 10px;
                            padding-right  : 10px;
                        }

                        .air-card {
                            margin : 0px;
                            padding-top: 30px;
                            min-height: 400px;
                        }

                        .ellipsis {
                            width: 100px !important;
                            margin-bottom: 0;
                        }
                    `}</style>
            </main>
            </Layout>
        );
    }
  }
  
  export default PortfolioPage;