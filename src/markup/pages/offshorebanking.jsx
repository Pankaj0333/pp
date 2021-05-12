import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layout/navbar';
import Footer from '../layout/footer';
import Investp from '../layout/investp';
import '../../assets/css/color-2.css';
// import ProgressBar from 'react-bootstrap/ProgressBar'

import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const counterbg1 = require('./../../assets/images/background/image-5.jpg');
const touchbg = require('./../../assets/images/background/image-8.jpg');




class Offshorebanking extends Component {


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
                            <div class="sub-title">Offshore Banking</div>
                    <h2>Offshore banking in Dubai</h2>
                    <p>When you move to the UAE, one of the first things you need to sort out is where you will bank. It is, of course, the first step towards finding a safe place for your regular income or your salary and a place where access to your funds is simple and effective. Yet the location of the respective cashpoint nearest to your home or work is not all you need to consider.</p>
                    <p>How will your salary or income be paid? What currency will it be paid in? Will there be several currencies coming in? Indeed, there may be several currencies that you need to use for actually making payments from your bank account. Also, what are the account set-up requirements, as these can vary from country to country?</p>
                    <p>If you’d like help setting up an offshore bank account in Dubai, speak to one of our advisers today.</p>
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
export default Offshorebanking ;