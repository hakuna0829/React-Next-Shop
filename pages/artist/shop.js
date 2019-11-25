import React from 'react';
import Link from 'next/link';

import Layout from '../../components/Layout';


class ShopProfilePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pageTitle : 'Shop Profile'
        };

    }

    render() {
        const { pageTitle } = this.state
        return (
            <Layout title={ pageTitle }>
                <div className="account">
                    <div className="container">
                        <div className="row">
                            <div className="intro">
                                <div className="sub_intro">
                                    <img src={"/images/profile-avatar.png"} alt=""/>
                                    <div className="name">
                                        <h4>Makeup by Mylah Morales</h4>
                                        <p>Public</p>
                                    </div>
                                </div>
                                <button className="btn btn-primary">View profile</button>
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
                                        <p>Your shop is currently Public</p>
                                        <button className="btn btn-primary">Go Private</button>
                                    </div>
                                    <div className="divider"></div>
                                    <div className="bio">
                                        <div className="sub_bio layout">
                                            <div className="left_span">
                                                <p>Name:</p>
                                                <p>Makeup by Mylah Morales</p>
                                            </div>
                                            <div className="right_span">
                                                <button className="btn btn-primary">Edit</button>
                                            </div>
                                        </div>
                                        <div className="sub_bio layout">
                                            <div className="left_span">
                                                <p>Bio:</p>
                                                <p>Anny Chow provides on location makeup and hair service for bridal or any special occasion.</p>
                                            </div>
                                            <div className="right_span"></div>
                                        </div>
                                    </div>
                                    <div className="divider"></div>
                                    <div className="category">
                                        <div className="sub_cat layout">
                                            <p>Categories</p>
                                            <button className="btn btn-primary">Edit</button>
                                        </div>
                                        <button type="button" className="btn btn-outline-primary">Photo shoots</button>
                                        <button type="button" className="btn btn-outline-primary">Costume</button>
                                    </div>
                                    <div className="divider"></div>
                                    <div className="instagram">
                                        <div className="sub_inst layout">
                                            <div className="left_span">
                                                <p>Name:</p>
                                                <p>Makeup by Mylah Morales</p>
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
                                    <p>Policies</p>
                                </div>
                                <div className="tab-pane" id="tabs-3" role="tabpanel">
                                    <p>Photos</p>
                                </div>
                                <div className="tab-pane" id="tabs-4" role="tabpanel">
                                    Services
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