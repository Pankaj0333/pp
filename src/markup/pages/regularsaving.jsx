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

console.log(window.location.pathname);


class Regularsaving extends Component {


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
                <div class="col-lg-8" style={{marginTop:'11px'}}>

                    {/* <!-- About Section Two --> */}
                    <section class="about-section-two">
                          <div class="auto-container">
                            <div class="row ">
                                <div class="col-lg-12">
                                    <div class="content-box wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                        <div class="sec-title">
                                            <div class="sub-title">Offshoreinvestment</div>
                                            <h2>Capitalise on your wealth</h2>
                                            <p><strong><span>If you're going to take full advantage of your expat status, you should be investing offshore as soon as the opportunity arises. </span></strong></p>
                                            <p>We offer an extensive range of investment opportunities in the UAE including bonds, funds and ETFs, all of which give you exposure in economies around the world. </p>
                                            <h3>Lump sum collective investments</h3>
                                            <p>A ‘collective’ investment is a medium to long-term investment which gives you access to a range of funds from many different areas such as shares, property, equities and government/corporate bonds.</p>
                                            <p>It works by pooling your money with the cash of other investors, so that a fund is created. The fund can be designed for income, capital growth or a mix of both and is usually regulated by independent auditors.</p>
                                            <p>We’re connected with specialist teams that manage these types of funds. They buy and sell individual proponents of the fund on an almost daily basis and use their expertise to aim for specific targets.</p>
                                            <h3>Offshore bonds</h3>
                                            <p>Investing in bonds that are provided by life insurance companies comes with a number of benefits.</p>
                                            <p>With this type of bond, all administration of the funds is collated in one place. Life companies are able to purchase funds at a greatly reduced cost. They also have more capability to mitigate some taxes, for example Capital Gains Tax when you transfer between collectives, or Inheritance Tax.</p>
                                            <h3>Offshore pensions</h3>
                                            <p>When you become an expat, you can potentially use your offshore status to capitalise on your pension fund and any other benefits you may be entitled to.</p>
                                            <p>If you already have a pension and you’re not planning to go home before you become eligible to draw your pension, your expat status grants you eligibility for some unique opportunities, such as nil tax on your assets and a tax-free lump sum of up to 30%.</p>
                                            <p>To find out more about pension plans in the UAE, speak to one of our advisers today.</p>
                                            <h3>Offshore bank account</h3>
                                            <p>When you become an expat in the UAE, you need to be able to manage your finances at home and abroad.</p>
                                            <p>As well as keeping your bank account open in your home country, it is a good idea to open an offshore bank account to ensure you have a safe place to deposit your funds, giving you easy access to your currency, at home and overseas.</p>
                                            <p>Rather than trawling the internet with searches of <strong>offshore banking UAE</strong>, we can take care of it for you.</p>
                                            <p>We have links to three main offshore jurisdictions, including the Isle of Man, Jersey and Guernsey, all of which are fully regulated with global access, inheritance free and government protected. We offer you all the support you need to help you manage your finances and understand tax regulations. </p><p><strong>The value of investments can go down as well as up and you may not recover the amount of your original investment</strong></p>



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
export default Regularsaving ;