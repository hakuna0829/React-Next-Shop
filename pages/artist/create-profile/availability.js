import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';

import Layout from '../../../components/Layout';

import constants from '../../../constants';

class SelectCategoryPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            availabilities: [],
            res: [],
        };

    }

    componentDidMount() {
        this.fetchData();
    }
 
    async fetchData() {
        const res = []
        const userInfoSource = await axios.get('https://www.instagram.com/shopbetter/')
        const jsonObject = userInfoSource.data.match(/<script type="text\/javascript">window\._sharedData = (.*)<\/script>/)[1].slice(0, -1)

        const userInfo = JSON.parse(jsonObject)
        
        console.log(userInfo)
        console.log(userInfo.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges.length)
        // Retrieve only the first 10 results
        const mediaArray = userInfo.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges.splice(30, 40)
        for (let media of mediaArray) {
            const node = media.node
            
            // Process only if is an image
            if ((node.__typename && node.__typename !== 'GraphImage')) {
                continue
            }

            // Push the thumbnail src in the array
            res.push(node.thumbnail_src)
        }

        console.log(res)
        this.setState({
            res: res
        });

         let token = this.props.token
         this.setState({loading: true}, () => {
             axios.get(constants.serverUrl + 'api/profiles/me/getAvailability', { headers: { 'Authorization': token } })
             .then((response) => {
                console.log('get policy', response)

                this.setState({
                    loading: false,
                    ...response.data
                });
             })
             .catch((error) => {
                 console.log(error)
                 Router.push('/')
             });
         });
     }

    render() {
        return (
            <Layout title={'Availability'}>
                <div className="suggest">
                    <h1> Availability </h1>
                    {this.state.res.map((item, idx) => (
                         <div className="item" key={idx}>
                           <label className="cat_container">
                             
                             <img src={item}></img> 
                         </label>                          
                        </div>
                      ))}
                    <div className="page-navs">
                        <Link href={`/artist/create-profile/how-it-works`}><a className="btn btn-secondary">Back</a></Link>
                        <Link href={`/artist/create-profile/complete`}><a className="btn btn-info">Next</a></Link>
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