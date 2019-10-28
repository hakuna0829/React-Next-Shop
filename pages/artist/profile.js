import React from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import Router from 'next/router';
import axios from 'axios';
import cookie from 'js-cookie';

import Layout from '../../components/Layout';

import constants from '../../constants';
import {auth} from '../../utils/auth';

class ProfilePage extends React.Component {
    static getInitialProps (ctx) {
        // Check user's session
        const token = auth(ctx);
        return { token }
    }
    
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
        this.setState({loading: true}, () => {
            axios.get(constants.serverUrl + 'api/artists/me', { headers: { 'Authorization': token } })
            .then((response) => {
                console.log('artists/me response', response)
                if(response.data.artist.has_profile == false)
                {
                    Router.push('/artist/create-profile') 
                }
                this.setState({
                    loading: false,
                    artist: response.data.artist
                });
            })
            .catch((error) => {
                Router.push('/')
                this.setState({loading: false});
            });
        });
    }

    render() {
        const { artist } = this.state
        //const { artist } = this.props;
        return (
            <Layout title={'Profile'}>
            
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"></link>
            <link rel="stylesheet" type="text/css" href="../css/profile.css"></link>
            <link rel="stylesheet" type="text/css" href="../css/landing.css"></link>
            <div id="student_public">
                <div className="content">
                    <div className="row">
                        <div className="container">
                            <div className="header">
                                <div className="profile">
                                    <img src="/images/user7.jpg" alt=""/>
                                    <div className="personal_info">
                                        <p className="name">{ artist.first_name } { artist.last_name }</p>
                                        <p className="location">{ artist.location }</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="aboutme">
                                <p className="category">About Me</p>
                                <p>{ artist.bio }</p>
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
                                                {/* <img src="images/eye.svg" alt=""/> */}
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
                                                {/* <img src="images/eye.svg" alt=""/> */}
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
  
  export default ProfilePage;