import React from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import Router from 'next/router';
import axios from 'axios';
import cookie from 'js-cookie';

import constants from '../../constants';

import Layout from '../../components/Layout';
import ProfileForm from '../../components/ProfileForm';

class ClientProfilePage extends React.Component {
    // static getInitialProps ({ query: { id } }) {
    //   return { id };
    // }
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            user: {}
        };
        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount() {
        console.log('client_profile page')
        this.fetchData();
    }

    fetchData() {
        let token = cookie.get('token')
        this.setState({loading: true}, () => {
            axios.get(constants.serverUrl + 'api/users/me', { headers: { 'Authorization': token } })
            .then((response) => {
                console.log('client_profile response', response)
                
                this.setState({
                    loading: false,
                    user: response.data.user
                });
            })
            .catch((error) => {
                Router.push('/')
                this.setState({loading: false});
            });
        });
    }


    render() {
        const { user } = this.state
        return (
            <Layout title={ 'Profile' }>
                <div className="agileits-inner-banner">
		
                </div>
                <div className="w3layouts-breadcrumbs text-center">
                    <div className="container">
                        <span className="agile-breadcrumbs"><a href="index.html"><i className="fa fa-home home_1"></i></a> / <span>Profile</span></span>
                    </div>
                </div>
                <ProfileForm user={user}>
                    
                </ProfileForm>
                {/* { user.email } */}
                
            </Layout>
        );
    }
  }
  
  export default ClientProfilePage;