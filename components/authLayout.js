import Link from 'next/link';
import Head from 'next/head';

export default ({ children, title = 'Celeste' }) => (
  <div>
    <Head>
      <title>{ title } | Dashboard</title>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name='defaultLanguage' content='en' />
      <meta name='availableLanguages' content='en' />
      <link rel="stylesheet" href="/css/login-container.css" />
      <link rel="stylesheet" href="/css/auth.css" />
      <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.ico" />
    </Head>


    { children }

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js"></script>
  </div>
);
