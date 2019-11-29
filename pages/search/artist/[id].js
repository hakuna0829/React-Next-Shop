import React, { useState, useEffect } from "react";
import Layout from "../../../components/Layout";
import Loader from "../../template/loader";
const file_data = ["user4.jpg", "user5.png", "user9.jpg"];

const ArtistProfile = props => {
  // const [percent, setValue] = useState(props.query);
  const [loading, setLoading] = useState(false);
  const [isSetting, setIsSetting] = useState(false);

  const handleSetting = event => setIsSetting(!isSetting);

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
                  <button key={i}>
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
                        <a className="dropdown-item">
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
                    <button>
                      <i className="fas fa-cloud-upload-alt"></i>
                    </button>
                  </div>
                  <div>
                    <button>
                      <i className="far fa-bookmark"></i>
                    </button>
                  </div>
                  <div>
                    <button>
                      <i className="far fa-comment"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div className="profile_body">
                <div className="profile_body_contanier row">
                  <div className="left_content col-md-8">left</div>
                  <div className="right_panel col-md-4">right</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ArtistProfile;
