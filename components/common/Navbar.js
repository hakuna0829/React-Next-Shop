import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import cookie from 'js-cookie';

import ArtistNavbar from './ArtistNavbar';
import GuestNavbar from './GuestNavbar';

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            logged_in: false,
        };
    }
    
    componentDidMount() {
        let token = cookie.get('token')
        if(token) {
            this.setState({logged_in : true})
        }
    }
    
  render() {
      const {logged_in} = this.state
    return (
        logged_in ? (<ArtistNavbar></ArtistNavbar>) : (<GuestNavbar></GuestNavbar>)
    );
  }
}

export default Navbar;
