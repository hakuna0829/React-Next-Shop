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
      <link rel="stylesheet" href="css/bootstrap-select.css"/>
      <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.ico" />
      <link href="css/style.css" rel="stylesheet" type="text/css" media="all" />	
    </Head>

    <header>
      <div className="container">
        
          <div className="logo">
            <h1><a href="index.html">Online Recharge</a></h1>
          </div>
        
          <div className="w3layouts-login">
            <a data-toggle="modal" data-target="#myModal" href="#"><i className="glyphicon glyphicon-user"> </i>Login/Register</a>
          </div>    
            <div className="clearfix"></div>
        
            <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" 
                aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                                &times;</button>
                            <h4 className="modal-title" id="myModalLabel">
                                Online Recharge</h4>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                              <div className="col-md-8 extra-w3layouts" style={{borderRight: '1px', dotted: '#C2C2C2', paddingRight: '30px'}}>
                                    
                                    <ul className="nav nav-tabs">
                                        <li className="active"><a href="#Login" data-toggle="tab">Login</a></li>
                                        <li><a href="#Registration" data-toggle="tab">Register</a></li>
                                    </ul>
                                    
                                    <div className="tab-content">
                                        <div className="tab-pane active" id="Login">
                                            <form  className="form-horizontal" action="#" method="get">
                                            <div className="form-group">
                                                <label htmlFor="email" className="col-sm-2 control-label">
                                                    Email</label>
                                                <div className="col-sm-10">
                                                    <input type="email" className="form-control" id="email1" placeholder="Email" required="required" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputPassword1" className="col-sm-2 control-label">
                                                    Password</label>
                                                <div className="col-sm-10">
                                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="password" required="required" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-2">
                                                </div>
                                                <div className="col-sm-10">
                                                    <button type="submit" className="submit btn btn-primary btn-sm">
                                                        Submit</button>
                                                    <a href="javascript:;" className="agileits-forgot">Forgot your password?</a>
                                                </div>
                                            </div>
                                            </form>
                                        </div>
                                        <div className="tab-pane" id="Registration">
                                            <form  className="form-horizontal" action="#" method="get">
                                            <div className="form-group">
                                                <label htmlFor="email" className="col-sm-2 control-label">
                                                    Name</label>
                                                <div className="col-sm-10">
                                                    <div className="row">
                                                        <div className="col-md-3 col-sm-3 col-xs-3">
                                                            <select className="form-control">
                                                                <option>Mr.</option>
                                                                <option>Ms.</option>
                                                                <option>Mrs.</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-md-9 col-sm-9 col-xs-9">
                                                            <input type="text" className="form-control" placeholder="Name" required="required" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email" className="col-sm-2 control-label">
                                                    Email</label>
                                                <div className="col-sm-10">
                                                    <input type="email" className="form-control" id="email" placeholder="Email" required="required" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="mobile" className="col-sm-2 control-label">
                                                    Mobile</label>
                                                <div className="col-sm-10">
                                                    <input type="tel" className="form-control" id="mobile" placeholder="Mobile" required="required" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="password" className="col-sm-2 control-label">
                                                    Password</label>
                                                <div className="col-sm-10">
                                                    <input type="password" className="form-control" id="password" placeholder="Password" required="required" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-2">
                                                </div>
                                                <div className="col-sm-10">
                                                    <button type="submit" className="submit btn btn-primary btn-sm">
                                                        Save & Continue</button>
                                                    <button type="reset" className="submit btn btn-default btn-sm">
                                                        Cancel</button>
                                                </div>
                                            </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div id="OR" >
                                        OR</div>
                                </div>
                                <div className="col-md-4 extra-agileits">
                                    <div className="row text-center sign-with">
                                        <div className="col-md-12">
                                            <h3 className="other-nw">
                                                Sign in with</h3>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="btn-group btn-group-justified">
                                                <a href="#" className="btn btn-primary">Facebook</a> <a href="#" className="btn btn-danger">
                                                    Google +</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    </header>
    { children }

    <footer>
    <div className="container-fluid">
      <div className="w3-agile-footer-top-at">
        <div className="col-md-2 agileits-amet-sed">
          <h4>Company</h4>
          <ul className="w3ls-nav-bottom">
            <li><a href="about.html">About Us</a></li>
            <li><a href="support.html">Support</a></li>
            <li><a href="sitemap.html">Sitemap</a></li>
            <li><a href="terms.html">Terms & Conditions</a></li>
            <li><a href="faq.html">Faq</a></li>	
            <li><a href="#mobileappagileits" className="scroll">Mobile</a></li>	
            <li><a href="feedback.html">Feedback</a></li>	
            <li><a href="contact.html">Contact</a></li>
            <li><a href="shortcodes.html">Shortcodes</a></li>
            <li><a href="icons.html">Icons Page</a></li>
            
          </ul>	
        </div>
        <div className="col-md-3 agileits-amet-sed ">
          <h4>Mobile Recharges</h4>
            <ul className="w3ls-nav-bottom">
              <li><a href="#mobilew3layouts" className="scroll">Airtel</a></li>
              <li><a href="#mobilew3layouts" className="scroll">Aircel</a></li>
              <li><a href="#mobilew3layouts" className="scroll">Vodafone</a></li>
              <li><a href="#mobilew3layouts" className="scroll">BSNL</a></li>
              <li><a href="#mobilew3layouts" className="scroll">Tata Docomo</a></li>
              <li><a href="#mobilew3layouts" className="scroll">Reliance GSM</a></li>	
              <li><a href="#mobilew3layouts" className="scroll">Reliance CDMA</a></li>	
              <li><a href="#mobilew3layouts" className="scroll">Telenor</a></li>	
              <li><a href="#mobilew3layouts" className="scroll">MTS</a></li>	
              <li><a href="#mobilew3layouts" className="scroll">Jio</a></li>	
            </ul>	
        </div>
        <div className="col-md-3 agileits-amet-sed ">
          <h4>DATACARD RECHARGES</h4>
            <ul className="w3ls-nav-bottom">
              <li><a href="#mobilew3layouts" className="scroll">Tata Photon</a></li>
              <li><a href="#mobilew3layouts" className="scroll">MTS MBlaze</a></li>
              <li><a href="#mobilew3layouts" className="scroll">MTS MBrowse</a></li>
              <li><a href="#mobilew3layouts" className="scroll">Airtel</a></li>
              <li><a href="#mobilew3layouts" className="scroll">Aircel</a></li>
              <li><a href="#mobilew3layouts" className="scroll">BSNL</a></li>	
              <li><a href="#mobilew3layouts" className="scroll">MTNL Delhi</a></li>	
              <li><a href="#mobilew3layouts" className="scroll">Vodafone</a></li>	
              <li><a href="#mobilew3layouts" className="scroll">Idea</a></li>	
              <li><a href="#mobilew3layouts" className="scroll">MTNL Mumbai</a></li>
              <li><a href="#mobilew3layouts" className="scroll">Tata Photon Whiz</a></li>	
            </ul>	
        </div>
        <div className="col-md-2 agileits-amet-sed">
          <h4>DTH Recharges</h4>
          <ul className="w3ls-nav-bottom">
              <li><a href="#mobilew3layouts" className="scroll"> Airtel Digital TV Recharges</a></li>
              <li><a href="#mobilew3layouts" className="scroll">Dish TV Recharges</a></li>
              <li><a href="#mobilew3layouts" className="scroll">Tata Sky Recharges</a></li>
              <li><a href="#mobilew3layouts" className="scroll">Reliance Digital TV Recharges</a></li>
              <li><a href="#mobilew3layouts" className="scroll">Sun Direct Recharges</a></li>
              <li><a href="#mobilew3layouts" className="scroll">Videocon D2H Recharges</a></li>	
            </ul>	
        </div>
              <div className="col-md-2 agileits-amet-sed ">
          <h4>Payment Options</h4>
            <ul className="w3ls-nav-bottom">
              <li>Credit Cards</li>
              <li>Debit Cards</li>
              <li>Any Visa Debit Card (VBV)</li>
              <li>Direct Bank Debits</li>
              <li>Cash Cards</li>	
            </ul>	
        </div>
      <div className="clearfix"> </div>
      </div>
      </div>
    <div className="w3l-footer-bottom">
      <div className="container-fluid">
        <div className="col-md-4 w3-footer-logo">
          <h2><a href="index.html">ONLINE RECHARGE</a></h2>
        </div>
        <div className="col-md-8 agileits-footer-class">
          <p >© 2017 Online Recharge. All Rights Reserved | Design by  <a href="http://w3layouts.com/" target="_blank">W3layouts</a> </p>
        </div>
      <div className="clearfix"> </div>
      </div>
    </div>
  </footer>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>

    <script src="js/responsiveslides.min.js"></script>
    <script>
      {/* jQuery(function () {
        jQuery("#slider").responsiveSlides({
          auto: true,
          speed: 500,
          namespace: "callbacks",
          pager: true,
        })
      }) */}
    </script>
    <script src="js/bootstrap-select.js"></script>
  </div>
);
