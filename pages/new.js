import React from 'react';
import Link from 'next/link';

import Layout from '../components/layout';

export default () => {
  return (
    <Layout title={ 'Home' }>
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


	<div className=" header-right">
		<div className="banner">
			 <div className="slider">
			    <div className="callbacks_container">
			      <ul className="rslides" id="slider">		       
					 <li>
			          	 <div className="banner1">
			           		<div className="caption">
					          	<h3><span>Get a</span> coupon voucher on Mobile Recharge</h3>
					          	<p><a href="#mobilew3layouts" className="scroll">Recharge now</a></p>
			          		</div>
			          	</div>
			         </li>
					 <li>
			          	 <div className="banner2">
			           		<div className="caption">
					          	<h3><span>50% off</span> on train Tickets</h3>
                                <p><a href="train.html">Book now</a></p>
			          		</div>
			          	</div>
			         </li>
			         <li>
			          	 <div className="banner3">
			           		<div className="caption">
					          	<h3><span>Flat Rs.200 Cash back</span>  on Movie Tickets</h3>
					          	<p><a href="movies.html">Book now</a></p>
			          		</div>
			          	</div>
			         </li>	
                      <li>
			          	 <div className="banner4">
			           		<div className="caption">
					          	<h3><span>Upto Rs.125 Discount </span> & Flat 100% Money Back</h3>
					          	<p><a href="bus.html">Book now</a></p>
			          		</div>
			          	</div>
			         </li>	
			      </ul>
			  </div>
			</div>
		</div>
	</div>

  <div className="phone" id="mobileappagileits">
		<div className="container">
			<div className="col-md-6">
				<img src="images/ph1.png" className="img-responsive" alt=""/>
			</div>
			<div className="col-md-6 phone-text">
				<h4>Online Payment mobile app on your smartphone!</h4>
                <p className="subtitle">Simple and Fast Payments</p>
					<div className="text-1">
						<h5>Recharge</h5>
						<p>Recharge your Mobile, DTH, Datacard etc...</p>
					</div>
					<div className="text-1">
						<h5>Paybills</h5>
						<p>Pay your Bills(Electricity, Water, Gas, Broadband, Landline etc...)</p>
					</div>
					<div className="text-1">
						<h5>Book Online</h5>
						<p>Book Online Tickets(Movies, Bus, Train etc...)</p>
					</div>
					<div className="agileinfo-dwld-app">
							<h6>Download The App : 
								<a href="#"><i className="fa fa-apple"></i></a>
								<a href="#"><i className="fa fa-windows"></i></a>
								<a href="#"><i className="fa fa-android"></i></a>
							</h6>
						</div>
			</div>
            <div className="clearfix"></div>
            <div className="wthree-mobile-app">
				<form action="#" method="get"> 
					<input className="text" type="tel" name="tel" placeholder="Enter Your Mobile Number" required=""/>
					<input type="submit" value="Send Download Link"/>
				</form>
			</div>
		</div>
	</div>

  <div className="w3l-support">
		<div className="container">
			<div className="col-md-5 w3_agile_support_left">
				<img src="images/cus.jpg" alt=" " className="img-responsive" />
			</div>
			<div className="col-md-7 w3_agile_support_right">
				<h5>Online Recharge</h5>
				<h3>24/7 Customer Service Support</h3>
				<p>Pellentesque accumsan cursus dui, sodales blandit urna sodales vitae. 
					Maecenas placerat eget mi vitae euismod. Duis aliquam efficitur mi, 
					et eleifend velit.</p>
				<div className="agile_more">
					<a href="support.html" className="type-4">
						<span> Support </span>
						<span> Support  </span>
						<span> Support  </span>
						<span> Support  </span>	
						<span> Support  </span>
						<span> Support  </span>
					</a>
				</div>
			</div>
			<div className="clearfix"> </div>
		</div>
	</div>

  <div className="w3-offers">
			<div className="container">
				<div className="w3-agile-offers">
					<h3>the best offers</h3>
					<p>Contrary to popular belief
							, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
				</div>
			</div>
		</div>

    <div className="w3layouts-partners">
		<h3>We are accepted at</h3>
	 		<div className="container">
				<ul>
					<li><a href="#"><img className="img-responsive" src="images/lg.png" alt=""/></a></li>
					<li><a href="#"><img className="img-responsive" src="images/lg1.png" alt=""/></a></li>
					<li><a href="#"><img className="img-responsive" src="images/lg2.png" alt=""/></a></li>
					<li><a href="#"><img className="img-responsive" src="images/lg3.png" alt=""/></a></li>
					<li><a href="#"><img className="img-responsive" src="images/lg4.png" alt=""/></a></li>
				</ul>
				<ul>
					<li><a href="#"><img className="img-responsive" src="images/lg5.png" alt=""/></a></li>
					<li><a href="#"><img className="img-responsive" src="images/lg6.png" alt=""/></a></li>
					<li><a href="#"><img className="img-responsive" src="images/lg7.png" alt=""/></a></li>
					<li><a href="#"><img className="img-responsive" src="images/lg8.png" alt=""/></a></li>
					<li><a href="#"><img className="img-responsive" src="images/lg9.png" alt=""/></a></li>	
				</ul>
			</div>
		</div>	
  
    <div className="w3-subscribe agileits-w3layouts"> 
		<div className="container">
			<div className="col-md-6 social-icons w3-agile-icons">
				<h4>Join Us</h4>  
				<ul>
					<li><a href="#" className="fa fa-facebook sicon facebook"> </a></li>
					<li><a href="#" className="fa fa-twitter sicon twitter"> </a></li>
					<li><a href="#" className="fa fa-google-plus sicon googleplus"> </a></li>
					<li><a href="#" className="fa fa-dribbble sicon dribbble"> </a></li>
					<li><a href="#" className="fa fa-rss sicon rss"> </a></li> 
				</ul> 
			</div> 
			<div className="col-md-6 w3-agile-subscribe-right">
				<h3 className="w3ls-title">Subscribe to Our <br/><span>Newsletter</span></h3>  
				<form action="#" method="post"> 
					<input type="email" name="email" placeholder="Enter your Email..." required="" />
					<input type="submit" value="Subscribe" />
					<div className="clearfix"> </div> 
				</form>  
			</div>
			<div className="clearfix"> </div> 
		</div>
	</div>

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
    </Layout>
  );
}
