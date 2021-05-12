import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layout/navbar';
import Pensionp from '../layout/pensionp';
import Footer from '../layout/footer';
import '../../assets/css/color-2.css';
// import ProgressBar from 'react-bootstrap/ProgressBar'

import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const counterbg1 = require('./../../assets/images/background/image-5.jpg');
const touchbg = require('./../../assets/images/background/image-8.jpg');




class Uaepensiontransfer extends Component {


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
                                        <div class="sub-title">UAE Pension Scheme</div>
                                        <h2>Gratuity that grows</h2>
                                        <p><strong>Most businesses have a workplace pension scheme in the UK, and this type of scheme is becoming more popular overseas.</strong></p>
                                        <p>It’s a great incentive to attract and retain staff by rewarding them with a contribution (equal to a percentage of their salary) into a scheme, or adding a bonus to their fund, alongside optional contributions from staff members.</p> 
                                        

                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>


                </div>

            </section>



                <Footer />
            </>
        )
    }
}
export default Uaepensiontransfer ;