import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import cookie from 'js-cookie';


class GuestNavbar extends React.Component {
    
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <Link href="/artist/landing">
                <a className="navbar-brand">LOGO</a>
            </Link>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <Link href="/artist/landing">
                            <a className="nav-link">Become an artist</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/artist/login">
                            <a className="nav-link">Log in</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/artist/signup">
                            <a className="nav-link">Sign Up</a>
                        </Link>
                    </li>

                </ul>
            </div>
        </nav>
    );
  }
}

export default GuestNavbar;
