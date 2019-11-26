import React from "react";
import Link from "next/link";
import Router from "next/router";
import axios from "axios";
import Rate from "../components/profile/Rate";
import Layout from "../components/Layout";
import Carousel from "./template/carousel";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      artists: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    let { artists } = this.state;
    artists = artists.map(artist => {
      return {
        name: "Claire beckham",
        year: ((artist * 7) % 10) + 1,
        rate: ((artist * 3) % 4) + 1,
        location: "Brooklyn, New York"
      };
    });
    this.setState({ artists });
  }

  render() {
    //const { artists } = this.state

    return (
      <Layout title={"Guest Homepage"}>
        <div className="overall" id="artist-landing">
          <div className="content">
            <div className="container">
              <div className="artist_landing join">
                <div className="artist_landing_item">
                  <div>
                    <h3>Find a makeup artist near you</h3>
                  </div>
                  <div className="button">
                    <a href="#" className="btn btn-primary btn-block">
                      Search
                    </a>
                  </div>
                </div>
              </div>

              <div className="category_list row">
                <div className="button col-md-4 col-lg-2">
                  <button className="btn btn-light btn-block">
                    <img src="./images/leftPattern.png" width="40px" height="40px"></img> Wedding
                  </button>
                </div>
                <div className="button   col-md-4 col-lg-2">
                  <button className="btn btn-light btn-block">
                  <img src="./images/makeup_3.png" width="40px" height="40px"></img> Prom
                  </button>
                </div>
                <div className="button  col-md-4 col-lg-2">
                  <button className="btn btn-light btn-block">
                  <img src="./images/sky_thumbnail.jpg" width="40px" height="40px"></img> Lessons
                  </button>
                </div>
                <div className="button  col-md-4 col-lg-2">
                  <button className="btn btn-light btn-block">
                  <img src="./images/sky_thumbnail.jpg" width="40px" height="40px"></img> Photoshoot
                  </button>
                </div>
                <div className="button  col-md-4 col-lg-2">
                  <button className="btn btn-light btn-block">
                  <img src="./images/sky_thumbnail.jpg" width="40px" height="40px"></img> Natural look
                  </button>
                </div>
              </div>

              <div className="makeup_list row">
                {/* heading start */}
                <div className="row heading col-sm-12">
                  <div className="title">
                    <h3>Featured makeup artists near Brooklyn</h3>
                  </div>
                  <div className="right_all">
                    <span>
                      See all&nbsp;<i className="fas fa-arrow-right"></i>
                    </span>
                  </div>
                  
                </div>
                {/* heading end */}
                {/* carousel start */}
                <div className="row col-sm-12">
                    <Carousel></Carousel>
                </div>
                {/* carousel end */}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default HomePage;
