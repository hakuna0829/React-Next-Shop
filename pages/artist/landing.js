import React from 'react';
import Link from 'next/link';

import Layout from '../../components/Layout';

class ArtistLandingPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
    }


    render() {
        return (
            <Layout title={'Artist Landing'}>
                <div className="overall" id="artist-landing">
                    <div className="content">
                        <div className="container">
                            <div className="artist_landing join">
                                <div className="artist_landing_item">
                                    <h3>Get access to hundreds of new clients</h3>
                                    <button className="btn btn-primary">Join now</button>
                                </div>
                            </div>
                            <div className="artist_landing">
                                <div className="artist_landing_item">
                                    <h3>Marketing content about the benefits of joining as an artist</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
  }
  
  export default ArtistLandingPage;