import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import axios from 'axios';
import { Spinner, Tab, Tabs } from 'react-bootstrap';

import Layout from '../../components/Layout';

import constants from '../../constants';

class AccountPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            profile: {},
            name: '',
            avatar: '',
            avatar_filename: '',
            bio: '',
            emailModel: {
                new_email: '',
                confirm_email: '',
                password: '',
            },
            passwordModel: {
                current_password: '',
                new_password: '',
                confirm_new_password: '',
            },
            notifications: [],
            subscriptions: [],
            preferences: []
        };
    }

    componentDidMount() {
        this.fetchAccountData();
     }
 
    fetchAccountData() {
         let token = this.props.token
         this.setState({loading: true}, () => {
             axios.get(constants.serverUrl + 'api/users/me/profile', { headers: { 'Authorization': token } })
             .then((response) => {
                console.log('me response', response)

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

    fetchEmailPreferenceData() {
        let token = this.props.token
        this.setState({loading: true}, () => {
            axios.get(constants.serverUrl + 'api/preferences/me/email', { headers: { 'Authorization': token } })
            .then((response) => {
               console.log('me response', response)

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
    
     handleSelect = (key) => {
         console.log('key', key)
        if (key === 'account') {
            this.fetchAccountData();
        }
        else if(key === 'payment') {

        }
        else if(key === 'email') {
            this.fetchEmailPreferenceData();
        }
    }

    handleChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        this.setState({
            [name]: value
        });
    }

    

    

    fileSelectedHandler = e => {
        let reader = new FileReader();
        let file = e.target.files[0];

        if(!file)
            return
        reader.onloadend = () => {
            this.setState({
                avatar_filename: file.name,
                avatar: reader.result
            });
        }

        reader.readAsDataURL(file)
    }

    saveProfile = () => {
        let token = this.props.token
        let {...profile} = this.state

        axios.put(constants.serverUrl + 'api/users/me/profile', profile, { headers: { 'Authorization': token } })
          .then((response) => {
          })
          .catch((error) => {
            console.log(error)
          })
    }

    handleEmailFormChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        let { emailModel } = this.state
        emailModel[name] = value
        this.setState({
            emailModel
        });
    }

    changeEmail = () => {
        let token = this.props.token
        let { emailModel } = this.state

        if(emailModel.new_email !== emailModel.confirm_email) {
            //@TODO : show validation error
            return;
        }

        axios.put(constants.serverUrl + 'api/users/me/updateEmail', emailModel, { headers: { 'Authorization': token } })
          .then((response) => {
          })
          .catch((error) => {
            console.log(error)
          })
    }

    handlePasswordFormChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        let { passwordModel } = this.state
        passwordModel[name] = value
        this.setState({
            passwordModel
        });
    }

    changePassword = () => {
        let token = this.props.token
        let { passwordModel } = this.state

        if(passwordModel.new_password !== passwordModel.confirm_new_password) {
            //@TODO : show validation error
            return;
        }

        axios.put(constants.serverUrl + 'api/users/me/updatePassword', passwordModel, { headers: { 'Authorization': token } })
          .then((response) => {
          })
          .catch((error) => {
            console.log(error)
          })
    }

    handlePreferenceChange = (e, index, type) => {
        const target = e.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
    

        let { notifications, subscriptions } = this.state;

        if(type == 'notification')
            notifications[index].checked = value;
        else
            subscriptions[index].checked = value;
        this.setState({ notifications, subscriptions });
    };

    saveEmailPreference = () => {
        let token = this.props.token;
        let { notifications, subscriptions } = this.state;

        let preferences = [...notifications, ...subscriptions]

        let data = preferences.map(item => {
            return { id: item.id, checked: item.checked };
        });

        axios
        .put(
            constants.serverUrl + "api/preferences/me/email",
            { preferences: data },
            { headers: { Authorization: token } }
        )
        .then(response => {

        })
        .catch(error => {
            console.log(error);
        });
    }

    render() {
        let {avatar, loading, emailModel, passwordModel, preferences, notifications, subscriptions} = this.state

        console.log('state', this.state)
        let $imagePreview = null;
        if (avatar) {
            $imagePreview = (<img width="200" height="200" src={avatar} />);
        } else {
            $imagePreview = (<img width="200" height="200" src={'/images/product.png'} />);
        }

        return (
            <Layout title={'Account'}>
                <div className="account">
                    <div className="container">
                        <div className="row">
                            <Tabs defaultActiveKey="account" onSelect={this.handleSelect}>
                                <Tab eventKey="account" title="Account Settings">
                                    <h2> Profile </h2>
                                    <div className="row">
                                        { loading ? <Spinner animation="border" variant="dark"/> : 
                                        <div >
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label htmlFor="name" className="control-label">Name</label> 
                                                        <input id="name" placeholder="Name" className="form-control" onChange={this.handleChange}
                                                            name="name"
                                                            type="text"
                                                            value={this.state.name}/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="avatar" className="control-label">Profile Picture</label> 
                                                        <input id="avatar" placeholder="avatar" type="file" 
                                                                name="avatar"
                                                                className="form-control" onChange={this.fileSelectedHandler}
                                                                accept=".jpg,.jpeg,.png,.bmp"
                                                                value="" 
                                                            />
                                                        <div className="imgPreview">
                                                            {$imagePreview}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <button type="button" className="btn btn-primary ellipsis" onClick={() => {this.saveProfile()}}> Save </button>
                                                </div>
                                            </div>
                                        </div>
                                        }
                                    </div>
                                    <h2> Email </h2>
                                    <div className="row">
                                        <div >
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label htmlFor="new_email" className="control-label">New Email</label> 
                                                        <input id="new_email" placeholder="New Email" className="form-control" onChange={this.handleEmailFormChange}
                                                            name="new_email"
                                                            type="text"
                                                            value={emailModel.new_email}/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="confirm_email" className="control-label">Confirm Email</label> 
                                                        <input id="confirm_email" placeholder="Confirm Email" className="form-control" onChange={this.handleEmailFormChange}
                                                            name="confirm_email"
                                                            type="text"
                                                            value={emailModel.confirm_email}/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="password" className="control-label">Password</label> 
                                                        <input id="password" placeholder="Password" className="form-control" onChange={this.handleEmailFormChange}
                                                            name="password"
                                                            type="password"
                                                            value={emailModel.password}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <button type="button" className="btn btn-primary ellipsis" onClick={this.changeEmail}> Save </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h2> Password </h2>
                                    <div className="row">
                                        <div >
                                            <div className="row">
                                                <div className="col-md-6">
                                                    Don't know your password? <button type="button" className="btn btn-primary ellipsis" onClick={this.resetPassword}> Reset Password </button>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label htmlFor="current_password" className="control-label">Current Password</label> 
                                                        <input id="current_password" placeholder="Current Password" className="form-control" onChange={this.handlePasswordFormChange}
                                                            name="current_password"
                                                            type="text"
                                                            value={passwordModel.current_password}/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="new_password" className="control-label">New Password</label> 
                                                        <input id="new_password" placeholder="New Password" className="form-control" onChange={this.handlePasswordFormChange}
                                                            name="new_password"
                                                            type="text"
                                                            value={passwordModel.new_password}/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="confirm_new_password" className="control-label">Confirm New Password</label> 
                                                        <input id="confirm_new_password" placeholder="Confirm New Password" className="form-control" onChange={this.handlePasswordFormChange}
                                                            name="confirm_new_password"
                                                            type="password"
                                                            value={passwordModel.confirm_new_password}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <button type="button" className="btn btn-primary ellipsis" onClick={this.changePassword}> Save </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab eventKey="payment" title="Payment method">
                                    Payment method
                                </Tab>
                                <Tab eventKey="email" title="Email Preference">
                                <p>email settings for MylahMorales@gmail.com</p>
                                { loading ? <Spinner animation="border" variant="dark"/> : 
                                    <div className="notifications">
                                        <h5>Notifications</h5>
                                        {notifications.map((preference, idx) => (
                                            <div className="form-group" key={idx}>

                                                <label className="checkbox-label">
                                                        <input type="checkbox" checked={preference.checked} onChange={e => this.handlePreferenceChange(e, idx, 'notification')} />
                                                        <span className="checkbox-custom"></span>
                                                </label>
                                                <div className="input-title">{preference.name}</div>

                                            </div>
                                        ))}
                                        
                                    </div>
                                    }
                                    { loading ? <Spinner animation="border" variant="dark"/> : 
                                    <div className="subscriptions">
                                        <h5>Subscriptions</h5>
                                        {subscriptions.map((preference, idx) => (
                                            <div className="form-group" key={idx}>

                                                <label className="checkbox-label">
                                                        <input type="checkbox" checked={preference.checked} onChange={e => this.handlePreferenceChange(e, idx, 'subscription')} />
                                                        <span className="checkbox-custom"></span>
                                                </label>
                                                <div className="input-title">{preference.name}</div>

                                            </div>
                                        ))}
                                    </div>
                                    }
                                    <button
                                        type="button"
                                        className="btn btn-primary ellipsis"
                                        onClick={this.saveEmailPreference}
                                    >
                                        Save
                                    </button>
                                    
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
                
            </Layout>
        );
    }
  }
  
  export default AccountPage;