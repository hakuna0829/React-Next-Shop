import React, { useState, useEffect } from "react";
import Router from "next/router";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import constants from "../../constants";

import StepButtons from "./StepButtons";

export default function EditWorkPhotos(props) {

    const  [loading, setLoading] =  useState(false)
    const  [images, setImages] = useState([])
    const  [new_images, setNewImages] = useState([])
    const  [deleted_images, setDeleteImages] = useState([])

    const backLinks = {
        'create' : '/artist/create-profile/profile',
        'edit' : '/artist/shop'
    }

    useEffect(() => {
        let token = props.token;
        setLoading(true)

        axios
            .get(constants.serverUrl + "api/images/me", {
                headers: { Authorization: token }
            })
            .then(response => {
                setLoading(false)
                console.log('work photos', response)
                setImages(response.data.images)
            })
            .catch(error => {
                setLoading(false)
                console.log(error);
                Router.push("/");
            });
       
    }, []);

    let filesSelectedHandler = e => {
        let files = e.target.files;
    
        for (let i = 0; i < files.length; i++) {
          let reader = new FileReader();
          let file = files[i];
    
          console.log(file);
          if (file) {
            reader.readAsDataURL(file);
    
            reader.onloadend = () => {
              let new_images = this.state.new_images;
    
              let image = {
                blob: reader.result,
                filename: file.name,
                title: file.name,
                description: ""
              };
              new_images.push(image);
              this.setState({
                new_images
              });
            };
          }
        }
      };
    
     let handleUploadBtnClick = () => {
        document.getElementById("images").click();
      };
    
      let  handleTitleChange = idx => evt => {
        const Images = images.map((image, sidx) => {
          if (idx !== sidx) return image;
          return { ...image, title: evt.target.value };
        });
        
        setImages(Images)
      };
    
      let  handleDeleteImage = idx => evt => {
        
        deleted_images.push(images[idx].id);

        setDeleteImages(deleted_images)

        images.splice(idx, 1);
    
        setImages(images)
      };
    
      let  handleNewImageTitleChange = idx => evt => {
        const newImages = new_images.map((image, sidx) => {
          if (idx !== sidx) return image;
          return { ...image, title: evt.target.value };
        });
    
        setNewImages(newImages)
      };
    
      let  handleNewImageDeleteImage = idx => evt => {
        new_images.splice(idx, 1);
    
        setNewImages(new_images)
      };
    


    let save = async () => {
        let token = props.token;
        let mode = props.mode;

        try {
            let resp = await axios.put(
                    constants.serverUrl + "api/images/me",
                    { images, new_images, deleted_images },
                    { headers: { Authorization: token } }
                )
            if(mode == 'create')
                Router.push("/artist/create-profile/profile-complete");
            else
                Router.push("/artist/shop");
        }
        catch(err) {
            console.log(err);
        }
    };

    return (
        <div className="profile">
          <div className="container">
            <div className="row">
                { loading ? <Spinner animation="border" variant="dark" /> : 
                <div>
                    <div className="column-2-start">
                    <div className="imgPreview">
                        <h3> Upload images </h3>
                        <p>
                        Upload examples for your best work for your clients to see
                        on your profile
                        </p>
                    </div>
                    <div className="button-group">
                        <input
                        id="images"
                        placeholder="images"
                        type="file"
                        name="images"
                        multiple
                        className="form-control hidden"
                        onChange={filesSelectedHandler}
                        accept=".jpg,.jpeg,.png,.bmp"
                        value=""
                        />

                        <span className="button">
                        <button
                            type="button"
                            className="btn btn-primary ellipsis btn-block"
                            onClick={() => {
                            handleUploadBtnClick();
                            }}
                        >
                            Choose files
                        </button>
                        </span>                    
                    </div>
                    </div>
                    
                    <div className="row col-sm-12 uploadImageList">
                    {images.map((image, idx) => (
                        <div className=" form-group col-sm-12 col-md-6 col-lg-4" key={idx}>
                        <div className="form-group item">
                            <img width="200" height="200" src={image.image} />
                            <i className="fas fa-trash-alt" onClick={handleDeleteImage(idx)}></i>
                        </div>
                        <div className="form-group title">
                            <i className="fas fa-bookmark"></i>
                            <input
                            type="text"
                            className="form-control"
                            placeholder={`Title`}
                            value={image.title}
                            onChange={handleTitleChange(idx)}
                            />
                        </div>                      
                        </div>
                    ))}

                    {new_images.map((image, idx) => (
                        <div className="form-group col-sm-12 col-md-6 col-lg-4" key={idx}>
                        <div className="form-group item">
                            <img width="200" height="200" src={image.blob} />
                            <i className="fas fa-trash-alt" onClick={handleNewImageDeleteImage(idx)}></i>
                        </div>
                        <div className="form-group title">
                        <i className="fas fa-bookmark"></i>
                            <input
                            type="text"
                            className="form-control"
                            placeholder={`Title`}
                            value={image.title}
                            onChange={handleNewImageTitleChange(idx)}
                            />
                            {/* <input
                            type="text"
                            className="form-control"
                            placeholder={`Title`}
                            value={image.title}
                            onChange={this.handleNewImageTitleChange(idx)}
                            /> */}
                        </div>
                        {/* <div className="form-group delete">
                            <button
                            className="form-control btn btn-danger"
                            onClick={this.handleNewImageDeleteImage(idx)}
                            >
                            Delete
                            </button>
                        </div> */}
                        </div>
                    ))}
                    </div>
                    <StepButtons save={save} mode={props.mode} backLink={backLinks[props.mode]}></StepButtons>
                </div>
                }
            </div>
          </div>
        </div>
    )
}