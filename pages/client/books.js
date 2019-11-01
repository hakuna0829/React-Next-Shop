import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import Link from 'next/link';
import Router from 'next/router';
import axios from 'axios';
import cookie from 'js-cookie';


import Layout from '../../components/Layout';
import Rate from '../../components/profile/Rate';
import Skills from '../../components/profile/Skills';

import constants from '../../constants';
import {auth} from '../../utils/auth';

class ArtistProfilePage extends React.Component {
    static getInitialProps (ctx) {
        // Check user's session
        const token = auth(ctx);
        let id = ctx.query.artist;
        console.log('artist', id)
        return { token, id }
    }

    // static getInitialProps ({ query: { id } }) {
    //     console.log('query id', id)
        
    //     return { id };
    // }

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            artist: {}
        };

    }

    componentDidMount() {
       this.fetchData();
    }

    fetchData() {
        let token = this.props.token
        this.setState({loading: true}, () => {
            axios.get(constants.serverUrl + 'api/artists/' + this.props.id, { headers: { 'Authorization': token } })
            .then((response) => {
                console.log('get artist response', response)
                
                this.setState({
                    loading: false,
                    artist: response.data.artist
                });
            })
            .catch((error) => {
                Router.push('/')
                this.setState({loading: false});
            });
        });
    }

    render() {
        const { artist, loading } = this.state
        //const { artist } = this.props;
        return (
            <Layout title={'Book'}>
            { loading ? <Spinner animation="border" variant="dark"/> : 
            <div>
                <h1>Book</h1>
            </div>
            }
            </Layout>
        );
    }
  }
  
  export default ArtistProfilePage;