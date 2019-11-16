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
            address1: '',
            address2: '',
            city: '',
            state_id: '',
            zip: '',
            travel_distance: '',
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
                console.log('policy', response)

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
        
        this.setState({
            [name]: value
        });
    }

    gotoNext = async () => {
        let token = this.props.token;
        let { ...policy } = this.state;
    
        console.log('policy', policy)

        try {
            if(this.state.created) {
                let policy = await axios.put(constants.serverUrl + "api/profiles/me/updatePolicy", policy, {
                            headers: { Authorization: token }
                        })
            }
            else {
                let policy = await axios.post(constants.serverUrl + "api/profiles/me/createPolicy", policy, {
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
        let { loading } = this.state


        return (
            <Layout title={'Policies'}>
                <div className="profile">
                    { loading ? (
                    <Spinner animation="border" variant="dark" />
                        ) : (
                    <div className="container">
                        <h1> Policies </h1>
                        <h2> Where is your home or studio? </h2>
  

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label htmlFor="address1" className="control-label">address1</label> 
                                    <input id="address1" placeholder="address1" className="form-control" onChange={this.handleChange}
                                        name="address1"
                                        value={this.state.address1}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address2" className="control-label">address2</label> 
                                    <textarea id="address2" placeholder="address2" className="form-control" onChange={this.handleChange}
                                        name="address2"
                                        value={this.state.address2}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="city" className="control-label">city</label> 
                                    <input id="city" placeholder="city" className="form-control" onChange={this.handleChange}
                                        name="city"
                                        value={this.state.city}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="state_id" className="control-label">state_id</label> 
                                    <input id="state_id" placeholder="state_id" className="form-control" onChange={this.handleChange}
                                        name="state_id"
                                        value={this.state.state_id}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="zip" className="control-label">zip</label> 
                                    <input id="zip" placeholder="zip" className="form-control" onChange={this.handleChange}
                                        name="zip"
                                        value={this.state.zip}/>
                                </div>
                                <label>How far will you travel for the booking?</label>
                                <div className="form-group">
                                    <label htmlFor="travel_distance" className="control-label">travel_distance</label> 
                                    <input id="travel_distance" placeholder="travel_distance" className="form-control" onChange={this.handleChange}
                                        name="travel_distance"
                                        value={this.state.travel_distance}/>
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