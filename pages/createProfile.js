import React from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import Router from 'next/router';
import axios from 'axios';


import Layout from '../components/Layout';

import constants from '../constants';

//import css from "../landing.css"

class CreateProfilePage extends React.Component {
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

            picture: '',
            bio: 'Temporary',
            work_site: 'work.com',
            rate: 2,
            location: 'New York',
            can_travel: true,
            max_travel_distance: 10,
            instagram_url: '',
            facebook_url: '',
            linkedin_url: '',
            skills: 'html, css',
            labels: 'bootstrap',
            experience: 5,
            pricing_types: 'Wedding Makeup',
            prices: 100,
            work_photos: ''
        
        };

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
        let token = localStorage.getItem("token")
        let {...artist} = this.state

        console.log(artist)
        axios.post(constants.serverUrl + 'api/artist/create', artist, { headers: { 'Authorization': token } })
          .then((response) => {
            console.log(response)
            if(response.data.auth == true) {
                Router.push('/profile')
            }
           
          })
          .catch((error) => {
            this.setState({loading: false});
          })
    }
    
    handleChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        this.setState({
            [name]: value
        });
    }

    
    ProfileStep = () => {
        let {step} = this.state
        switch(step) {
          case 0:
            return (
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label htmlFor="picture" className="control-label">Picture</label> 
                            <input id="picture" placeholder="picture" type="file" className="form-control" onChange={this.handleChange}
                                name="picture"
                                value={this.state.picture}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="bio" className="control-label">Bio</label> 
                            <textarea id="bio" placeholder="Bio" className="form-control" onChange={this.handleChange}
                                name="bio"
                                value={this.state.bio}/>
                        </div>
                    </div>
                </div>
            );
          case 1:
            return (
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label htmlFor="work_site" className="control-label">Your Work</label> 
                            <input id="work_site" placeholder="yourwork.com" type="text" className="form-control" onChange={this.handleChange}
                                name="work_site"
                                value={this.state.work_site}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="rate" className="control-label">Rate</label> 
                            <input id="rate" placeholder="Just a range to give your clients a guide" type="text" className="form-control" onChange={this.handleChange}
                                name="rate"
                                value={this.state.rate}/>
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
                            <input id="location" placeholder="Brooklyn, New York, USA" type="text" className="form-control" onChange={this.handleChange}
                                name="location"
                                value={this.state.location}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="can_travel" className="control-label">Willing to travel?</label> 
                            <input id="can_travel" placeholder="100km" type="checkbox" className="form-control" onChange={this.handleChange}
                                name="can_travel"
                                checked={!!this.state.can_travel}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="max_travel_distance" className="control-label">How far are you willing to travel?</label> 
                            <input id="max_travel_distance" placeholder="100km" type="text" className="form-control" onChange={this.handleChange}
                                name="max_travel_distance"
                                value={this.state.max_travel_distance}/>
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
                            <label htmlFor="instagram_url" className="control-label">Instagram</label> 
                            <input id="instagram_url" placeholder="Instagram" type="text" className="form-control" onChange={this.handleChange}
                                name="instagram_url"
                                value={this.state.instagram_url}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="facebook_url" className="control-label">Facebook</label> 
                            <input id="facebook_url" placeholder="Facebook" type="text" className="form-control" onChange={this.handleChange}
                                name="facebook_url"
                                value={this.state.facebook_url}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="linkedin_url" className="control-label">Linkedin</label> 
                            <input id="linkedin_url" placeholder="Linkedin" type="text" className="form-control" onChange={this.handleChange}
                                name="linkedin_url"
                                value={this.state.linkedin_url}/>
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
                            <input id="skills" placeholder="Skills" type="text" className="form-control" onChange={this.handleChange}
                                name="skills"
                                value={this.state.skills}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="labels" className="control-label">More labels to pick</label> 
                            <input id="labels" placeholder="labels" type="text" className="form-control" onChange={this.handleChange}
                                name="labels"
                                value={this.state.labels}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="experience" className="control-label">Experience : When did you start your career?</label> 
                            <input id="experience" placeholder="Experience" type="text" className="form-control" onChange={this.handleChange}
                                name="experience"
                                value={this.state.experience}/>
                        </div>
                    </div>
                </div>
            );
        case 5:
            return (
                <div className="row">
                    <div className="col-lg-12">
                        <h2>Pricing</h2>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input name="pricing_types" placeholder="Wedding makeup" type="text" className="form-control" onChange={this.handleChange}
                                value={this.state.pricing_types}/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input name="prices" placeholder="250$" type="text" className="form-control" onChange={this.handleChange}
                                value={this.state.prices}/>
                        </div>
                    </div>
                </div>
            );
        case 6:
            return (
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label htmlFor="work_photos" className="control-label">Add Photos of your work</label> 
                            <input id="work_photos" placeholder="work_photos" type="text" className="form-control" onChange={this.handleChange}
                                name="work_photos"
                                value={this.state.work_photos}/>
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
                <link rel="stylesheet" type="text/css" href="css/landing.css"></link>
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
                        
                                {this.ProfileStep()}
                                <div className="btn-row">
                                    {/* <a href="/freelancers/#specializedwork_sites" target="_self" className="btn btn-default ellipsis">
                                        Cancel
                                    </a> */}
                                    
                                    <button className="btn btn-default ellipsis" type="button" onClick={() => {this.gotoStep(-1)}}> Back </button>
                                    
                                    { step == 6 ? (<button className="btn btn-primary ellipsis" type="submit" onClick={this.saveProfile} > Save </button>) : ( <button type="button" className="btn btn-primary ellipsis" onClick={() => {this.gotoStep(1)}}> Next </button> ) }

                                    <button className="btn btn-primary ellipsis" type="submit" onClick={this.saveProfile} > Save </button>
                                </div>
                            
                        
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

                        input[type='checkbox'] {
                            width: 40px !important;
                        }
                    `}</style>
            </main>
            </Layout>
        );
    }
  }
  
  export default CreateProfilePage;