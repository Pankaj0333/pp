

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../layout/footer'
import About1 from '../element/about1'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Investp from '../layout/investp';
// import Header2 from '../layout/header2';
import Navbar from '../layout/navbar';
{/*import ServiceFilter1 from '../element/service-filter1'*/}

const aboutbg = require('./../../assets/images/background/image-11.jpg');
// const casebg = require('./../../assets/images/background/image-14.jpg');
const helpbg = require('./../../assets/images/background/image-18.jpg');
const percentage1 = 80;

class investment extends Component {


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
                <Investp />
            </div>
        <div class="col-lg-8">
                <section class="services-section-three style-two">
                    <div class="auto-container">
                        <div class="row">
                            {/* <!-- Services Block One --> */}
                            <div class="service-block-one1 col-lg-12">
                                <div class="inner-box">
                               
                                 <h2>Investments in the India</h2>
                                    <div class="text"><p>Choosing the best investment plan in the UAE needn’t be complicated. Think of Globaleye as a user-friendly platform that connects you with a comprehensive range of investments, funds, ETFs, and managed portfolio options, via a team of highly accredited financial experts</p>.
                                        <p>Together with our eminent global partnerships, we bring you the tools, knowledge and research analysis to help you capitalise on global investment opportunities. Whether you’re an expat starting out on the road to investing, or a high net worth individual, our specialist advisers will help you to set out your goals and objectives, then build a bespoke investment plan that suits you.</p>    
                                        <p>For advice on investments in the UAE, contact our <a title="Contact" href="/contact/" target="_blank">Dubai</a> or <a title="Contact" href="/contact/" target="_blank">Abu Dhabi</a> branches.</p>
                                        <p><strong>The value of investments can go down as well as up and you may not recover the amount of your original investment</strong></p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </div>
            {/* <!-- Pankaj  --> */}
           
    </section>

                {/* <!-- Services Section Three --> */}
                           
                      

                
              <About1/>
                {/* <!-- Case Studies --> */}
                {/*<ServiceFilter1 />*/}


                <Footer />
            </>
        )
    }
}
export default investment;