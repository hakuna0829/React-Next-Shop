import React from 'react';
import Link from 'next/link';

import Layout from '../../../components/Layout';


class SelectCategoryPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            artist: {}
        };

    }

    render() {
        return (
            <Layout title={'How it works'}>
                <div className="suggest">
                    <h1> How it works </h1>
                    <div className="page-navs">
                        <Link href={`/artist/create-profile/policies`}><a className="btn btn-secondary">Back</a></Link>
                        <Link href={`/artist/create-profile/availability`}><a className="btn btn-info">Next</a></Link>
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