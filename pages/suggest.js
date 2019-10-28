import React from 'react';
import Router from 'next/router';
import axios from 'axios';
import cookie from 'js-cookie';


import Layout from '../components/Layout';


class SuggestPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            artist: {}
        };

    }

    render() {
        const { artist } = this.state
        return (
            <Layout title={'Suggest'}>
                <div className="suggest">
                    <div className="divider"></div>
                    <div className="inner_suggest">
                        <div className="container-fluid">
                            <div className="filter_part">
                                <i className="fas fa-filter"></i>
                                <button className="filter_btn">Location</button>
                                <button className="filter_btn">Experience</button>
                                <button className="filter_btn">Rate</button>
                            </div>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="inner_suggest">
                        <div className="container-fluid">
                            <div className="artists">
                                <h3>Suggested Artists</h3>
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="card">
                                            <img src="/images/new/artist2.png" className="card-img-top" alt=""/>
                                            <span className="avatar">
                                                <img src="/images/new/artist1.png" alt=""/>
                                            </span>
                                            <span className="vetted">
                                                <p>Vetted</p>
                                            </span>
                                            <div className="card-body">
                                                <h3>Clarie beckham</h3>
                                                <h5 className="experience">10 years of experience</h5>
                                                <div className="rate">
                                                    <div className="igroup">
                                                        <i className="fas fa-dollar-sign active"></i>
                                                        <i className="fas fa-dollar-sign active"></i>
                                                        <i className="fas fa-dollar-sign active"></i>
                                                        <i className="fas fa-dollar-sign inactive"></i>
                                                    </div>
                                                    <h6>Brooklyn, NY</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card">
                                            <img src="/images/new/artist2.png" className="card-img-top" alt=""/>
                                            <span className="avatar">
                                                <img src="/images/new/artist1.png" alt=""/>
                                            </span>
                                            <div className="card-body">
                                                <h3>Clarie beckham</h3>
                                                <h5 className="experience">10 years of experience</h5>
                                                <div className="rate">
                                                    <div className="igroup">
                                                        <i className="fas fa-dollar-sign active"></i>
                                                        <i className="fas fa-dollar-sign inactive"></i>
                                                        <i className="fas fa-dollar-sign inactive"></i>
                                                        <i className="fas fa-dollar-sign inactive"></i>
                                                    </div>
                                                    <h6>Brooklyn, NY</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card">
                                            <img src="/images/new/artist2.png" className="card-img-top" alt=""/>
                                            <span className="avatar">
                                                <img src="/images/new/artist1.png" alt=""/>
                                            </span>
                                            <div className="card-body">
                                                <h3>Clarie beckham</h3>
                                                <h5 className="experience">10 years of experience</h5>
                                                <div className="rate">
                                                    <div className="igroup">
                                                        <i className="fas fa-dollar-sign active"></i>
                                                        <i className="fas fa-dollar-sign active"></i>
                                                        <i className="fas fa-dollar-sign active"></i>
                                                        <i className="fas fa-dollar-sign inactive"></i>
                                                    </div>
                                                    <h6>Brooklyn, NY</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card">
                                            <img src="/images/new/artist2.png" className="card-img-top" alt=""/>
                                            <span className="avatar">
                                                <img src="/images/new/artist1.png" alt=""/>
                                            </span>
                                            <span className="vetted">
                                                <p>Vetted</p>
                                            </span>
                                            <div className="card-body">
                                                <h3>Clarie beckham</h3>
                                                <h5 className="experience">10 years of experience</h5>
                                                <div className="rate">
                                                    <div className="igroup">
                                                        <i className="fas fa-dollar-sign active"></i>
                                                        <i className="fas fa-dollar-sign active"></i>
                                                        <i className="fas fa-dollar-sign active"></i>
                                                        <i className="fas fa-dollar-sign inactive"></i>
                                                    </div>
                                                    <h6>Brooklyn, NY</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="card">
                                            <img src="/images/new/artist2.png" className="card-img-top" alt=""/>
                                            <span className="avatar">
                                                <img src="/images/new/artist1.png" alt=""/>
                                            </span>
                                            <div className="card-body">
                                                <h3>Clarie beckham</h3>
                                                <h5 className="experience">10 years of experience</h5>
                                                <div className="rate">
                                                    <div className="igroup">
                                                        <i className="fas fa-dollar-sign active"></i>
                                                        <i className="fas fa-dollar-sign active"></i>
                                                        <i className="fas fa-dollar-sign active"></i>
                                                        <i className="fas fa-dollar-sign inactive"></i>
                                                    </div>
                                                    <h6>Brooklyn, NY</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card">
                                            <img src="/images/new/artist2.png" className="card-img-top" alt=""/>
                                            <span className="avatar">
                                                <img src="/images/new/artist1.png" alt=""/>
                                            </span>
                                            <span className="vetted">
                                                <p>Vetted</p>
                                            </span>
                                            <div className="card-body">
                                                <h3>Clarie beckham</h3>
                                                <h5 className="experience">10 years of experience</h5>
                                                <div className="rate">
                                                    <div className="igroup">
                                                        <i className="fas fa-dollar-sign active"></i>
                                                        <i className="fas fa-dollar-sign active"></i>
                                                        <i className="fas fa-dollar-sign inactive"></i>
                                                        <i className="fas fa-dollar-sign inactive"></i>
                                                    </div>
                                                    <h6>Brooklyn, NY</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card">
                                            <img src="/images/new/artist2.png" className="card-img-top" alt=""/>
                                            <span className="avatar">
                                                <img src="/images/new/artist1.png" alt=""/>
                                            </span>
                                            <span className="vetted">
                                                <p>Vetted</p>
                                            </span>
                                            <div className="card-body">
                                                <h3>Clarie beckham</h3>
                                                <h5 className="experience">10 years of experience</h5>
                                                <div className="rate">
                                                    <div className="igroup">
                                                        <i className="fas fa-dollar-sign active"></i>
                                                        <i className="fas fa-dollar-sign active"></i>
                                                        <i className="fas fa-dollar-sign active"></i>
                                                        <i className="fas fa-dollar-sign inactive"></i>
                                                    </div>
                                                    <h6>Brooklyn, NY</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card">
                                            <img src="/images/new/artist2.png" className="card-img-top" alt=""/>
                                            <span className="avatar">
                                                <img src="/images/new/artist1.png" alt=""/>
                                            </span>
                                            <div className="card-body">
                                                <h3>Clarie beckham</h3>
                                                <h5 className="experience">10 years of experience</h5>
                                                <div className="rate">
                                                    <div className="igroup">
                                                        <i className="fas fa-dollar-sign active"></i>
                                                        <i className="fas fa-dollar-sign inactive"></i>
                                                        <i className="fas fa-dollar-sign inactive"></i>
                                                        <i className="fas fa-dollar-sign inactive"></i>
                                                    </div>
                                                    <h6>Brooklyn, NY</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="card">
                                            <img src="/images/new/artist2.png" className="card-img-top" alt=""/>
                                            <span className="avatar">
                                                <img src="/images/new/artist1.png" alt=""/>
                                            </span>
                                            <span className="vetted">
                                                <p>Vetted</p>
                                            </span>
                                            <div className="card-body">
                                                <h3>Clarie beckham</h3>
                                                <h5 className="experience">10 years of experience</h5>
                                                <div className="rate">
                                                    <div className="igroup">
                                                        <i className="fas fa-dollar-sign active"></i>
                                                        <i className="fas fa-dollar-sign active"></i>
                                                        <i className="fas fa-dollar-sign active"></i>
                                                        <i className="fas fa-dollar-sign inactive"></i>
                                                    </div>
                                                    <h6>Brooklyn, NY</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card">
                                            <img src="/images/new/artist2.png" className="card-img-top" alt=""/>
                                            <span className="avatar">
                                                <img src="/images/new/artist1.png" alt=""/>
                                            </span>
                                            <span className="vetted">
                                                <p>Vetted</p>
                                            </span>
                                            <div className="card-body">
                                                <h3>Clarie beckham</h3>
                                                <h5 className="experience">10 years of experience</h5>
                                                <div className="rate">
                                                    <div className="igroup">
                                                        <i className="fas fa-dollar-sign active"></i>
                                                        <i className="fas fa-dollar-sign active"></i>
                                                        <i className="fas fa-dollar-sign inactive"></i>
                                                        <i className="fas fa-dollar-sign inactive"></i>
                                                    </div>
                                                    <h6>Brooklyn, NY</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card">
                                            <img src="/images/new/artist2.png" className="card-img-top" alt=""/>
                                            <span className="avatar">
                                                <img src="/images/new/artist1.png" alt=""/>
                                            </span>
                                            <span className="vetted">
                                                <p>Vetted</p>
                                            </span>
                                            <div className="card-body">
                                                <h3>Clarie beckham</h3>
                                                <h5 className="experience">10 years of experience</h5>
                                                <div className="rate">
                                                    <div className="igroup">
                                                        <i className="fas fa-dollar-sign active"></i>
                                                        <i className="fas fa-dollar-sign active"></i>
                                                        <i className="fas fa-dollar-sign active"></i>
                                                        <i className="fas fa-dollar-sign inactive"></i>
                                                    </div>
                                                    <h6>Brooklyn, NY</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card">
                                            <img src="/images/new/artist2.png" className="card-img-top" alt=""/>
                                            <span className="avatar">
                                                <img src="/images/new/artist1.png" alt=""/>
                                            </span>
                                            <span className="vetted">
                                                <p>Vetted</p>
                                            </span>
                                            <div className="card-body">
                                                <h3>Clarie beckham</h3>
                                                <h5 className="experience">10 years of experience</h5>
                                                <div className="rate">
                                                    <div className="igroup">
                                                        <i className="fas fa-dollar-sign active"></i>
                                                        <i className="fas fa-dollar-sign inactive"></i>
                                                        <i className="fas fa-dollar-sign inactive"></i>
                                                        <i className="fas fa-dollar-sign inactive"></i>
                                                    </div>
                                                    <h6>Brooklyn, NY</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true"><i className="fas fa-chevron-left"></i></span>
                                    </a>
                                    </li>
                                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">4</a></li>
                                    <li className="page-item"><a className="page-link" href="#">5</a></li>
                                    <li className="page-item"><a className="page-link" href="#"><i className="fas fa-ellipsis-h"></i></a></li>
                                    <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">
                                            <i className="fas fa-chevron-right"></i>
                                        </span>
                                    </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
  }
  
  export default SuggestPage;