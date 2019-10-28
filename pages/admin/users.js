import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import Link from 'next/link';
import Router from 'next/router';
import axios from 'axios';
import cookie from 'js-cookie';

import Layout from '../../components/Layout';

import constants from '../../constants';


class UsersPage extends React.Component {
    // static getInitialProps ({ query: { id } }) {
    //   return { id };
    // }
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            users: []
        };

    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        let token = cookie.get('token')
        this.setState({loading: true}, () => {
            axios.get(constants.serverUrl + 'api/users', { headers: { 'Authorization': token } })
            .then((response) => {
                console.log('users response', response)
                this.setState({
                    loading: false,
                    users: response.data.artists
                });
                
            })
            .catch((error) => {
                Router.push('/')
                this.setState({loading: false});
            });
        });
    }

    editUser = (id) => {

    }

    resetPassword = (id) => {

    }

    deleteUser = (id) => {

    }


    render() {
        const { users, loading } = this.state
        return (
            <Layout title={'Users'}>
            <div className="container-fluid">
                <div className="card mb-3">
                    <div className="card-header">
                        <i className="fas fa-table"></i>
                        Users
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">

                        { loading ? <Spinner animation="border" variant="dark"/> : 
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Full Name</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { users.map((user, i) => {
                                        return (
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{user.first_name} {user.last_name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.role}</td>
                                            <td>
                                                
                                                <a className="btn btn-primary" onClick={() => this.editUser(user.id)}><i className="fas fa-pencil-alt"></i> Edit</a> 
                                                {/* <a className="btn btn-info" onClick={() => this.resetPassword(user.id)}><i className="fas fa-key"></i> Reset Password</a>  */}
                                                <a className="btn btn-danger" onClick={() => this.deleteUser(user.id)}><i className="fas fa-trash-alt"></i> Delete</a>
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
            <style jsx> {`
                .table-responsive {
                    text-align: center;
                }
            `}
            </style>
            </Layout>
        );
    }
  }
  
  export default UsersPage;