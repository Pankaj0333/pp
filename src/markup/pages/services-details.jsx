import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ProgressBar from 'react-bootstrap/ProgressBar'

const aboutbg = require('./../../assets/images/background/image-11.jpg');
const helpbg = require('./../../assets/images/background/image-18.jpg');

const percentage1 = 80;

class ServicesDetails extends Component {


    render() {
        return (
            <>
                <Header/>

                {/* <!--Search Popup--> */}
                <div id="search-popup" class="search-popup">
                    <div class="close-search theme-btn"><span class="flaticon-cancel"></span></div>
                    <div class="popup-inner">
                        <div class="overlay-layer"></div>
                        <div class="search-form">
                            <form method="post" action="http://azim.commonsupport.com/Finandox/index.html">
                                <div class="form-group">
                                    <fieldset>
                                        <input type="search" class="form-control" name="search-input" value="" placeholder="Search Here" required />
                                        <input type="submit" value="Search Now!" class="theme-btn"/>
                                    </fieldset>
                                </div>
                            </form>
                            <br/>
                            <h3>Recent Search Keywords</h3>
                            <ul class="recent-searches">
                                <li><Link to={'/#'}>Finance</Link></li>
                                <li><Link to={'/#'}>Idea</Link></li>
                                <li><Link to={'/#'}>Service</Link></li>
                                <li><Link to={'/#'}>Growth</Link></li>
                                <li><Link to={'/#'}>Plan</Link></li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
                
                {/* <!-- Page Banner Section --> */}
                <section class="page-banner">
                    <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
                    <div class="bottom-rotten-curve alternate"></div>

                    <div class="auto-container">
                        <h1>Services Details</h1>
                        <ul class="bread-crumb clearfix">
                            <li><Link to={'/#'}>Home</Link></li>
                            <li class="active">Services Details</li>
                        </ul>
                    </div>

                </section>
                {/* <!--End Banner Section --> */}


                {/* <!-- Sidebar Page Container --> */}
                <div class="sidebar-page-container">
                    <div class="auto-container">
                        <div class="row">
                            <div class="col-lg-4">
                                <aside class="sidebar">
                                    {/* <!-- Category Widget --> */}
                                    <div class="sidebar-widget-two categories-widget-two">
                                        <div class="widget-content">
                                        <ul>
                                        <li><Link to={'/services-details'}>Financial Planning <i class="fa fa-angle-right"></i></Link></li>
                                        <li class="current"><Link to={'/services-details'}>Software & Research <i class="fa fa-angle-right"></i></Link></li>
                                        <li><Link to={'/services-details'}>Business Services <i class="fa fa-angle-right"></i></Link></li>
                                        <li><Link to={'/services-details'}>Quality Resourcing <i class="fa fa-angle-right"></i></Link></li>
                                        <li><Link to={'/services-details'}>Travel and Aviation <i class="fa fa-angle-right"></i></Link></li>
                                        <li><Link to={'/services-details'}>Healthcare Services <i class="fa fa-angle-right"></i></Link></li>
                                        </ul>
                                        </div>
                                    </div>
                                    {/* <!-- Contact Form Widget --> */}
                                    <div class="sidebar-widget-two contact-form-widget">
                                        <div class="inner-box">
                                            <h3>Contact Form</h3>
                                            {/* <!-- Contact Form--> */}
                                            <div class="contact-form">
                                                <form method="post" action="http://azim.commonsupport.com/Finandox/sendemail.php" id="contact-form">
                                                    <div class="row clearfix">                                    
                                                        <div class="col-md-12 form-group">
                                                            <input type="text" name="username" placeholder="Enter name here......" required=""/>
                                                            <i class="fal fa-user"></i>
                                                        </div>
                                                        
                                                        <div class="col-md-12 form-group">
                                                            <input type="email" name="email" placeholder="Enter email here......" required=""/>
                                                            <i class="fal fa-envelope"></i>
                                                        </div>

                                                        <div class="col-md-12 form-group">
                                                            <input type="email" name="email" placeholder="Enter Phone Number......" required=""/>
                                                            <i class="fal fa-phone"></i>
                                                        </div>
                                
                                                        <div class="col-md-12 form-group text-center">
                                                            <button class="theme-btn btn-style-one" type="submit" name="submit-form"><span class="btn-title">Submit Now</span></button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Contact Info Widget --> */}
                                    <div class="sidebar-widget-two contact-info-widget">
                                        <div class="inner-box" style={{ backgroundImage: "url(" + helpbg + ")" }}>
                                            <h3>Need Help?</h3>
                                            <ul>
                                                <li><Link to={'/mailto:info@webmail.com'}>info@webmail.com</Link></li>
                                                <li><Link to={'/tel:+98787676576'}>+987 876 765 76</Link></li>
                                                <li><Link to={'/mailto:support.example.com'}>support.example.com</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                                        
                                </aside>
                            </div>
                            <div class="col-lg-8">
                                <div class="services-details pl-lg-5">
                                    <div class="image-box"><img src={require('../../assets/images/resource/service-1.jpg')} alt=""/></div>
                                    <div class="content">
                                        <div class="sec-title">
                                            <div class="sub-title">Financial Planning</div>
                                            <h2>We Support Our Clients Five <br/> Working Days.</h2>
                                        </div>
                                        <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto . Lorem ipsum dolor sit amet, consectetur adipisicing elit,.</div>
                                        <blockquote>
                                            <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                                            <h4>Rosalina D. William</h4>
                                        </blockquote>
                                        <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.</div>
                                    </div>
                                    <div class="graph">
                                        <div class="row">
                                            <div class="col-md-8">
                                                <img src={require('../../assets/images/resource/graph-2.png')} alt=""/>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="progress-block">
                                                    <div class="inner-box">
                                                        <CircularProgressbar value={percentage1} text={`${percentage1}%`} />;
                                                    </div>
                                                    <div class="counter-title">Affairs Advisors</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="loan-calculator">
                                        <div class="row m-0 justify-content-md-between align-items-center">
                                            <div class="sec-title">
                                                <div class="sub-title">Choose Your Type Calculator</div>
                                                <h2>Loan Calculator</h2>
                                            </div>
                                            <div class="calculate-btn">
                                                <button>EMI</button>
                                                <button class="active">Savings</button>
                                            </div>
                                        </div>                                
                                        <div class="progress-bar-outer">
                                            <div class="progress-box">
                                                <div class="bar">
                                                    <ProgressBar animated={true} className="count-bar" now={64} />
                                                </div>
                                                <div class="row m-0 justify-content-between">
                                                    <div class="progress-value">$5,000</div>
                                                    <div class="total-value">$20,000</div>
                                                </div>
                                            </div>
                                            <div class="progress-box">
                                                <div class="bar">
                                                    <ProgressBar animated={true} className="count-bar" now={34} />
                                                </div>
                                                <div class="row m-0 justify-content-between">
                                                    <div class="progress-value">12</div>
                                                    <div class="total-value">84</div>
                                                </div>
                                            </div>
                                            <div class="progress-box">
                                                <div class="bar">
                                                    <ProgressBar animated={true} className="count-bar" now={84} />
                                                </div>
                                                <div class="row m-0 justify-content-between">
                                                    <div class="progress-value">0.00%</div>
                                                    <div class="total-value">30.00%</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="calculation-value">
                                            <div class="row">
                                                <div class="single-value col-md-3 col-sm-6">
                                                    <div class="inner-box">
                                                        <h4>$7200</h4>
                                                        <h5>Amount</h5> 
                                                    </div>                       
                                                </div>
                                                <div class="single-value col-md-3 col-sm-6">
                                                    <div class="inner-box">
                                                        <h4>36 mo</h4>
                                                        <h5>Term</h5> 
                                                    </div>                       
                                                </div>
                                                <div class="single-value col-md-3 col-sm-6">
                                                    <div class="inner-box">
                                                        <h4>22.55%</h4>
                                                        <h5>Interest</h5> 
                                                    </div>                       
                                                </div>
                                                <div class="single-value col-md-3 col-sm-6">
                                                    <div class="inner-box">
                                                        <h4>$2,785</h4>
                                                        <h5>Monthly</h5>
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

                
                <Footer/>
            </>
        )
    }
}
export default ServicesDetails;