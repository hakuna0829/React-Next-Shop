import React from 'react';
import Link from 'next/link';
import Router from "next/router";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import Layout from '../../components/Layout';
import constants from "../../constants";

class ShopProfilePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pageTitle : 'Shop Profile',
            user: {
                policy: {},
                services: [],
                categories: [],
                images: []
            }
        };

    }

    componentDidMount() {
        this.fetchData();
    }
    
    fetchData() {
        let token = this.props.token;
        this.setState({ loading: true }, () => {
          axios
            .get(constants.serverUrl + "api/users/me/shop", {
              headers: { Authorization: token }
            })
            .then(response => {
              console.log("categories", response);
    
              this.setState({
                loading: false,
                ...response.data
              });
            })
            .catch(error => {
              console.log(error);
              Router.push("/");
            });
        });
      }

    invertPublicState = () => {
        let is_public = !this.state.user.is_public
        let token = this.props.token;
    
        axios
          .put(
            constants.serverUrl + "api/users/me/updatePublicState",
            { is_public },
            { headers: { Authorization: token } }
          )
          .then(response => {
            this.fetchData()
          })
          .catch(error => {
            console.log(error);
          });
      };

    render() {
        const { pageTitle, user } = this.state
        return (
            <Layout title={ pageTitle }>
                <div className="account profile">
                    <div className="container">
                        <div className="row">
                            <div className="intro">
                                <div className="sub_intro">
                                    <img src={"/images/profile-avatar.png"} alt=""/>
                                    <div className="name">
                                        <h4>{user.name}</h4>
                                        <p>{ user.is_public ? 'Public' : 'Private' }</p>
                                    </div>
                                </div>
                                <Link href="/artist/profile"><a className="btn btn-primary">View Profile</a></Link>
                            </div>
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">Profile</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab">Policies</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab">Photos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#tabs-4" role="tab">Services</a>
                                </li>
                            </ul>
                        </div>
                        <div className="row">
                            <div className="divider"></div>
                        </div>
                        <div className="row">
                            <div className="tab-content">
                                <div className="tab-pane active" id="tabs-1" role="tabpanel">
                                    <div className="shop layout">
                                        <p>Your shop is currently { user.is_public ? 'Public' : 'Private' }</p>
                                        <button className="btn btn-primary" onClick={this.invertPublicState}>Go { user.is_public ? 'Private' : 'Public' }</button>
                                    </div>
                                    <div className="divider"></div>
                                    <div className="bio">
                                        <div className="sub_bio layout">
                                            <div className="left_span">
                                                <p>Name:</p>
                                                <p>{user.name}</p>
                                            </div>
                                            <div className="right_span">
                                                <Link href="/artist/create-profile/profile"><a className="btn btn-primary">Edit</a></Link>
                                            </div>
                                        </div>
                                        <div className="sub_bio layout">
                                            <div className="left_span">
                                                <p>Bio:</p>
                                                <p>{user.bio}</p>
                                            </div>
                                            <div className="right_span"></div>
                                        </div>
                                    </div>
                                    <div className="divider"></div>
                                    <div className="category">
                                        <div className="sub_cat layout">
                                            <p>Categories</p>
                                            <Link href="/artist/edit/category"><a className="btn btn-primary">Edit</a></Link>
                                        </div>
                                        <div className="categoryList">
                                            {user.categories.map((category, idx) => (
                                                <div className="item" key={idx}>
                                                <label className="cat_container">
                                                    <div className="checkmark active">{category.name}</div> 
                                                </label>                          
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="divider"></div>
                                    <div className="instagram">
                                        <div className="sub_inst layout">
                                            <div className="left_span">
                                                <p>Instagram:</p>
                                                <p>@MylahMorales</p>
                                            </div>
                                            <div className="right_span">
                                                <button className="btn btn-primary">Edit</button>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="checkbox-label">
                                                <input type="checkbox"/>
                                                <span className="checkbox-custom"></span>
                                            </label>
                                            <div className="input-title">Show on profile</div>
                                        </div>
                                    </div>
                                    <div className="divider"></div>
                                    <div className="picture">
                                        <p>Profile picture</p>
                                        <div className="control">
                                            <img src={"/images/profile-avatar.png"} alt=""/>
                                            <div>
                                                <button className="btn delete">Delete</button>
                                                <div className="form-group">
                                                    <label htmlFor="file-upload" className="btn btn-primary">
                                                        Custom Upload
                                                    </label>
                                                    <input id="file-upload" type="file"/>
                                                </div>
                                                <p>Must be a .png, .gif or .jpg file smaller than 100MB</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tabs-2" role="tabpanel">
                                    <div className="bio">
                                        <div className="sub_bio layout">
                                            <div className="left_span">
                                                <p>Your studio:</p>
                                                <p>{user.name}</p>
                                            </div>
                                            <div className="right_span">
                                                <Link href="/artist/create-profile/policies"><a className="btn btn-primary">Edit</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="divider"></div>
                                </div>
                                <div className="tab-pane" id="tabs-3" role="tabpanel">
                                    <div className="shop layout">
                                        <p>42 photos uploaded</p>
                                        <Link href="/artist/edit/work-photos"><a className="btn btn-primary">Edit Photos</a></Link>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tabs-4" role="tabpanel">
                                    <div className="shop layout">
                                        <p>5 services offered</p>
                                        <Link href="/artist/edit/services"><a className="btn btn-primary">Edit Services</a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
  }
  
  export default ShopProfilePage;