

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layout/navbar'
import Footer from '../layout/footer'
import About1 from '../element/about1'
import Pensionp from '../layout/pensionp';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

{/*import ServiceFilter1 from '../element/service-filter1'*/}

const aboutbg = require('./../../assets/images/background/image-11.jpg');
// const casebg = require('./../../assets/images/background/image-14.jpg');
const helpbg = require('./../../assets/images/background/image-18.jpg');
const percentage1 = 80;

class pensions extends Component {


    render() {
        return (
            <>
                <Navbar />

              

               {/* <ul class="enquiry-container">

                    <li class="toggle-menu menu-left push-body jPushMenuBtn showMeetingForm">
                        <a href="#" title="Book Meeting!">Book Meeting</a> </li>

                </ul>*}
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

              
                {/* <!-- Page Banner Section --> */}
                {/* <!--End Banner Section --> */}

                <section class="main-container">
                <div class="col-lg-4">
                    <Pensionp />
                </div>
                <div class="col-lg-8" style={{marginTop:'11px'}}>

                    {/* <!-- About Section Two --> */}
                    <section class="about-section-two">
                          <div class="auto-container">
                            <div class="row ">
                                <div class="col-lg-12">
                                    <div class="content-box wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                        <div class="sec-title">
                                            <div class="sub-title">Pensions</div>
                                            <h2>Pension planning in the UAE</h2>
                                            <p><strong>Whether you’re in the early stages of pension planning or you’re approaching retirement, we’re here to help you navigate the right path to reach your goals. </strong></p>
                                            <p>It’s important to be clear how much savings you will require to ensure you have sufficient funds when you slow down or stop working. We take a two-tiered approach to planning your post-working future – one that caters towards your desires and dreams and one that takes into account your needs, should anything unexpected happen.</p>
                                            <p>Our straightforward guidance and investment partnerships are geared specifically towards the needs of expats – we are here to help you navigate complex issues such as tax, pension transfers and repatriation.  </p>
                                           

                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>


                </div>

            </section>


                {/* <!-- Pankaj --> */}
                             {/* <!-- Services Section Three --> */}
                           
               
                
              <About1/>
                {/* <!-- Case Studies --> */}
                {/*<ServiceFilter1 />*/}


                <Footer />
            </>
        )
    }
}
export default pensions;