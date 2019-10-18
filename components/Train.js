import React from 'react';
import Link from 'next/link';

export default () => {
    return (
        <div class="agile-trains w3layouts-content">
            <div class="container">
            <div class="col-md-4 bann-info1">
                <i class="train-icon fa fa-train"></i>
            </div>
            <div class="col-md-5 bann-info">
                <h3>Search for Trains</h3>
                <div class="book-a-ticket">
                                    <div class=" bann-info">
                                        <form action="trains-list.html" method="post">
                                            <div class="ban-top">
                                                <div class="bnr-left">
                                                    <label class="inputLabel">From:</label>
                                                    <input class="city" type="text" placeholder="Enter a city or local area" required="required" />
                                                </div>
                                                
                                                <div class="bnr-left">
                                                    <label class="inputLabel">To:</label>
                                                    <input class="city" type="text" placeholder="Enter a city or local area" required="required" />
                                                </div>
                                                    <div class="clearfix"></div>
                                            </div>
                                            <div class="ban-bottom">
                                                    <div class="bnr-right">
                                                        <label class="inputLabel">Date of Journey:</label>
                        <input class="date" id="datepicker" type="text" placeholder="dd-mm-yyyy"  required="required" />
                                                    </div>
                                                    <div class="bnr-right">
                                                        <label class="inputLabel">Date of Return<span class="opt">&nbsp;(Optional):</span></label>
                        <input class="date" id="datepicker1" type="text" placeholder="dd-mm-yyyy" />
                                                    </div>
                                                        <div class="clearfix"></div>
                                                        
                                                        <link rel="stylesheet" href="css/jquery-ui.css"/>
                                                        
                                                            
                                                </div>
                                            <div class="search">
                                                <input type="submit" class="submit" value="Search"/>
                                            
                                            </div>
                                        </form>
                                    </div>
                            </div>

            </div>
            <div class="clearfix"></div>
        </div>
        </div>
    );
}
