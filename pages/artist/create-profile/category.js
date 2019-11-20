import React from "react";
import Link from "next/link";
import Router from "next/router";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import Layout from "../../../components/Layout";
import constants from "../../../constants";


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
    let token = this.props.token;
    this.setState({ loading: true }, () => {
      axios
        .get(constants.serverUrl + "api/profiles/me/getCategories", {
          headers: { Authorization: token }
        })
        .then(response => {
          console.log("categories", response);

          this.setState({
            loading: false,
            categories: response.data.categories
          });
        })
        .catch(error => {
          console.log(error);
          Router.push("/");
        });
    });
  }

  handleCategoryChange = (e, index) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;

    let { categories } = this.state;
    categories[index].checked = value;
    this.setState({ categories: categories });
  };

  gotoNext = () => {
    let token = this.props.token;
    let { categories } = this.state;

    let data = categories.map(item => {
      return { id: item.id, checked: item.checked };
    });
    axios
      .put(
        constants.serverUrl + "api/profiles/me/updateCategories",
        { categories: data },
        { headers: { Authorization: token } }
      )
      .then(response => {
        Router.push("/artist/create-profile/work-photos");
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    let { loading, categories } = this.state;

    return (
      <Layout title={"Select Categories"}>
        <div className="profile">
          <div className="container">
            <div className="row">
              {loading ? (
                <Spinner animation="border" variant="dark" />
              ) : (
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
                    <div className="row categoryList">
                      {categories.map((category, idx) => (
                         <div className="item" key={idx}>
                           <label className="cat_container">
                             <input 
                                 type="checkbox" 
                                 checked={category.checked} 
                                 className="form-control"
                                 onChange={e => this.handleCategoryChange(e, idx)}
                             />
                             <div className="checkmark">{category.name}</div> 
                         </label>                          
                        </div>
                      ))}
                    </div>
                    <div className="page-navs">
                        <div className="column-2-space">
                        <Link href={`/artist/create-profile/profile`}>
                        <span className="button">
                            <a className="btn btn-secondary btn-block">Back</a>
                            </span>
                        </Link>
                        <span className="button">
                        <button
                            type="button"
                            className="btn btn-primary ellipsis btn-block"
                            onClick={() => {
                            this.gotoNext();
                            }}
                        >
                            {" "}
                            Next{" "}
                        </button>
                        </span>

                        {/* <Link href={`/artist/create-profile/work-photos`}><a className="btn btn-info">Next</a></Link> */}
                        </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
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

export default SelectCategoryPage;
