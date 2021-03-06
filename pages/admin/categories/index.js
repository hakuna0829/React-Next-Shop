import React from 'react';
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Spinner
  } from "react-bootstrap";
import Link from 'next/link';
import Router from 'next/router';
import axios from 'axios';
import cookie from 'js-cookie';

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import Layout from '../../../components/Layout';

const serverUrl = process.env.SERVER_URL ? process.env.SERVER_URL : 'https://tigerdeveloper.net/';

class CategorysPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            categories: []
        };

    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        const { token } = this.props
        this.setState({loading: true}, () => {
            axios.get(serverUrl + 'api/categories', { headers: { 'Authorization': token } })
            .then((response) => {
                console.log('categories response', response)
                this.setState({
                    loading: false,
                    categories: response.data.categories
                });
                
            })
            .catch((error) => {
                Router.push('/')
                this.setState({loading: false});
            });
        });
    }

    editCategory = (id) => {
        Router.push('/admin/categories/' + id)
    }

    deleteCategory = (id) => {
        if( confirm("Are you sure?") == false)
            return
        const { token } = this.props
        axios.delete(serverUrl + `api/categories/${id}`, { headers: { 'Authorization': token } })
            .then((response) => {
                let leftCategories = this.state.categories.filter(item => item.id != id);
                this.setState({
                    categories: leftCategories
                }); 
            })
            .catch((error) => {
                Router.push('/')
                this.setState({loading: false});
            });
    }


    render() {
        const { categories, loading } = this.state
        return (
            <Layout title={'Categorys'}>
            <div className="container-fluid">
                <div className="card mb-3">
                    <div className="card-header">
                        <i className="fas fa-table"></i>&nbsp;Categories
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <div>
                                <div className="col-lg-4">
                                    <Link href={`/admin/categories/add`}>
                                        <a className="btn btn-primary">Add</a>
                                    </Link>
                                </div>
                            </div>
                        { loading ? <Spinner animation="border" variant="dark"/> : 
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { categories.map((category, i) => {
                                        return (
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{category.name}</td>
                                            <td>{category.description}</td>
                                            <td>
                                                <a className="btn btn-primary" href="#" onClick={() => this.editCategory(category.id)}><i className="fas fa-pencil-alt"></i> Edit</a> 
                                                {/* <a className="btn btn-info" onClick={() => this.resetPassword(category.id)}><i className="fas fa-key"></i> Reset Password</a>  */}
                                                <a className="btn btn-danger" href="#"  onClick={() => this.deleteCategory(category.id)}><i className="fas fa-trash-alt"></i> Delete</a>
                                            </td>
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
  
  export default CategorysPage;