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
            <Layout title={'Index'}>
                <div className="suggest">
                    <div className="divider"></div>
                    
                    <div className="divider"></div>
                    <div className="inner_suggest">
                        <div className="container-fluid">
                            <div className="artists">

                                <Link href="/artist/login">
                                    <a className="">Log in</a>
                                </Link>
                                <Link href="/artist/signup">
                                    <a className="">Sign Up</a>
                                </Link>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
  }
  
  export default ArtistLandingPage;