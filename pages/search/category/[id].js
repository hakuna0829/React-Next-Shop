import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import Link from 'next/link';
import Router from 'next/router';
import axios from 'axios';

import constants from '../../../constants';

import Layout from '../../../components/Layout';

class CategorySearchPage extends React.Component {

    static getInitialProps ({ query: { id } }) {
        console.log('query id', id)
        
        return { id };
    }

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            artist: {},
            pricings: {},
            work_photos: {},
        };

    }

    componentDidMount() {
       this.fetchData();
    }

    fetchData() {
        console.log( this.props.id)
        console.log('fetch')
        this.setState({loading: true}, () => {
            axios.get(constants.serverUrl + 'api/search/category/' + this.props.id )
            .then((response) => {
                console.log('response', response)
                
                this.setState({
                    loading: false,
                    ...response.data
                });
            })
            .catch((error) => {
                Router.push('/')
                this.setState({loading: false});
            });
        });
    }

    render() {
        const { artist, pricings, loading } = this.state
        //const { artist } = this.props;
        return (
            <Layout title={'Category Search'}>
                <div className="profile">
                    <div className="container">
                        <h1> Category Search Results </h1>
                    </div> 
                </div>
            </Layout>
        );
    }
  }
  
  export default CategorySearchPage;