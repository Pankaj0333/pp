import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layout/navbar';
import Footer from '../layout/footer';
import '../../assets/css/color-2.css';
// import ProgressBar from 'react-bootstrap/ProgressBar'
import Investp from '../layout/investp';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const counterbg1 = require('./../../assets/images/background/image-5.jpg');
const touchbg = require('./../../assets/images/background/image-8.jpg');




class Investingforchildren extends Component {


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
                  <Investp />
                </div>
                <div class="col-lg-8" style={{ marginTop: "11px" }}>
                  {/* <!-- About Section Two --> */}
                  <section class="about-section-two">
                    <div class="auto-container">
                      <div class="row ">
                        <div class="col-lg-12">
                          <div
                            class="content-box wow fadeInUp"
                            data-wow-delay="200ms"
                            data-wow-duration="1200ms"
                          >
                            <div class="sec-title">
                            <div class="sub-title">Investing For Children</div>
                                        <h2>Give your child a head start in life</h2>
                                        <p>Investing some time into a little bit of planning can help you to build strong financial foundations that will support you through all of life’s adventures. Providing a good education for your children is the best gift that you can give, however it doesn't come cheaply. By planning for their further education early, saving to fund their university fees becomes much easier.</p>
                                        <h3>Education fee planning in the UAE</h3>
                                        <p>UK expat children returning home to university often incur inflated international tuition fees and are denied access to government sponsored financial support. However, budgeting for your child’s educational needs doesn’t have to be daunting, especially if you’re realistic about your financial situation and plan well in advance.</p>
                                        <p>We will help you to understand what time scale, costs and commitment are required for education fee planning, and help you to save for various levels of education, in the UK and overseas. We’ll help you implement a tax efficient plan, tailored to your specific circumstances and goals.</p>
                                        <h3>Regular savings</h3>
                                        <p>Investing on a regular basis is an easier way to build up a substantial pot of money for your child. The key benefit of a regular savings plan is what’s called ‘dollar cost averaging’. With regular savings, fluctuating markets allow investors to purchase more units when the prices are low so when the investment regains lost ground, the units will be worth much more.</p>
                                        <p>Investing for a child also means you have a lot of time. Starting early ensures you will benefit from the effects of compound interest.</p> 
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
export default Investingforchildren ;