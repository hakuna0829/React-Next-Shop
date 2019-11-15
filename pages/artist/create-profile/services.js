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

     handleChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        this.setState({
            [name]: value
        });
    }

    render() {

        let { services } = this.state
        return (
            <Layout title={'Services'}>
                <div className="profile">
                    <div className="container">
                    <h1> Services </h1>
                    <h2> What services do you offer? </h2>

                    <div className="row ">
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label htmlFor="name" className="control-label">name</label> 
                                <input id="name" placeholder="name" className="form-control" onChange={this.handleChange}
                                    name="name"
                                    value={this.state.name}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="description" className="control-label">description</label> 
                                <textarea id="description" placeholder="description" className="form-control" onChange={this.handleChange}
                                    name="description"
                                    value={this.state.description}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="max_number_of_people" className="control-label">max_number_of_people</label> 
                                <input id="max_number_of_people" placeholder="max_number_of_people" className="form-control" onChange={this.handleChange}
                                    name="max_number_of_people"
                                    value={this.state.max_number_of_people}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="base_price" className="control-label">base_price</label> 
                                <input id="base_price" placeholder="base_price" className="form-control" onChange={this.handleChange}
                                    name="base_price"
                                    value={this.state.base_price}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="extra_per_person" className="control-label">extra_per_person</label> 
                                <input id="extra_per_person" placeholder="extra_per_person" className="form-control" onChange={this.handleChange}
                                    name="extra_per_person"
                                    value={this.state.extra_per_person}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="time" className="control-label">time</label> 
                                <input id="time" placeholder="time" className="form-control" onChange={this.handleChange}
                                    name="time"
                                    value={this.state.time}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="time_unit" className="control-label">Time Unit</label> 
                                <input id="time_unit" placeholder="time_unit" className="form-control" onChange={this.handleChange}
                                    name="time_unit"
                                    value={this.state.time_unit}/>
                            </div>
                        </div>
                    </div>
                    
                    {services.map((service, idx) => (
                        
                        <div className="col-sm-12" key={idx}>
                            <div className="form-group">
                                <input
                                        type="text"
                                        className="form-control"
                                        placeholder={`Title`}
                                        value={services.title}
                                        onChange={this.handleNewImageTitleChange(idx)}
                                    />
                            </div>
                            <div className="form-group">
                                <button
                                        className="form-control btn btn-danger"
                                        onClick={this.handleNewImageDeleteImage(idx)}>
                                        Delete
                                </button>
                            </div>
                        </div>
                    
                    ))}

                    <div className="page-navs">
                        <Link href={`/artist/create-profile/`}><a className="btn btn-secondary">Back</a></Link>
                        <Link href={`/artist/create-profile/policies`}><a className="btn btn-info">Done</a></Link>
                    </div>
                    </div>
                </div>
            </Layout>
        );
    }
  }
  
  export default SelectCategoryPage;