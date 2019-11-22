import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';

import Layout from '../../../components/Layout';

import constants from '../../../constants';

class PoliciesPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            policy: {
                address1: '',
                address2: '',
                city: '',
                state: '',
                zip: '',
                travel_distance_id: '',
            },
            created: false
        };
    }

    componentDidMount() {
        this.fetchData();
    }
 
    fetchData() {
         let token = this.props.token
         this.setState({loading: true}, () => {
             axios.get(constants.serverUrl + 'api/profiles/me/getPolicy', { headers: { 'Authorization': token } })
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

     handleChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        let { policy } = this.state
        policy[name] = value
        this.setState({
            policy
        });
    }

    gotoNext = async () => {
        let token = this.props.token;
        let { loading, policy } = this.state;
    
        console.log('save policy', policy)

        let params = {...policy}
        
        try {
            if(this.state.created) {
                let policy = await axios.put(constants.serverUrl + "api/profiles/me/updatePolicy", params, {
                            headers: { Authorization: token }
                        })
            }
            else {
                let policy = await axios.post(constants.serverUrl + "api/profiles/me/createPolicy", params, {
                            headers: { Authorization: token }
                        })
            }
            Router.push("/artist/create-profile/how-it-works");
        }
        catch( err ) {
            console.log(err);
        }

    }
        

    render() {
        let { loading, policy, distances } = this.state

        console.log(this.state)

        return (
            <Layout title={'Policies'}>
                <div className="profile">
                    { loading ? (
                    <Spinner animation="border" variant="dark" />
                        ) : (
                    <div className="container">
                        <div className="row">
                        <h3> Policies </h3>
                        <h2> Where is your home or studio? </h2>
                        </div>
                        
  

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label htmlFor="address1" className="control-label">address1</label> 
                                    <input id="address1" placeholder="address1" className="form-control" onChange={this.handleChange}
                                        name="address1"
                                        value={policy.address1}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address2" className="control-label">address2</label> 
                                    <textarea id="address2" placeholder="address2" className="form-control" onChange={this.handleChange}
                                        name="address2"
                                        value={policy.address2}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="city" className="control-label">city</label> 
                                    <input id="city" placeholder="city" className="form-control" onChange={this.handleChange}
                                        name="city"
                                        value={policy.city}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="state" className="control-label">state</label> 
                                    <input id="state" placeholder="state" className="form-control" onChange={this.handleChange}
                                        name="state"
                                        value={policy.state}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="zip" className="control-label">zip</label> 
                                    <input id="zip" placeholder="zip" className="form-control" onChange={this.handleChange}
                                        name="zip"
                                        value={policy.zip}/>
                                </div>
                                <label>How far will you travel for the booking?</label>
                                <div className="form-group">
                                    <label htmlFor="travel_distance_id" className="control-label">travel_distance_id</label> 
                                    <input id="travel_distance_id" placeholder="travel_distance_id" className="form-control" onChange={this.handleChange}
                                        name="travel_distance_id"
                                        value={policy.travel_distance_id}/>
                                </div>
                            </div>
                        </div>
                        
                        
                        <div className="page-navs">
                            <div className="column-2-space">
                                <Link href={`/artist/create-profile`}>
                                    <span className="button">
                                    <a className="btn btn-secondary btn-block">Back</a>
                                    </span>
                                </Link>
                                <span className="button">
                                    <button
                                    type="button"
                                    className="btn btn-primary ellipsis btn-block"
                                    onClick={() => {
                                        this.gotoNext();
                                    }}>
                                    {" "}
                                    Next{" "}
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
            </Layout>
        );
    }
  }
  
  export default PoliciesPage;