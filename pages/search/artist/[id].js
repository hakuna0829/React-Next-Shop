import React, { useState, useEffect } from "react";
import Layout from "../../../components/Layout";
import Loader from "../../template/loader";
const file_data = [
  "user4.jpg",
  "user5.png",
  "user9.jpg",
  "makeup_1.jpg",
  "makeup_3.png",
  "lowerRight.png"
];

const ArtistProfile = props => {
  // const [percent, setValue] = useState(props.query);
  const [loading, setLoading] = useState(true);

  console.log(props);
  return (
    <Layout title={"Guest Homepage"}>
      <div className="artist-profile" id="artist-profile">
        {loading ? (
          <Loader />
        ) : (
          <div className="container">
            <div className="row">
              <div className="top_banner">
              {Array.from(file_data).map((item, i) => (
                // <Link href={`/search/artist/${i}`} key={i}>
                <div key={i}>

                </div>
                // </Link>
              ))}

              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ArtistProfile;
