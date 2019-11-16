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
            new_service: {
                name: '',
                description: '',
                max_number_of_people: '',
                base_price: '',
                extra_per_person: '',
                time: '',
                time_unit: '',
                location: ''
            },
            services: []
        };
    }

    componentDidMount() {
        this.fetchData();
    }
 
    fetchData() {
         let token = this.props.token
         this.setState({loading: true}, () => {
             axios.get(constants.serverUrl + 'api/profiles/me/getServices', { headers: { 'Authorization': token } })
             .then((response) => {
                console.log('services', response)

                this.setState({
                    loading: false,
                    services : response.data.services
                });
             })
             .catch((error) => {
                 console.log(error)
                 Router.push('/')
             });
         });
     }

     handleNewServiceChange = (e) => {

        let { new_service } = this.state

        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        console.log(new_service)
        new_service[name] = value
        this.setState({new_service});
    }

    handleEditServiceChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        this.setState({
            [name]: value
        });
    }

    addService = () => {
        let token = this.props.token
        let {services, new_service} = this.state

        console.log(new_service)
        axios.post(constants.serverUrl + 'api/profiles/me/createService', new_service, { headers: { 'Authorization': token } })
          .then((response) => {
            services.push(new_service)

            new_service = {
                name: '',
                description: '',
                max_number_of_people: '',
                base_price: '',
                extra_per_person: '',
                time: '',
                time_unit: '',
                location: ''
            }

            this.setState({
                services, new_service
            });
          })
          .catch((error) => {
            console.log(error)
            //this.setState({loading: false});
          })

    }

    editService = (idx) => {

    }

    deleteService = (idx) => {
        
    }

    render() {

        let { loading, services, new_service } = this.state
        
        return (
            <Layout title={'Services'}>
                <div className="profile">
                { loading ? (
                <Spinner animation="border" variant="dark" />
                     ) : (
                    <div className="container">
                        <h1> Services </h1>
                        <h2> What services do you offer? </h2>

                        {services.map((service, idx) => (
                        <div className="row" key={idx}>
                            <div className="col-sm-12">
                                <div className="form-group">
                                {service.name}
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <button
                                        className="form-control btn btn-primary"
                                        onClick={this.editService(idx)}>
                                        Edit
                                </button>
                            </div>
                            <div className="col-sm-6">
                                <button
                                        className="form-control btn btn-danger"
                                        onClick={this.deleteService(idx)}>
                                        Delete
                                </button>
                            </div>
                        </div>
                        ))}

                        <div className="row ">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label htmlFor="name" className="control-label">name</label> 
                                    <input id="name" placeholder="name" className="form-control" onChange={this.handleNewServiceChange}
                                        name="name"
                                        value={new_service.name}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description" className="control-label">description</label> 
                                    <textarea id="description" placeholder="description" className="form-control" onChange={this.handleNewServiceChange}
                                        name="description"
                                        value={new_service.description}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="max_number_of_people" className="control-label">max_number_of_people</label> 
                                    <input id="max_number_of_people" placeholder="max_number_of_people" className="form-control" onChange={this.handleNewServiceChange}
                                        name="max_number_of_people"
                                        value={new_service.max_number_of_people}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="base_price" className="control-label">base_price</label> 
                                    <input id="base_price" placeholder="base_price" className="form-control" onChange={this.handleNewServiceChange}
                                        name="base_price"
                                        value={new_service.base_price}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="extra_per_person" className="control-label">extra_per_person</label> 
                                    <input id="extra_per_person" placeholder="extra_per_person" className="form-control" onChange={this.handleNewServiceChange}
                                        name="extra_per_person"
                                        value={new_service.extra_per_person}/>
                                </div>
                                <label>How long will this take?</label>
                                <div className="form-group">
                                    <label htmlFor="time" className="control-label">time</label> 
                                    <input id="time" placeholder="time" className="form-control" onChange={this.handleNewServiceChange}
                                        name="time"
                                        value={new_service.time}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="time_unit" className="control-label">Time Unit</label> 
                                    <input id="time_unit" placeholder="time_unit" className="form-control" onChange={this.handleNewServiceChange}
                                        name="time_unit"
                                        value={new_service.time_unit}/>
                                </div>
                                <label>Where will this happen?</label>
                                <div className="form-group">
                                    <label htmlFor="location" className="control-label">Time Unit</label> 
                                    <input id="location" placeholder="location" className="form-control" onChange={this.handleNewServiceChange}
                                        name="location"
                                        value={new_service.location}/>
                                </div>

                                
                                <button className="btn btn-info" onClick={this.addService}>Add Service</button>
                            </div>
                        </div>
                        
                    

                        <div className="page-navs">
                            <Link href={`/artist/create-profile/`}><a className="btn btn-secondary">Back</a></Link>
                            <Link href={`/artist/create-profile/policies`}><a className="btn btn-info">Done</a></Link>
                        </div>
                    </div>
                     )}
                </div>
            </Layout>
        );
    }
  }
  
  export default SelectCategoryPage;