import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Tab, } from 'react-bootstrap';
import Header from '../layout/header'
import Footer from '../layout/footer'
import Brand1 from '../element/brand1'
import ServiceFilter1 from '../element/service-filter1'

const aboutbg = require('./../../assets/images/background/image-11.jpg');

class Services2 extends Component {


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
                        <h1>Our Services</h1>
                        <ul class="bread-crumb clearfix">
                            <li><Link to={'/#'}>Home</Link></li>
                            <li class="active">Services</li>
                        </ul>
                    </div>

                </section>
                {/* <!--End Banner Section --> */}


                {/* <!-- Services Section Five --> */}
                <section class="services-section-five">
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

                {/* <!-- Gallery Section --> */}
                <ServiceFilter1/>

                {/* <!-- Sponsors Section --> */}

                <Brand1/>




                 
                 <Footer/>
            </>
        )
    }
}
export default Services2;