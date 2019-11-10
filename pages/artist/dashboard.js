import React from 'react';
import Link from 'next/link';

import Layout from '../../components/Layout';


class DashboardPage extends React.Component {

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
                        <Link href={`/artist/dashboard`}><a className="btn btn-primary">Dashboard</a></Link>
                        <Link href={`/artist/messages`}><a className="btn btn-primary">Messages</a></Link>
                        <Link href={`/artist/calendar`}><a className="btn btn-primary">Calendar</a></Link>
                        <Link href={`/artist/appointments`}><a className="btn btn-primary">Appointments</a></Link>
                       
                        <Link href={`/artist/account`}><a className="btn btn-success">Account</a></Link>
                        {/* <Link href={`/artist/profile`}><a className="btn btn-success">Edit/View Profile</a></Link> */}
                        <Link href={`/client/dashboard`}><a className="btn btn-success">Celeste for clients</a></Link>
                        <Link href={`/artist/shop`}><a className="btn btn-primary">Your Shop</a></Link>
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