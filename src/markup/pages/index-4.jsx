import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header4 from '../layout/header4'
import HomeSlider4 from '../element/home-slider4';
import Footer from '../layout/footer'
import Testimonial3 from '../element/testimonial3'
import Brand1 from '../element/brand1'
import VideoPopup3 from '../element/video-popup3'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const mapbg2 = require('./../../assets/images/shape/pattern-1.png');

const percentage1 = 80;
const percentage2 = 90;
const percentage3 = 60;
const percentage4 = 85;



class Index4 extends Component {


    render() {
        return (
            <>
                <Header4 />

                <HomeSlider4 />



                {/* <!-- Services Section Three --> */}
                <section class="services-section-three p-0 style-two ">
                    <div class="auto-container">
                        <div class="wrapper-box">
                            <div class="row">
                                {/* <!-- Services Block One --> */}
                                <div class="service-block-one col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="inner-box">
                                        <div class="icon"><span class="flaticon-assets"></span><span class="round-shape"></span></div>
                                        <h3>Business/Family Loan</h3>
                                        <div class="text">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</div>
                                    </div>
                                </div>
                                {/* <!-- Services Block One --> */}
                                <div class="service-block-one col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="inner-box">
                                        <div class="icon"><span class="flaticon-life-insurance"></span><span class="round-shape"></span></div>
                                        <h3>Life/Car Insurance</h3>
                                        <div class="text">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</div>
                                    </div>
                                </div>
                                {/* <!-- Services Block One --> */}
                                <div class="service-block-one col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="inner-box">
                                        <div class="icon"><span class="flaticon-consulting"></span><span class="round-shape"></span></div>
                                        <h3>Business Consultancy</h3>
                                        <div class="text">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- About Section Two --> */}
                <section class="about-section-two">
                    <div class="auto-container">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <div class="image-wrapper">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/resource/image-14.jpg')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="content-box style-two">
                                    <div class="sec-title">
                                        <div class="sub-title">About Us</div>
                                        <h2>We Work With <br />You To Address</h2>
                                        <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</div>
                                    </div>
                                    <div class="lower-content">
                                        <ul class="list-box">
                                            <li><i class="fa fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
                                            <li><i class="fa fa-check"></i>Sed do eiusmod tempor incididunt ut labore et dolore</li>
                                            <li><i class="fa fa-check"></i>Magna aliqua. Ut enim ad minim veniam, quis nostrud.</li>
                                        </ul>
                                        <div class="link-btn"><Link to={'/#'} class="theme-btn btn-style-one"><span class="btn-title">Learn More</span></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Case Studies Two --> */}
                <section class="cases-section-two">

                    <div class="auto-container">
                        <div class="sec-title text-center">
                            <div class="sub-title">Portfolio</div>
                            <h2>Case Study</h2>
                        </div>
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="image">
                                    <Link data-fancybox="example gallery" to={require('../../assets/images/gallery/gallery-27.jpg')} class="zoom-btn"><img src={require('../../assets/images/gallery/gallery-27.jpg')} alt="" /></Link>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="image">
                                    <Link data-fancybox="example gallery" to={require('../../assets/images/gallery/gallery-28.jpg')} class="zoom-btn"><img src={require('../../assets/images/gallery/gallery-28.jpg')} alt="" /></Link>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="image">
                                    <Link data-fancybox="example gallery" to={require('../../assets/images/gallery/gallery-29.jpg')} class="zoom-btn"><img src={require('../../assets/images/gallery/gallery-29.jpg')} alt="" /></Link>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="image">
                                    <Link data-fancybox="example gallery" to={require('../../assets/images/gallery/gallery-30.jpg')} class="zoom-btn"><img src={require('../../assets/images/gallery/gallery-30.jpg')} alt="" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Counter --> */}
                <section class="counter-section">
                    <div class="pattern-bg" style={{ backgroundImage: "url(" + mapbg2 + ")" }}></div>
                    <div class="auto-container">
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="progress-block">
                                    <div class="inner-box">
                                        <CircularProgressbar value={percentage1} text={`${percentage1}%`} />;
                                    </div>
                                    <div class="counter-title">Client Satifaction</div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="progress-block">
                                    <div class="inner-box">
                                        <CircularProgressbar value={percentage2} text={`${percentage2}%`} />;
                                    </div>
                                    <div class="counter-title">Cup Of Coffee</div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="progress-block">
                                    <div class="inner-box">
                                        <CircularProgressbar value={percentage3} text={`${percentage3}%`} />;
                                    </div>
                                    <div class="counter-title">Team Member</div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="progress-block">
                                    <div class="inner-box">
                                        <CircularProgressbar value={percentage4} text={`${percentage4}%`} />;
                                    </div>
                                    <div class="counter-title">Get Awards</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Services Section Four --> */}
                <section class="services-section-four style-two">
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

                <VideoPopup3 />

                <Testimonial3 />


                <Brand1 />



                {/* <!-- News Section --> */}
                <section class="news-section gray-bg">
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


                <Footer />
            </>
        )
    }
}
export default Index4;