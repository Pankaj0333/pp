import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'

const aboutbg = require('./../../assets/images/background/image-11.jpg');

class PortfolioDetails extends Component {


    render() {
        return (
            <>
                <Header/>
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
                <section class="page-banner">
                    <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
                    <div class="bottom-rotten-curve alternate"></div>

                    <div class="auto-container">
                        <h1>Portfolio Details</h1>
                        <ul class="bread-crumb clearfix">
                            <li><Link to={'/#'}>Home</Link></li>
                            <li class="active">Portfolio Details</li>
                        </ul>
                    </div>

                </section>
                {/* <!--End Banner Section --> */}

                {/* <!-- Portfolio Details --> */}
                <div class="portfolio-details">
                    <div class="auto-container">
                        <div class="top-content">
                            <div class="image-box"><img src={require('../../assets/images/resource/image-15.jpg')} alt=""/></div>
                            <div class="single-project-info">
                                <h3>Project Details</h3>
                                <ul>
                                    <li> </li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                                <table class="cart-table">
                                    <tbody>
                                        <tr>
                                            <td><strong>Project Name:</strong></td>
                                            <td>Brixer Consultancy</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Date:</strong></td>
                                            <td>24th March 2020</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Author:</strong></td>
                                            <td>Rosalina D. William</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Keyword:</strong></td>
                                            <td>Business, Consultancy</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <ul class="social-links clearfix">
                                    <li><Link to={'/#'}><span class="fab fa-facebook-f"></span></Link></li>
                                    <li><Link to={'/#'}><span class="fab fa-twitter"></span></Link></li>
                                    <li><Link to={'/#'}><span class="fab fa-vimeo-v"></span></Link></li>
                                    <li><Link to={'/#'}><span class="fab fa-instagram"></span></Link></li>
                                </ul>
                            </div>
                        </div>
                            
                        <div class="sec-title">
                            <div class="sub-title">Consulting Business</div>
                            <h2>We Support Our Clients <br/>Five Working Days.</h2>
                        </div>
                        <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa. </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="image-box"><img src={require('../../assets/images/resource/image-16.jpg')} alt=""/></div>
                            </div>
                            <div class="col-lg-6">
                                <div class="image-box"><img src={require('../../assets/images/resource/image-17.jpg')} alt=""/></div>
                            </div>
                        </div>
                        <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa. </div>
                        <div class="project-post-pagination">
                            <div class="wrapper-box">
                                
                                <div class="prev-post">
                                    <h5> Previous Post</h5>
                                    <h4>UX Design Means</h4>
                                </div>

                                <div class="page-view"><span class="icon fal fa-bars"></span></div>
                                
                                <div class="next-post">
                                    <h5>Next Topic </h5>
                                    <h4>Business Goal Brings</h4>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>



                <Footer/>
            </>
        )
    }
}
export default PortfolioDetails;