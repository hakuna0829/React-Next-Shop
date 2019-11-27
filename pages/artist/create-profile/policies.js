import React from "react";
import Link from "next/link";
import Router from "next/router";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import Layout from "../../../components/Layout";
import constants from "../../../constants";
import ProgressBar from "../../template/progress_bar";

class PoliciesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      policy: {
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
        travel_distance_id: "",        
      },
      percent:10,
      created: false
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    let token = this.props.token;
    this.setState({ loading: true }, () => {
      axios
        .get(constants.serverUrl + "api/policies/me", {
          headers: { Authorization: token }
        })
        .then(response => {
          console.log("get policy", response);

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

  handleChange = e => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    let { policy } = this.state;
    policy[name] = value;
    this.setState({
      policy
    });
  };

  gotoNext = async () => {
    let token = this.props.token;
    let { loading, policy } = this.state;

    console.log("save policy", policy);

    let params = { ...policy };

    try {
      if (this.state.created) {
        let policy = await axios.put(
          constants.serverUrl + "api/policies/me",
          params,
          {
            headers: { Authorization: token }
          }
        );
      } else {
        let policy = await axios.post(
          constants.serverUrl + "api/policies/me",
          params,
          {
            headers: { Authorization: token }
          }
        );
      }
      Router.push("/artist/create-profile/how-it-works");
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    let { loading, policy, distances, percent } = this.state;

    console.log(this.state);

    return (
      <Layout title={"Policies"}>
         {/* start progress bar  */}
         <div className="container">
          <div className="row">
            <ProgressBar value={percent}></ProgressBar>
          </div>
        </div>
        {/* end progress bar  */}
        <div className="profile">
          {loading ? (
            <Spinner animation="border" variant="dark" />
          ) : (
            <div className="container">
              <div className="row">
                <div className="row">
                  <h3> Policies </h3>
                </div>
                <div className="row description">
                  <p>Where is your home or studio?</p>
                </div>
                <div className="row">
                  <textarea
                    id="address2"
                    placeholder="Address1"
                    className="form-control"
                    onChange={this.handleChange}
                    name="address1"
                    value={policy.address1}
                  />
                  <div className="row divider15"></div>
                  <textarea
                    id="address2"
                    placeholder="Address2"
                    className="form-control"
                    onChange={this.handleChange}
                    name="address2"
                    value={policy.address2}
                  />
                </div>
                <div className="row divider15"></div>
                <div className="row">
                  <div className="col-md-5 nopadding rightSpace15">
                    <input
                      id="city"
                      placeholder="city"
                      className="form-control"
                      onChange={this.handleChange}
                      name="city"
                      value={policy.city}
                    />
                  </div>
                  <div className="col-md-5 nopadding rightSpace15">
                    <input
                      id="state"
                      placeholder="state"
                      className="form-control"
                      onChange={this.handleChange}
                      name="state"
                      value={policy.state}
                    />
                  </div>
                  <div className="col-md-2 nopadding">
                    <input
                      id="zip"
                      placeholder="zip"
                      className="form-control"
                      onChange={this.handleChange}
                      name="zip"
                      value={policy.zip}
                    />
                  </div>
                </div>
                <div className="row divider15"></div>
                <div className="row divider15"></div>
                <div className="row">
                  <label>How far will you travel for the booking?</label>
                  {/* <input
                    id="travel_distance_id"
                    placeholder="travel_distance_id"
                    className="form-control"
                    onChange={this.handleChange}
                    name="travel_distance_id"
                    value={policy.travel_distance_id}
                  /> */}
                  <select
                    id="travel_distance_id"
                    className="police_select"
                    onChange={this.handleChange}
                    name="travel_distance_id"
                    value={policy.travel_distance_id}
                  >
                    <option value=""></option>
                    {distances.map(item => {
                      return (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <div className="row">
                <div className="page-navs">
                  <div className="column-2-space">
                    <Link href={`/artist/create-profile/service-complete`}>
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
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Layout>
    );
  }
}

export default PoliciesPage;
