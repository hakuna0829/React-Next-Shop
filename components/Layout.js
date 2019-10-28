import Link from 'next/link';
import Router from 'next/router';
import Head from 'next/head';
import Footer from './Footer';

export default ({ children, title = 'Celeste', leftTitle = '', leftDescription = '' }) => (
  <div>
    <Head>
        <title>{ title } | Celeste</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name='defaultLanguage' content='en' />
        <meta name='availableLanguages' content='en' />
        <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.ico" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="/css/navbar.css" />
        <link rel="stylesheet" href="/css/login.css" />
        <link rel="stylesheet" href="/css/suggest.css" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" 
            integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" 
            crossOrigin="anonymous"></link>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    </Head>

    <div>
        <nav className="navbar navbar-expand-md" style={{borderRadius : '0'}} >
            <div className="container-fluid">
                <div className="navbar-header">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link href="/index">
                        <a className="navbar-brand abs">CELESTE</a>
                    </Link>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <form className="navbar-form navbar-left" role="search">
                        <div className="form-group has-search">
                            <span className="fa fa-search form-control-feedback"></span>
                            <input type="text" className="form-control" placeholder="Find Makeup Artists"/>
                        </div>
                    </form>

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link href="/artist/profile">
                                <a className="nav-link">
                                    <img src="/images/new/user.png" alt="Avatar"/>
                                </a>
                            </Link>
                            
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        {children}
    </div>
    <Footer></Footer>
  </div>
);
