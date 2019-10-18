import React from 'react';
import Link from 'next/link';

export default () => {
  return (
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

  );
}
