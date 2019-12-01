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

    toggleDetails = (e, id) => {
        var downArrow = e.currentTarget.childNodes[0].childNodes[0];
        var upArrow = e.currentTarget.childNodes[0].childNodes[1];
        var itemPanel = e.currentTarget.closest(".item");
    
        if (downArrow.classList.contains("hidden")) {
          // do some stuff
          downArrow.classList.remove("hidden");
          upArrow.classList.add("hidden");
        } else {
          downArrow.classList.add("hidden");
          upArrow.classList.remove("hidden");
        }
    
        var detailPanel = itemPanel.childNodes[1];
        detailPanel.classList.toggle("hidden");
    };

    getLocation = (id) => {
        let location = "";
        if (id != null) {
  
          let location = this.state.user.locations.find(item => {
            return item.id == id;
          });
  
          return location ? location.name : ''
        }
        return location;
    }
    
    getTime = (id) => {
        let sTime = "";
        if (id != null) {
          let sTime = this.state.user.durations.find(item => {
            return item.id == id;
          })
          return sTime ? sTime.name : '';
        }
    
        return sTime;
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
                                                <Link href="/artist/edit/profile"><a className="btn btn-primary">Edit</a></Link>
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
                                                <p>{user.policy.address1} {user.policy.address2}</p>
                                                <p>{user.policy.city}, {user.policy.state} {user.policy.zip}</p>
                                                &nbsp;
                                                <p>You will travel up to {user.policy.travel_distance_id} for appointments</p>
                                            </div>
                                            <div className="right_span">
                                                <Link href="/artist/edit/policies">
                                                    <a className="btn btn-primary">Edit</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="divider"></div>
                                    <div className="bio">
                                        <div className="sub_bio layout">
                                            <div className="left_span">
                                                <p>Appointments must be made at least 1 day in advance</p>
                                                &nbsp;
                                                <p>Allow appointments to be scheduled up to 60 rolling days from today</p>
                                            </div>
                                            <div className="right_span">
                                                <Link href="/artist/create-profile/availability">
                                                    <a className="btn btn-primary">Edit</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tabs-3" role="tabpanel">
                                    <div className="shop layout">
                                        <p>42 photos uploaded</p>
                                        <Link href="/artist/edit/work-photos"><a className="btn btn-primary">Edit Photos</a></Link>
                                    </div>
                                    <div className="shop layout">
                                        <p>Your account is set to sync photos from Instagram</p>
                                        <button className="btn btn-primary">Pause Syncing</button>
                                    </div>
                                    <div className="shop layout">
                                        <div className="uploadImageList">
                                            {user.images.map((image, idx) => (
                                                <div className="form-group col-sm-12 col-md-6 col-lg-4" key={idx}>
                                                    <div className="form-group item">
                                                        <img width="200" height="200" src={image.image} />
                                                    </div>
                                                    <div className="form-group title">
                                                        <i className="fas fa-bookmark"></i>
                                                        {image.title}
                                                    </div>                      
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tabs-4" role="tabpanel">
                                    <div className="shop layout">
                                        <p>{user.services.length} services offered</p>
                                        <Link href="/artist/edit/services"><a className="btn btn-primary">Edit Services</a></Link>
                                    </div>
                                    <div className="shop layout">
                                    {user.services.map((service, idx) => (
                                        <div className="row service" key={idx}>
                                            <div className="item col-sm-12">
                                            <div className=" row column-2-space">
                                                <div className="body">
                                                <h6>{service.name}</h6>
                                                <p>{service.description}</p>
                                                </div>
                                                <div className="action  ">
                                                <div className="column-2-space">
                                                    
                                                </div>
                                                <div
                                                    className="center"
                                                    onClick={e => {
                                                    this.toggleDetails(e, "a");
                                                    }}
                                                >
                                                    <label>
                                                    <i className="fas fa-chevron-down"></i>
                                                    <i className="fas fa-chevron-up hidden"></i>
                                                    </label>
                                                </div>
                                                </div>
                                            </div>

                                            <div className="details hidden">
                                                <div className=" row column-2-start">
                                                <div className="left_detail">
                                                    <h6>Max number of people:</h6>
                                                    <p>{service.max_number_of_people}</p>
                                                    <h6>Extra per person:</h6>
                                                    <p>{service.extra_per_person}</p>
                                                    <h6>Base Price:</h6>
                                                    <p>{service.base_price}</p>
                                                </div>
                                                <div className="">
                                                    <h6>Location:</h6>
                                                    <p>{this.getLocation(service.location_id)}</p>
                                                    <h6>Time:</h6>
                                                    <p>{this.getTime(service.duration_id)}</p>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        ))}
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