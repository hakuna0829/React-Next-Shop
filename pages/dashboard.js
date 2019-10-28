import React from 'react';
import Router from 'next/router';


import Layout from '../components/Layout';


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
                <div className="suggest">
                    <h1> Artist Dashboard </h1>
                </div>
            </Layout>
        );
    }
  }
  
  export default DashboardPage;