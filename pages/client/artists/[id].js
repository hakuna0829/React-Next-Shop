import React from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import Router from 'next/router';
import axios from 'axios';
import cookie from 'js-cookie';


import Layout from '../../../components/Layout';

import constants from '../../../constants';

class ArtistProfilePage extends React.Component {
    static getInitialProps ({ query: { id } }) {
        console.log('query id', id)
        
        return { id };
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
            axios.get(constants.serverUrl + 'api/artists/' + this.props.id, { headers: { 'Authorization': token } })
            .then((response) => {
                console.log('get artist response', response)
                
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
        return (
            <Layout title={'Profile'}>
            
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"></link>
            <link rel="stylesheet" type="text/css" href="css/profile.css"></link>
            <link rel="stylesheet" type="text/css" href="css/landing.css"></link>
            <div id="student_public">
                <div className="content">
                    <div className="row">
                        <div className="container">
                            <div className="header">
                                <div className="profile">
                                    <img src={`/images/user${artist.id}.jpg`} alt=""/>
                                    <div className="personal_info">
                                        <h4 className="name">{artist.first_name} {artist.last_name}</h4>
                                        <h5 className="location">{artist.location}</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="aboutme">
                                <p className="category">About Me</p>
                                <p>{artist.bio}</p>
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
  
  export default ArtistProfilePage;