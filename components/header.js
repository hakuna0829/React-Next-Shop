import React from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import Router from 'next/router';
import axios from 'axios';


class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            logged_in: false,
        };
    }
    
    componentDidMount() {
        let token = localStorage.getItem("token")
        if(token) {
            this.setState({logged_in : true})
        }
    }

    logout() {
        localStorage.removeItem("token")
        Router.push('/login')
    }
    
  render() {
      const {logged_in} = this.state
    return (
        <header>
        <div className="container">
            
            <div className="logo">
                <h1><Link href='/'><a>Celeste</a></Link></h1>
            </div>
            
            <div className="w3layouts-login">
                {logged_in ? (
                    <template>
                    <Link href='/users'><a>Users</a></Link>
                    <Link href='/artists'><a>Artists</a></Link>
                    <Button className="logout-btn" onClick={this.logout} >Logout</Button>
                    </template>
                ) : (
                <template>
                    <Link href='/login'><a>Login/Register</a></Link>
                </template>
                )}
            </div>
                <div className="clearfix"></div>
            
                {/* <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" 
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
                </div> */}
            
            </div>
            <style global jsx>{`
                .w3layouts-login {
                    margin-top: 0;
                }
                .container .w3layouts-login .logout-btn {
                    display: block;
                    letter-spacing: 2px;
                    font-size: 13px;
                    color: #fff905;
                    text-decoration: none;
                    margin: 0 0.3em;
                    background: none;
                    border: none;
                    box-shadow: none;
                    margin: 0;
                }

            `}</style>
        </header>
    );
  }
}

export default Header;
