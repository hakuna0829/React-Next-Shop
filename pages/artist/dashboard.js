import React from 'react';
import Router from 'next/router';
import Link from 'next/link';

import Layout from '../../components/Layout';
import {auth} from '../../utils/auth';


class DashboardPage extends React.Component {
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

    render() {
        return (
            <Layout title={'Dashboard'}>
                <div className="suggest">
                    <h1> Artist Dashboard </h1>
                    <ul>
                        <Link href={`/artist/gigs`}><a className="btn btn-primary">Upcoming gigs</a></Link>
                        <Link href={`/artist/past-jobs`}><a className="btn btn-primary">Past jobs</a></Link>
                        <Link href={`/artist/analytics`}><a className="btn btn-primary">Analytics</a></Link>
                        <Link href={`/artist/message-center`}><a className="btn btn-primary">Message Center</a></Link>
                        <Link href={`/artist/balance`}><a className="btn btn-primary">Balance</a></Link>
                        <Link href={`/artist/profile`}><a className="btn btn-success">Edit/View Profile</a></Link>
                        <Link href={`/artist/availability`}><a className="btn btn-primary">Availability</a></Link>
                    </ul>
                </div>
                <style jsx>{`
                    .suggest {
                        text-align: center;
                    }
                    ul {
                        text-align: center;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    ul a {
                        display: block;
                        width: 200px;
                        margin-bottom: 10px;

                    }    
                `}</style>
            </Layout>
        );
    }
  }
  
  export default DashboardPage;