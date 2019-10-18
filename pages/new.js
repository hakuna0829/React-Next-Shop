import React from 'react';
import Link from 'next/link';

import Layout from '../components/layout';

export default () => {
  return (
    <Layout title={ 'Home' }>
      


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

  
    </Layout>
  );
}
