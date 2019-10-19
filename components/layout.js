import Link from 'next/link';
import Head from 'next/head';

import Header from './header';
import Footer from './footer';

import css from "../landing.css"

export default ({ children, title = 'Main' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='defaultLanguage' content='en' />
      <meta name='availableLanguages' content='en' />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" />
      <link href="css/font-awesome.css" rel="stylesheet" type="text/css" media="all" />
      <link rel="stylesheet" href="css/bootstrap-select.css"/>
      <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.ico" />
      <link href="css/style.css" rel="stylesheet" type="text/css" media="all" />	
    </Head>

    <Header></Header>

    { children }

    <Footer></Footer>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>

    <script src="js/responsiveslides.min.js"></script>

    <script src="js/bootstrap-select.js"></script>
  </div>
);
