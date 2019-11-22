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
            preferences: [],
        };
    }

    componentDidMount() {
        this.fetchAccountData();
     }
 
    fetchAccountData() {
         let token = this.props.token
         this.setState({loading: true}, () => {
             axios.get(constants.serverUrl + 'api/profiles/me/getProfile', { headers: { 'Authorization': token } })
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

    fetchEmailData() {
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
            this.fetchEmailData();
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

    saveEmailPreference = () => {
        let token = this.props.token;
        let { preferences } = this.state;

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

        axios.put(constants.serverUrl + 'api/profiles/me/updateProfile', profile, { headers: { 'Authorization': token } })
          .then((response) => {
          })
          .catch((error) => {
            console.log(error)
          })
    }

    handlePreferenceChange = (e, index) => {
        const target = e.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
    
        let { preferences } = this.state;
        preferences[index].checked = value;
        this.setState({ preferences });
    };

    render() {
        let {avatar, loading, preferences} = this.state

        let $imagePreview = null;
        if (avatar) {
            $imagePreview = (<img width="200" height="200" src={avatar} />);
        } else {
            $imagePreview = (<img width="200" height="200" src={'/images/product.png'} />);
        }

        return (
            <Layout title={'Account'}>
                <div className="profile">
                    <div className="container">
                    <h1> Artist Account </h1>
                    <Tabs defaultActiveKey="account" onSelect={this.handleSelect}>
                        <Tab eventKey="account" title="Account Settings">
                            <div>
                                { loading ? <Spinner animation="border" variant="dark"/> : 
                                <div >
                                    <div className="row">
                                        <div className="col-md-6">
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
                        
                        </Tab>
                        <Tab eventKey="payment" title="Payment method">
                            Payment method
                        </Tab>
                        <Tab eventKey="email" title="Email Preference">
                        { loading ? <Spinner animation="border" variant="dark"/> : 
                            <div className="row col-md-4 categoryList">
                            
                                {preferences.map((preference, idx) => (
                                    <div className="item" key={idx}>
                                    <label className="cat_container">
                                        <input 
                                            type="checkbox" 
                                            checked={preference.checked} 
                                            className="form-control"
                                            onChange={e => this.handlePreferenceChange(e, idx)}
                                        />
                                        <div className="checkmark">{preference.name}</div> 
                                    </label>                          
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    className="btn btn-primary ellipsis btn-block"
                                    onClick={this.saveEmailPreference}
                                >
                                    Save
                                </button>
                            </div>
                            }
                            
                        </Tab>
                    </Tabs>
                    
                    </div>
                </div>
                
            </Layout>
        );
    }
  }
  
  export default AccountPage;