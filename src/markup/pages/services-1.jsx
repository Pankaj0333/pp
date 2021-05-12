import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'
import ServiceFilter1 from '../element/service-filter1'


const aboutbg = require('./../../assets/images/background/image-11.jpg');
// const casebg = require('./../../assets/images/background/image-14.jpg');

class Services1 extends Component {


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
                        <h1>What We Do</h1>
                        <ul class="bread-crumb clearfix">
                            <li><Link to={'/#'}>Home</Link></li>
                            <li class="active">Services</li>
                        </ul>
                    </div>

                </section>
                {/* <!--End Banner Section --> */}


                {/* <!-- Services Section Three --> */}
                <section class="services-section-three style-two">
                    <div class="auto-container">
                        <div class="row">
                            {/* <!-- Services Block One --> */}
                            <div class="service-block-one col-lg-4">
                                <div class="inner-box">
                                    <div class="icon"><span class="flaticon-team"></span><span class="round-shape"></span></div>
                                    <h3>Business Management</h3>
                                    <div class="text">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</div>
                                </div>
                            </div>
                            {/* <!-- Services Block One --> */}
                            <div class="service-block-one col-lg-4">
                                <div class="inner-box">
                                    <div class="icon"><span class="flaticon-money"></span><span class="round-shape"></span></div>
                                    <h3>Criminal Case</h3>
                                    <div class="text">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</div>
                                </div>
                            </div>
                            {/* <!-- Services Block One --> */}
                            <div class="service-block-one col-lg-4">
                                <div class="inner-box">
                                    <div class="icon"><span class="flaticon-assets"></span><span class="round-shape"></span></div>
                                    <h3>Property Planning</h3>
                                    <div class="text">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</div>
                                </div>
                            </div>
                            {/* <!-- Services Block One --> */}
                            <div class="service-block-one col-lg-4">
                                <div class="inner-box">
                                    <div class="icon"><span class="flaticon-world"></span><span class="round-shape"></span></div>
                                    <h3>Transport & Export</h3>
                                    <div class="text">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</div>
                                </div>
                            </div>
                            {/* <!-- Services Block One --> */}
                            <div class="service-block-one col-lg-4">
                                <div class="inner-box">
                                    <div class="icon"><span class="flaticon-money-1"></span><span class="round-shape"></span></div>
                                    <h3>Saving Tax</h3>
                                    <div class="text">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</div>
                                </div>
                            </div>
                            {/* <!-- Services Block One --> */}
                            <div class="service-block-one col-lg-4">
                                <div class="inner-box">
                                    <div class="icon"><span class="flaticon-notebook"></span><span class="round-shape"></span></div>
                                    <h3>Growth Business</h3>
                                    <div class="text">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Case Studies --> */}
                <ServiceFilter1/>


                 <Footer/>
            </>
        )
    }
}
export default Services1;