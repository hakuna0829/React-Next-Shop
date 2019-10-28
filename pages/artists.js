import React from 'react';
import Router from 'next/router';
import axios from 'axios';
import cookie from 'js-cookie';
import { Spinner } from 'react-bootstrap';

import Layout from '../components/Layout';
import Rate from '../components/profile/Rate';
import constants from '../constants';

class ArtistsPage extends React.Component {
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
        
        return (
            <Layout title={'Artists'}>
                <div className="suggest">
                    <div className="divider"></div>
                    <div className="inner_suggest">
                        
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
                                                        <img src="/images/new/artist2.png" className="card-img-top" alt=""/>
                                                        <span className="avatar">
                                                            <img src="/images/new/artist1.png" alt=""/>
                                                            
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
  
  export default ArtistsPage;