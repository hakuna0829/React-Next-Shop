import React, { useState, useEffect } from "react";
import Layout from "../../../components/Layout";
import Loader from "../../../components/common/loader";
import DatePicker from "react-datepicker";
import axios from "axios";
import constants from "../../../constants";
import "react-datepicker/src/stylesheets/datepicker.scss";
import ShareModal from "../../../components/artist/ShareModal";
import GalleryModal from "../../../components/artist/GalleryModal";
import LoginWallModal from "../../../components/auth/LoginWall";
import LoginModal from "../../../components/auth/login";
import SignupModal from "../../../components/auth/signup";
import ServiceRequestModal from "../../../components/artist/ServiceRequestModal";
import ReportModal from "../../../components/artist/ReportModal";

const file_data = ["user4.jpg", "user5.png", "user9.jpg"];
const instagram = [
  "user4.jpg",
  "user5.png",
  "user9.jpg",
  "user4.jpg",
  "user5.png",
  "user9.jpg"
];
const services = [
  "Bridal makeup",
  "Prom",
  "Makeup lessons",
  "Photo shoot",
  "Other event"
];

const ArtistProfile = props => {
  // const [percent, setValue] = useState(props.query);
  const [loading, setLoading] = useState(false);
  const [isSetting, setIsSetting] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [artistId, setArtistId] = useState(props.id);
  const handleSetting = event => setIsSetting(!isSetting);
  const [isGuest, setIsGuest] = useState(true);
  const [isShareModalVisible, setIsShareModalVisible] = useState(false);
  const [isGalleryModalVisible, setIsGalleryModalVisible] = useState(false);
  const [isLoginWallModalVisible, setIsLoginWallModalVisible] = useState(false);
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  const [isSignupModalVisible, setIsSignupModalVisible] = useState(false);
  const [
    isServiceRequestModalVisible,
    setIsServiceRequestModalVisible
  ] = useState(false);
  const [isReportModalVisible, setIsReportModalVisible] = useState(false);
  // console.log(props.match.params.id);

  useEffect(() => {
    // Update the document title using the browser API
    axios
      .get(constants.serverUrl + "api/search/artist/" + 22) //+ artistId
      .then(response => {
        //setLoading(false);
        console.log(response);
      })
      .catch(error => {
        //setLoading(false)
        console.log(error);
        //   Router.push("/");
      });
  }, []);

  let toggleShareModal = () => {
    // if (profile.avatar == "") return;
    setIsShareModalVisible(!isShareModalVisible);
  };

  let toggleGalleryMdoal = () => {
    setIsGalleryModalVisible(!isGalleryModalVisible);
  };

  let toggleLoginWallMdoal = () => {
    setIsLoginWallModalVisible(!isLoginWallModalVisible);
    setIsLoginModalVisible(false);
    setIsSignupModalVisible(false);
  };
  let toggleLoginMdoal = () => {
    setIsLoginModalVisible(!isLoginModalVisible);
    setIsLoginWallModalVisible(false);
    setIsSignupModalVisible(false);
  };

  let toggleSignupMdoal = () => {
    setIsSignupModalVisible(!isSignupModalVisible);
    setIsLoginModalVisible(false);
    setIsLoginWallModalVisible(false);
  };

  let toggleServiceRequestMdoal = () => {
    setIsServiceRequestModalVisible(!isServiceRequestModalVisible);
  };

  let toggleReportModal = () => {
    setIsReportModalVisible(!isReportModalVisible);
  };
  let chatWindow = () => {
    console.log("chat window");
  };

  let handleClickComment = () => {
    if (isGuest) {
      toggleLoginWallMdoal();
    } else {
      chatWindow();
    }
  };
  let handleShare = () => {
    console.log("click share item");
  };

  console.log(props);
  return (
    <Layout title={"Guest Homepage"}>
      <div className="artist-profile" id="artist-profile">
        {loading ? (
          <Loader />
        ) : (
          <div className="container">
            <div className="body">
              <div className="top_banner">
                {Array.from(file_data).map((item, i) => (
                  // <Link href={`/search/artist/${i}`} key={i}>
                  <button
                    key={i}
                    onClick={() => {
                      toggleGalleryMdoal();
                    }}
                  >
                    <div className="banner_item">
                      <div className="cover_image">
                        <img src={`/images/${item}`} />
                      </div>
                    </div>
                  </button>
                  // </Link>
                ))}
                <div className="left_top_menu" onClick={handleSetting}>
                  <button>
                    <i className="fas fa-ellipsis-h"></i>
                  </button>
                  <div>
                    {isSetting ? (
                      <div className="dropdown-setting-menu">
                        <a
                          className="dropdown-item"
                          onClick={() => {
                            toggleReportModal();
                          }}
                        >
                          <p>Report</p>
                        </a>
                        <a className="dropdown-item">
                          <p>Help</p>
                        </a>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                <div className="left_bottom_menu">
                  <div>
                    <button>
                      <i className="fas fa-search-plus"></i>
                    </button>
                  </div>
                </div>

                <div className="right_top_menu">
                  <div>
                    <button
                      onClick={() => {
                        toggleShareModal();
                      }}
                    >
                      <i className="fas fa-cloud-upload-alt"></i>
                    </button>
                  </div>
                  <div>
                    <button>
                      <i className="far fa-bookmark"></i>
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        handleClickComment();
                      }}
                    >
                      <i className="far fa-comment"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div className="profile_body">
                <div className="profile_body_contanier row">
                  <div className="left_content col-md-8">
                    <div className="photo_name_area">
                      <div className="artist_photo">
                        <img src="/images/makeup_1.jpg" width="30" />
                      </div>
                      <div className="artist_name">
                        <div>
                          <span>
                            BRIDAL <b>&#183;</b> COSTUME
                          </span>
                          <h2>Mylah Morales</h2>
                          <span className="name">
                            Mylah Morales&nbsp;
                            <i className="fas fa-calendar-check"></i>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="about">
                      <h3>About</h3>
                      <span>Booked: 160times</span>
                      <br></br>
                      <span>Price: $$$</span>
                      <br></br>
                      <span>
                        <i className="fas fa-calendar-check"></i> Backed by
                        Celeste
                      </span>
                      <p>
                        Anny Chow provides on location makeup and hair service
                        for bridal or any special occasion. Her studio is
                        located in Sunset Park, Brooklyn for bridal consultation
                        and makeup/hair trial.
                      </p>
                      <br></br>

                      <p>Policies:</p>
                      <p>
                        Will come to your home or venue<br></br>
                        Will see you in studio<br></br>
                        Will travel for destination events<br></br>
                      </p>
                    </div>

                    <div className="instagram">
                      <h3>From Instagram</h3>
                      <div className="sub_title">
                        <label>
                          <b>@MylahMorales</b>
                        </label>
                        <label>
                          <b>More</b>
                        </label>
                      </div>
                      <div className="imagelist row">
                        {Array.from(instagram).map((item, i) => (
                          <div
                            className="col-sm-6 col-md-6 col-lg-4 item"
                            key={i}
                          >
                            <div className="cover_image">
                              <div>
                                <img src={`/images/${item}`} />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="services">
                      {/*  start loop for services */}
                      {Array.from(services).map((item, i) => (
                        <div key={i}>
                          <div className="header">
                            <b>{item}</b>
                            <span>
                              <b>$800</b>
                            </span>
                          </div>
                          <div className="description">
                            <p>
                              Anny Chow provides on location makeup and hair
                              service for bridal or any special occasion.
                            </p>
                            <span>Starting cost</span>
                          </div>
                        </div>
                      ))}

                      {/* end loop for services */}
                    </div>
                  </div>
                  <div className="right_panel col-md-4">
                    <div className="cover_date">
                      <div className="date_input">
                        <DatePicker
                          selected={startDate}
                          onChange={date => setStartDate(date)}
                          locale="en-GB"
                          placeholderText=""
                        />
                        <i className="far fa-calendar-alt"></i>
                      </div>
                      <button
                        className="btn btn-primary btn-block"
                        onClick={() => {
                          toggleServiceRequestMdoal();
                        }}
                      >
                        Schedule
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <ShareModal
        show={isShareModalVisible}
        onClose={toggleShareModal}
        action={handleShare}
      ></ShareModal>
      <LoginWallModal
        show={isLoginWallModalVisible}
        onClose={toggleLoginWallMdoal}
        showSignUp={toggleSignupMdoal}
        showLogin={toggleLoginMdoal}
      ></LoginWallModal>
      <LoginModal
        show={isLoginModalVisible}
        onClose={toggleLoginMdoal}
        showSignUp={toggleSignupMdoal}
      ></LoginModal>
      <SignupModal
        show={isSignupModalVisible}
        onClose={toggleSignupMdoal}
        showLoginWall={toggleLoginWallMdoal}
      ></SignupModal>
      <GalleryModal
        show={isGalleryModalVisible}
        onClose={toggleGalleryMdoal}
      ></GalleryModal>
      <ServiceRequestModal
        show={isServiceRequestModalVisible}
        onClose={toggleServiceRequestMdoal}
      ></ServiceRequestModal>
      <ReportModal
        show={isReportModalVisible}
        onClose={toggleReportModal}
      ></ReportModal>
    </Layout>
  );
};

ArtistProfile.getInitialProps = ({ query: { id } }) => {
  return { id };
};

export default ArtistProfile;
