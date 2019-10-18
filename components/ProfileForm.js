import React from 'react';
import Link from 'next/link';

export default ({ children, user = {} }) => {
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
                                    <input className="city" type="text" disabled value={user.email} required="required" />
                                </div>
                                
                                <div className="bnr-left">
                                    <label className="inputLabel">Full Name:</label>
                                    <input className="city" type="text" disabled value={user.full_name} required="required" />
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <div className="ban-bottom">
                                <div className="bnr-left">
                                        <label className="inputLabel">Role:</label>
                                        <input className="city" type="text" disabled value={user.role} required="required" />
                                    </div>
                                    
                                    <div className="bnr-left">
                                        <label className="inputLabel">Birthday:</label>
                                        <input className="city" type="text"  required="required" />
                                    </div>
                                <div className="clearfix"></div>
                            </div>
                            <div className="search">
                                {/* <input type="submit" className="submit" value="Save"/> */}
                                { children }
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
