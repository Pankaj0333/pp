import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header2 from '../layout/header2';
import HomeSlider2 from '../element/home-slider2';
import Footer from '../layout/footer';
import { Nav, Tab, } from 'react-bootstrap';
import Testimonial1 from '../element/testimonial1'
import '../../assets/css/color-2.css';


import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const counterbg1 = require('./../../assets/images/background/image-5.jpg');
const touchbg1 = require('./../../assets/images/background/image-8.jpg');



class Index2 extends Component {


    render() {
        return (
            <>
                <Header2 />
                


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

                <HomeSlider2 />


                {/* <!-- Feature Section --> */}
                <section class="feature-section">
                    <div class="auto-container">
                        <div class="wrapper-box">
                            <div class="row">
                               
                                <div class="col-lg-2 col-md-4 col-sm-6 col-xs-6 col-6">
                                <Link to={'/offshoreinvestment'}>  <div class="feature-block-one">
                                        <div class="inner-box">
                                            <div class="icon"><span class="flaticon-team"></span></div>
                                            <h5>Offshore Investments</h5>
                                        </div>
                                    </div>                                </Link>

                                </div>
                                
                                <div class="col-lg-2 col-md-4 col-sm-6 col-xs-6 col-6">
                                  <Link to={'/regularsaving'}><div class="feature-block-one">
                                        <div class="inner-box">
                                            <div class="icon"><span class="flaticon-money"></span></div>
                                            <h5>Regular Savings</h5>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                                <div class="col-lg-2 col-md-4 col-sm-6 col-xs-6 col-6">
                                    <Link to={'/planningforretirement'}><div class="feature-block-one">
                                        <div class="inner-box">
                                            <div class="icon"><span class="flaticon-assets"></span></div>
                                            <h5>Planning For Retirement</h5>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                                <div class="col-lg-2 col-md-4 col-sm-6 col-xs-6 col-6">
                                    <Link to={'/uaepensiontransfer'}><div class="feature-block-one">
                                        <div class="inner-box">
                                            <div class="icon"><span class="flaticon-world"></span></div>
                                            <h5>UAE Pension</h5>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                                <div class="col-lg-2 col-md-4 col-sm-6 col-xs-6 col-6">
                                    <Link to={'/ukpensiontransfer'}><div class="feature-block-one">
                                        <div class="inner-box">
                                            <div class="icon"><span class="flaticon-money-1"></span></div>
                                            <h5>UK Pension</h5>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                                <div class="col-lg-2 col-md-4 col-sm-6 col-xs-6 col-6">
                                    <Link to={'/australiansuperannuation'}><div class="feature-block-one">
                                        <div class="inner-box">
                                            <div class="icon"><span class="flaticon-notebook"></span></div>
                                            <h5>Australian Superannuation</h5>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- About Section Two --> */}
               {/* <section class="about-section-two">
                    <div class="auto-container">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <div class="content-box wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="sec-title">
                                        <div class="sub-title">About Us</div>
                                        <h2>We Work With <br />You To Address</h2>
                                        <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                                    </div>
                                    <div class="author-info">
                                        <div class="wrapper-box">
                                            <h2>Rosalina D. William</h2>
                                            <div class="designation">Founder</div>
                                            <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod..</div>
                                        </div>
                                        <div class="signature"><img src={require('../../assets/images/resource/signature-2.png')} alt="" /></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="image-wrapper wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/resource/image-10.jpg')} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>*/}



                                    {/* <!-- Aboutus hmpage3 --> */}
                <section class="why-chooseus-section pt-0">
                <div class="auto-container">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <div class="image-wrapper">
                                <div class="image-one"><img src={require('../../assets/images/resource/image-11.jpg')} alt="" /></div>
                                <div class="image-two"><img src={require('../../assets/images/resource/image-12.jpg')} alt="" /></div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="content-box ml-lg-3">
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
                    </div>
                </div>
            </section>

                {/* <!-- Service hmpage3 --> */}
                <section class="services-section-three">
                <div class="auto-container">
                    <div class="sec-title text-center">
                        <div class="sub-title">Services</div>
                        <h2>What We Do</h2>
                    </div>
                    <div class="row">
                        {/* <!-- Services Block One --> */}
                        <div class="service-block-one col-lg-4">
                            <div class="inner-box">
                                <div class="icon"><span class="flaticon-assets"></span><span class="round-shape"></span></div>
                                <h3>Investment</h3>
                                <div class="text">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</div>
                            </div>
                        </div>
                        {/* <!-- Services Block One --> */}
                        <div class="service-block-one col-lg-4">
                            <div class="inner-box">
                                <div class="icon"><span class="flaticon-life-insurance"></span><span class="round-shape"></span></div>
                                <h3>Pensions</h3>
                                <div class="text">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</div>
                            </div>
                        </div>
                        {/* <!-- Services Block One --> */}
                        <div class="service-block-one col-lg-4">
                            <div class="inner-box">
                                <div class="icon"><span class="flaticon-consulting"></span><span class="round-shape"></span></div>
                                <h3>Startup Consultancy</h3>
                                <div class="text">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="services-section">
            <div class="auto-container">
                <div class="wrapper-box">
                    <div class="left-column">
                        <div class="services-content">
                            <div class="sec-title light">
                                <div class="sub-title">Our Services</div>
                                <h2>What Actually We <br />Do Here.</h2>
                            </div>
                            <div class="icon-box wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class="icon"><img src={require('../../assets/images/icons/icon-3.png')} alt="" /></div>
                                <h2>Capital Market</h2>
                                <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                            </div>
                            <div class="icon-box wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class="icon"><img src={require('../../assets/images/icons/icon-4.png')} alt="" /></div>
                                <h2>Insurance & Planning</h2>
                                <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                            </div>
                            <div class="icon-box wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class="icon"><img src={require('../../assets/images/icons/icon-5.png')} alt="" /></div>
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
                        
                    </div>
                </div>
            </div>
        </section>



              
                {/* <!-- Testimonial Section --> */}
                <Testimonial1 />





                <Footer />
            </>
        )
    }
}
export default Index2;