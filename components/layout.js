import Link from 'next/link';
import Head from 'next/head';

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
      <link rel="stylesheet" href="/css/styles.css" />
      <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.ico" />
      <link href="css/style.css" rel="stylesheet" type="text/css" media="all" />	
    </Head>

    <nav className='navbar navbar-default navbar-fixed-top'>
      <div className='container-fluid'>
        <div className='navbar-header'>
          <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1' aria-expanded='false'>
            <span className='sr-only'></span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
          </button>
          <Link href='/'><a className='navbar-brand'>Home</a></Link>
        </div>
      </div>
    </nav>

    { children }

    <div className='container'>
      <footer className='footer'>
        &copy; 2019 - Celeste
      </footer>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>
  </div>
);
