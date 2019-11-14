import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import axios from 'axios';

import Rate from '../components/profile/Rate';
import Layout from '../components/Layout';


class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            artists: [1,2,3,4,5,6,7,8,9,10,11,12]
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        let { artists } = this.state
        artists = artists.map(artist => {
            return {
                name : "Claire beckham",
                year : artist * 7 % 10 + 1,
                rate : artist * 3 % 4 + 1,
                location : "Brooklyn, New York"
            }
        })
        this.setState({artists});
    }

    render() {
        //const { artists } = this.state
        
        return (
            <Layout title={'Index'}>
                <div className="overall" id="artist-landing">
                    <div className="content">
                        <div className="container">
                            <div className="artist_landing join">
                                <div className="artist_landing_item">
                                    <h3>Home Page</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="suggest">
                    <div className="inner_suggest">
                        <div className="container-fluid">
                            <div className="artists">
                                <h1>Home</h1>
                                
                                <Link href="/client/login">
                                    <a className="btn btn-success">Log in</a>
                                </Link>
                                
                                <Link href="/client/signup">
                                    <a className="btn btn-primary">Sign Up</a>
                                </Link>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    .artists a{
                        margin: 20px;
                    }
                `}</style>
            </Layout>
        );
    }
  }
  
  export default HomePage;