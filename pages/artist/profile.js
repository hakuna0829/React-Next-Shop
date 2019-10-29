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
            
            <div className="profile">
                <div className="profile_back">
                    <img src="/images/background.png" alt="" style={{height: 'auto', 'width': '100%'}}/>
                    <span className="profile_avatar">
                        <img src="/images/artist1.png" alt="User"/>
                    </span>
                    <button type="button" className="view">View Work</button>
                    <button type="button" className="request">Request to Book</button>
                </div>
                <div className="profile_content">
                    <div className="row">
                        <div className="col-md-4 intro">
                            <h1>Ashley Simmons</h1>
                            <div className="skill_group">
                                <p className="skill">Skill 1</p>
                                <p className="skill">Skill 2</p>
                                <p className="skill">Skill 3</p>
                            </div>
                            <div className="location">
                                <i className="fas fa-map-marker-alt"></i>
                                <p>Brooklyn, NY USA</p>
                            </div>
                            <p className="reply">Usually replies in a couple hours</p>
                            <div className="booking">
                                <div className="booking_item">
                                    <p className="number">457</p>
                                    <p className="pointer">Bookings</p>
                                </div>
                                <div className="booking_item">
                                    <div className="icon_group">
                                        <i className="fas fa-dollar-sign active"></i>
                                        <i className="fas fa-dollar-sign active"></i>
                                        <i className="fas fa-dollar-sign active"></i>
                                        <i className="fas fa-dollar-sign inactive"></i>
                                    </div>
                                    <p className="pointer">Rate</p>
                                </div>
                                <div className="booking_item">
                                    <p className="number">7</p>
                                    <p className="pointer">Years exp</p>
                                </div>
                            </div>
                            <div className="book_link">
                                <button>
                                    <a href="">Visit Portfolio Site</a>
                                </button>
                            </div>
                            <div className="social_group">
                                <div className="i_item">
                                    <i className="fab fa-youtube"></i>
                                </div>
                                <div className="i_item">
                                    <i className="fab fa-instagram"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <h5>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibheuismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex eacommodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat.
                            </h5>
                            <hr/>
                            <div className="pricing">
                                <h3>Pricing</h3>
                                <div className="pricing_item">
                                    <div className="text">
                                        <p className="bold">Per face</p>
                                        <p className="des">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibheuismod tincidunt</p>
                                    </div>
                                    <p className="price">$250</p>
                                </div>
                                <div className="pricing_item">
                                    <div className="text">
                                        <p className="bold">Per face</p>
                                        <p className="des">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibheuismod tincidunt</p>
                                    </div>
                                    <p className="price">$250</p>
                                </div>
                                <div className="pricing_item">
                                    <div className="text">
                                        <p className="bold">Per face</p>
                                        <p className="des">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibheuismod tincidunt</p>
                                    </div>
                                    <p className="price">$250</p>
                                </div>
                            </div>
                            <hr/>
                            <div className="products">
                                <h3>Products Used</h3>
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="card">
                                            <img src="/images/product.png" className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <h5 className="card-title">BRIOGEO</h5>
                                                <p className="card-text">Scalp Revival Charcoal + </p>
                                                <p className="card-text">Coconut Oil Micro -</p>
                                                <p className="card-text">exfoliating Shampoo</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card">
                                            <img src="/images/product.png" className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <h5 className="card-title">BRIOGEO</h5>
                                                <p className="card-text">Scalp Revival Charcoal + </p>
                                                <p className="card-text">Coconut Oil Micro -</p>
                                                <p className="card-text">exfoliating Shampoo</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card">
                                            <img src="/images/product.png" className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <h5 className="card-title">BRIOGEO</h5>
                                                <p className="card-text">Scalp Revival Charcoal + </p>
                                                <p className="card-text">Coconut Oil Micro -</p>
                                                <p className="card-text">exfoliating Shampoo</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card">
                                            <img src="/images/product.png" className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <h5 className="card-title">BRIOGEO</h5>
                                                <p className="card-text">Scalp Revival Charcoal + </p>
                                                <p className="card-text">Coconut Oil Micro -</p>
                                                <p className="card-text">exfoliating Shampoo</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div className="instagram">
                                <div className="instagram_header">
                                    <i className="fab fa-instagram"></i><h3>Instagram</h3>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="card">
                                            <img src="/images/product.png" className="card-img-top" alt="..."/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card">
                                            <img src="/images/product.png" className="card-img-top" alt="..."/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card">
                                            <img src="/images/product.png" className="card-img-top" alt="..."/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card">
                                            <img src="/images/product.png" className="card-img-top" alt="..."/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card">
                                            <img src="/images/product.png" className="card-img-top" alt="..."/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card">
                                            <img src="/images/product.png" className="card-img-top" alt="..."/>
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