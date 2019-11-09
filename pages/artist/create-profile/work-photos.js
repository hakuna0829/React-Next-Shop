import React from 'react';
import Link from 'next/link';

import Layout from '../../../components/Layout';
import {auth} from '../../../utils/auth';


class SelectCategoryPage extends React.Component {
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
            <Layout title={'Work Photos'}>
                <div className="suggest">
                    <h1> Work Photos </h1>
                    <h2> Select Images </h2>
                    <div className="page-navs">
                        <Link href={`/artist/create-profile/category`}><a className="btn btn-secondary">Back</a></Link>
                        <Link href={`/artist/create-profile`}><a className="btn btn-info">Next</a></Link>
                    </div>
                </div>
                <style jsx>{`
                    .suggest {
                        text-align: center;
                    }
                    .page-navs a {
                        margin-right: 30px;
                    }
                `}</style>
            </Layout>
        );
    }
  }
  
  export default SelectCategoryPage;