import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <>
                <footer class="main-footer">
                    <div class="auto-container">

                        <div class="widgets-section">
                            <div class="row clearfix">


                                <div class="column col-lg-4">
                                    <div class="footer-widget logo-widget">
                                        <div class="widget-content">
                                            <div class="footer-logo">
                                                <Link to="index.html"><img class="" src={require('../../assets/images/footer-logo.png')} alt="" /></Link>
                                            </div>
                                            <div class="text">Part of the DH Group, Asquire Global Wealth offers unlimited access to Global Investment Products. Our long-standing affiliation with our global partners, in-depth analysis of the products we align with, and above all, our ability to support our clients round the clock establishes us as our client's partner of choice for all their International Investment needs.</div>
                                            <ul class="social-links clearfix">
                                                <li><Link to={'/#'}><span class="fab fa-facebook-f"></span></Link></li>
                                                <li><a href ="https://www.linkedin.com/company/asquire-global-wealth/"><span class="fab fa-linkedin"></span></a></li>
                                                <li><Link to={'/#'}><span class="fab fa-youtube"></span></Link></li>
                                                <li><Link to={'/#'}><span class="fab fa-instagram"></span></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>


                                <div class="column col-lg-4">
                                    <div class="footer-widget links-widget">
                                        <div class="widget-content">
                                            <h3>Links</h3>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <ul>
                                                    <li><Link to={'/index-2'}>Home</Link></li>
                                                    <li><Link to={'/about'}>About</Link></li>
                                                    <li><Link to={'/#'}>Services</Link></li>
                                                    <li><Link to={'/investment'}>Investments</Link></li>
                                                    <li><Link to={'/pensions'}>Pensions</Link></li>
                                                    <li><Link to={'/contact'}>Contact</Link></li>
                                                    </ul>
                                                </div>
                                                <div class="col-md-6">
                                                    <ul>
                                                    <li><Link to={'/#'}>News</Link></li>
                                                    <li><Link to={'/#'}>Press Release</Link></li>
                                                    <li><Link to={'/#'}>Case Study</Link></li>
                                                    <li><Link to={'/#'}>Terms</Link></li>
                                                    <li><Link to={'/#'}>Privacy</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div class="column col-lg-4">
                                    <div class="footer-widget instagram-widget">
                                        <h3>Photo Showcase</h3>
                                        <div class="inner-box">
                                            <div class="wrapper-box">
                                                <div class="image">
                                                    <img class="lazy-image owl-lazy" src={require('../../assets/images/gallery/gallery-1.jpg')} alt="" />
                                                    
                                                    <div class="overlay-link"><Link to={'/assets/images/gallery/gallery-1.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div class="image">
                                                    <img class="lazy-image owl-lazy" src={require('../../assets/images/gallery/gallery-2.jpg')} alt="" />
                                                    <div class="overlay-link"><Link to={'/assets/images/gallery/gallery-2.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div class="image">
                                                    <img class="lazy-image owl-lazy" src={require('../../assets/images/gallery/gallery-3.jpg')} alt="" />
                                                    <div class="overlay-link"><Link to={'/assets/images/gallery/gallery-3.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div class="image">
                                                    <img class="lazy-image owl-lazy" src={require('../../assets/images/gallery/gallery-4.jpg')} alt="" />
                                                    <div class="overlay-link"><Link to={'/assets/images/gallery/gallery-4.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div class="image">
                                                    <img class="lazy-image owl-lazy" src={require('../../assets/images/gallery/gallery-5.jpg')} alt="" />
                                                    <div class="overlay-link"><Link to={'/assets/images/gallery/gallery-5.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div class="image">
                                                    <img class="lazy-image owl-lazy" src={require('../../assets/images/gallery/gallery-6.jpg')} alt="" />
                                                    <div class="overlay-link"><Link to={'/assets/images/gallery/gallery-6.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div class="image">
                                                    <img class="lazy-image owl-lazy" src={require('../../assets/images/gallery/gallery-7.jpg')} alt="" />
                                                    <div class="overlay-link"><Link to={'/assets/images/gallery/gallery-7.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div class="image">
                                                    <img class="lazy-image owl-lazy" src={require('../../assets/images/gallery/gallery-8.jpg')} alt="" />
                                                    <div class="overlay-link"><Link to={'/assets/images/gallery/gallery-8.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div class="image">
                                                    <img class="lazy-image owl-lazy" src={require('../../assets/images/gallery/gallery-9.jpg')} alt="" />
                                                    <div class="overlay-link"><Link to={'/assets/images/gallery/gallery-9.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div class="auto-container">
                        <div class="footer-bottom">
                            <div class="copyright">Copyright By<Link to={'/#'}>Webtend</Link> - 2020</div>
                        </div>
                    </div>
                </footer>


            </>
        );
    }
}

export default Footer;