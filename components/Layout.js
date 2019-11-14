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
        <meta name="description" content="" />
        <meta name="robots" content="all,follow" />
        <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.ico" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/index.css" />
        <link rel="stylesheet" href="/css/navbar.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
        {/* <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" 
            integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" 
            crossOrigin="anonymous"></link> */}
    </Head>

    <div>
        <nav className="navbar navbar-expand-lg navbar-light container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#">LOGO</a>
            
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Become an artist</a>
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
        {children}
    </div>
    <Footer></Footer>
  </div>
);
