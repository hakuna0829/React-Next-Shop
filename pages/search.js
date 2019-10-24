import React from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import Router from 'next/router';
import axios from 'axios';


import Layout from '../components/layout';

import constants from '../constants';

import css from "../landing.css"

class SearchPage extends React.Component {
    // static getInitialProps ({ query: { id } }) {
    //   return { id };
    // }
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            artist: {}
        };

    }


    render() {
        const { artist } = this.state
        //const { artist } = this.props;
        return (
            <Layout title={'Search'}>
            
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"></link>
            <link rel="stylesheet" type="text/css" href="css/profile.css"></link>
            <div id="student_public">
                
                <div className="content">
                    <div className="row">
                        <div className="container">
                            <div className="header">
                                <div className="profile">
                                    <h1>Search Artists</h1>
                                    <img src="/images/user1.jpg" alt=""/>
                                    <div className="personal_info">
                                        
                                        <p className="job">Front-end Developer</p>
                                        
                                        {/* <button>Connect</button> */}
                                    </div>
                                </div>
                            </div>
                            <div className="links">
                                <div className="row">
                                    <div className="col s6 m4 l4 xl4">
                                        <p className="title">Bootcamp</p>
                                        <p className="link">XYZ Academy</p>
                                    </div>
                                    <div className="col s6 m4 l4 xl4">
                                        <p className="title">Website</p>
                                        <p className="download">xyzacademy.com</p>
                                    </div>
                                    <div className="col s6 m4 l4 xl4">
                                        <p className="title">LinkedIn</p>
                                        <p className="link">Not Connected</p>
                                    </div>
                                </div>
                            </div>
                            <div className="aboutme">
                                <p className="category">About Me</p>
                                <p>Hi! Nice to meet you.</p>
                                <p>I'm a graduated of XYZ Academy, one of the top software development boot camps in the country.
                                    While I was there, I learned technologies such a Node.js, React, SQL and Postgres</p>
                            </div>
                            <div className="skills">
                                <p className="category">Skills</p>
                                <div className="tags">
                                    <span className="tag">React</span>
                                    <span className="tag">Vue</span>
                                </div>
                            </div>
                            <div className="education">
                                <p className="category">Education</p>
                                <div className="education_content">
                                    <p className="degree">B.A. in Computer Science</p>
                                    <p className="university">Berkley University</p>
                                    <p className="year">2013-2016</p>
                                    <p className="normal">After transferring on a scholarship, my two first years were spent working and studying at a boutique
                                            design agency led by the course director. I was given the opportunity to work on large scale projects
                                            for the university, local government and private business.</p>
                                    <p className="normal">From there I started as a part-time remote designer for an environment nonprofits.</p>
                                </div>
                            </div>
                            <div className="portfolio">
                                <p className="category">Portfolio</p>
                                <div className="row">
                                    <div className="col s12 m6 l6 xl6 ">
                                        <div className="card">
                                            <div className="card-content">
                                                <span className="card-title">
                                                    Dogs without borders <br/> A case study about borders
                                                </span>
                                                <p>
                                                    What happens when you remove any and all borders from dogs? Let me show you.
                                                </p>
                                            </div>
                                            <div className="card-action">
                                                <p className="italic">Dogerama & Co</p>
                                                <img src="images/eye.svg" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col s12 m6 l6 xl6">
                                        <div className="card">
                                            <div className="card-content">
                                                <span className="card-title">
                                                    Dogs without borders <br/> A case study about borders
                                                </span>
                                                <p>
                                                    What happens when you remove any and all borders from dogs? Let me show you.
                                                </p>
                                            </div>
                                            <div className="card-action">
                                                <p className="italic">Dogerama & Co</p>
                                                <img src="images/eye.svg" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Layout>
        );
    }
  }
  
  export default SearchPage;