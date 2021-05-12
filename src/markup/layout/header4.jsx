import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Header4 extends Component {

    componentDidMount() {
        var sidenavbtn = document.querySelector('.side-menu-resize');
        var body = document.getElementsByTagName('body')[0];

        function addFunc() {
            return body.classList.toggle("side-menu-visible");
        }

        sidenavbtn.addEventListener('click', addFunc);
    

        var btn2 = document.querySelector('.mobile-nav-toggler-two');
        var aaa2 = document.querySelector('.side-menu-visible');
        var removeclass1 = document.querySelector('.side-menu-overlay');
        
        function toggleFunc() {
            return aaa2.classList.toggle("side-menu-visible-s2");
        }         
        function removeclass() {
            return aaa2.classList.remove("side-menu-visible-s2");
        }   

        btn2.addEventListener('click', toggleFunc);
        removeclass1.addEventListener('click', removeclass);
        
    }




    render() {
        return (
            <>



                {/* <!-- Main Header --> */}
                <header class="main-header header-style-five side-menu-visible">
                    <div class="mobile-menu-two">
                        <div class="auto-container">
                            <div class="wrapper-box">
                                <div class="logo"><img src={require('../../assets/images/logo.png')} alt=""/></div>
                                {/* <!--Mobile Navigation Toggler--> */}
                                <div class="mobile-nav-toggler-two"><span class="icon fal fa-bars"></span></div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Side Menu  --> */}
                    <div class="side-menu">
                        <div class="side-menu-resize"><span class="fa fa-angle-right"></span></div>
                        <nav class="menu-box">
                            <div class="nav-logo"><Link to={'/index-4'}><img src={require('../../assets/images/logo.png')} alt="" title=""/></Link></div>
                            <div class="menu-outer">
                                <ul class="navigation clearfix">
                                    <li class="dropdown"><Link to={'/#'}>Home</Link>
                                        <ul>
                                            <li><Link to={'/#'}>Home page 01</Link></li>
                                            <li><Link to={'/index-2'}>Home page 02</Link></li>
                                            <li><Link to={'/index-3'}>Home page 03</Link></li>
                                            <li><Link to={'/index-4'}>Home page 04</Link></li>
                                            <li><Link to={'/onepage'}>Onepage Version</Link></li>
                                            <li><Link to={'/rtl-home'}>Home RTL</Link></li>
                                            <li class="dropdown"><Link to={'/#'}>Header Styles</Link>
                                                <ul>
                                                    <li><Link to={'/index'}>Header Style One</Link></li>
                                                    <li><Link to={'/index-2'}>Header Style Two</Link></li>
                                                    <li><Link to={'/index-3'}>Header Style Three</Link></li>
                                                    <li><Link to={'/index-4'}>Header Style Four</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><Link to={'/about'} >About Us</Link></li>
                                    <li class="dropdown"><Link to={'/#'}>Services</Link>
                                        <ul>
                                            <li><Link to={'/services-1'}>Services One</Link></li>
                                            <li><Link to={'/services-2'}>Services Two</Link></li>
                                            <li><Link to={'/services-details'}>Services Details</Link></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown"><Link to={'/#'}>Portfolio</Link>
                                        <ul>
                                            <li><Link to={'/portfolio-1'}>Portfolio One</Link></li>
                                            <li><Link to={'/portfolio-2'}>Portfolio Two</Link></li>
                                            <li><Link to={'/portfolio-details'}>Portfolio Details</Link></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown"><Link to={'/#'}>News</Link>
                                        <ul>
                                            <li><Link to={'/blog-grid'}>Blog Grid</Link></li>
                                            <li><Link to={'/blog-standard'}>Blog Standard</Link></li>
                                            <li><Link to={'/blog-details'}>Blog Details</Link></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown"><Link to={'/#'}>Pages</Link>
                                        <ul>
                                            <li><Link to={'/careers'}>Careers</Link></li>
                                            <li><Link to={'/team'}>Team</Link></li>
                                            <li><Link to={'/team-details'}>Team Details</Link></li>
                                            
                                            <li class="dropdown"><Link to={'/#'}>Shop</Link>
                                                <ul>
                                                    <li><Link to={'/shop'}>Products</Link></li>
                                                    <li><Link to={'/product-details'}>Product Details</Link></li>
                                                    <li><Link to={'/shopping-cart'}>Shopping Cart</Link></li>
                                                    <li><Link to={'/checkout'}>Checkout</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to={'/faq'}>Faq's</Link></li>
                                            <li><Link to={'/404'}>404</Link></li>
                                        </ul>
                                    </li>
                                    
                                    <li><Link to={'/contact'}>Contact</Link></li>
                                </ul>
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
                        </nav>
                    </div>
                    {/* <!-- End Side Menu --> */}
                    <div class="side-menu-overlay"></div>
                </header>
                {/* <!-- End Main Header --> */}
                    
                    
                

            </>
        )
    }
}
export default Header4;


