import React from "react";
import Link from "next/link";
import Router from "next/router";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import Layout from "../../../components/Layout";
import constants from "../../../constants";
import ServiceModal from "./newService";
import ConfirmModal from "../../template/confirmModal";
import EditServices from "../../../components/artist/EditServices";

class ServicesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      showModal: false,
      showConfirmModal: false,
      editId: null,
      delId: null,
      mode: "new",
      services: [],
      data: []
    };
  }

  // componentDidMount() {
  //   this.fetchData();
  // }

  // showServiceModal = (mode, editId = null) => {
  //   this.setState({
  //     ...this.state,
  //     showModal: !this.state.showModal,
  //     mode: mode,
  //     editId: editId
  //   });
  //   console.log("new modal", this.state.showModal);
  // };

  // showConfirmModal = (delId = null) => {
  //   this.setState({
  //     ...this.state,
  //     showConfirmModal: !this.state.showConfirmModal,
  //     delId: delId
  //   });
  //   console.log("new modal", this.state.showConfirmModal);
  // };

  // fetchData() {
  //   let token = this.props.token;
  //   this.setState({ loading: true }, () => {
  //     axios
  //       .get(constants.serverUrl + "api/services/me/getServices", {
  //         headers: { Authorization: token }
  //       })
  //       .then(response => {
  //         console.log("services", response);

  //         this.setState({
  //           loading: false,
  //           services: response.data.services,
  //           data: response.data
  //         });
  //       })
  //       .catch(error => {
  //         console.log(error);
  //         Router.push("/");
  //       });
  //   });
  // }

  // handleEditServiceChange = e => {
  //   const target = e.target;
  //   const value = target.type === "checkbox" ? target.checked : target.value;
  //   const name = target.name;

  //   this.setState({
  //     [name]: value
  //   });
  // };

  // toggleDetails = (e, id) => {
  //   var downArrow = e.currentTarget.childNodes[0].childNodes[0];
  //   var upArrow = e.currentTarget.childNodes[0].childNodes[1];
  //   var itemPanel = e.currentTarget.closest(".item");

  //   if (downArrow.classList.contains("hidden")) {
  //     // do some stuff
  //     downArrow.classList.remove("hidden");
  //     upArrow.classList.add("hidden");
  //   } else {
  //     downArrow.classList.add("hidden");
  //     upArrow.classList.remove("hidden");
  //   }

  //   var detailPanel = itemPanel.childNodes[1];
  //   detailPanel.classList.toggle("hidden");
  // };

  // addService = newService => {
  //   let token = this.props.token;
  //   let { services } = this.state;
  //   console.log("parent newservice", newService);
  //   services.push(newService);
  //   this.setState({ services });
  //   this.setState({ showModal: false });
  // };

  // getLocation(id) {
  //   let location = "";
  //   if (id != null) {
  //     location = this.state.data.locations.filter(item => {
  //       return item.id == id;
  //     })[0].name;
  //   }
  //   return location;
  // }

  // getTime(id) {
  //   let sTime = "";
  //   if (id != null) {
  //     sTime = this.state.data.durations.filter(item => {
  //       return item.id == id;
  //     })[0].name;
  //   }

  //   return sTime;
  // }

  // editService = service => {
  //   this.setState(state => {
  //     const list = state.services.map(item => {
  //       if (item.id == service.id) {
  //         Object.entries(service).forEach(([key, value]) => {
  //           item[key] = value;
  //         });
  //       }
  //     });
  //     return {
  //       list
  //     };
  //   });
  //   this.setState({ showModal: false });
  //   console.log("updated service", this.state.services);
  // };

  // deleteService = () => {
  //   console.log("id", id);
  //   let id = this.state.delId;
  //   let token = this.props.token;
  //   this.setState({ loading: true }, () => {
  //     axios
  //       .delete(constants.serverUrl + "api/services/me/deleteService", {
  //         headers: { Authorization: token },
  //         data: {
  //           id: id
  //         }
  //       })
  //       .then(response => {
  //         console.log("service delete", response);
  //         let services = this.state.services.filter(item => item.id != id);
  //         this.setState({
  //           services: services,
  //           loading: false
  //         });
  //       })
  //       .catch(error => {
  //         console.log(error);
  //         //Router.push("/");
  //       });
  //   });
  // };

  render() {
    let { loading, data, services } = this.state;
    let { token } = this.props;
    return (
      <Layout title={"Services"}>
        <div className="profile">
          <EditServices token={this.props.token} mode="create"></EditServices>
          {loading ? (
            <Spinner animation="border" variant="dark" />
          ) : (
            <div className="container">
              {console.log("old service", data)}
              <div className="row">
                {/* <div className="column-2-space col-sm-12">
                  <div className="imgPreview">
                    <h3> Services </h3>
                    <h6> What services do you offer? </h6>
                  </div>
                  <div className="button-group">
                    <span className="button">
                      <button
                        type="button"
                        className="btn btn-primary ellipsis btn-block"
                        onClick={() => this.showServiceModal("new")}
                      >
                        New Service
                      </button>
                    </span>
                  </div>
                </div> */}

                {/* {services.map((service, idx) => (
                  <div className="row service" key={idx}>
                    <div className="item col-sm-12">
                      <div className=" row column-2-space">
                        <div className="body">
                          <h6>{service.name}</h6>
                          <p>{service.description}</p>
                        </div>
                        <div className="action  ">
                          <div className="column-2-space">
                            <label>
                              <b
                                onClick={() =>
                                  this.showServiceModal("edit", service.id)
                                }
                              >
                                Edit
                              </b>
                            </label>
                            &nbsp;&nbsp;
                            <label>
                              <b
                                onClick={() =>
                                  this.showConfirmModal(service.id)
                                }
                              >
                                Remove
                              </b>
                            </label>
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
                ))} */}

                {/* start service tempate  */}
                <h6> Try starting with one of these services </h6>
                <div className="row column-2-space">
                  {data.templates.map((template, idx) => {
                    console.log(template);
                    return (
                      <div className="col-md-5 templateOut" key={idx}>
                        <div className="templateInner">
                          <div className="column-2-space ">
                            <div>
                              <label> {template.name} - ${template.base_price} </label>
                            </div>
                            <i className="fas fa-plus-circle"></i>
                          </div>
                        </div>
                      </div>
                    );
                  })}                  
                </div>
              {/* end service tempate  */}
              {/* start footer  */}
                <div className="page-navs">
                  <div className="column-2-space">
                    <Link href={`/artist/create-profile/profile-complete`}>
                      <span className="button">
                        <a href="#" className="btn btn-secondary btn-block">
                          Back
                        </a>
                      </span>
                    </Link>
                    <Link href={`/artist/create-profile/service-complete`}>
                      <span className="button">
                        <a href="#" className="btn btn-primary btn-block">
                          Done
                        </a>
                      </span>
                    </Link>
                  </div>
                </div>
                {/* end footer  */}
              </div>
            </div>
          )}
          <ServiceModal
            show={this.state.showModal}
            onClose={this.showServiceModal}
            services={data}
            token={token}
            editId={this.state.editId}
            mode={this.state.mode}
            action={
              this.state.mode == "new" ? this.addService : this.editService
            }
          ></ServiceModal>
          <ConfirmModal
            show={this.state.showConfirmModal}
            onClose={this.showConfirmModal}
            action={this.deleteService}
            title="Are you sure to remove this service?"
          ></ConfirmModal>
        </div>
      </Layout>
    );
  }
}

export default ServicesPage;
