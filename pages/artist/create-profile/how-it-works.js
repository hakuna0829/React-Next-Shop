import React from 'react';
import Link from 'next/link';

import Layout from '../../../components/Layout';


class SelectCategoryPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            artist: {}
        };

    }

    render() {
        return (
            <Layout title={'How it works'}>
                <div className="profile" id="profile-checklist">
                    <div className="container">
                        <h1>How it works</h1>
                        <div className="list-item active">
                            <div className="description">
                                <h3>1 Clients find you</h3>
                                <p>Tell your clients a little about yourself and why your passionate about makeup. Your bio gives clients a chance to get to know you better</p>
                            </div>
                        </div>
                        <div className="list-item">
                            <div className="description">
                                <h3>2 They send you an appointment request</h3>
                                <p>Tell your clients a little about yourself and why your passionate about makeup. Your bio gives clients a chance to get to know you better</p>
                            </div>
                        </div>
                        <div className="list-item">
                            <div className="description">
                                <h3>3 You get notified</h3>
                                <p>Tell your clients a little about yourself and why your passionate about makeup. Your bio gives clients a chance to get to know you better</p>
                            </div>
                        </div>
                        <div className="page-navs">
                            <Link href={`/artist/create-profile/service-complete`}><a className="btn btn-secondary">Back</a></Link>
                            <Link href={`/artist/create-profile/availability`}><a className="btn btn-secondary">Next</a></Link>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
  }
  
  export default SelectCategoryPage;