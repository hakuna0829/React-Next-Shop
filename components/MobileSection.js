import React from 'react';
import Link from 'next/link';

export default () => {
  return (
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

  );
}
