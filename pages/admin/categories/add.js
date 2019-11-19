import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import axios from 'axios';
import { Spinner } from "react-bootstrap";

import Layout from '../../../components/Layout';
import constants from '../../../constants';

class CategorysPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            category: {
                name: '',
                description: ''
            }
        };
    }

    save = () => {
        const { token } = this.props
        let { category } = this.state

        this.setState({loading: true}, () => {
            axios.post(constants.serverUrl + 'api/categories', category, { headers: { 'Authorization': token } })
            .then((response) => {
                Router.push('/admin/categories')
            })
            .catch((error) => {
                Router.push('/')
                this.setState({loading: false});
            });
        });
    }

    handleChange = e => {
        const target = e.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        
        let {category} = this.state
        category[name] = value
        this.setState({category});
    };


    render() {
        const { category, loading } = this.state
        return (
            <Layout title={'Categorys'}>
            <div className="container-fluid">
                <div className="card mb-3">
                    <div className="card-header">
                        <i className="fas fa-table"></i>&nbsp;Categories
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">

                        { loading ? <Spinner animation="border" variant="dark"/> : 
                            <div className="content">
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label htmlFor="name" className="form-label">
                                             Name
                                        </label>
                                        <input
                                            id="name"
                                            placeholder="Type here"
                                            className="form-control input"
                                            onChange={this.handleChange}
                                            name="name"
                                            type="text"
                                            value={category.name}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label htmlFor="name" className="form-label">
                                             Description
                                        </label>
                                        <input
                                            id="description"
                                            placeholder="Type here"
                                            className="form-control input"
                                            onChange={this.handleChange}
                                            name="description"
                                            type="text"
                                            value={category.description}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <button
                                        type="button"
                                        className="form-group btn btn-primary ellipsis btn-block"
                                        onClick={() => {
                                            this.save();
                                        }}
                                    >
                                        Save
                                    </button>
                                </div>
                                <div className="col-lg-4">
                                    <Link href={`/admin/categories`}>
                                        <span className="form-group button">
                                            <a className="btn btn-secondary btn-block">Back</a>
                                        </span>
                                    </Link>
                                </div>
                        </div>
                        }

                        </div>
                    </div>
                </div>
            </div>
            </Layout>
        );
    }
  }
  
  export default CategorysPage;