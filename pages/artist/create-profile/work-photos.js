import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';

import Layout from '../../../components/Layout';

import constants from '../../../constants';

class WorkPhotoPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            images: [],
            new_images: [],
            deleted_images: []
        };

    }

    componentDidMount() {
        this.fetchData();
     }
 
     fetchData() {
         let token = this.props.token
         this.setState({loading: true}, () => {
             axios.get(constants.serverUrl + 'api/profiles/me/getImages', { headers: { 'Authorization': token } })
             .then((response) => {
                console.log('images', response)

                this.setState({
                    loading: false,
                    images : response.data.images
                });
             })
             .catch((error) => {
                 console.log(error)
                 Router.push('/')
             });
         });
     }

    filesSelectedHandler = e => {
        
        let files = e.target.files

        for(let i = 0; i < files.length; i ++) {
            let reader = new FileReader();
            let file = files[i]

            console.log(file)
            if(file) {
                reader.readAsDataURL(file)

                reader.onloadend = () => {


                    let new_images = this.state.new_images

                    let image = {
                        blob: reader.result,
                        filename: file.name,
                        title: file.name,
                        description: ''
                    }
                    new_images.push(image)
                    this.setState({
                        new_images
                    });
                }

            }
        }
    }

    handleTitleChange = idx => evt => {
        const Images = this.state.images.map((image, sidx) => {
          if (idx !== sidx) return image;
          return { ...image, title: evt.target.value };
        });
    
        this.setState({ images: Images });
    };

    handleDeleteImage = idx => evt => {
        let { images, deleted_images } = this.state

        deleted_images.push(images[idx].id)
        images.splice(idx, 1)
        
        this.setState({ images, deleted_images });
    };

    handleNewImageTitleChange = idx => evt => {
        const newImages = this.state.new_images.map((image, sidx) => {
          if (idx !== sidx) return image;
          return { ...image, title: evt.target.value };
        });
    
        this.setState({ new_images: newImages });
    };

    handleNewImageDeleteImage = idx => evt => {
        let { new_images } = this.state

        new_images.splice(idx, 1)
        
        this.setState({ new_images });
    };
    
    gotoNext = () => {
        let token = this.props.token
        let {images, new_images, deleted_images} = this.state

        axios.post(constants.serverUrl + 'api/profiles/me/createImages', {images, new_images, deleted_images}, { headers: { 'Authorization': token } })
          .then((response) => {
            Router.push('/artist/create-profile/profile-complete')
          })
          .catch((error) => {
            console.log(error)
            //this.setState({loading: false});
          })
    }

    render() {
        let {loading, images, new_images} = this.state

        return (
            <Layout title={'Work Photos'}>
                { loading ? <Spinner animation="border" variant="dark"/> : 
                <div className="profile">
                    <h1> Work Photos </h1>
                    <h2> Select Images </h2>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="form-group">
                            <input id="images" placeholder="images" type="file" 
                                    name="images"
                                    multiple
                                    className="form-control" onChange={this.filesSelectedHandler}
                                    accept=".jpg,.jpeg,.png,.bmp"
                                    value="" 
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    {images.map((image, idx) => (
                        
                        <div className="col-sm-4" key={idx}>
                            <div className="form-group">
                                <img width="200" height="200" src={image.image} />
                            </div>
                            <div className="form-group">
                                <input
                                        type="text"
                                        className="form-control"
                                        placeholder={`Title`}
                                        value={image.title}
                                        onChange={this.handleTitleChange(idx)}
                                    />
                            </div>
                            <div className="form-group">
                                <button
                                        className="form-control btn btn-danger"
                                        onClick={this.handleDeleteImage(idx)}>
                                        Delete
                                </button>
                            </div>
                        </div>
                    
                    ))}

                    {new_images.map((image, idx) => (
                        
                        <div className="col-sm-4" key={idx}>
                            <div className="form-group">
                                <img width="200" height="200" src={image.blob} />
                            </div>
                            <div className="form-group">
                                <input
                                        type="text"
                                        className="form-control"
                                        placeholder={`Title`}
                                        value={image.title}
                                        onChange={this.handleNewImageTitleChange(idx)}
                                    />
                            </div>
                            <div className="form-group">
                                <button
                                        className="form-control btn btn-danger"
                                        onClick={this.handleNewImageDeleteImage(idx)}>
                                        Delete
                                </button>
                            </div>
                        </div>
                    
                    ))}
                    </div>
                    <div className="page-navs">
                        <Link href={`/artist/create-profile/category`}><a className="btn btn-secondary">Back</a></Link>
                        {/* <Link href={`/artist/create-profile/services`}><a className="btn btn-info">Next</a></Link> */}
                        <button type="button" className="btn btn-primary ellipsis" onClick={() => {this.gotoNext()}}> Next </button>
                    </div>
                </div>
                }
            </Layout>
        );
    }
  }
  
  export default WorkPhotoPage;