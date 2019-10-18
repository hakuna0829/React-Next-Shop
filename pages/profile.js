import React from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import Router from 'next/router';
import axios from 'axios';

import Layout from '../components/Layout';

const host = 'https://next-celeste.herokuapp.com/';

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
            axios.get(host + 'api/profile/', { headers: { 'Authorization': token } })
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
            <div className='container'>
                <h1>Profile Page</h1>
                { user.email }
                <p>
                    <Button variant="primary" onClick={this.logout} >Logout</Button>
                    
                </p>
            </div>
            </Layout>
        );
    }
  }
  
  export default ProfilePage;