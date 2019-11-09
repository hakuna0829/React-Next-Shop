import React from 'react';

import Layout from '../../components/Layout';
import {auth} from '../../utils/auth';


class AccountPage extends React.Component {
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
            <Layout title={'Account'}>
                <div className="suggest">
                    <h1> Artist Account </h1>
                    
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="settings-tab" data-toggle="tab" href="#settings" role="tab" aria-controls="settings" aria-selected="true">Account Settings</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="payment-tab" data-toggle="tab" href="#payment" role="tab" aria-controls="payment" aria-selected="false">Payment methods</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="email-tab" data-toggle="tab" href="#email" role="tab" aria-controls="email" aria-selected="false">Email</a>
                        </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="settings" role="tabpanel" aria-labelledby="settings-tab">Profile Update</div>
                        <div className="tab-pane fade" id="payment" role="tabpanel" aria-labelledby="payment-tab">Add/Remove payment methods</div>
                        <div className="tab-pane fade" id="email" role="tabpanel" aria-labelledby="email-tab">Email Preferences </div>
                    </div>

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
  
  export default AccountPage;