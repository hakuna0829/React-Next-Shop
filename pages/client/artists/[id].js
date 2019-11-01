import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import Link from 'next/link';
import Router from 'next/router';
import axios from 'axios';
import cookie from 'js-cookie';


import Layout from '../../../components/Layout';
import Rate from '../../../components/profile/Rate';
import Skills from '../../../components/profile/Skills';

import constants from '../../../constants';
import {auth} from '../../../utils/auth';

class ArtistProfilePage extends React.Component {
    static getInitialProps (ctx) {
        // Check user's session
        const token = auth(ctx);
        let id = ctx.query.id;
        return { token, id }
    }

    // static getInitialProps ({ query: { id } }) {
    //     console.log('query id', id)
        
    //     return { id };
    // }

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
        let token = this.props.token
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
        const { artist, loading } = this.state
        //const { artist } = this.props;
        return (
            <Layout title={'Profile'}>
            { loading ? <Spinner animation="border" variant="dark"/> : 
            <div className="profile">
                <div className="profile_back">
                    <img src="/images/background1.png" alt="" style={{height: 'auto', 'width': '100%'}}/>
                    <span className="profile_avatar">
                        <img src={`/images/user${ artist.id }.jpg`} alt="User"/>
                    </span>
                    <button type="button" className="view">View Work</button>
                    <Link href='/client/book/2'><a className="request">Request to Book</a></Link>
                </div>
                <div className="profile_content">
                    <div className="row">
                        <div className="col-md-4 intro">
                            <h1>{ artist.first_name + " " + artist.last_name }</h1>
                            <Skills skills={ artist.skills }></Skills>
                            <div className="location">
                                <i className="fas fa-map-marker-alt"></i>
                                <p>{ artist.location }</p>
                            </div>
                            <p className="reply">Usually replies in a couple hours</p>
                            <div className="numbers">
                                <div className="numbers_item">
                                    <p className="number">457</p>
                                    <p className="title">Bookings</p>
                                </div>
                                <div className="numbers_item">
                                    <Rate rate={+artist.rate} groupClass="icon_group"></Rate>
                                    <p className="title">Rate</p>
                                </div>
                                <div className="numbers_item">
                                    <p className="number">{ artist.experience }</p>
                                    <p className="title">Years exp</p>
                                </div>
                            </div>
                            <div className="book_link">
                                <div>
                                    <Link href={ artist.work_site }><a>Visit Portfolio Site</a></Link>
                                </div>
                            </div>
                            <div className="social_group">
                                <Link href={ artist.instagram_url }><a>
                                    <div className="i_item">
                                        <i className="fab fa-youtube"></i>
                                    </div>
                                </a></Link>
                                <Link href={ artist.instagram_url }><a>
                                    <div className="i_item">
                                        <i className="fab fa-instagram"></i>
                                    </div>
                                </a></Link>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <h5 dangerouslySetInnerHTML={{__html: artist.bio }}>
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
            }
            </Layout>
        );
    }
  }
  
  export default ArtistProfilePage;