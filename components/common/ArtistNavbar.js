import React from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import Router from 'next/router';
import axios from 'axios';
import cookie from 'js-cookie';


class ArtistNavbar extends React.Component {

    constructor(props) {
        super(props);
    }
    

    logout = () => {
        cookie.remove("token")
        console.log('logout called')
        Router.push('/')
    }
    
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#">LOGO</a>
            
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-user"></i>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">
                                <p>Account</p>
                            </a>
                            <a className="dropdown-item" href="#">
                                <p>Help</p>
                            </a>
                            <a className="dropdown-item" href="#">
                                <p>Celeste for clients</p>
                            </a>
                            <a className="dropdown-item" href="#" onClick={this.logout}><p>Logout</p></a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
  }
}

export default ArtistNavbar;
