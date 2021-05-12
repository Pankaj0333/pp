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




    class Ukpensiontransfer extends Component {


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
                                            <div class="sub-title">UK Pension Scheme</div>
                                            <h2>Transfer UK pension in Dubai</h2>
                                            <p>Many expats have pensions scattered around the world. As you approach retirement, it’s a good idea to consolidate these pensions, so that you know exactly what you have.</p>
                                            <p>A detailed review of your pension will help you to identify any tax issues and legislation changes that may affect your over-all retirement fund.</p>
                                            <p>By having a greater understanding of your pension options, you’ll also be able to make adjustments such as; avoiding various taxes, choosing to pass it onto beneficiaries tax-free; or getting earlier access to your pension pot.</p>
                                            <p>To find out how to transfer UK pensions in Dubai or the UAE, speak to one of our advisers. </p> 
                                            
                                             
    
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
    export default Ukpensiontransfer ;