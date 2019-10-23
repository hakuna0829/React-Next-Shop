import React from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import Router from 'next/router';
import axios from 'axios';

import constants from '../constants';

import Layout from '../components/layout';
import ProfileForm from '../components/ProfileForm';

class ProfilePage extends React.Component {
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
        this.fetchData();
    }

    fetchData() {
        let token = localStorage.getItem("token")
        this.setState({loading: true}, () => {
            axios.get(constants.serverUrl + 'api/users/me', { headers: { 'Authorization': token } })
            .then((response) => {
                console.log('response', response)
                
                this.setState({
                    loading: false,
                    user: response.data.user
                });
            })
            .catch((error) => {
                Router.push('/login')
                this.setState({loading: false});
            });
        });
    }

    logout() {
        localStorage.removeItem("token")
        Router.push('/login')
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
                    <Button className="submit" onClick={this.logout} >Logout</Button>
                </ProfileForm>
                {/* { user.email } */}
                
            </Layout>
        );
    }
  }
  
  export default ProfilePage;