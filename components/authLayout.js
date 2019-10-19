import Link from 'next/link';
import Head from 'next/head';

export default ({ children, title = 'Celeste', leftTitle = '', leftDescription = '' }) => (
  <div>
    <Head>
      <title>{ title } | Dashboard</title>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name='defaultLanguage' content='en' />
      <meta name='availableLanguages' content='en' />
      <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.ico" />
    </Head>

    <div className="auth">
      <div className="login-container">
          <div className="container-inner">
              <div className="left">
                  <Link href="/"><a className="logo"><img src="/images/logo.png" alt="Celeste Logo"></img></a></Link>

                  <div className="content">
                      <h1>{ leftTitle }</h1>

                      <p>{ leftDescription } <Link href="/contact"><a>Send us a message</a></Link></p>
                  </div>
              </div>
              { children }
        </div>
      </div>
    </div>
    {/* <style jsx global>{`
      @import url("https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap");
      * {
        margin: 0;
        padding: 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
      }

      body {
        margin: 0;
        font-family: 'Montserrat';
        background: linear-gradient(to right, lightgray 5%, #000000 100%);
        font-size: 18px;
        height: 100vh;
      }

      @media only screen and (min-width: 1600px) {
        body {
          font-size: 22px;
        }
      
        .content {
          padding: 0 6em !important;
        }
      
        .right {
          padding: 0 !important;
        }
      }
      
      form .error {
        font-size: 13px;
        color: red;
        padding: 10px;
        border-radius: 25px;
      }
      
      form .error i {
          font-size: 20px;
      }
      
      form .success {
          color: #33cc33;
          padding: 10px;
          border-radius: 25px;
      }
    
    `}</style> */}

    {/* <style jsx global>{`




    .login-container {
      margin: 0 auto;
      text-align: center;
    }

    .login-container .logo, .login-container .logo img {
      width: 120px;
      height: 60px;
    }

    .login-container h1 {
      margin: 1em 0;
    }

    .login-container p {
      line-height: 1.7rem;
    }

    .login-container .left {
      background: linear-gradient(160deg, #5555558c 0%, #72727293 100%),url("/images/woman.jpg");
      background-size: cover;
      padding: 1em;
    }

    .login-container .left p,.login-container .left h1 {
      color: white;
    }

    .login-container .reg-left {
      background: linear-gradient(160deg, #5555558c 0%, #72727293 100%),url("/images/hair.png");
      background-size: cover;
      padding: 1em;
    }

    .login-container .reg-left p,.login-container .reg-left h1 {
      color: white;
    }


    .login-container input,.login-container button {
      width: calc(100% - 3em);
      padding: .5em;
      font-size: 1.3rem;
      outline: none;
      margin: 1em;
    }


    @media only screen and (min-width: 768px) {
      body {
        font-size: 20px;
      }

      button {
        width: 60% !important;
      }

      input {
        width: calc(60% - 1em) !important;
      }
    }

    @media only screen and (min-width: 1024px) {
      .logo {
        margin: 1em 0;
      }

      p {
        line-height: 1.7em !important;
      }

      .container-inner {
        display: -ms-grid;
        display: grid;
        -ms-grid-columns: 55% auto;
        grid-template-columns: 55% auto;
      }

      .container-inner .reg-left,.container-inner .left {
        text-align: left;
        padding: 0 2em;
        height: 100vh;
        display: -ms-grid;
        display: grid;
      }

      .container-inner .reg-left .content,.container-inner .left .content {
        padding: 0 3em;
      }

      .container-inner .reg-left h1,.container-inner .left h1 {
        margin: 0;
        font-size: 2.4em;
      }

      .container-inner .reg-left h1 span,.container-inner .left h1 span {
        display: block;
      }

    }

    @media only screen and (min-width: 1600px) {
      body {
        font-size: 22px;
      }

      .content {
        padding: 0 6em !important;
      }


    }


    
.auth .right {
  text-align: center;
  padding-top: 6%;
}
.auth .right h2 {
  margin-bottom: 5px;
}

.auth .login-container .right p {
  margin: 0px !important;
}

.auth input {
  box-sizing: border-box;
  height: 2.4375rem;
  margin: 1rem;
  padding: 0.5rem 1erm;
  border: 1px solid #767777;
  border-radius: 0;
  background-color: #fefefe !important;
  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);
  font-family: inherit;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.5;
  color: #0a0a0a;
  transition: box-shadow 0.5s, border-color 0.25s ease-in-out, -webkit-box-shadow 0.5s;
  -webkit-appearance: none;
  border-radius: 25px;
}

.auth input:focus {
  outline: none;
  border: 1px solid #232323;
  background-color: #fefefe;
  box-shadow: 0 0 5px #767777;
  transition: box-shadow 0.5s, border-color 0.25s ease-in-out, -webkit-box-shadow 0.5s;
}

.auth a {
  color: white;
  text-decoration: none;
}

.auth button {
  border-radius: 25px;
  background-image: linear-gradient(to right, #9D50BB 0%, #6E48AA 51%, #9D50BB 100%);
  margin: 0;
  color: white;
  border: none;
  cursor: pointer;
}

.auth button:hover {
  color: #333;
  background-position: right center;
}

.auth .alert {
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  font-size: 13px;
}

.auth .form-group {
  margin-bottom: 10px;
}

.auth .link {
  margin-top: 20px;
  color: white;
}

.auth .link a {
  color: #00adf1;
}

.auth .left a, .auth .reg-left a {
  color: #00adf1;
}

.auth .right h2, .auth .right label {
  color: white;
}

			`}
		</style> */}

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
  </div>
);
