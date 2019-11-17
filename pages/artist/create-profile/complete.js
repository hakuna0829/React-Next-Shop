import React from 'react';
import Router from 'next/router';
import axios from 'axios';

import Layout from '../../../components/Layout';

import constants from '../../../constants';

class CompletePage extends React.Component {

    constructor(props) {
        super(props);
    }

    changePublicState = (is_public) => {
        let token = this.props.token

        axios.put(constants.serverUrl + 'api/profiles/me/updatePublicState', { is_public }, { headers: { 'Authorization': token } })
          .then((response) => {
            Router.push('/artist/dashboard')
          })
          .catch((error) => {
            console.log(error)
          })
    }

    render() {
        return (
            <Layout title={'Complete'}>
                <div className="suggest">
                    <h1> Complete </h1>
                    <div className="page-navs">
                        <button type="button" className="btn btn-primary ellipsis" onClick={() => {this.changePublicState(true)}}> Go Public </button>
                        <button type="button" className="btn btn-primary ellipsis" onClick={() => {this.changePublicState(false)}}> Stay Private </button>
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