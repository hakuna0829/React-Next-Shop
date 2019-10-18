import React from 'react';
import Link from 'next/link';

export default () => {
  return (
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
					<Link href='/support' >
						<a className="type-4">
						<span> Support </span>
						<span> Support  </span>
						<span> Support  </span>
						<span> Support  </span>	
						<span> Support  </span>
						<span> Support  </span>
						</a>
					</Link>
				</div>
			</div>
			<div className="clearfix"> </div>
		</div>
	</div>

  );
}
