import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import axios from 'axios';
import cookie from 'js-cookie';
import { Spinner } from 'react-bootstrap';

import Layout from '../components/Layout';
import Rate from '../components/profile/Rate';

import constants from '../constants';

class SearchPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            artists: []
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        let token = cookie.get('token')
        this.setState({loading: true}, () => {
            axios.get(constants.serverUrl + 'api/artists', { headers: { 'Authorization': token } })
            .then((response) => {
                console.log('artists response', response)
                this.setState({
                    loading: false,
                    artists: response.data.artists
                });
                
            })
            .catch((error) => {
                Router.push('/')
                this.setState({loading: false});
            });
        });
    }

    render() {
        const { artists, loading } = this.state
        
        console.log(artists, this.state)
        return (
            <Layout title={'Artists'}>
                <div className="suggest">
                    <div className="divider"></div>
                    <div className="inner_suggest">
                        <div className="container-fluid">
                            <div className="filter_part">
                                <i className="fas fa-filter"></i>
                                <button className="filter_btn">Location</button>
                                <button className="filter_btn">Experience</button>
                                <button className="filter_btn">Rate</button>
                            </div>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="inner_suggest">
                        <div className="container-fluid">
                            <div className="artists">
                                <h3>Suggested Artists</h3>
                                { loading ? <Spinner animation="border" variant="dark"/> : 
                                <div className="row">
                                    { artists.map((artist, i) => {     
                                        return (
                                            <div className="col-lg-3 col-md-6 col-sm-12" key={i}>
                                                <div className="card">
                                                    <div className="card-header">
                                                        <Link href={`client/artists/${artist.id}`}><a>
                                                            { artist.picture ? 
                                                                <img src={artist.picture} className="card-img-top" alt="Work Photo"/> :
                                                                <img src="/images/user2.jpg" className="card-img-top" alt="Work Photo"/>
                                                            }
                                                            </a>
                                                        </Link>
                                                        <span className="avatar">
                                                            { artist.picture ? 
                                                                <img src={artist.picture} alt="Avatar"/> :
                                                                <img src="/images/user1.jpg" alt="Avatar"/>
                                                            }
                                                        </span>
                                                        <span className="vetted">
                                                                <p>Vetted</p>
                                                            </span>
                                                    </div>
                                                    <div className="card-body">
                                                        <h3>{artist.first_name} {artist.last_name}</h3>
                                                        <h5 className="experience">{artist.experience} years of experience</h5>
                                                        <div className="rate">
                                                            <Rate rate={+artist.rate}></Rate>
                                                            <h6>{artist.location}</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ) 
                                    })}
                                </div>
                                }
                            </div>
                            <nav aria-label="Page navigation example">
                                
                            </nav>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
  }
  
  export default SearchPage;