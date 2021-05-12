import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header';
import Footer from '../layout/footer';


const aboutbg = require('./../../assets/images/background/image-11.jpg');



class Error404 extends Component {


    render() {
        return (
            <>
                <Header />

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


                <section class="page-banner">
                    <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
                    <div class="bottom-rotten-curve alternate"></div>

                    <div class="auto-container">
                        <h1>404</h1>
                        <ul class="bread-crumb clearfix">
                            <li><Link to={'/#'}>Home</Link></li>
                            <li class="active">404</li>
                        </ul>
                    </div>

                </section>

                {/* Error Page */}
                <section class="error-section">
                    <div class="auto-container">
                        <div class="inner-section">
                            <h1>404</h1>
                            <h2>OOPPS! THE PAGE YOU WERE LOOKING FOR, COULDN'T BE FOUND.</h2>
                            <div class="text">Try the search below to find matching pages:</div>
                            
                            {/* Search */}
                            <div class="error-search-form">
                                <form method="post" action="http://azim.commonsupport.com/Finandox/contact.html">
                                    <div class="form-group">
                                        <input type="search" name="search-field" value="" placeholder="Search..." required=""/>
                                        <button type="submit"><span class="icon fas fa-search"></span></button>
                                    </div>
                                </form>
                            </div>
                            
                        </div>
                    </div>
                </section>

	            {/* Error Page */}

                <Footer />

            </>
        )
    }
}
export default Error404;