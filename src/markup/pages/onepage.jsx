import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Tab, } from 'react-bootstrap';
import Header5 from '../layout/header5'
import Footer from '../layout/footer'
import HomeSlider1 from './../element/home-slider1';
import VideoPopup1 from './../element/video-popup1';
import PortfolioFilter1 from './../element/portfolio-filter1';

import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const wellcomebg1 = require('./../../assets/images/resource/image-1.jpg');
const authorbg1 = require('./../../assets/images/background/image-1.jpg');
// const videobg = require('./../../assets/images/background/image-2.jpg');
const teambg = require('./../../assets/images/background/image-3.jpg');
const newsbg = require('./../../assets/images/background/image-4.jpg');
class Onepage extends Component {


    render() {
        return (
            <>
                <Header5/>

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

                <HomeSlider1 />
                

                {/* <!-- Welcome Setion --> */}
                <section class="welcome-section pt-0">
                    <div class="auto-container">
                        <div class="wrapper-box">
                            <div class="row m-0">
                                {/* <!-- Welcome Block One --> */}
                                <div class="welcome-block-one col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="inner-box">
                                        <div class="icon-box"><span class="flaticon-analysis"></span></div>
                                        <h2>Business Analysis</h2>
                                        <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore. </div>
                                        <div class="read-more"><Link to={'/#'}>Read More</Link></div>
                                    </div>
                                </div>
                                {/* <!-- Welcome Block One --> */}
                                <div class="welcome-block-one col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="inner-box" style={{ backgroundImage: "url(" + wellcomebg1 + ")" }}>
                                        <div class="icon-box"><span class="flaticon-tax"></span></div>
                                        <h2>Save Your Tax</h2>
                                        <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore. </div>
                                        <div class="read-more"><Link to={'/#'}>Read More</Link></div>
                                    </div>
                                </div>
                                {/* <!-- Welcome Block One --> */}
                                <div class="welcome-block-one col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="inner-box">
                                        <div class="icon-box"><span class="flaticon-work-1"></span></div>
                                        <h2>Business Analysis</h2>
                                        <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore. </div>
                                        <div class="read-more"><Link to={'/#'}>Read More</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* <!-- About Section --> */}
                <section class="about-section" id="about">
                    <div class="auto-container">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <div class="image-wrapper">
                                    <div class="image-one">
                                        <img  src={require('../../assets/images/resource/image-2.jpg')}  alt=""/>
                                    </div>
                                    <div class="image-two wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                        <div class="caption">F.</div>
                                        <div class="image-outer"><img  src={require('../../assets/images/resource/image-3.jpg')}  alt=""/></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="content-box">
                                    <div class="sec-title">
                                        <div class="sub-title">About Us</div>
                                        <h2>We Work With <br/>You To Address</h2>
                                        <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                                    </div>
                                    <div class="row">
                                        <div class="info-column col-md-6">
                                            <div class="icon-box">
                                                <div class="icon"><img src={require('../../assets/images/icons/icon-1.png')} alt=""/></div>
                                                <h5>Phone Number</h5>
                                                <h2>+897 6765 754</h2>
                                            </div>
                                        </div>
                                        <div class="info-column col-md-6">
                                            <div class="icon-box">
                                                <div class="icon"><img src={require('../../assets/images/icons/icon-2.png')} alt=""/></div>
                                                <h5>Email Address</h5>
                                                <h2>info@webmail.com</h2>
                                            </div>
                                        </div>
                                    </div>
                                            
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Services Section --> */}
                <section class="services-section" id="service">
                    <div class="auto-container">
                        <div class="wrapper-box">
                            <div class="left-column">
                                <div class="services-content">
                                    <div class="sec-title light">
                                        <div class="sub-title">Our Services</div>
                                        <h2>What Actually We <br/>Do Here.</h2>
                                    </div>
                                    <div class="icon-box">
                                        <div class="icon wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms"><img src={require('../../assets/images/icons/icon-3.png')} alt=""/></div>
                                        <h2>Capital Market</h2>
                                        <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                                    </div>
                                    <div class="icon-box">
                                        <div class="icon wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms"><img src={require('../../assets/images/icons/icon-4.png')} alt=""/></div>
                                        <h2>Insurance & Planning</h2>
                                        <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                                    </div>
                                    <div class="icon-box wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                        <div class="icon"><img src={require('../../assets/images/icons/icon-5.png')} alt=""/></div>
                                        <h2>Financial Strategy</h2>
                                        <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                                    </div>
                                </div>                        
                            </div>
                            <div class="right-column">
                                {/* <!-- Fact Counter --> */}
                                <div class="fact-counter">
                                    <div class="border-box">
                                        <div class="border_top"></div>
                                        <div class="border_bottom"></div>
                                        <div class="border_middile"></div>
                                    </div>
                                    <div class="row">

