import React from 'react';
import Link from 'next/link';

import Layout from '../../components/Layout';
import {auth} from '../../utils/auth';

class ArtistLandingPage extends React.Component {
    static getInitialProps (ctx) {
        // Check user's session
        const token = auth(ctx);
        return { token }
    }

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
    }


    render() {
        return (
            <Layout title={'Artist Landing'}>
                <div className="suggest">
                    <h1> Artists Landing </h1>
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
                <style jsx>{`
                    .artists a{
                        margin: 20px;
                    }
                `}</style>
            </Layout>
        );
    }
  }
  
  export default ArtistLandingPage;