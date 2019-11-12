import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';

import Layout from '../../../components/Layout';

import constants from '../../../constants';


class CreateProfilePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            profile: {},
            name: '',
            avatar: '',
            avatar_filename: '',
            bio: ''
        };

    }

    componentDidMount() {
        this.fetchData();
     }
 
     fetchData() {
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

    
    gotoNext = () => {
        let token = this.props.token
        let {...profile} = this.state

        axios.put(constants.serverUrl + 'api/profiles/me/updateProfile', profile, { headers: { 'Authorization': token } })
          .then((response) => {
            Router.push('/artist/create-profile/category')
          })
          .catch((error) => {
            console.log(error)
            //this.setState({loading: false});
          })
    }

    render() {
        let {avatar, loading} = this.state

        let $imagePreview = null;
        if (avatar) {
            $imagePreview = (<img width="200" height="200" src={avatar} />);
        } else {
            $imagePreview = (<img width="200" height="200" src={'/images/product.png'} />);
        }

        return (
            <Layout title={'Create Profile'}>
                <div className="suggest">
                    <h1> Create Profile </h1>

                    { loading ? <Spinner animation="border" variant="dark"/> : 
                    <div className="row profile-step">
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label htmlFor="name" className="control-label">Shop Name</label> 
                                <input id="name" placeholder="Shop name" className="form-control" onChange={this.handleChange}
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
                            <div className="form-group">
                                <label htmlFor="bio" className="control-label">Bio</label> 
                                <textarea id="bio" placeholder="Bio" className="form-control" onChange={this.handleChange}
                                    name="bio"
                                    value={this.state.bio}/>
                            </div>
                        </div>
                    </div>
                    }

                    <div className="page-navs">
                        <Link href={`/artist/create-profile`}><a className="btn btn-secondary">Back</a></Link>
                        
                        <button type="button" className="btn btn-primary ellipsis" onClick={() => {this.gotoNext()}}> Next </button>
                        
                        {/* <Link href={`/artist/create-profile/category`}><a className="btn btn-info">Next</a></Link> */}
                    </div>
                </div>
                <style jsx>{`
                    .suggest {
                        text-align: center;
                    }
                    .page-navs a {
                        margin-right: 30px;
                    }
                `}</style>
            </Layout>
        );
    }
  }
  
  export default CreateProfilePage;