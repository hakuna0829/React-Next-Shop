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
                <div class="overall" id="artist-landing">
                    <div class="content">
                        <div class="container">
                            <div class="artist_landing join">
                                <div class="artist_landing_item">
                                    <h3>Get access to hundreds of new clients</h3>
                                    <button class="btn btn-primary">Join now</button>
                                </div>
                            </div>
                            <div class="artist_landing">
                                <div class="artist_landing_item">
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