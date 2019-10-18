import React from 'react';
import Link from 'next/link';

export default () => {
    return (
        <div className="agile-trains w3layouts-content">
            <div className="container">
            <div className="col-md-4 bann-info1">
                <i className="train-icon fa fa-user"></i>
            </div>
            <div className="col-md-5 bann-info">
                <h3>Profile</h3>
                <div className="book-a-ticket">
                    <div className=" bann-info">
                        <form method="post">
                            <div className="ban-top">
                                <div className="bnr-left">
                                    <label className="inputLabel">Email:</label>
                                    <input className="city" type="text"  required="required" />
                                </div>
                                
                                <div className="bnr-left">
                                    <label className="inputLabel">Username:</label>
                                    <input className="city" type="text"  required="required" />
                                </div>
                                    <div className="clearfix"></div>
                            </div>
                            <div className="ban-bottom">
                                    <div className="bnr-right">
                                        <label className="inputLabel">Date of Journey:</label>
                                        <input className="date" id="datepicker" type="text" placeholder="dd-mm-yyyy"  required="required" />
                                    </div>
                                    <div className="bnr-right">
                                        <label className="inputLabel">Date of Return<span className="opt">&nbsp;(Optional):</span></label>
                                        <input className="date" id="datepicker1" type="text" placeholder="dd-mm-yyyy" />
                                    </div>
                                        <div className="clearfix"></div>
                                        
                                        <link rel="stylesheet" href="css/jquery-ui.css"/>
                                        
                                            
                                </div>
                            <div className="search">
                                <input type="submit" className="submit" value="Search"/>
                            
                            </div>
                        </form>
                    </div>
            </div>

            </div>
            <div className="clearfix"></div>
        </div>
        </div>
    );
}
