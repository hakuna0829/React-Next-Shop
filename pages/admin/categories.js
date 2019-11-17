import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import Link from 'next/link';
import Router from 'next/router';
import axios from 'axios';
import cookie from 'js-cookie';

import Layout from '../../components/Layout';

import constants from '../../constants';

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
            axios.get(constants.serverUrl + 'api/profiles/categories', { headers: { 'Authorization': token } })
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

    }

    deleteCategory = (id) => {
        const { token } = this.props
        axios.delete(constants.serverUrl + `api/profiles/categories/${id}`, { headers: { 'Authorization': token } })
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
                                                
                                                <a className="btn btn-primary" onClick={() => this.editCategory(category.id)}><i className="fas fa-pencil-alt"></i> Edit</a> 
                                                {/* <a className="btn btn-info" onClick={() => this.resetPassword(category.id)}><i className="fas fa-key"></i> Reset Password</a>  */}
                                                <a className="btn btn-danger" onClick={() => this.deleteCategory(category.id)}><i className="fas fa-trash-alt"></i> Delete</a>
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