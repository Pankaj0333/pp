import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ArabicMenu from './arabic-menu'



class Header6 extends Component {

    state = {
        scrolled: false
    };

    componentDidMount() {
        var btn = document.querySelector('.mobile-nav-toggler');
        var closeBtn = document.querySelector('.close-btn');
        var body = document.getElementsByTagName('body')[0];

        function addFunc() {
            return body.classList.add("mobile-menu-visible");
        }
        function closeFunc() {
            return body.classList.remove("mobile-menu-visible");
        }

        btn.addEventListener('click', addFunc);
        closeBtn.addEventListener('click', closeFunc);

        window.addEventListener("scroll", this.handleScroll);
    }

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




    render() {
        const { scrolled } = this.state;
        return (
            <>

                {/* <!-- Main Header --> */}
                <header class={scrolled ? "main-header fixed-header" : "main-header"}>
                    {/* <!-- Header Top --> */}
                    <div class="header-top">
                        <div class="auto-container">
                            <div class="inner">
                                <div class="top-left">
                                    {/* <!--Logo--> */}
                                    <div class="logo-box">
                                        <div class="logo"><Link to={'/#'}><img src={require('../../assets/images/logo.png')} alt="" /></Link></div>
                                    </div>
                                </div>

                                <div class="top-middile">
                                    <div class="language">
                                        <span>لغة  :</span>
                                        <form action="#" class="language-switcher">
                                            <select class="selectpicker">
                                                <option value="1">English</option>
                                                <option value="1">French</option>
                                                <option value="1">Spanish</option>
                                                <option value="1">Bengli</option>
                                            </select>
                                        </form>
                                    </div>
                                    <div class="contact-info">
                                        <div class="single-info">
                                            <div class="icon-box"><i class="flaticon-call-1"></i></div>
                                            <div class="text">رقم الهاتف   </div>
                                            <h4><Link to={'/tel:+98787687676'}>+987 876 876 76</Link></h4>
                                        </div>
                                        <div class="single-info">
                                            <div class="icon-box"><i class="flaticon-email-4"></i></div>
                                            <div class="text">عنوان البريد الإلكتروني  </div>
                                            <h4><Link to={'/mailto:info@webmail.com'}>info@webmail.com</Link></h4>
                                        </div>
                                    </div>
                                </div>

                                <div class="top-right">
                                    <Link to={'/#'} class="theme-btn btn-style-two"><span class="btn-title">إقتبس   </span></Link>
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
                                    <ArabicMenu/>
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
                    <div class={scrolled ? "sticky-header animated slideInDown" : "sticky-header"}>
                        <div class="auto-container clearfix">
                            {/* <!--Logo--> */}
                            <div class="logo pull-left">
                                <Link to={'/#'} title=""><img src={require('../../assets/images/sticky-logo.png')} alt="" title="" /></Link>
                            </div>
                            {/* <!--Right Col--> */}
                            <div class="pull-right">
                                {/* <!-- Main Menu --> */}
                                <nav class="main-menu clearfix">
                                <ArabicMenu/>
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
                            <div class="nav-logo"><Link to={'/#'}><img src={require('../../assets/images/logo.png')} alt="" title="" /></Link></div>
                            <div class="menu-outer">
                            <ArabicMenu/>
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
                {/* <!-- End Main Header -->   */}


            </>
        )
    }
}
export default Header6;


