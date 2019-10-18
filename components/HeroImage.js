import React from 'react';
import Link from 'next/link';

export default () => {
  return (
    <div className=" header-right">
		<div className="banner">
			 <div className="slider">
			    <div className="callbacks_container">
			      <ul className="rslides" id="slider">		       
					 <li>
			          	 <div className="banner1">
			           		<div className="caption">
					          	<h3><span>Get a</span> coupon voucher on Mobile Recharge</h3>
					          	<p><a href="#" className="scroll">Recharge now</a></p>
			          		</div>
			          	</div>
			         </li>
					 <li>
			          	 <div className="banner2">
			           		<div className="caption">
					          	<h3><span>50% off</span> on train Tickets</h3>
                                <p><a href="#">Book now</a></p>
			          		</div>
			          	</div>
			         </li>
			         <li>
			          	 <div className="banner3">
			           		<div className="caption">
					          	<h3><span>Flat Rs.200 Cash back</span>  on Movie Tickets</h3>
					          	<p><a href="#">Book now</a></p>
			          		</div>
			          	</div>
			         </li>	
                      <li>
			          	 <div className="banner4">
			           		<div className="caption">
					          	<h3><span>Upto Rs.125 Discount </span> & Flat 100% Money Back</h3>
					          	<p><a href="#">Book now</a></p>
			          		</div>
			          	</div>
			         </li>	
			      </ul>
			  </div>
			</div>
		</div>
	</div>

  );
}
