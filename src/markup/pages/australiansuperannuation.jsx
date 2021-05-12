import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../layout/footer';
import Pensionp from '../layout/pensionp';
import '../../assets/css/color-2.css';
// import ProgressBar from 'react-bootstrap/ProgressBar'

import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import Navbar from '../layout/navbar';

const counterbg1 = require('./../../assets/images/background/image-5.jpg');
const touchbg = require('./../../assets/images/background/image-8.jpg');




class Australiansuperannuation extends Component {


    render() {
        return (
            <>
                <Navbar />


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



                {/* <!-- Feature Section --> */}

                {/* <!-- About Section Two --> */}
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
                                        <div class="sub-title">Australian Pension Scheme</div>
                                        <h2>Contributing into an Australian Superannuation in the UAE</h2>
                                        <p>As an Australian expat in the UAE, it is possible to contribute into your Superannuation whilst living and working here. If you would like to speak to an Australian-qualified financial planner, please feel free to contact us for a complimentary discovery meeting.</p>
                                        <p> </p>
                                        <h3>Are there offshore options that are equivalent or better than a Super?</h3>
                                        <p><span>Yes, there are investment options that have very advantageous tax benefits and in most cases, are more efficient than a Superannuation for Australians living abroad. These investment vehicles will also allow regular payments where you can invest to make sure you are saving as much as you would be if working in Australia.</span></p>
  
                                         

                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>


                </div>

            </section>



                {/* <!-- Funfacts Section --> */}




                <Footer />
            </>
        )
    }
}
export default Australiansuperannuation ;