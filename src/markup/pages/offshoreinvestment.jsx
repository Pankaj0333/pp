import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbvar from '../layout/navbar';
import Footer from '../layout/footer';
import '../../assets/css/color-2.css';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Investp from '../layout/investp';


import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const counterbg1 = require('./../../assets/images/background/image-5.jpg');
const touchbg = require('./../../assets/images/background/image-8.jpg');

console.log(window.location.pathname);


class Offshoreinvestment extends Component {


    render() {
        return (
            <>
                <Navbvar />


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
                <section class="main-container">
                    <div class="col-lg-4">
                        <Investp />
                    </div>
                    <div class="col-lg-8" style={{marginTop:'11px'}}>

                        {/* <!-- About Section Two --> */}
                        <section class="about-section-two">
                              <div class="auto-container">
                                <div class="row ">
                                    <div class="col-lg-12">
                                        <div class="content-box wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                            <div class="sec-title">
                                            <div class="sub-title">RegularSaving</div>
                                            <h3>Saving money in the UAE
                                            </h3>
                                            <p>When looking at your financial planning, one of the first questions you’ll ask is how to save money in the UAE. We’re here to help you understand your options and create a plan that’s right for you.</p>
                                            <h3>Keeping a rainy day fund</h3>
                                            <p>The first savings account that should be considered is an emergency fund. This is a small cash reserve, kept in an instant access account and as a rule of thumb it is usually 3-6 months’ salary.</p>
                                            <h3>Saving on a regular basis</h3>
                                            <p>Saving on a regular basis is an easier way to build up a substantial pot of money, but it requires some discipline. The key benefit of a regular savings plan is what’s called ‘dollar cost averaging’. With regular savings, fluctuating markets allow investors to purchase more units when the prices are low so when the investment regains lost ground, the units will be worth much more. </p>
                                            <p>The earlier you start saving, the more you will benefit from the effects of compound interest.</p>
                                            <p>As we’re unbiased, we’re able to help you find the best savings account in UAE for your specific needs, whether it be for a child or a retirement savings plan.</p>
                                            <p> </p>
                                            <p><strong>The value of investments can go down as well as up and you may not recover the amount of your original investment</strong></p>  
     
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
export default Offshoreinvestment;