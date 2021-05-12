import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Menu from './menu';

    

class Navbar extends Component {
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

                <header class={scrolled ? "main-header header-style-two fixed-header" : "main-header header-style-two"}>
                    
                    <div class="header-top-two">
                        <div class="auto-container">
                            <div class="inner">
                                <div class="top-left">
                                
                                    <ul class="contact-info">
                                        <li><Link to={'/mailto:info@webmail.com'}><i class="far fa-envelope"></i>support@agw.com</Link></li>
                                        <li><Link to={'/tel:+98787687676'}><i class="far fa-phone"></i>+919650001808</Link></li>
                                    </ul>
                                </div>

                                <div class="top-middile">
                                    <div class="text">Welcome To Asquire Global Wealth</div>
                                </div>
                
                                <div class="top-right">
                                    <div class="language">
                                        <form action="#" class="language-switcher">
                                            <select class="selectpicker">
                                                <option value="1">EN</option>
                                                <option value="1">FR</option>
                                                <option value="1">SP</option>
                                                <option value="1">BE</option>
                                            </select>
                                        </form>
                                    </div>
                                    <ul class="clearfix social-links">
                                        <li><a href ="https://www.linkedin.com/company/asquire-global-wealth/"><span class="fab fa-linkedin"></span></a></li>
                                        <li><Link to={'/#'}><span class="fab fa-facebook-square"></span></Link></li>
                                        <li><Link to={'/#'}><span class="fab fa-pinterest-p"></span></Link></li>
                                        <li><Link to={'/#'}><span class="fab fa-instagram"></span></Link></li>
                                        <li><Link to={'/#'}><span class="fab fa-youtube"></span></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <style>{"\
.main-header.header-style-two .main-menu .navigation>li>a{\
          color:white;\
        }\
      "}</style>
     


                    <div class="header-upper" style={{top:'-21px'}} >
                        <div class="auto-container">
                            <div class="inner-container">
                                
                                <div class="nav-outer clearfix" style={{backgroundColor:'#350cc7'}}>
                                    
                                    <div class="logo-box">
                                        <div class="logo"><Link to={'/index-2'}><img src={require('../../assets/images/logo-2.png')} alt=""/></Link></div>
                                    </div>
                                    
                                    <div class="mobile-nav-toggler"><span class="icon fal fa-bars"></span></div>


                                    <nav class="main-menu navbar-expand-md navbar-light">
                                    <Menu />
                                    </nav>
                                    <div class="link-btn"><Link to={'/#'} class="theme-btn btn-style-one"><span class="btn-title">Schedule a Meeting</span></Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    


                    <div class={scrolled ? "sticky-header animated slideInDown" : "sticky-header"}>
                    <div class="auto-container clearfix" style={{backgroundColor:'blue'}}>

                        <div class="logo pull-left">
                            <Link to={'/#'} title=""><img src={require('../../assets/images/l1.png')} alt="" title="" /></Link>
                        </div>

                        <div class="pull-right">
                            <nav class="main-menu clearfix">
                                <Menu />
                            </nav>
                        </div>
                    </div>
                </div>

                    <div class="mobile-menu">
                        <div class="menu-backdrop"></div>
                        <div class="close-btn"><span class="icon flaticon-cancel"></span></div>
                        
                        <nav class="menu-box">
                            <div class="nav-logo"><Link to={'/#'}><img src="assets/images/logo.png" alt="" title=""/></Link></div>
                            <div class="menu-outer">
                            <Menu />
                            </div>
                            
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
                </header>
                

            </>
        )
    }
}
export default Navbar;


