import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Tab, } from 'react-bootstrap';
import Header2 from '../layout/header2';
import Footer from '../layout/footer';
import Brand1 from '../element/brand1';


const aboutbg = require('./../../assets/images/background/image-11.jpg');



class About extends Component {


    render() {
        return (
            <>
                <Header2 />
                <div id="search-popup" class="search-popup">
                    <div class="close-search theme-btn"><span class="flaticon-cancel"></span></div>
                    <div class="popup-inner">
                        <div class="overlay-layer"></div>
                        <div class="search-form">
                            <form method="post" action="http://azim.commonsupport.com/Finandox/index.html">
                                <div class="form-group">
                                    <fieldset>
                                        <input type="search" class="form-control" name="search-input" value="" placeholder="Search Here" required />
                                        <input type="submit" value="Search Now!" class="theme-btn" />
                                    </fieldset>
                                </div>
                            </form>
                            <br />
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


                <section class="page-banner">
                    <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
                    <div class="bottom-rotten-curve alternate"></div>

                    <div class="auto-container">
                        <h1>About Us</h1>
                        <ul class="bread-crumb clearfix">
                            <li><Link to={'/#'}>Home</Link></li>
                            <li class="active">About Us</li>
                        </ul>
                    </div>

                </section>


                {/* About Section Two */}
                <section class="about-section">
                    <div class="auto-container">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                            <div class="content-box">
                            <div class="sec-title">
                                <div class="sub-title">About Us</div>
                                <h2>We Work With <br />You To Address</h2>
                                <div class="text">Part of the DH Group, Asquire Global Wealth offers unlimited access to Global Investment Products. Our long-standing affiliation with our global partners, in-depth analysis of the products we align with, and above all, our ability to support our clients round the clock establishes us as our client's partner of choice for all their International Investment needs.

                                Reasons behind launching this portal: 
                                
                                1. In 2019, Indian citizens remitted USD 19 billion out of India but cross border investment amount was minimal. This was due to a lack of awareness and access to global capital market platforms. 
                                
                                2. Additionally, banks and large financial institutions cater to UHNIs with minimum investment size of USD 500,000. HNIs and retail investors thus have no one to serve them or provide authentic information regarding global investment opportunities. 
                                3. In 2019, Indian citizens remitted USD 1O billion for their children’s foreign education. The same amount could have been invested by these citizens to reap many other benefits, including avoiding currency risk. 
                                
                                This portal brings together several asset classes under one domain such as - global financial markets, global real estate, second passport and global enterprise / start-up.</div>
                            </div>
                            <div class="row">
                                <div class="info-column col-md-6">
                                    <div class="icon-box">
                                        <div class="icon"><img src={require('../../assets/images/icons/icon-1.png')} alt="" /></div>
                                        <h5>Phone Number</h5>
                                    <h2>9650001808</h2>
                                    </div>
                                </div>
                                <div class="info-column col-md-6">
                                    <div class="icon-box">
                                        <div class="icon"><img src={require('../../assets/images/icons/icon-2.png')} alt="" /></div>
                                        <h5>Email Address</h5>
                                        <h2>support@agw.com</h2>
                                    </div>
                                </div>
                            </div>
                        </div>                            </div>
                            <div class="col-lg-6">
                                <div class="content-box">
                                <div class="image-wrapper">
                                <div class="image-one">
                                    <img src={require('../../assets/images/resource/image-2.jpg')} alt="" />
                                </div>
                                <div class="image-two wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="caption">F.</div>
                                    <div class="image-outer"><img src={require('../../assets/images/resource/image-3.jpg')} alt="" /></div>
                                </div>
                                </div>
                                
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Why Choose Us Section --> */}
                <section class="why-chooseus-section">
                    <div class="auto-container">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <div class="content-box">
                                    <div class="sec-title">
                                        <div class="sub-title">Why Choose Us</div>
                                        <h2>Why Should You <br />Choose Us ?</h2>
                                    </div>
                                    <Tab.Container defaultActiveKey="first">
                                        <Nav variant="pills" className="nav nav-tabs tab-btn-style-one">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first"><span>Our Mission</span></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second"><span>Our Vission</span></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third"><span>Our Value</span></Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content className="tabs-content">
                                            <Tab.Pane eventKey="first" className="fadeInUp animated">
                                                <div class="clearfix">
                                                    <div class="text"><p>Lorem ipsum dolor sit amet, consectetur adipisici ng elit, sed do eiusmod tempor incididunt ut labo re et dolore magna aliqua. Ut enim ad minim veni am, quis nostrud exercitation ullamco.</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error</p></div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second" className="fadeInUp animated">
                                                <div class="clearfix">
                                                    <div class="image"><img src={require('../../assets/images/resource/image-4.jpg')} alt="" /></div>
                                                    <div class="text"><p>Lorem ipsum dolor sit amet, consectetur adipisici ng elit, sed do eiusmod tempor incididunt ut labo re et dolore magna aliqua. Ut enim ad minim veni am, quis nostrud exercitation ullamco.</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error</p></div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third" className="fadeInUp animated">
                                                <div class="clearfix">
                                                    <div class="image"><img src={require('../../assets/images/resource/image-4.jpg')} alt="" /></div>
                                                    <div class="text"><p>Lorem ipsum dolor sit amet, consectetur adipisici ng elit, sed do eiusmod tempor incididunt ut labo re et dolore magna aliqua. Ut enim ad minim veni am, quis nostrud exercitation ullamco.</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error</p></div>
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>



                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="image-wrapper">
                                    <div class="image-one"><img src={require('../../assets/images/resource/image-6.jpg')} alt="" /></div>
                                    <div class="image-two"><img src={require('../../assets/images/resource/image-5.jpg')} alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="services-section-four services-section-about">
                <div class="auto-container">
                    <div class="sec-title text-center">
                        <div class="sub-title">Features</div>
                        <h2>Core Features</h2>
                    </div>
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="icon-box">
                                <div class="icon"><img src={require('../../assets/images/icons/icon-3.png')} alt="" /></div>
                                <h2>Capital Market</h2>
                                <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="icon-box">
                                <div class="icon"><img src={require('../../assets/images/icons/icon-21.png')} alt="" /></div>
                                <h2>Finance Division</h2>
                                <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="icon-box">
                                <div class="icon"><img src={require('../../assets/images/icons/icon-4.png')} alt="" /></div>
                                <h2>Insurance & Planning</h2>
                                <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="icon-box">
                                <div class="icon"><img src={require('../../assets/images/icons/icon-22.png')} alt="" /></div>
                                <h2>Family Case</h2>
                                <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="icon-box">
                                <div class="icon"><img src={require('../../assets/images/icons/icon-5.png')} alt="" /></div>
                                <h2>Financial Strategy</h2>
                                <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="icon-box">
                                <div class="icon"><img src={require('../../assets/images/icons/icon-23.png')} alt="" /></div>
                                <h2>Financial Planning</h2>
                                <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="team-section">
            <div class="auto-container">
                <div class="sec-title text-center">
                    <div class="sub-title">Our Team</div>
                    <h2>Leadership Team</h2>
                </div>
                <div class="row">
                    {/* Team Block One */}
                    <div class="col-lg-4 team-block-one">
                        <div class="inner-box">
                            <div class="image"><img src={require('../../assets/images/resource/team-1.jpg')} alt="" /></div>
                            <div class="content">
                                <div class="designation">Founder</div>
                                <h3>Hitesh Saini</h3>
                                <ul class="social-links">
                                    <li><Link to={'/#'}><span class="fab fa-facebook-f"></span></Link></li>
                                    <li><Link to={'/#'}><span class="fab fa-twitter"></span></Link></li>
                                    <li><Link to={'/#'}><span class="fab fa-behance"></span></Link></li>
                                    <li><Link to={'/#'}><span class="fab fa-youtube"></span></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Team Block One */}
                    <div class="col-lg-4 team-block-one">
                        <div class="inner-box">
                            <div class="image"><img src={require('../../assets/images/resource/teamprofile1.png')} alt="" /></div>
                            <div class="content">
                                <div class="designation">CEO</div>
                                <h3>Hitesh Saini</h3>
                                <ul class="social-links">
                                    <li><Link to={'/#'}><span class="fab fa-facebook-f"></span></Link></li>
                                    <li><Link to={'/#'}><span class="fab fa-twitter"></span></Link></li>
                                    <li><Link to={'/#'}><span class="fab fa-behance"></span></Link></li>
                                    <li><Link to={'/#'}><span class="fab fa-youtube"></span></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Team Block One */}
                    <div class="col-lg-4 team-block-one">
                        <div class="inner-box">
                            <div class="image"><img src={require('../../assets/images/resource/M.png')} alt="" /></div>
                            <div class="content">
                                <div class="designation">Developer</div>
                                <h3>Maddy</h3>
                                <ul class="social-links">
                                    <li><Link to={'/#'}><span class="fab fa-facebook-f"></span></Link></li>
                                    <li><Link to={'/#'}><span class="fab fa-twitter"></span></Link></li>
                                    <li><Link to={'/#'}><span class="fab fa-behance"></span></Link></li>
                                    <li><Link to={'/#'}><span class="fab fa-youtube"></span></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

            <Brand1 />

                {/* History Section */}
         

                <Footer />
            </>
        )
    }
}
export default About;