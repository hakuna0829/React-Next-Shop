import React from 'react';
import {
    Spinner
  } from "react-bootstrap";
import Link from 'next/link';
import Router from 'next/router';
import axios from 'axios';

import * as Yup from "yup";

import Layout from '../../components/Layout';

import constants from '../../constants';

class ServicesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            services: []
        };

    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        const { token } = this.props
        this.setState({loading: true}, () => {
            axios.get(constants.serverUrl + 'api/services', { headers: { 'Authorization': token } })
            .then((response) => {
                this.setState({
                    loading: false,
                    services: response.data.services
                });
                
            })
            .catch((error) => {
                Router.push('/')
                this.setState({loading: false});
            });
        });
    }

    render() {
        const { services, loading } = this.state

        return (
            <Layout title={'Services'}>
            <div className="container-fluid">
                <div className="card mb-3">
                    <div className="card-header">
                        <i className="fas fa-table"></i>&nbsp;Services
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">

                        { loading ? <Spinner animation="border" variant="dark"/> : 
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>User ID</th>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Max Number of People</th>
                                        <th>Base Price</th>
                                        <th>Extra Per Person</th>
                                        <th>Duration</th>
                                        <th>Duration Unit</th>
                                        <th>Location</th>
                                        {/* <th>Actions</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    { services.map((service, i) => {
                                        return (
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{service.user_id}</td>
                                            <td>{service.name}</td>
                                            <td>{service.description}</td>
                                            <td>{service.max_number_of_people}</td>
                                            <td>{service.base_price}</td>
                                            <td>{service.extra_per_person}</td>
                                            <td>{service.duration_id}</td>
                                            <td>{service.duration_unit_id}</td>
                                            <td>{service.location_id}</td>
                                            {/* <td>
                                                <a className="btn btn-primary" onClick={() => this.editService(service.id)}><i className="fas fa-pencil-alt"></i> Edit</a> 
                                                <a className="btn btn-danger" onClick={() => this.deleteService(service.id)}><i className="fas fa-trash-alt"></i> Delete</a>
                                            </td> */}
                                        </tr>
                                        ) 
                                    })}
                                </tbody>
                            </table>
                        }

                        </div>
                    </div>
                </div>
            </div>
            </Layout>
        );
    }
  }
  
  export default ServicesPage;