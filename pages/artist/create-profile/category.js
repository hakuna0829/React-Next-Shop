import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';

import Layout from '../../../components/Layout';

import constants from '../../../constants';

class SelectCategoryPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            categories: []
        };

    }

    componentDidMount() {
        this.fetchData();
     }
 
     fetchData() {
         let token = this.props.token
         this.setState({loading: true}, () => {
             axios.get(constants.serverUrl + 'api/profiles/me/getCategories', { headers: { 'Authorization': token } })
             .then((response) => {
                console.log('categories', response)

                this.setState({
                    loading: false,
                    categories : response.data.categories
                });
             })
             .catch((error) => {
                 console.log(error)
                 Router.push('/')
             });
         });
     }

     handleCategoryChange = (e, index) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        
        let { categories } = this.state
        categories[index].checked = value
        this.setState({categories : categories});
    }

    gotoNext = () => {
        let token = this.props.token
        let {categories} = this.state

        let data = categories.map(item => { return { id : item.id, checked : item.checked}})
        axios.put(constants.serverUrl + 'api/profiles/me/updateCategories', { categories: data}, { headers: { 'Authorization': token } })
          .then((response) => {
            Router.push('/artist/create-profile/work-photos')
          })
          .catch((error) => {
            console.log(error)
          })
    }

    render() {
        let {loading, categories} = this.state

        return (
            <Layout title={'Select Categories'}>
               
                    { loading ? <Spinner animation="border" variant="dark"/> : 
                     <div className="suggest">
                        <h1> Select Categories </h1>
                        <h2> What kind of work do you do? </h2>
                        <div className="row" >
                        {categories.map((category, idx) => (
                        
                            <div className="col-lg-4" key={idx}>
                                <div className="form-group">
                                    <label>
                                        {category.name}
                                    </label>
                                    <input
                                        type="checkbox"
                                        className="form-control"
                                        checked={category.checked}
                                        onChange={(e) => this.handleCategoryChange(e, idx)}
                                    />
                                </div>
                            </div>
                        
                        ))}
                    </div>
                        <div className="page-navs">
                            <Link href={`/artist/create-profile/profile`}><a className="btn btn-secondary">Back</a></Link>

                            <button type="button" className="btn btn-primary ellipsis" onClick={() => {this.gotoNext()}}> Next </button>

                            {/* <Link href={`/artist/create-profile/work-photos`}><a className="btn btn-info">Next</a></Link> */}
                        </div>
                    </div>
                    }
                
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
  
  export default SelectCategoryPage;