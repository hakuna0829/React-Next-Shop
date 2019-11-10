import React from 'react';
import Router from 'next/router';
import axios from 'axios';
import cookie from 'js-cookie';

import Layout from '../../components/Layout';

import constants from '../../constants';

class CreateProfilePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            step: 0,
            max_step: 6,
            picture_file: '',
            picture: '',
            bio: 'Temporary',
            work_site: 'work.com',
            rate: 2,
            location: 'New York',
            can_travel: true,
            max_travel_distance: 10,
            instagram_url: '',
            facebook_url: '',
            linkedin_url: '',
            social_accounts: [],
            skills: 'html, css',
            labels: 'bootstrap',
            experience: 5,
            work_photos: [],
            pricings: [{ 
                title: "Wedding makeup", 
                description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibheuismod tincidunt", 
                price: 100 
            }]
        };

    }

    componentDidMount() {
        this.fetchData();
     }
 
     fetchData() {
         let token = cookie.get('token')
         this.setState({loading: true}, () => {
             axios.get(constants.serverUrl + 'api/artists/me', { headers: { 'Authorization': token } })
             .then((response) => {
                 console.log('----- artists/me response', response)
                 console.log('----- role', response.data.artist.role)
                 if(response.data.artist.role == 'client') {
                     return Router.push('/search')
                 }
                 else if(response.data.artist.has_profile == true)
                 {
                     return Router.push('/artist/profile') 
                 }
             })
             .catch((error) => {
                 console.log(error)
                 Router.push('/')
             });
         });
    }

    gotoStep = (dir) => {
        let step = this.state.step + dir
        if( step < 0)
            step = 0
        if(step > this.state.max_step)
            step = this.state.max_step
        this.setState({
            step : step
        })
    }
    
    saveProfile = () => {
        let token = cookie.get('token')
        let {...artist} = this.state

        console.log(artist)
        axios.post(constants.serverUrl + 'api/artists', artist, { headers: { 'Authorization': token } })
          .then((response) => {
            console.log(response)
            Router.push('/artist/profile')
           
          })
          .catch((error) => {
            console.log(error)
            //this.setState({loading: false});
          })
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
        console.log('file', e.target.files[0]);
        let reader = new FileReader();
        let file = e.target.files[0];

        if(!file)
            return
        reader.onloadend = () => {
            this.setState({
                picture_file: file.name,
                picture: reader.result
            });
        }

        reader.readAsDataURL(file)
    }

    handlePricingTitleChange = idx => evt => {
        const newPricings = this.state.pricings.map((pricing, sidx) => {
          if (idx !== sidx) return pricing;
          return { ...pricing, title: evt.target.value };
        });
    
        this.setState({ pricings: newPricings });
    };
    
    handlePricingPriceChange = idx => evt => {
        const newPricings = this.state.pricings.map((pricing, sidx) => {
          if (idx !== sidx) return pricing;
          return { ...pricing, price: evt.target.value };
        });
    
        this.setState({ pricings: newPricings });
    };
    
    handleAddPricing = () => {
        this.setState({
            pricings: this.state.pricings.concat([{ title: "", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibheuismod tincidunt", price: "" }])
        });
    };
    
    handleRemovePricing = idx => () => {
        this.setState({
            pricings: this.state.pricings.filter((s, sidx) => idx !== sidx)
        });
    };

    handleWorkPhotoTitleChange = idx => evt => {
        const newWorkPhoto = this.state.work_photos.map((photo, sidx) => {
          if (idx !== sidx) return photo;
          return { ...photo, title: evt.target.value };
        });
    
        this.setState({ work_photos: newWorkPhoto });
    };

    handleWorkPhotoDescriptionChange = idx => evt => {
        const newWorkPhoto = this.state.work_photos.map((photo, sidx) => {
          if (idx !== sidx) return photo;
          return { ...photo, description: evt.target.value };
        });
    
        this.setState({ work_photos: newWorkPhoto });
    };
    
    
    handleWorkPhotoFileChange = (e, idx) => {
        
        console.log(idx)
        console.log(e.target.files[0]);
        let reader = new FileReader();
        let file = e.target.files[0];

        if(!file)
            return
        reader.onloadend = () => {

            const newWorkPhoto = this.state.work_photos.map((photo, sidx) => {
                if (idx !== sidx) return photo;
                return { ...photo, file: file.name, photo: reader.result };
            });
          
            this.setState({ work_photos: newWorkPhoto });
        }

        reader.readAsDataURL(file)
    }

    handleAddWorkPhoto = () => {
        this.setState({
            work_photos: this.state.work_photos.concat([{ file: "", photo: "", title: "", description: "" }])
        });
    };
    
    handleRemoveWorkPhoto = idx => () => {
        this.setState({
            work_photos: this.state.work_photos.filter((s, sidx) => idx !== sidx)
        });
    };

    handleSocialAccountTypeChange = idx => evt => {
        const newAccounts = this.state.social_accounts.map((account, sidx) => {
          if (idx !== sidx) return account;
          return { ...account, type: evt.target.value };
        });
    
        this.setState({ social_accounts: newAccounts });
    };

    handleSocialAccountLinkChange = idx => evt => {
        const newAccounts = this.state.social_accounts.map((account, sidx) => {
          if (idx !== sidx) return account;
          return { ...account, link: evt.target.value };
        });
    
        this.setState({ social_accounts: newAccounts });
    };

    handleAddSocialAccount = () => {
        this.setState({
            social_accounts: this.state.social_accounts.concat([{ type: "", link: ""}])
        });
    };
    
    handleRemoveSocialAccount = idx => () => {
        this.setState({
            social_accounts: this.state.social_accounts.filter((s, sidx) => idx !== sidx)
        });
    };
    
    ProfileStep = () => {
        let {step, picture} = this.state

        let $imagePreview = null;
        if (picture) {
            $imagePreview = (<img width="200" height="200" src={picture} />);
        } else {
            $imagePreview = (<img width="200" height="200" src={'/images/product.png'} />);
        }

        switch(step) {
          case 0:
            return (
                <div className="row profile-step">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label htmlFor="picture" className="control-label">Picture</label> 
                            <input id="picture" placeholder="picture" type="file" 
                                    name="picture"
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
            );
          case 1:
            return (
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label htmlFor="work_site" className="control-label">Your Work</label> 
                            <input id="work_site" placeholder="yourwork.com" type="text" className="form-control" onChange={this.handleChange}
                                name="work_site"
                                value={this.state.work_site}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="rate" className="control-label">Rate</label> 
                            <input id="rate" placeholder="Just a range to give your clients a guide" type="text" className="form-control" onChange={this.handleChange}
                                name="rate"
                                value={this.state.rate}/>
                        </div>
                    </div>
                </div>
            );
          case 2:
            return (
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label htmlFor="location" className="control-label">Your Location</label> 
                            <input id="location" placeholder="Brooklyn, New York, USA" type="text" className="form-control" onChange={this.handleChange}
                                name="location"
                                value={this.state.location}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="can_travel" className="control-label">Willing to travel?</label> 
                            <input id="can_travel" placeholder="100km" type="checkbox" className="form-control" onChange={this.handleChange}
                                name="can_travel"
                                checked={!!this.state.can_travel}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="max_travel_distance" className="control-label">How far are you willing to travel?</label> 
                            <input id="max_travel_distance" placeholder="100km" type="text" className="form-control" onChange={this.handleChange}
                                name="max_travel_distance"
                                value={this.state.max_travel_distance}/>
                        </div>
                    </div>
                </div>
            );
        case 3:
            return (
                <div>
                    <div className="row">
                        <div className="col-lg-4">
                            <h2> Connect Social Accounts</h2>
                            <div className="form-group">
                                <label htmlFor="instagram_url" className="control-label">Instagram</label> 
                                <input id="instagram_url" placeholder="Instagram" type="text" className="form-control" onChange={this.handleChange}
                                    name="instagram_url"
                                    value={this.state.instagram_url}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="facebook_url" className="control-label">Facebook</label> 
                                <input id="facebook_url" placeholder="Facebook" type="text" className="form-control" onChange={this.handleChange}
                                    name="facebook_url"
                                    value={this.state.facebook_url}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="linkedin_url" className="control-label">Linkedin</label> 
                                <input id="linkedin_url" placeholder="Linkedin" type="text" className="form-control" onChange={this.handleChange}
                                    name="linkedin_url"
                                    value={this.state.linkedin_url}/>
                            </div>
                        </div>
                    </div>
                    {this.state.social_accounts.map((account, idx) => (
                        <div className="row" key={idx}>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder={`Account #${idx + 1} type`}
                                        value={account.type}
                                        onChange={this.handleSocialAccountTypeChange(idx)}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder={`Account #${idx + 1} link`}
                                        value={account.link}
                                        onChange={this.handleSocialAccountLinkChange(idx)}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <button
                                    type="button"
                                    onClick={this.handleRemoveSocialAccount(idx)}
                                    className="btn btn-primary"
                                    >
                                    Remove Account
                                </button>
                            </div>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={this.handleAddSocialAccount}
                        className="small"
                        className="btn btn-primary"
                        >
                        Add Account
                    </button>
                </div>
            );
        case 4:
            return (
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label htmlFor="skills" className="control-label">Skills</label> 
                            <input id="skills" placeholder="Skills" type="text" className="form-control" onChange={this.handleChange}
                                name="skills"
                                value={this.state.skills}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="labels" className="control-label">More labels to pick</label> 
                            <input id="labels" placeholder="labels" type="text" className="form-control" onChange={this.handleChange}
                                name="labels"
                                value={this.state.labels}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="experience" className="control-label">Experience : When did you start your career?</label> 
                            <input id="experience" placeholder="Experience" type="text" className="form-control" onChange={this.handleChange}
                                name="experience"
                                value={this.state.experience}/>
                        </div>
                    </div>
                </div>
            );
        case 5:
            return (
                <div>
                    <h1>
                        Price
                    </h1>
                    {this.state.pricings.map((pricing, idx) => (
                        <div className="row" key={idx}>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder={`Pricing #${idx + 1} title`}
                                        value={pricing.title}
                                        onChange={this.handlePricingTitleChange(idx)}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder={`Pricing #${idx + 1} price`}
                                        value={pricing.price}
                                        onChange={this.handlePricingPriceChange(idx)}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <button
                                    type="button"
                                    onClick={this.handleRemovePricing(idx)}
                                    className="btn btn-primary"
                                    >
                                    Remove Pricing
                                </button>
                            </div>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={this.handleAddPricing}
                        className="small"
                        className="btn btn-primary"
                        >
                        Add Pricing
                    </button>
                </div>
            );
        case 6:
            return (
                <div>
                    <h1>
                        Work Photo
                    </h1>
                    {this.state.work_photos.map((work_photo, idx) => (
                        <div className="row" key={idx}>
                            <div className="col-lg-3">
                                <div className="form-group">
                                    <input
                                        type="file"
                                        className="form-control"
                                        placeholder={`Work Photo #${idx + 1}`}
                                        onChange={(e) => this.handleWorkPhotoFileChange(e, idx)}
                                        accept=".jpg,.jpeg,.png,.bmp"
                                        value="" 
                                    />
                                </div>
                                { work_photo.photo ? 
                                    <img width="200" height="200" src={work_photo.photo} /> : 
                                    <img width="200" height="200" src={'/images/product.png'} /> }
                            </div>
                            <div className="col-lg-3">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder={`Photo #${idx + 1} title`}
                                        value={work_photo.title}
                                        onChange={this.handleWorkPhotoTitleChange(idx)}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder={`Photo #${idx + 1} description`}
                                        value={work_photo.description}
                                        onChange={this.handleWorkPhotoDescriptionChange(idx)}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <button
                                    type="button"
                                    onClick={this.handleRemoveWorkPhoto(idx)}
                                    className="btn btn-primary"
                                    >
                                    Remove Work Photo
                                </button>
                            </div>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={this.handleAddWorkPhoto}
                        className="small"
                        className="btn btn-primary"
                        >
                        Add Work Photo
                    </button>
                </div>
                // <div className="row">
                //     <div className="col-lg-6">
                //         <div className="form-group">
                //             <label htmlFor="work_photos" className="control-label">Add Photos of your work</label> 
                //             <input id="work_photos" placeholder="work_photos" type="text" className="form-control" onChange={this.handleChange}
                //                 name="work_photos"
                //                 value={this.state.work_photos}/>
                //         </div>
                //     </div>
                // </div>
            );
        default:
            return null;
        }
    }
    
    render() {
        const { step } = this.state
        return (
            <Layout title={'Profile Initial'}>
            <main>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" />
                {/* <link rel="stylesheet" href="css/air2.global.responsive.12.9.0.min.css" />
                <link rel="stylesheet" type="text/css" href="css/landing.css"></link> */}
                <div className="eo-tabset breadcrumbs col-md-3">
                    <ul  className="nav nav-pills nav-stacked">
                        <li className={step == 0 ? 'active' : 'disabled'}><a ><span  aria-hidden="true" className="glyphicon m-0-left air-icon-draw-tool"></span>
                            The basic
                            </a> <span  aria-hidden="true" className="completed-icon glyphicon air-icon-verified completed"></span>
                        </li>
                        <li className={step == 1 ? 'active' : 'disabled'}><a ><span  aria-hidden="true" className="glyphicon m-0-left air-icon-design"></span>
                            Personal
                            </a> <span  aria-hidden="true" className="completed-icon glyphicon air-icon-verified"></span>
                        </li>
                        <li className={step == 2 ? 'active' : 'disabled'}><a ><span  aria-hidden="true" className="glyphicon m-0-left air-icon-specifications"></span>
                            Location
                            </a> <span  aria-hidden="true" className="completed-icon glyphicon air-icon-verified"></span>
                        </li>
                        <li className={step == 3 ? 'active' : 'disabled'}><a ><span  aria-hidden="true" className="glyphicon m-0-left air-icon-complete"></span>
                            Social
                            </a> <span  aria-hidden="true" className="completed-icon glyphicon air-icon-verified"></span>
                        </li>
                        <li className={step == 4 ? 'active' : 'disabled'}><a ><span  aria-hidden="true" className="glyphicon m-0-left air-icon-complete"></span>
                            Skills, etc
                            </a> <span  aria-hidden="true" className="completed-icon glyphicon air-icon-verified"></span>
                        </li>
                        <li className={step == 5 ? 'active' : 'disabled'}><a ><span  aria-hidden="true" className="glyphicon m-0-left air-icon-complete"></span>
                            Pricing
                            </a> <span  aria-hidden="true" className="completed-icon glyphicon air-icon-verified"></span>
                        </li>
                        <li className={step == 6 ? 'active' : 'disabled'}><a ><span  aria-hidden="true" className="glyphicon m-0-left air-icon-complete"></span>
                            Work examples
                            </a> <span  aria-hidden="true" className="completed-icon glyphicon air-icon-verified"></span>
                        </li>

                    </ul>
                </div>
                <div className="col-md-9 right-box">
                    <div className="air-card m-0-top p-0-top-bottom">
                        
                                {this.ProfileStep()}
                                
                            
                        
                    </div>
                    <div className="btn-row">
                        {/* <a href="/freelancers/#specializedwork_sites" target="_self" className="btn btn-default ellipsis">
                            Cancel
                        </a> */}
                        <div className="col-md-4">
                            <button className="btn btn-default ellipsis" type="button" onClick={() => {this.gotoStep(-1)}}> Back </button>
                        </div>
                        
                        <div className="col-md-4">
                            { step == 6 ? (<button className="btn btn-primary ellipsis" type="submit" onClick={this.saveProfile} > Save </button>) : ( <button type="button" className="btn btn-primary ellipsis" onClick={() => {this.gotoStep(1)}}> Next </button> ) }
                        </div>

                        <div className="col-md-4">
                            <button className="btn btn-primary ellipsis" type="submit" onClick={this.saveProfile} > Save </button>
                        </div>
                    </div>
                </div>
                    <style jsx global>{`
                        main {
                            width: 100%;
                            min-height: 600px;
                            padding-top: 100px;
                            background: white;
                            display: flex;
                        }

                        .nav {
                            display: flex;
                            flex-direction: column;
                        }

                        .eo-tabset.breadcrumbs li.active>a{
                            box-shadow: 0 1px 6px rgba(57,73,76,.35);
                        }

                        .eo-tabset.breadcrumbs .completed-icon.completed {
                            color: #37a000;
                        }

                        .right-box {
                            padding-left : 10px;
                            padding-right  : 10px;
                        }

                        .air-card {
                            margin : 0px;
                            min-height: 400px;
                        }

                        .row .profile-step {
                            min-height: 400px;
                        }

                        .ellipsis {
                            width: 100px !important;
                            margin-bottom: 0;
                        }

                        input[type='checkbox'] {
                            width: 40px !important;
                        }
                    `}</style>
            </main>
            </Layout>
        );
    }
  }
  
  export default CreateProfilePage;