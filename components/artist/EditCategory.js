import React, { useState, useEffect } from "react";
import Router from "next/router";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import constants from "../../constants";

import StepButtons from "./StepButtons";

export default function EditCategory(props) {

    const  [loading, setLoading] =  useState(false)
    const  [categories, setCategories] = useState([])

    const backLinks = {
        'create' : '/artist/create-profile/profile',
        'edit' : '/artist/shop'
    }
    useEffect(() => {
        let token = props.token;
        setLoading(true)

        axios
            .get(constants.serverUrl + "api/categories/me", {
                headers: { Authorization: token }
            })
            .then(response => {
                setLoading(false)
                setCategories(response.data.categories)
            })
            .catch(error => {
                setLoading(false)
                console.log(error);
                Router.push("/");
            });
       
    }, []);

    let handleCategoryChange = (e, index) => {
        let newCategories = [...categories]
        const target = e.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
    
        newCategories[index].checked = value;
        
        setCategories(newCategories)
    };


    let save = async () => {
        let token = props.token;
        let mode = props.mode;

        let data = categories.map(item => {
          return { id: item.id, checked: item.checked };
        });

        try {
            let resp = await axios.put(
                    constants.serverUrl + "api/categories/me",
                    { categories: data },
                    { headers: { Authorization: token } }
                )
            if(mode == 'create')
                Router.push("/artist/create-profile/work-photos");
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
                    <div className="row">
                    <h3> What kind of work do you do? </h3>
                    </div>
                    <div className="row description">  
                        <p className="categorySubTitle">Categories</p>
                        <p>
                            What kinds of makeup do you do? Categories affect how you
                            show on search results and which pages your shop will get
                            featured on.
                        </p>
                    </div>
                    <div className="row" >
                        <div className="categoryList">
                            {categories.map((category, idx) => (
                                <div className="item" key={idx}>
                                <label className="cat_container">
                                    <input 
                                        type="checkbox" 
                                        checked={category.checked} 
                                        className="form-control"
                                        onChange={e => handleCategoryChange(e, idx)}
                                    />
                                    <div className="checkmark">{category.name}</div> 
                                </label>                          
                            </div>
                            ))}
                        </div>
                    </div>
                    <StepButtons save={save} mode={props.mode} backLink={backLinks[props.mode]}></StepButtons>
                </div>
                }
            </div>
          </div>
        </div>
    )
}