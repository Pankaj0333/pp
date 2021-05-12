import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Tab, } from 'react-bootstrap';
import Header3 from '../layout/header3'
import HomeSlider3 from '../element/home-slider3';
import Footer2 from '../layout/footer2';
import Testimonial2 from '../element/testimonial2';
import CaseStudy from '../element/case-study';
import Featureslide from '../element/feature-slider';
import GoogleMaps from "simple-react-google-maps";
import ProgressBar from 'react-bootstrap/ProgressBar'

const map1 = require('./../../assets/images/shape/shape-6.png');

const ctabg1 = require('./../../assets/images/background/image-10.jpg');


class Index3 extends Component {



    render() {
        return (
            <>
                <Header3 />

                {/* <!-- Hidden Sidebar --> */}
                <section class="hidden-sidebar ">
                    <div class="wrapper-box">
                        <div class="hidden-sidebar-close"><span class="flaticon-cancel"></span></div>
                        <div class="logo"><Link to={'/#'}><img src={require('../../assets/images/logo-dark.png')} alt="" /></Link></div>
                        <div class="content">
                            <div class="about-widget-two sidebar-widget">
                                <h3>Smart Business Consultancy <br />in New Milton</h3>
                                <div class="text">We denounce with righteous indignation and dislike men who we are to beguiled demoralized by the charms of pleasures that moment, so we blinded desires, that they indignations.</div>
                            </div>
                            {/* <!-- News Widget --> */}
                            <div class="news-widget sidebar-widget">
                                <div class="widget-title">News & Updates</div>
                                <div class="post-wrapper">
                                    <div class="image"><Link to="blog-details.html"><img src={require('../../assets/images/resource/news-10.jpg')} alt="" /></Link></div>
                                    <div class="category">Business Plans</div>
                                    <h4><Link to={'/blog-details'}>How to Manage Business’s <br />Online Reputation</Link></h4>
                                </div>
                                <div class="post-wrapper">
                                    <div class="image"><Link to="blog-details.html"><img src={require('../../assets/images/resource/news-11.jpg')} alt="" /></Link></div>
                                    <div class="category">Marketing Stratergy</div>
                                    <h4><Link to={'/blog-details'}>Inside our Daily Routines as a <br />Good Consultant</Link></h4>
                                </div>
                            </div>
                            {/* <!-- Newsletter Widget --> */}
                            <div class="newsletter-widget">
                                <div class="widget-title">Newsletter Subscription</div>
                                <form action="#">
                                    <input type="email" placeholder="Enter Email Address" />
                                    <button class="theme-btn btn-style-one"><span class="btn-title">Subscribe Us</span></button>
                                </form>
                            </div>
                        </div>
                    </div>

                </section>

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

                {/* <!-- Banner Section --> */}
                <HomeSlider3 />
                {/* <!--End Banner Section --> */}


                {/* <!-- About Section Two --> */}
                <section class="about-section-three">
                    <div class="auto-container">
                        <div class="wrapper-box">
                            <div class="row align-items-center">
                                <div class="col-lg-5">
                                    <div class="sec-title text-right">
                                        <div class="sub-title">About Us</div>
                                        <h2>We Work With <br />You To Address</h2>
                                    </div>
                                </div>
                                <div class="col-lg-7">
                                    <div class="content-box">
                                        <div class="row">
                                            <div class="info-column col-md-6">
                                                <div class="icon-box">
                                                    <div class="icon"><img src={require('../../assets/images/icons/icon-19.png')} alt="" /></div>
                                                    <h5>Phone Number</h5>
                                                    <h2>+897 6765 754</h2>
                                                </div>
                                            </div>
                                            <div class="info-column col-md-6">
                                                <div class="icon-box">
                                                    <div class="icon"><img src={require('../../assets/images/icons/icon-20.png')} alt="" /></div>
                                                    <h5>Email Address</h5>
                                                    <h2>info@webmail.com</h2>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Why Choose Us Section --> */}
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
                                                    <div class="image"><img src={require('../../assets/images/resource/image-4.jpg')} alt="" /></div>
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

                {/* <!-- Services Section Three --> */}
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
                                    <h3>Business/Family Loan</h3>
                                    <div class="text">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</div>
                                </div>
                            </div>
                            {/* <!-- Services Block One --> */}
                            <div class="service-block-one col-lg-4">
                                <div class="inner-box">
                                    <div class="icon"><span class="flaticon-life-insurance"></span><span class="round-shape"></span></div>
                                    <h3>Life/Car Insurance</h3>
                                    <div class="text">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</div>
                                </div>
                            </div>
                            {/* <!-- Services Block One --> */}
                            <div class="service-block-one col-lg-4">
                                <div class="inner-box">
                                    <div class="icon"><span class="flaticon-consulting"></span><span class="round-shape"></span></div>
                                    <h3>Business Consultancy</h3>
                                    <div class="text">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Insurance Calculate --> */}
                <section class="insurance-calculate">
                    <div class="big-title">Insurance</div>
                    <div class="auto-container">
                        <div class="wrapper-box">
                            <div class="shape" style={{ backgroundImage: "url(" + map1 + ")" }}></div>
                            <h1>Life Insurance Quote</h1>
                            <div class="price">
                                <span>$10000</span>
                                <span>$20000</span>
                                <span>$30000</span>
                                <span>$40000</span>
                                <span>$50000</span>
                            </div>
                            <div class="progress-box">
                                <div class="bar">
                                    <ProgressBar className="count-bar" now={64} />
                                </div>
                            </div>
                            <div class="lower-content">
                                <div class="column">
                                    <h5>Profit</h5>
                                    <h2>$35,000</h2>
                                </div>
                                <div class="column">
                                    <h5>Duration</h5>
                                    <h2>05 Mo.</h2>
                                </div>
                                <div class="column">
                                    <h5>Monthly</h5>
                                    <h2>$7,080</h2>
                                </div>
                                <div class="column">
                                    <Link to={'/#'} class="theme-btn btn-style-two"><span class="btn-title">Get A Quote</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Case Studies --> */}
                <section class="cases-section">

                    {/* <!--case Tabs--> */}
                    <div class="case-tabs">
                        <div class="container-fluid">
                            <div class="sec-title text-center">
                                <div class="sub-title">Case Study</div>
                                <h2>Much Work Done</h2>
                            </div>
                            <div class="case-tab-wrapper">
                                {/* <!--Tabs Content-->   */}
                                <div class="case-tabs-content">
                                    {/* <!--case Tab / Active Tab--> */}
                                    <div class="case-tab active-tab">
                                        <CaseStudy />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* <!-- Testimonial Section --> */}
                <Testimonial2 />

                {/* <!-- Map Section --> */}
                <section class="map-section">
                    <div class="map-column">
                        <GoogleMaps
                            apiKey={"AIzaSyBQ5y0EF8dE6qwc03FcbXHJfXr4vEa7z54"}
                            style={{ height: "800px", width: "100%" }}
                            zoom={12}
                            center={{ lat: 37.4224764, lng: -122.0842499 }}
                            markers={{ lat: 37.4224764, lng: -122.0842499 }} //optional
                        />
                    </div>
                </section>



                {/* <!-- Contact Section Two --> */}
                <section class="contact-section-two">
                    <div class="auto-container">
                        <div class="contact-info-area">
                            <div class="contact-info">
                                <div class="row">
                                    <div class="info-column col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                        <div class="icon-box">
                                            <div class="icon"><span class="flaticon-email-6"></span></div>
                                            <h3>Email Address</h3>
                                            <ul>
                                                <li><Link to={'/mailto:info@webmail.com'}>info@webmail.com</Link></li>
                                                <li><Link to={'/mailto:info@webmail.com'}>jobs@exampleco.com</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="info-column col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                        <div class="icon-box">
                                            <div class="icon"><span class="flaticon-call-1"></span></div>
                                            <h3>Phone Number</h3>
                                            <ul>
                                                <li><Link to={'/tel:+8976765654654'}>+897 676 5654 654</Link></li>
                                                <li><Link to={'/tel:+908(097)56476576'}>+908(097) 564 765 76</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="info-column col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                        <div class="icon-box">
                                            <div class="icon"><span class="flaticon-location"></span></div>
                                            <h3>Office Address</h3>
                                            <ul>
                                                <li>12/A, Romania City Town Hall <br />New Joursey, UK</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="contact-form-area">
                            <div class="sec-title text-center">
                                <div class="sub-title">Write Here</div>
                                <h2>Get In Touch</h2>
                            </div>
                            {/* <!-- Contact Form--> */}
                            <div class="contact-form">
                                <form method="post" action="http://azim.commonsupport.com/Finandox/sendemail.php" id="contact-form">
                                    <div class="row clearfix">
                                        <div class="col-md-6 form-group">
                                            <label for="name">Enter your name</label>
                                            <input type="text" name="username" id="name" placeholder="Enter name here......" required="" />
                                            <i class="fas fa-user"></i>
                                        </div>

                                        <div class="col-md-6 form-group">
                                            <label for="email">Enter your email</label>
                                            <input type="email" name="email" id="email" placeholder="Enter email here......" required="" />
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
                    </div>
                </section>



                {/* <!-- Feature Section Two --> */}
                <Featureslide />

                {/* <!-- News Section --> */}
                <section class="news-section">
                    <div class="auto-container">
                        <div class="sec-title text-center">
                            <div class="sub-title">News</div>
                            <h2>News From Resource</h2>
                        </div>
                        <div class="row">
                            {/* <!-- News Block One --> */}
                            <div class="news-block-one col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class="inner-box">
                                    <div class="image"><Link to={'/#'}><img src={require('../../assets/images/resource/news-1.jpg')} alt="" /></Link></div>
                                    <div class="lower-content">
                                        <div class="category">Business</div>
                                        <ul class="post-meta">
                                            <li><Link to={'/#'}><i class="far fa-calendar-alt"></i>24th March 2020</Link></li>
                                            <li><Link to={'/#'}><i class="far fa-user"></i>By Admin</Link></li>
                                        </ul>
                                        <h3><Link to={'/blog-details'}>UX is best solution for your <br />business & make noise.</Link></h3>
                                        <div class="text">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore</div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- News Block One --> */}
                            <div class="news-block-one col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class="inner-box">
                                    <div class="image"><Link to={'/#'}><img src={require('../../assets/images/resource/news-2.jpg')} alt="" /></Link></div>
                                    <div class="lower-content">
                                        <div class="category">Business</div>
                                        <ul class="post-meta">
                                            <li><Link to={'/#'}><i class="far fa-calendar-alt"></i>26th March 2020</Link></li>
                                            <li><Link to={'/#'}><i class="far fa-user"></i>By Admin</Link></li>
                                        </ul>
                                        <h3><Link to={'/blog-details'}>Business consultant is involved in the planning.</Link></h3>
                                        <div class="text">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore</div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- News Block One --> */}
                            <div class="news-block-one col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class="inner-box">
                                    <div class="image"><Link to={'/#'}><img src={require('../../assets/images/resource/news-3.jpg')} alt="" /></Link></div>
                                    <div class="lower-content">
                                        <div class="category">Business</div>
                                        <ul class="post-meta">
                                            <li><Link to={'/#'}><i class="far fa-calendar-alt"></i>28th March 2020</Link></li>
                                            <li><Link to={'/#'}><i class="far fa-user"></i>By Admin</Link></li>
                                        </ul>
                                        <h3><Link to={'/blog-details'}>Business consultant is a professional who analyzes.</Link></h3>
                                        <div class="text">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- CTA Section --> */}
                <section class="cta-section">
                    <div class="auto-container">
                        <div class="wrapper-box" style={{ backgroundImage: "url(" + ctabg1 + ")" }}>
                            <div class="row align-items-center">
                                <div class="col-lg-6">
                                    <div class="sec-title light">
                                        <div class="sub-title">Call To Action</div>
                                        <h2>We Waiting For <br />Your Response.</h2>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <form action="#">
                                        <input type="email" placeholder="Enter your email address" />
                                        <button class="theme-btn btn-style-one" type="submit" name="submit-form"><span class="btn-title"><i class="fal fa-envelope"></i>Subscribe Now</span></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <Footer2 />
            </>
        )
    }
}
export default Index3;