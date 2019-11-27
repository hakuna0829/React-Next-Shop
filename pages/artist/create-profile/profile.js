import React from "react";
import Link from "next/link";
import Router from "next/router";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import Layout from "../../../components/Layout";
import constants from "../../../constants";
import ProgressBar from "../../template/progress_bar";

class CreateProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      profile: {},
      name: "",
      avatar: "",
      avatar_filename: "",
      bio: "",
      percent:33
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    let token = this.props.token;
    this.setState({ loading: true }, () => {
      axios
        .get(constants.serverUrl + "api/users/me/profile", {
          headers: { Authorization: token }
        })
        .then(response => {
          console.log("me response", response);

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

    this.setState({
      [name]: value
    });
  };

  fileSelectedHandler = e => {
    let reader = new FileReader();
    let file = e.target.files[0];

    if (!file) return;
    reader.onloadend = () => {
      this.setState({
        avatar_filename: file.name,
        avatar: reader.result
      });
    };

    reader.readAsDataURL(file);
  };

  gotoNext = () => {
    let token = this.props.token;
    let { ...profile } = this.state;

    console.log("profile", profile);
    axios
      .put(constants.serverUrl + "api/users/me/profile", profile, {
        headers: { Authorization: token }
      })
      .then(response => {
        Router.push("/artist/create-profile/category");
      })
      .catch(error => {
        console.log(error);
        //this.setState({loading: false});
      });
  };

  handleDelete = () => {
    console.log("click delete button");
  };

  handleUploadBtnClick = () => {
    document.getElementById("avatar").click();
  };

  render() {
    let { avatar, loading, percent } = this.state;

    let $imagePreview = null;
    if (avatar) {
      $imagePreview = <img src={avatar} />;
    } else {
      $imagePreview = <img src={"/images/profile-avatar.png"} />;
    }

    return (
      <Layout title={"Create Profile"}>
        {/* start progress bar  */}
        <div className="container">
          <div className="row">
            <ProgressBar
             value={percent}
            ></ProgressBar>
          </div>
        </div>
        {/* end progress bar  */}

        {/* start profile page */}
        <div className="profile">
          <div className="container">
            <div className="row">
              {loading ? (
                <Spinner animation="border" variant="dark" />
              ) : (
                <div className="row profile-step">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <h3> Tell us about you </h3>
                      <label htmlFor="name" className="form-label">
                        Shop Name
                      </label>
                      <p>
                        This is how clients will see your shop listed. Yu can
                        sue your business name or just your name.
                      </p>
                      <input
                        id="name"
                        placeholder="Type here"
                        className="form-control input"
                        onChange={this.handleChange}
                        name="name"
                        type="text"
                        value={this.state.name}
                      />
                    </div>
                    <br />
                    <div className="form-group">
                      <label htmlFor="avatar" className="form-label">
                        Profile Picture
                      </label>
                      <p>
                        Add a picture of yourself to help your clients get to
                        know you better.
                      </p>
                      <div className="column-2-start">
                        <div className="imgPreview">{$imagePreview}</div>
                        <div className="button-group">
                          <input
                            id="avatar"
                            placeholder="avatar"
                            type="file"
                            name="avatar"
                            className="form-control hidden"
                            onChange={this.fileSelectedHandler}
                            accept=".jpg,.jpeg,.png,.bmp"
                            value=""
                          />

                          <span className="button">
                            <button
                              type="button"
                              className="btn btn-secondary ellipsis btn-block"
                              onClick={() => {
                                this.handleDelete();
                              }}
                            >
                              Delete
                            </button>
                            <button
                              type="button"
                              className="btn btn-primary ellipsis btn-block"
                              onClick={() => {
                                this.handleUploadBtnClick();
                              }}
                            >
                              Choose file
                            </button>
                          </span>
                          <p>Must be a .png or .jpg file smaller than 100MB</p>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="bio" className="form-label">
                        Bio
                      </label>
                      <p>
                        Tell your clients a little about yorusefl and why your
                        passionate about makeup. Your bio gives clients a chance
                        to get to know you better.
                      </p>
                      <br />
                      <textarea
                        id="bio"
                        placeholder="Type here"
                        className="form-control textarea"
                        onChange={this.handleChange}
                        name="bio"
                        rows="8"
                        value={this.state.bio}
                      />
                      <br />
                      <p>
                        Keep it brief. Clients are more likely to read shorter
                        bios.
                        <br />
                        Don't sweat the details. You'll be able to outline your
                        policies and prices in a later step.
                      </p>
                    </div>
                    <div className="form-group">
                      <label htmlFor="sync" className="form-label">
                        Sync with Instagram
                      </label>
                      <div className="column-2-space">
                        <div>
                          <p>
                            Connect your Instagram to show your photos on your
                            profile page. You can also set this up later.
                          </p>
                        </div>
                        <div className="rightButton">
                          <span className="button">
                            <button
                              type="button"
                              className="btn btn-secondary ellipsis btn-block"
                              onClick={() => {
                                console.log("click Sync");
                              }}
                            >
                              Sync
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="page-navs">
                <div className="column-2-space">
                  <Link href={`/artist/create-profile`}>
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

export default CreateProfilePage;
