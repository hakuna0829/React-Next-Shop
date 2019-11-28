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
                <div className="profile">
                    <h1> Client Dashboard </h1>
                    <ul>
                        <Link href={`/client/saved-jobs`}><a className="btn btn-primary">Saved</a></Link>
                        <Link href={`/client/appointments`}><a className="btn btn-primary">Appointments</a></Link>
                        <Link href={`/client/messages`}><a className="btn btn-primary">Messages</a></Link>


                        <Link href={`/client/account`}><a className="btn btn-success">Account</a></Link>
                        <Link href={`/client/help`}><a className="btn btn-primary">Help</a></Link>
                        <Link href={`/artist/dashboard`}><a className="btn btn-success">Become an artist</a></Link>
                    </ul>
                </div>
            </Layout>
        );
    }
  }
  
  export default DashboardPage;