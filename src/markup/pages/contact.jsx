import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layout/navbar'
import Footer from '../layout/footer'
import GoogleMaps from "simple-react-google-maps";

const aboutbg = require('./../../assets/images/background/image-11.jpg');




class Contact extends Component {


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
                                        <input type="submit" value="Search Now!" class="theme-btn"/>
                                    </fieldset>
                                </div>
                            </form>
                            <br/>
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
           <section class="services-section-three style-two">
                  <div class="auto-container">
                     <div class="row">
                        {/* <!-- Services Block One --> */}
                        <div class="service-block-one1 col-lg-12">
                            <div class="inner-box">
                               
                                <h2>Contact our UAE offices</h2>
                                <div class="text"><p>If you're an existing client of Globaleye, please visit the client area.</p>.
                                <p>For all other enquiries, please message us using the contact form below or talk to us on live chat.</p>    
                                
                                </div>
                            </div>
                        </div>
                   </div>
                </div>
                
                
                </section>


                {/* <!-- Map Section --> */}
                {/* <!-- Map Section --> */}
                <section class="map-section">
                    <div class="map-column">
                        <GoogleMaps
                            apiKey={"AIzaSyBQ5y0EF8dE6qwc03FcbXHJfXr4vEa7z54"}
                            style={{ height: "800px", width: "100%" }}
                            zoom={12}
                            center={{ lat: 37.4224764, lng: -122.0842499 }}
                            markers={{ lat: 37.4224764, lng: -122.0842499 }} //optional
                        />
                    </div>
                </section>

                {/* <!-- Contact Section Two --> */}






                <Footer />
            </>
        )
    }
}
export default Contact;