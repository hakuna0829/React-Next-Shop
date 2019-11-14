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
            images: []
        };

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


                    let images = this.state.images

                    let image = {
                        blob: reader.result,
                        filename: file.name,
                        title: file.name
                    }
                    images.push(image)
                    this.setState({
                        images
                    });
                }

            }
        }
    }

    handleTitleChange = idx => evt => {
        const newImages = this.state.images.map((image, sidx) => {
          if (idx !== sidx) return image;
          return { ...image, title: evt.target.value };
        });
    
        this.setState({ images: newImages });
    };

    gotoNext = () => {
        let token = this.props.token
        let {...profile} = this.state

        axios.post(constants.serverUrl + 'api/profiles/me/createImages', profile, { headers: { 'Authorization': token } })
          .then((response) => {
            //Router.push('/artist/create-profile/service')
          })
          .catch((error) => {
            console.log(error)
            //this.setState({loading: false});
          })
    }

    render() {
        let {images} = this.state

        return (
            <Layout title={'Work Photos'}>
                <div className="suggest">
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
                                <img width="200" height="200" src={image.blob} />
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
                        </div>
                    
                    ))}
                    </div>
                    <div className="page-navs">
                        <Link href={`/artist/create-profile/category`}><a className="btn btn-secondary">Back</a></Link>
                        {/* <Link href={`/artist/create-profile/services`}><a className="btn btn-info">Next</a></Link> */}
                        <button type="button" className="btn btn-primary ellipsis" onClick={() => {this.gotoNext()}}> Next </button>
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
  
  export default WorkPhotoPage;