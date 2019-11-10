import React from 'react';
import Link from 'next/link';

import Layout from '../../../components/Layout';


class CompletePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            artist: {}
        };

    }

    render() {
        return (
            <Layout title={'Complete'}>
                <div className="suggest">
                    <h1> Complete </h1>
                    <div className="page-navs">
                        <Link href={`/artist/dashboard`}><a className="btn btn-secondary">Go Public</a></Link>
                        <Link href={`/artist/dashboard`}><a className="btn btn-info">Stay Private</a></Link>
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
  
  export default CompletePage;