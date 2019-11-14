import React from 'react';
import Link from 'next/link';

import Layout from '../../../components/Layout';

class CreateProfileCheckListPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            artist: {}
        };

    }

    render() {
        return (
            <Layout title={'Create Profile Checklist'}>
                <div className="overall" id="profile-checklist">
                    <div className="container">
                        <div className="row list-item active">
                            <div className="col-md-2"></div>
                            <div className="col-md-5">
                                <h3>Create your profile</h3>
                                <p>Tell your clients a little about yourself and why your passionate about makeup. Your bio gives clients a chance to get to know you better</p>
                            </div>
                            <div className="col-md-3 btn-box">
                                <Link href={`/artist/create-profile/profile`}><a className="btn standard">Start</a></Link>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                        <div className="row list-item">
                            <div className="col-md-2"></div>
                            <div className="col-md-5">
                                <h3>Set your services</h3>
                                <p>Tell your clients a little about yourself and why your passionate about makeup. Your bio gives clients a chance to get to know you better</p>
                            </div>
                            <div className="col-md-3 btn-box">
                                <Link href={`/artist/create-profile/services`}><a className="btn standard">Start</a></Link>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                        <div className="row list-item">
                            <div className="col-md-2"></div>
                            <div className="col-md-5">
                                <h3>Shop policies and availability</h3>
                                <p>Tell your clients a little about yourself and why your passionate about makeup. Your bio gives clients a chance to get to know you better</p>
                            </div>
                            <div className="col-md-3 btn-box">
                                <Link href={`/artist/create-profile/policies`}><a className="btn standard">Start</a></Link>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
  }
  
  export default CreateProfileCheckListPage;