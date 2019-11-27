import React from "react";
import Link from "next/link";
import Router from "next/router";
import axios from "axios";
import Rate from "../components/profile/Rate";
import Layout from "../components/Layout";
import MultiCarousel from "./template/carousel_many";
import SingleCarousel from "./template/carousel_single";

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
    const file_data = [
      "user4.jpg",
      "user5.png",
      "user9.jpg",
      "makeup_1.jpg",
      "makeup_3.png",
      "lowerRight.png",
      "user4.jpg",
      "user5.png",
      "user9.jpg",
      "makeup_1.jpg",
      "makeup_3.png",
      "lowerRight.png"
    ];

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
                    <img
                      src="./images/leftPattern.png"
                      width="40px"
                      height="40px"
                    ></img>{" "}
                    Wedding
                  </button>
                </div>
                <div className="button   col-md-4 col-lg-2">
                  <button className="btn btn-light btn-block">
                    <img
                      src="./images/makeup_3.png"
                      width="40px"
                      height="40px"
                    ></img>{" "}
                    Prom
                  </button>
                </div>
                <div className="button  col-md-4 col-lg-2">
                  <button className="btn btn-light btn-block">
                    <img
                      src="./images/sky_thumbnail.jpg"
                      width="40px"
                      height="40px"
                    ></img>{" "}
                    Lessons
                  </button>
                </div>
                <div className="button  col-md-4 col-lg-2">
                  <button className="btn btn-light btn-block">
                    <img
                      src="./images/sky_thumbnail.jpg"
                      width="40px"
                      height="40px"
                    ></img>{" "}
                    Photoshoot
                  </button>
                </div>
                <div className="button  col-md-4 col-lg-2">
                  <button className="btn btn-light btn-block">
                    <img
                      src="./images/sky_thumbnail.jpg"
                      width="40px"
                      height="40px"
                    ></img>{" "}
                    Natural look
                  </button>
                </div>
              </div>

              <div className="carousel_list row">
                {/* heading start */}
                <div className="row heading col-sm-12">
                  <div className="title">
                    <h3>Featured makeup artists near Brooklyn</h3>
                  </div>
                  <div className="right_all">
                    <span>
                      <a href="#">See all</a>&nbsp;
                      <i className="fas fa-arrow-right"></i>
                    </span>
                  </div>
                </div>
                {/* heading end */}
                {/* carousel start */}
                <div className="row col-sm-12">
                  <MultiCarousel></MultiCarousel>
                </div>
                {/* carousel end */}
              </div>

              <div className="carousel_list row">
                {/* heading start */}
                <div className="row heading col-sm-12">
                  <div className="title">
                    <h3>Wedding makeup artists near Brooklyn</h3>
                  </div>
                  <div className="right_all">
                    <span>
                      <a href="#">See all</a>&nbsp;
                      <i className="fas fa-arrow-right"></i>
                    </span>
                  </div>
                </div>
                {/* heading end */}
                {/* carousel start */}
                <div className="row col-sm-12">
                  <MultiCarousel></MultiCarousel>
                </div>
                {/* carousel end */}
              </div>

              <div className="artist_spotlight">
                <div className="row">
                  <div className="col-sm-6">
                    <h3>Artist Spotlight</h3>
                    <div className="photo_name_area">
                      <div className="artist_photo">
                        <img src="./images/makeup_1.jpg" width="30" />
                      </div>
                      <div className="artist_name">
                        <div>
                          <h2>Mylah Morales</h2>
                          <span>
                            BRIDAL <b>&#183;</b> COSTUME
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="description">
                      <p>
                        do beautiful, flawlessly blended work on all ages, skin
                        types and skin colors at an affordable price. I am not
                        trying to exploit you just because you're getting
                        married!
                      </p>
                      <p>
                        I love being a part of someone's special day and the
                        pressure that comes with it. Its so unbelievably
                        satisfying to have someone look at their own reflection
                        and be so happy they want to cry because of my work.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6 single_carousel">
                    <SingleCarousel></SingleCarousel>
                  </div>
                </div>
              </div>

              <div className="available_artist">
                {/* heading start */}
                <div className="row heading col-sm-12">
                  <div className="title">
                    <h3>Featured makeup artists near Brooklyn</h3>
                  </div>
                  <div className="right_all">
                    <span>
                      <a href="#">See all</a>&nbsp;
                      <i className="fas fa-arrow-right"></i>
                    </span>
                  </div>
                </div>
                {/* heading end */}

                {/*  */}
                <ul className="cardlist">
                  {Array.from(file_data).map((item, i) => (
                    <li key={i} className={`card ${i} col-lg-2 col-md-4`}>
                      {/* {item } */}
                      <img src={`/images/${item}`} />
                      <span className="bookmark">
                        <i className="far fa-bookmark"></i>
                      </span>
                      <span className="title">
                        BRIDAL <b>&#183;</b> COSTUME
                      </span>

                      <span className="name">
                        Mylah Morales&nbsp;
                        <i className="fas fa-calendar-check"></i>
                      </span>

                      <span className="location">
                        <i className="far fa-paper-plane"></i>&nbsp; brooklyn,
                        NY
                      </span>

                      <span className="appointment">160 appointment, $$</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="makeup_lessons">
                {/* heading start */}
                <div className="row heading col-sm-12">
                  <div className="title">
                    <h3>Makeup lessons near Brooklyn</h3>
                  </div>
                  <div className="right_all">
                    <span>
                      <a href="#">See all</a>&nbsp;
                      <i className="fas fa-arrow-right"></i>
                    </span>
                  </div>
                </div>
                {/* heading end */}

                {/*  */}
                <ul className="cardlist">
                  {Array.from(file_data).map((item, i) => (
                    <li key={i} className={`card ${i} col-md-4 col-lg-2`}>
                      {/* {item } */}
                      <img src={`/images/${item}`} />
                      <span className="bookmark">
                        <i className="far fa-bookmark"></i>
                      </span>
                      <span className="title">
                        BRIDAL <b>&#183;</b> COSTUME
                      </span>

                      <span className="name">
                        Mylah Morales&nbsp;
                        <i className="fas fa-calendar-check"></i>
                      </span>

                      <span className="location">
                        <i className="far fa-paper-plane"></i>&nbsp; brooklyn,
                        NY
                      </span>

                      <span className="appointment">160 appointment, $$</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default HomePage;