                                        {/* <!--Column--> */}
                                        <div class="column counter-column col-md-6">
                                            <div class="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                                <div class="content">
                                                    <div class="icon"><img src={require('../../assets/images/icons/icon-6.png')} alt="" /></div>
                                                    <div class="count-outer count-box">
                                                        <CountUp
                                                            end={90}
                                                            redraw={true}
                                                        >
                                                            {({ countUpRef, start }) => (
                                                                <VisibilitySensor
                                                                    onChange={start}
                                                                    delayedCall
                                                                >
                                                                    <span class="count-text" ref={countUpRef} />
                                                                </VisibilitySensor>
                                                            )}
                                                        </CountUp>
                                                        <span>%</span>
                                                    </div>
                                                    <div class="counter-title">Business Monitoring</div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <!--Column--> */}
                                        <div class="column counter-column col-md-6">
                                            <div class="inner wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                                                <div class="content">
                                                    <div class="icon"><img src={require('../../assets/images/icons/icon-7.png')} alt="" /></div>
                                                    <div class="count-outer count-box">
                                                        <CountUp
                                                            end={71}
                                                            redraw={true}
                                                        >
                                                            {({ countUpRef, start }) => (
                                                                <VisibilitySensor
                                                                    onChange={start}
                                                                    delayedCall
                                                                >
                                                                    <span class="count-text" ref={countUpRef} />
                                                                </VisibilitySensor>
                                                            )}
                                                        </CountUp>
                                                        <span>%</span>
                                                    </div>
                                                    <div class="counter-title">Business Growth</div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <!--Column--> */}
                                        <div class="column counter-column col-md-6">
                                            <div class="inner wow fadeInLeft" data-wow-delay="600ms" data-wow-duration="1500ms">
                                                <div class="content">
                                                    <div class="icon"><img src={require('../../assets/images/icons/icon-8.png')} alt="" /></div>
                                                    <div class="count-outer count-box">
                                                        <CountUp
                                                            end={33}
                                                            redraw={true}
                                                        >
                                                            {({ countUpRef, start }) => (
                                                                <VisibilitySensor
                                                                    onChange={start}
                                                                    delayedCall
                                                                >
                                                                    <span class="count-text" ref={countUpRef} />
                                                                </VisibilitySensor>
                                                            )}
                                                        </CountUp>
                                                        <span>%</span>
                                                    </div>
                                                    <div class="counter-title">Financial Plan</div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <!--Column--> */}
                                        <div class="column counter-column col-md-6">
                                            <div class="inner wow fadeInLeft" data-wow-delay="900ms" data-wow-duration="1500ms">
                                                <div class="content">
                                                    <div class="icon"><img src={require('../../assets/images/icons/icon-9.png')} alt="" /></div>
                                                    <div class="count-outer count-box">
                                                        <CountUp
                                                            end={42}
                                                            redraw={true}
                                                        >
                                                            {({ countUpRef, start }) => (
                                                                <VisibilitySensor
                                                                    onChange={start}
                                                                    delayedCall
                                                                >
                                                                    <span class="count-text" ref={countUpRef} />
                                                                </VisibilitySensor>
                                                            )}
                                                        </CountUp>
                                                        <span>%</span>
                                                    </div>
                                                    <div class="counter-title">Finance Consulting</div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <!--Column--> */}
                                        <div class="column counter-column col-md-6">
                                            <div class="inner wow fadeInLeft" data-wow-delay="600ms" data-wow-duration="1500ms">
                                                <div class="content">
                                                    <div class="icon"><img src={require('../../assets/images/icons/icon-10.png')} alt="" /></div>
                                                    <div class="count-outer count-box">
                                                        <CountUp
                                                            end={69}
                                                            redraw={true}
                                                        >
                                                            {({ countUpRef, start }) => (
                                                                <VisibilitySensor
                                                                    onChange={start}
                                                                    delayedCall
                                                                >
                                                                    <span class="count-text" ref={countUpRef} />
                                                                </VisibilitySensor>
                                                            )}
                                                        </CountUp>
                                                        <span>%</span>
                                                    </div>
                                                    <div class="counter-title">Data Analysis</div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <!--Column--> */}
                                        <div class="column counter-column col-md-6">
                                            <div class="inner wow fadeInLeft" data-wow-delay="900ms" data-wow-duration="1500ms">
                                                <div class="content">
                                                    <div class="icon"><img src={require('../../assets/images/icons/icon-11.png')} alt="" /></div>
                                                    <div class="count-outer count-box">
                                                        <CountUp
                                                            end={10}
                                                            redraw={true}
                                                        >
                                                            {({ countUpRef, start }) => (
                                                                <VisibilitySensor
                                                                    onChange={start}
                                                                    delayedCall
                                                                >
                                                                    <span class="count-text" ref={countUpRef} />
                                                                </VisibilitySensor>
                                                            )}
                                                        </CountUp>
                                                        <span>%</span>
                                                    </div>
                                                    <div class="counter-title">business Strategy</div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="author-box" style={{ backgroundImage: "url(" + authorbg1 + ")" }}>
                                    <div class="author-info">
                                        <div class="author-thumb"><img src={require('../../assets/images/resource/author-1.jpg')} alt=""/></div>
                                        <h2>Rosalina D. William</h2>
                                        <div class="designation">Founder</div>
                                        <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod..</div>
                                    </div>
                                    <div class="signature"><img src={require('../../assets/images/resource/signature.png')} alt=""/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Gallery Section --> */}
                <PortfolioFilter1 />

                {/* <!-- Video Section --> */}
                <VideoPopup1/>

                {/* <!-- Why Choose Us Section --> */}
                <section class="why-chooseus-section">
                    <div class="auto-container">
                        <div class="row align-items-center">                
                            <div class="col-lg-6">
                                <div class="content-box">
                                    <div class="sec-title">
                                        <div class="sub-title">Why Choose Us</div>
                                        <h2>Why Should You <br/>Choose Us ?</h2>
                                    </div>
                                    <Tab.Container defaultActiveKey="first">
                                        <Nav variant="pills" className="nav nav-tabs tab-btn-style-one">
                                            <Nav.Item>
                                                <Nav.Link  eventKey="first"><span>Our Mission</span></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link  eventKey="second"><span>Our Vission</span></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third"><span>Our Value</span></Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content className="tabs-content">
                                            <Tab.Pane eventKey="first" className="fadeInUp animated">
                                                <div class="clearfix">
                                                    <div class="image"><img  src={require('../../assets/images/resource/image-4.jpg')}  alt=""/></div>
                                                    <div class="text"><p>Lorem ipsum dolor sit amet, consectetur adipisici ng elit, sed do eiusmod tempor incididunt ut labo re et dolore magna aliqua. Ut enim ad minim veni am, quis nostrud exercitation ullamco.</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error</p></div>
                                                </div>                                              
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second" className="fadeInUp animated">
                                                <div class="clearfix">
                                                    <div class="image"><img  src={require('../../assets/images/resource/image-4.jpg')}  alt=""/></div>
                                                    <div class="text"><p>Lorem ipsum dolor sit amet, consectetur adipisici ng elit, sed do eiusmod tempor incididunt ut labo re et dolore magna aliqua. Ut enim ad minim veni am, quis nostrud exercitation ullamco.</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error</p></div>
                                                </div>                                            
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third" className="fadeInUp animated">
                                                <div class="clearfix">
                                                    <div class="image"><img  src={require('../../assets/images/resource/image-4.jpg')}  alt=""/></div>
                                                    <div class="text"><p>Lorem ipsum dolor sit amet, consectetur adipisici ng elit, sed do eiusmod tempor incididunt ut labo re et dolore magna aliqua. Ut enim ad minim veni am, quis nostrud exercitation ullamco.</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error</p></div>
                                                </div>                                               
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="image-wrapper">
                                    <div class="image-one"><img src={require('../../assets/images/resource/image-6.jpg')} alt=""/></div>
                                    <div class="image-two"><img src={require('../../assets/images/resource/image-5.jpg')} alt=""/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Team Section --> */}
                <section class="team-section" id="team" style={{ backgroundImage: "url(" + teambg + ")" }}>
                    <div class="auto-container">
                        <div class="sec-title text-center">
                            <div class="sub-title">Our Team</div>
                            <h2>Leadership Team</h2>
                        </div>
                        <div class="row">
                            {/* <!-- Team Block One --> */}
                            <div class="col-lg-4 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class="inner-box">
                                    <div class="image"><img src={require('../../assets/images/resource/team-1.jpg')} alt=""/></div>
                                    <div class="content">
                                        <div class="designation">Founder</div>
                                        <h3>Rosalina D. William</h3>
                                        <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Team Block One --> */}
                            <div class="col-lg-4 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class="inner-box">
                                    <div class="image"><img src={require('../../assets/images/resource/team-2.jpg')} alt=""/></div>
                                    <div class="content">
                                        <div class="designation">CEO</div>
                                        <h3>Velavos H. DesuJa</h3>
                                        <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Team Block One --> */}
                            <div class="col-lg-4 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class="inner-box">
                                    <div class="image"><img src={require('../../assets/images/resource/team-3.jpg')} alt=""/></div>
                                    <div class="content">
                                        <div class="designation">Developer</div>
                                        <h3>Abdur Rahman J.</h3>
                                        <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Contact Section --> */}
                <section class="contact-section" id="contact">
                    <div class="auto-container">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="sec-title">
                                    <div class="sub-title">Write Here</div>
                                    <h2>Get In Touch</h2>
                                </div>
                                {/* <!-- Contact Form--> */}
                                <div class="contact-form">
                                    <form method="post" action="http://azim.commonsupport.com/Finandox/sendemail.php" id="contact-form">
                                        <div class="row clearfix">                                    
                                            <div class="col-md-12 form-group">
                                                <label for="name">Enter your name</label>
                                                <input type="text" name="username" id="name" placeholder="Enter name here......" required=""/>
                                                <i class="fas fa-user"></i>
                                            </div>
                                            
                                            <div class="col-md-12 form-group">
                                                <label for="email">Enter your email</label>
                                                <input type="email" name="email" id="email" placeholder="Enter email here......" required=""/>
                                                <i class="fas fa-envelope"></i>
                                            </div>
                    
                                            <div class="col-md-12 form-group">
                                                <label for="message">Enter your message</label>
                                                <textarea name="message" id="message" placeholder="Enter message here......"></textarea>
                                                <i class="fas fa-edit"></i>
                                            </div>
                    
                                            <div class="col-md-12 form-group">
                                                <button class="theme-btn btn-style-one" type="submit" name="submit-form"><span class="btn-title">Get In Touch</span></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="sec-title">
                                    <div class="sub-title">Get Us Here</div>
                                    <h2>Contact Us</h2>
                                </div>
                                <div class="contact-info">
                                    <div class="border-box">
                                        <div class="border_top"></div>
                                        <div class="border_middile"></div>
                                    </div>
                                    <div class="row">
                                        <div class="info-column col-md-6">
                                            <div class="icon-box">
                                                <div class="icon"><span class="flaticon-email-6"></span></div>
                                                <h3>Email Address</h3>
                                                <ul>
                                                    <li><Link to={'/mailto:info@webmail.com'}>info@webmail.com</Link></li>
                                                    <li><Link to={'/mailto:jobs@exampleco.com'}>jobs@exampleco.com</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="info-column col-md-6">
                                            <div class="icon-box">
                                                <div class="icon"><span class="flaticon-call-1"></span></div>
                                                <h3>Phone Number</h3>
                                                <ul>
                                                    <li><Link to={'/tel:+8976765654654'}>+897 676 5654 654</Link></li>
                                                    <li><Link to={'/tel:+908(097)56476576'}>+908(097) 564 765 76</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="info-column col-md-6">
                                            <div class="icon-box">
                                                <div class="icon"><span class="flaticon-location"></span></div>
                                                <h3>Office Address</h3>
                                                <ul>
                                                    <li>12/A, Romania City Town Hall <br/>New Joursey, UK</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="info-column col-md-6">
                                            <div class="icon-box">
                                                <div class="icon"><span class="flaticon-worldwide"></span></div>
                                                <h3>Web Connect</h3>
                                                <ul>
                                                    <li><Link to={'/http://example.com/'}>example.com</Link></li>
                                                    <li><Link to={'/http://jobs.example.com/'}>jobs.example.com</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>                        
                            </div>
                        </div>
                                
                    </div>
                </section>

                {/* <!-- News Section --> */}
                <section class="news-section">
                    <div class="sec-bg" style={{ backgroundImage: "url(" + newsbg + ")" }}></div>
                    <div class="auto-container">
                        <div class="sec-title text-center light">
                            <div class="sub-title">News</div>
                            <h2>News From Resource</h2>
                        </div>
                        <div class="row">
                            {/* <!-- News Block One --> */}
                            <div class="news-block-one col-lg-4">
                                <div class="inner-box">
                                    <div class="image"><Link to={'/#'}><img src={require('../../assets/images/resource/news-1.jpg')} alt=""/></Link></div>
                                    <div class="lower-content">
                                        <div class="category">Business</div>
                                        <ul class="post-meta">
                                            <li><Link to={'/#'}><i class="far fa-calendar-alt"></i>24th March 2020</Link></li>
                                            <li><Link to={'/#'}><i class="far fa-user"></i>By Admin</Link></li>
                                        </ul>
                                        <h3><Link to={'/blog-details'}>UX is best solution for your <br/>business & make noise.</Link></h3>
                                        <div class="text">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore</div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- News Block One --> */}
                            <div class="news-block-one col-lg-4">
                                <div class="inner-box">
                                    <div class="image"><Link to={'/#'}><img src={require('../../assets/images/resource/news-2.jpg')} alt=""/></Link></div>
                                    <div class="lower-content">
                                        <div class="category">Business</div>
                                        <ul class="post-meta">
                                            <li><Link to={'/#'}><i class="far fa-calendar-alt"></i>26th March 2020</Link></li>
                                            <li><Link to={'/#'}><i class="far fa-user"></i>By Admin</Link></li>
                                        </ul>
                                        <h3><Link to={'/blog-details'}>UX is best solution for your <br/>business & make noise.</Link></h3>
                                        <div class="text">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore</div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- News Block One --> */}
                            <div class="news-block-one col-lg-4">
                                <div class="inner-box">
                                    <div class="image"><Link to={'/#'}><img src={require('../../assets/images/resource/news-3.jpg')} alt=""/></Link></div>
                                    <div class="lower-content">
                                        <div class="category">Business</div>
                                        <ul class="post-meta">
                                            <li><Link to={'/#'}><i class="far fa-calendar-alt"></i>28th March 2020</Link></li>
                                            <li><Link to={'/#'}><i class="far fa-user"></i>By Admin</Link></li>
                                        </ul>
                                        <h3><Link to={'/blog-details'}>UX is best solution for your <br/>business & make noise.</Link></h3>
                                        <div class="text">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Award Section --> */}
                <section class="award-section pt-0">
                    <div class="year">2020</div>
                    <div class="auto-container">
                        <div class="sec-title text-center">
                            <div class="sub-title">Awards</div>
                            <h2>Get Awards</h2>
                        </div>
                        <div class="award-image">
                            <div class="row align-items-center">
                                <div class="col-lg-4">
                                    <div class="image wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms"><img src={require('../../assets/images/resource/award-1.png')} alt=""/></div>
                                    <div class="image wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms"><img src={require('../../assets/images/resource/award-2.png')} alt=""/></div>
                                </div>
                                <div class="col-lg-4 order-lg-2">
                                    <div class="image wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms"><img src={require('../../assets/images/resource/award-3.png')} alt=""/></div>
                                    <div class="image wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms"><img src={require('../../assets/images/resource/award-4.png')} alt=""/></div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="image wow zoomIn" data-wow-delay="200ms" data-wow-duration="1200ms"><img src={require('../../assets/images/resource/award-5.png')} alt=""/></div>
                                </div>
                                
                            </div>
                        </div>                
                        <div class="feature-image">
                            <div class="image-one"><img src={require('../../assets/images/resource/image-7.jpg')} alt=""/></div>
                            <div class="image-two"><img src={require('../../assets/images/resource/image-8.jpg')} alt=""/></div>
                            <div class="image-three"><img src={require('../../assets/images/resource/image-9.jpg')} alt=""/></div>
                        </div>
                    </div>
                </section>


                <Footer/>
            </>
        )
    }
}
export default Onepage;