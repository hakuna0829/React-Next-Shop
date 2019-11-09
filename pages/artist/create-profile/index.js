import React from 'react';
import Link from 'next/link';

import Layout from '../../../components/Layout';
import {auth} from '../../../utils/auth';


class CreateProfileCheckListPage extends React.Component {
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
                    <h1> Create Profile Checklist </h1>
                    <ul>
                        <Link href={`/artist/create-profile/profile`}><a className="btn btn-primary">Create Your Profile</a></Link>
                        <Link href={`/artist/create-profile/services`}><a className="btn btn-primary">Set Your Services</a></Link>
                        <Link href={`/artist/create-profile/policies`}><a className="btn btn-primary">Shop Policies and availability</a></Link>
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
  
  export default CreateProfileCheckListPage;