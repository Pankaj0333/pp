import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Menu from './menu'



class Header3 extends Component {

    state = {
        scrolled: false
    };



    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = event => {
        if (window.scrollY > 100) {
            this.setState({ scrolled: true });
        }
        else {
            this.setState({ scrolled: false });
        }
    };

    componentDidMount() {

        var sidenavbtn = document.querySelector('.sidemenu-nav-toggler');
        var aaa = document.querySelector('.hidden-sidebar');
        var closesidebarbtn = document.querySelector('.hidden-sidebar-close');
        
        function toggleFunc() {
        return aaa.classList.toggle("close-sidebar");
        }   
        
        function closesidebar() {
            return aaa.classList.remove("close-sidebar");
        }         
  

        
        sidenavbtn.addEventListener('click', toggleFunc);
        

        var mobilebtn = document.querySelector('.mobile-nav-toggler');
        var closeBtn = document.querySelector('.close-btn');
        var body = document.getElementsByTagName('body')[0];

        function addFunc() {
            return body.classList.add("mobile-menu-visible");
        }
        function closeFunc() {
            return body.classList.remove("mobile-menu-visible");
        }

        mobilebtn.addEventListener('click', addFunc);
        closeBtn.addEventListener('click', closeFunc);

        window.addEventListener("scroll", this.handleScroll);
    }

    render() {
        const { scrolled } = this.state;
        return (
            <>



                <header class={scrolled ? "main-header header-style-three fixed-header" : "main-header header-style-three"}>

                    {/* <!-- Header Upper --> */}
                    <div class="header-upper">
                        <div class="auto-container">
                            <div class="inner-container">
                                {/* <!--Nav Box--> */}
                                <div class="nav-outer clearfix">
                                    {/* <!--Logo--> */}
                                    <div class="logo-box">
                                        <div class="logo"><Link to={'/index-2'}><img src={require('../../assets/images/logo.png')} alt="" /></Link></div>
                                    </div>
                                    {/* <!--Sidemenu Navigation Toggler--> */}
                                    <div class="sidemenu-nav-toggler"><span class="icon fal fa-bars"></span></div>
                                    {/* <!--Mobile Navigation Toggler--> */}
                                    <div class="mobile-nav-toggler"><span class="icon fal fa-bars"></span></div>

                                    {/* <!-- Main Menu --> */}
                                    <nav class="main-menu navbar-expand-md navbar-light">
                                    <Menu />
                                    </nav>
                                    {/* <!-- Main Menu End--> */}

                                    {/* <!-- Header Right Content --> */}
                                    <div class="header-right-content clearfix">
                                        <div class="contact-info">
                                            <div class="icon-box"><i class="flaticon-call-1"></i></div>
                                            <div class="text">Phone Number</div>
                                            <h4><Link to="'/tel:+98787687676">+987 876 876 76</Link></h4>
                                        </div>
                                        {/* <!-- Link Btn--> */}
                                        <div class="link-btn"><Link to={'/#'} class="theme-btn btn-style-one"><span class="btn-title">Get A Quote</span></Link></div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--End Header Upper--> */}

                    {/* <!-- Sticky Header  --> */}
                    <div class={scrolled ? "sticky-header animated slideInDown" : "sticky-header"}>
                        <div class="auto-container clearfix">
                            {/* <!--Logo--> */}
                            <div class="logo pull-left">
                                <Link to={'/index-2'} title=""><img src={require('../../assets/images/sticky-logo-3.png')} alt="" title="" /></Link>
                            </div>
                            {/* <!--Right Col--> */}
                            <div class="pull-right">
                                {/* <!-- Main Menu --> */}
                                <nav class="main-menu clearfix">
                                <Menu />
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
                            <div class="nav-logo"><Link to={'/index-2'}><img src={require('../../assets/images/logo.png')} alt="" title="" /></Link></div>
                            <div class="menu-outer">
                            <Menu />
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

                    <div class="nav-overlay remove">
                    </div>
                </header>
                {/* <!-- End Main Header --> */}




            </>
        )
    }
}
export default Header3;


