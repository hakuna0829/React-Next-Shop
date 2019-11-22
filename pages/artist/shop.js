import React from 'react';
import Link from 'next/link';

import Layout from '../../components/Layout';


class ShopProfilePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pageTitle : 'Shop Profile'
        };

    }

    render() {
        const { pageTitle } = this.state
        return (
            <Layout title={ pageTitle }>
                <div className="profile">
                    <div className="container">
                        <h1> { pageTitle }</h1>
                    </div>
                </div>
            </Layout>
        );
    }
  }
  
  export default ShopProfilePage;