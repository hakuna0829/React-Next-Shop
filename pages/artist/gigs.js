import React from 'react';
import Router from 'next/router';
import Link from 'next/link';

import Layout from '../../components/Layout';


class GigsPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pageTitle : 'Upcoming Gigs'
        };

    }

    render() {
        const { pageTitle } = this.state
        return (
            <Layout title={ pageTitle }>
                <div className="suggest">
                    <h1> { pageTitle } </h1>
                    <Link href={`/artist/dashboard`}><a className="btn btn-primary">Go to dashboard</a></Link>
                </div>
                <style jsx>{`
                    .suggest {
                        text-align: center;
                    }
                `}</style>
            </Layout>
        );
    }
  }
  
  export default GigsPage;