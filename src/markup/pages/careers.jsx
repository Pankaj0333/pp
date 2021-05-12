import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Tab, } from 'react-bootstrap';
import Header from '../layout/header'
import Footer from '../layout/footer'
import Brand1 from '../element/brand1'



const aboutbg = require('./../../assets/images/background/image-11.jpg');
const touchbg = require('./../../assets/images/background/image-8.jpg');



class Careers extends Component {


    render() {
        return (
            <>
                <Header />


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
                        <h1>Careers</h1>
                        <ul class="bread-crumb clearfix">
                            <li><Link to={'/#'}>Home</Link></li>
                            <li class="active">Careers</li>
                        </ul>
                    </div>

                </section>
                {/* <!--End Banner Section --> */}


                {/* <!-- Careers Section --> */}
                <section class="careers-section">
                    <div class="auto-container">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 career-block">
                                <div class="inner-box">
                                    <div class="time">Full Time</div>
                                    <h3>Senior Product Designer</h3>
                                    <div class="text">Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</div>
                                    <ul class="info">
                                        <li><strong>Location:</strong> Texus, USA</li>
                                        <li><strong>Sallary:</strong> $2000</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 career-block">
                                <div class="inner-box">
                                    <div class="time">Full Time</div>
                                    <h3>UX Designer</h3>
                                    <div class="text">Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</div>
                                    <ul class="info">
                                        <li><strong>Location:</strong> Texus, USA</li>
                                        <li><strong>Sallary:</strong> $2000</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 career-block">
                                <div class="inner-box">
                                    <div class="time">Full Time</div>
                                    <h3>UX Designer</h3>
                                    <div class="text">Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</div>
                                    <ul class="info">
                                        <li><strong>Location:</strong> Texus, USA</li>
                                        <li><strong>Sallary:</strong> $2000</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 career-block">
                                <div class="inner-box">
                                    <div class="time">Full Time</div>
                                    <h3>Senior Consultant</h3>
                                    <div class="text">Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</div>
                                    <ul class="info">
                                        <li><strong>Location:</strong> Texus, USA</li>
                                        <li><strong>Sallary:</strong> $2000</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 career-block">
                                <div class="inner-box">
                                    <div class="time">Full Time</div>
                                    <h3>UI Designer</h3>
                                    <div class="text">Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</div>
                                    <ul class="info">
                                        <li><strong>Location:</strong> Texus, USA</li>
                                        <li><strong>Sallary:</strong> $2000</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 career-block">
                                <div class="inner-box">
                                    <div class="time">Full Time</div>
                                    <h3>UX Designer</h3>
                                    <div class="text">Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</div>
                                    <ul class="info">
                                        <li><strong>Location:</strong> Texus, USA</li>
                                        <li><strong>Sallary:</strong> $2000</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 career-block">
                                <div class="inner-box">
                                    <div class="time">Full Time</div>
                                    <h3>Content Writer</h3>
                                    <div class="text">Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</div>
                                    <ul class="info">
                                        <li><strong>Location:</strong> Texus, USA</li>
                                        <li><strong>Sallary:</strong> $2000</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 career-block">
                                <div class="inner-box">
                                    <div class="time">Full Time</div>
                                    <h3>Graphic Designer</h3>
                                    <div class="text">Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</div>
                                    <ul class="info">
                                        <li><strong>Location:</strong> Texus, USA</li>
                                        <li><strong>Sallary:</strong> $2000</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 career-block">
                                <div class="inner-box">
                                    <div class="time">Full Time</div>
                                    <h3>Software Engineer</h3>
                                    <div class="text">Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</div>
                                    <ul class="info">
                                        <li><strong>Location:</strong> Texus, USA</li>
                                        <li><strong>Sallary:</strong> $2000</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Services Section Five --> */}
                <section class="services-section-five gray-bg">
                    <div class="auto-container">
                    <Tab.Container defaultActiveKey="first">
                            <Nav className="nav-tabs tab-btn-style-one">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">
                                        <div class="icon-box">
                                            <div class="icon"><span class="flaticon-team"></span></div>
                                            <h5>Management</h5>
                                        </div>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">
                                        <div class="icon-box">
                                            <div class="icon"><span class="flaticon-money"></span></div>
                                            <h5>TAX Consume</h5>
                                        </div>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">
                                        <div class="icon-box">
                                            <div class="icon"><span class="flaticon-assets"></span></div>
                                            <h5>Finance & Strategy</h5>
                                        </div>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">
                                        <div class="icon-box">
                                            <div class="icon"><span class="flaticon-world"></span></div>
                                            <h5>Best Advice</h5>
                                        </div>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">
                                    <div class="icon-box">
                                        <div class="icon"><span class="flaticon-money-1"></span></div>
                                        <h5>Insurance</h5>
                                    </div>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="sixth">
                                        <div class="icon-box">
                                            <div class="icon"><span class="flaticon-notebook"></span></div>
                                            <h5>Criminal Case</h5>
                                        </div>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first" className=" fadeInUp animated">
                                    <div class="row align-items-center">
                                        <div class="col-lg-6">
                                            <div class="image"><img src={require('../../assets/images/resource/image-18.jpg')} alt=""/></div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="content pl-lg-4">
                                                <div class="sec-title">
                                                    <div class="sub-title">Get Rewards</div>
                                                    <h2>Just Proved Our Selves <br/>For Great Works.</h2>
                                                </div>
                                                <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</div>
                                                <div class="link-btn"><Link to={'/#'} class="theme-btn btn-style-one"><span class="btn-title">Learn More</span></Link></div>
                                            </div>                                
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second" className=" fadeInUp animated">
                                    <div class="row align-items-center">
                                        <div class="col-lg-6">
                                            <div class="image"><img src={require('../../assets/images/resource/image-18.jpg')} alt=""/></div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="content pl-lg-4">
                                                <div class="sec-title">
                                                    <div class="sub-title">Get Rewards</div>
                                                    <h2>Just Proved Our Selves <br/>For Great Works.</h2>
                                                </div>
                                                <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</div>
                                                <div class="link-btn"><Link to={'/#'} class="theme-btn btn-style-one"><span class="btn-title">Learn More</span></Link></div>
                                            </div>                                
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third" className=" fadeInUp animated">
                                    <div class="row align-items-center">
                                        <div class="col-lg-6">
                                            <div class="image"><img src={require('../../assets/images/resource/image-18.jpg')} alt=""/></div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="content pl-lg-4">
                                                <div class="sec-title">
                                                    <div class="sub-title">Get Rewards</div>
                                                    <h2>Just Proved Our Selves <br/>For Great Works.</h2>
                                                </div>
                                                <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</div>
                                                <div class="link-btn"><Link to={'/#'} class="theme-btn btn-style-one"><span class="btn-title">Learn More</span></Link></div>
                                            </div>                                
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth" className=" fadeInUp animated">
                                    <div class="row align-items-center">
                                        <div class="col-lg-6">
                                            <div class="image"><img src={require('../../assets/images/resource/image-18.jpg')} alt=""/></div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="content pl-lg-4">
                                                <div class="sec-title">
                                                    <div class="sub-title">Get Rewards</div>
                                                    <h2>Just Proved Our Selves <br/>For Great Works.</h2>
                                                </div>
                                                <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</div>
                                                <div class="link-btn"><Link to={'/#'} class="theme-btn btn-style-one"><span class="btn-title">Learn More</span></Link></div>
                                            </div>                                
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth" className=" fadeInUp animated">
                                    <div class="row align-items-center">
                                        <div class="col-lg-6">
                                            <div class="image"><img src={require('../../assets/images/resource/image-18.jpg')} alt=""/></div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="content pl-lg-4">
                                                <div class="sec-title">
                                                    <div class="sub-title">Get Rewards</div>
                                                    <h2>Just Proved Our Selves <br/>For Great Works.</h2>
                                                </div>
                                                <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</div>
                                                <div class="link-btn"><Link to={'/#'} class="theme-btn btn-style-one"><span class="btn-title">Learn More</span></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="sixth" className=" fadeInUp animated">
                                    <div class="row align-items-center">
                                        <div class="col-lg-6">
                                            <div class="image"><img src={require('../../assets/images/resource/image-18.jpg')} alt=""/></div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="content pl-lg-4">
                                                <div class="sec-title">
                                                    <div class="sub-title">Get Rewards</div>
                                                    <h2>Just Proved Our Selves <br/>For Great Works.</h2>
                                                </div>
                                                <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</div>
                                                <div class="link-btn"><Link to={'/#'} class="theme-btn btn-style-one"><span class="btn-title">Learn More</span></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </div>
                </section>

                {/* <!-- Services Section Two --> */}
                <section class="services-section-two services-section-careers">
                    <div class="auto-container">
                        <div class="wrapper-box">
                            <div class="left-column" style={{ backgroundImage: "url(" + touchbg + ")" }}>
                                <div class="sec-title light">
                                    <div class="sub-title">Get In Touch</div>
                                    <h2>Get Us Here Or <br/> Share Details</h2>
                                </div>
                                {/* <!-- Contact Form--> */}
                                <div class="contact-form">
                                    <form method="post" action="http://azim.commonsupport.com/Finandox/sendemail.php" id="contact-form">
                                        <div class="row clearfix">                                    
                                            <div class="col-md-12 form-group">
                                                <input type="text" name="username" placeholder="Enter name here......" required=""/>
                                                <i class="fas fa-user"></i>
                                            </div>
                                            
                                            <div class="col-md-12 form-group">
                                                <input type="email" name="email" placeholder="Enter email here......" required=""/>
                                                <i class="fas fa-envelope"></i>
                                            </div>
                    
                                            <div class="col-md-12 form-group">
                                                <textarea name="message" placeholder="Enter message here......"></textarea>
                                                <i class="fas fa-edit"></i>
                                            </div>
                    
                                            <div class="col-md-12 form-group">
                                                <button class="theme-btn btn-style-one" type="submit" name="submit-form"><span class="btn-title">Get In Touch</span></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="right-column">
                                <div class="services-content">
                                    <div class="sec-title">
                                        <div class="sub-title">Our Services</div>
                                        <h2>What Actually We <br/>Do Here.</h2>
                                    </div>
                                    <div class="icon-box">
                                        <div class="icon"><img src={require('../../assets/images/icons/icon-3.png')} alt=""/></div>
                                        <h2>Capital Market</h2>
                                        <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                                    </div>
                                    <div class="icon-box">
                                        <div class="icon"><img src={require('../../assets/images/icons/icon-4.png')} alt=""/></div>
                                        <h2>Insurance & Planning</h2>
                                        <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                                    </div>
                                    <div class="icon-box">
                                        <div class="icon"><img src={require('../../assets/images/icons/icon-5.png')} alt=""/></div>
                                        <h2>Financial Strategy</h2>
                                        <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Sponsors Section --> */}
                
                <Brand1/>



                <Footer />
            </>
        )
    }
}
export default Careers;