import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Select from 'react-select'

const options = [
    { value: 'English', label: 'English' },
    { value: 'French', label: 'French' },
    { value: 'Spanish', label: 'Spanish' },
    { value: 'Bengli', label: 'Bengli' }
  ]



class Header5 extends Component {

    render() {
        return (
            <>

                {/* <!-- Main Header --> */}
                <header class="main-header">
                    {/* <!-- Header Top --> */}
                    <div class="header-top">
                        <div class="auto-container">
                            <div class="inner">
                                <div class="top-left">
                                    {/* <!--Logo--> */}
                                    <div class="logo-box">
                                        <div class="logo"><Link to={'/#'}><img src={require('../../assets/images/logo.png')} alt=""/></Link></div>
                                    </div>
                                </div>

                                <div class="top-middile">
                                    <div class="language">
                                        <span>Language:</span>
                                        <form action="#" class="language-switcher">
                                            <Select options={options} />
                                        </form>
                                    </div>
                                    <div class="contact-info">
                                        <div class="single-info">
                                            <div class="icon-box"><i class="flaticon-call-1"></i></div>
                                            <div class="text">Phone Number</div>
                                            <h4><Link to={'/tel:+98787687676'}>+987 876 876 76</Link></h4>
                                        </div>
                                        <div class="single-info">
                                            <div class="icon-box"><i class="flaticon-email-4"></i></div>
                                            <div class="text">Email Address</div>
                                            <h4><Link to={'/mailto:info@webmail.com'}>info@webmail.com</Link></h4>
                                        </div>
                                    </div>
                                </div>
                
                                <div class="top-right">
                                    <Link to={'/#'} class="theme-btn btn-style-two"><span class="btn-title">Get A Quote</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Header Upper --> */}
                    <div class="header-upper">
                        <div class="auto-container">
                            <div class="inner-container">
                                {/* <!--Nav Box--> */}
                                <div class="nav-outer clearfix">
                                    {/* <!--Mobile Navigation Toggler--> */}
                                    <div class="mobile-nav-toggler"><span class="icon fal fa-bars"></span></div>

                                    {/* <!-- Main Menu --> */}
                                    <nav class="main-menu navbar-expand-md navbar-light">
                                        <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                            <ul class="navigation scroll-nav clearfix">
                                                <li><Link to={'/#home'}>Home</Link></li>
                                                <li><Link to={'/#about'}>About Us</Link></li>
                                                <li><Link to={'/#service'}>Services</Link></li>
                                                <li><Link to={'/#gallery'}>Gallery</Link></li>
                                                <li><Link to={'/#team'}>Team</Link></li>
                                                <li><Link to={'/#contact'}>Contact</Link></li>
                                                <li class="dropdown"><Link to={'/#'}>Pages</Link>
                                                    <ul>
                                                        <li><Link to={'/#'}>Home page 01</Link></li>
                                                        <li><Link to={'/index-2'}>Home page 02</Link></li>
                                                        <li><Link to={'/index-3'}>Home page 03</Link></li>
                                                        <li><Link to={'/index-4'}>Home page 04</Link></li>
                                                        <li><Link to={'/onepage'}>Onepage Version</Link></li>
                                                        <li><Link to={'/rtl-home'}>Home RTL</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                    {/* <!-- Main Menu End--> */}
                                    
                                    <ul class="social-links clearfix">
                                        <li><Link to={'/#'}><span class="fab fa-facebook-f"></span></Link></li>
                                        <li><Link to={'/#'}><span class="fab fa-twitter"></span></Link></li>
                                        <li><Link to={'/#'}><span class="fab fa-linkedin-in"></span></Link></li>
                                        <li><Link to={'/#'}><span class="fab fa-pinterest-p"></span></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--End Header Upper--> */}

                    {/* <!-- Sticky Header  --> */}
                    <div class="sticky-header">
                        <div class="auto-container clearfix">
                            {/* <!--Logo--> */}
                            <div class="logo pull-left">
                                <Link to={'/#'} title=""><img src={require('../../assets/images/sticky-logo.png')} alt="" title=""/></Link>
                            </div>
                            {/* <!--Right Col--> */}
                            <div class="pull-right">
                                {/* <!-- Main Menu --> */}
                                <nav class="main-menu clearfix">
                                    {/* <!--Keep This Empty / Menu will come through Javascript--> */}
                                </nav>
                                {/* <!-- Main Menu End--> */}
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Sticky Menu --> */}

                    {/* <!-- Mobile Menu  --> */}
                    <div class="mobile-menu">
                        <div class="menu-backdrop"></div>
                        <div class="close-btn"><span class="icon flaticon-cancel"></span></div>
                        
                        <nav class="menu-box">
                            <div class="nav-logo"><Link to={'/#'}><img src={require('../../assets/images/logo.png')} alt="" title=""/></Link></div>
                            <div class="menu-outer">
                                {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}
                                </div>
                            {/* <!--Social Links--> */}
                            <div class="social-links">
                                <ul class="clearfix">
                                    <li><Link to={'/#'}><span class="fab fa-twitter"></span></Link></li>
                                    <li><Link to={'/#'}><span class="fab fa-facebook-square"></span></Link></li>
                                    <li><Link to={'/#'}><span class="fab fa-pinterest-p"></span></Link></li>
                                    <li><Link to={'/#'}><span class="fab fa-instagram"></span></Link></li>
                                    <li><Link to={'/#'}><span class="fab fa-youtube"></span></Link></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    {/* <!-- End Mobile Menu --> */}
                </header>
                {/* <!-- End Main Header --> */}
                    
                

            </>
        )
    }
}
export default Header5;


