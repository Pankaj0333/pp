import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Tab, } from 'react-bootstrap';
import Header6 from '../layout/header6';
import Footer3 from '../layout/footer3';
import HomeSlider5 from './../element/home-slider5';
import VideoPopup4 from './../element/video-popup4';

import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const wellcomebg1 = require('./../../assets/images/resource/image-1.jpg');
const authorbg1 = require('./../../assets/images/background/image-1.jpg');
// const videobg = require('./../../assets/images/background/image-2.jpg');
const teambg = require('./../../assets/images/background/image-3.jpg');
const newsbg = require('./../../assets/images/background/image-4.jpg');

class RtlHome extends Component {


    render() {
        return (
            <>
                <Header6/>

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

                <HomeSlider5/>

                {/* <!-- Welcome Setion --> */}
                <section class="welcome-section pt-0">
                    <div class="auto-container">
                        <div class="wrapper-box">
                            <div class="row m-0">
                                {/* <!-- Welcome Block One --> */}
                                <div class="welcome-block-one col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="inner-box">
                                        <div class="icon-box"><span class="flaticon-analysis"></span></div>
                                        <h2>تحليل الأعمال  </h2>
                                        <div class="text">غينيا واستمر العصبة ضرب قد. وباءت الأمريكي الأوربيين هو به،, هو العالم، الثقيلة بال. مع وايرلندا الأوروبيّون كان, قد بحق أسابيع العظمى واعتلاء.  </div>
                                        <div class="read-more"><Link to={'/#'}>اقرأ أكثر  </Link></div>
                                    </div>
                                </div>
                                {/* <!-- Welcome Block One --> */}
                                <div class="welcome-block-one col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="inner-box" style={{ backgroundImage: "url(" + wellcomebg1 + ")" }}>
                                        <div class="icon-box"><span class="flaticon-tax"></span></div>
                                        <h2>حفظ الضرائب الخاصة بك  </h2>
                                        <div class="text">غينيا واستمر العصبة ضرب قد. وباءت الأمريكي الأوربيين هو به،, هو العالم، الثقيلة بال. مع وايرلندا الأوروبيّون كان, قد بحق أسابيع العظمى واعتلاء. </div>
                                        <div class="read-more"><Link to={'/#'}>اقرأ أكثر  </Link></div>
                                    </div>
                                </div>
                                {/* <!-- Welcome Block One --> */}
                                <div class="welcome-block-one col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="inner-box">
                                        <div class="icon-box"><span class="flaticon-work-1"></span></div>
                                        <h2>تحليل الأعمال  </h2>
                                        <div class="text">غينيا واستمر العصبة ضرب قد. وباءت الأمريكي الأوربيين هو به،, هو العالم، الثقيلة بال. مع وايرلندا الأوروبيّون كان, قد بحق أسابيع العظمى واعتلاء. </div>
                                        <div class="read-more"><Link to={'/#'}>اقرأ أكثر  </Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* <!-- About Section --> */}
                <section class="about-section">
                    <div class="auto-container">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <div class="image-wrapper">
                                    <div class="image-one">
                                    <img  src={require('../../assets/images/resource/image-2.jpg')}  alt=""/>
                                    </div>
                                    <div class="image-two wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                        <div class="caption">F.</div>
                                        <div class="image-outer"><img  src={require('../../assets/images/resource/image-3.jpg')}  alt=""/></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="content-box">
                                    <div class="sec-title">
                                        <div class="sub-title">معلومات عنا  </div>
                                        <h2>نحن نعمل معكم لمعالجة  </h2>
                                        <div class="text">ركتنا هي واحدة من الشركات الرائدة في العالم في مجال الاستشارات الإدارية. الحصول على اتصال هنا في اسرع وقت ممكن. ركتنا هي واحدة من الشركات الرائدة في العالم في مجال الاستشارات الإدارية. الحصول على اتصال هنا في اسرع وقت ممكن. </div>
                                    </div>
                                    <div class="row">
                                        <div class="info-column col-md-6">
                                            <div class="icon-box">
                                                <div class="icon"><img src={require('../../assets/images/icons/icon-1.png')} alt=""/></div>
                                                <h5>رقم الهاتف  </h5>
                                                <h2>+897 6765 754</h2>
                                            </div>
                                        </div>
                                        <div class="info-column col-md-6">
                                            <div class="icon-box">
                                                <div class="icon"><img src={require('../../assets/images/icons/icon-2.png')} alt=""/></div>
                                                <h5>عنوان البريد الإلكتروني  </h5>
                                                <h2>info@webmail.com</h2>
                                            </div>
                                        </div>
                                    </div>
                                            
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Services Section --> */}
                <section class="services-section">
                    <div class="auto-container">
                        <div class="wrapper-box">
                            <div class="left-column">
                                <div class="services-content">
                                    <div class="sec-title light">
                                        <div class="sub-title">خدماتنا  </div>
                                        <h2>في الواقع ما نفعله هنا. </h2>
                                    </div>
                                    <div class="icon-box wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                        <div class="icon"><img src={require('../../assets/images/icons/icon-3.png')} alt=""/></div>
                                        <h2>سوق رأس المال  </h2>
                                        <div class="text">ركتنا هي واحدة من الشركات الرائدة في العالم في مجال الاستشارات الإدارية. الحصول على اتصال هنا في اسرع وقت ممكن. </div>
                                    </div>
                                    <div class="icon-box wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                        <div class="icon"><img src={require('../../assets/images/icons/icon-4.png')} alt=""/></div>
                                        <h2>التأمين والتخطيط  </h2>
                                        <div class="text">ركتنا هي واحدة من الشركات الرائدة في العالم في مجال الاستشارات الإدارية. الحصول على اتصال هنا في اسرع وقت ممكن. </div>
                                    </div>
                                    <div class="icon-box wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                        <div class="icon"><img src={require('../../assets/images/icons/icon-5.png')} alt=""/></div>
                                        <h2>الاستراتيجية المالية  </h2>
                                        <div class="text">ركتنا هي واحدة من الشركات الرائدة في العالم في مجال الاستشارات الإدارية. الحصول على اتصال هنا في اسرع وقت ممكن. </div>
                                    </div>
                                </div>                        
                            </div>
                            <div class="right-column">
                                {/* <!-- Fact Counter --> */}
                                <div class="fact-counter">
                                    <div class="border-box">
                                        <div class="border_top"></div>
                                        <div class="border_bottom"></div>
                                        <div class="border_middile"></div>
                                    </div>
                                    <div class="row">

                                        {/* <!--Column--> */}
                                        <div class="column counter-column col-md-6">
                                            <div class="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                                <div class="content">
                                                    <div class="icon"><img src={require('../../assets/images/icons/icon-6.png')} alt=""/></div>
                                                    <div class="count-outer count-box">
                                                        <CountUp
                                                            end={90}
                                                            redraw={true}
                                                        >
                                                            {({ countUpRef, start }) => (
                                                                <VisibilitySensor
                                                                    onChange={start}
                                                                    delayedCall
                                                                >
                                                                    <span class="count-text" ref={countUpRef} />
                                                                </VisibilitySensor>
                                                            )}
                                                        </CountUp>
                                                        <span>%</span>
                                                    </div>
                                                    <div class="counter-title">رصد الأعمال  </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <!--Column--> */}
                                        <div class="column counter-column col-md-6">
                                            <div class="inner wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                                                <div class="content">
                                                    <div class="icon"><img src={require('../../assets/images/icons/icon-7.png')} alt=""/></div>
                                                    <div class="count-outer count-box">
                                                        <CountUp
                                                            end={71}
                                                            redraw={true}
                                                        >
                                                            {({ countUpRef, start }) => (
                                                                <VisibilitySensor
                                                                    onChange={start}
                                                                    delayedCall
                                                                >
                                                                    <span class="count-text" ref={countUpRef} />
                                                                </VisibilitySensor>
                                                            )}
                                                        </CountUp>
                                                        <span>%</span>
                                                    </div>
                                                    <div class="counter-title">رازدهار العمل  </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <!--Column--> */}
                                        <div class="column counter-column col-md-6">
                                            <div class="inner wow fadeInLeft" data-wow-delay="600ms" data-wow-duration="1500ms">
                                                <div class="content">
                                                    <div class="icon"><img src={require('../../assets/images/icons/icon-8.png')} alt=""/></div>
                                                    <div class="count-outer count-box">
                                                        <CountUp
                                                            end={33}
                                                            redraw={true}
                                                        >
                                                            {({ countUpRef, start }) => (
                                                                <VisibilitySensor
                                                                    onChange={start}
                                                                    delayedCall
                                                                >
                                                                    <span class="count-text" ref={countUpRef} />
                                                                </VisibilitySensor>
                                                            )}
                                                        </CountUp>
                                                        <span>%</span>
                                                    </div>
                                                    <div class="counter-title">خطة مالية  </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* <!--Column--> */}
                                        <div class="column counter-column col-md-6">
                                            <div class="inner wow fadeInLeft" data-wow-delay="900ms" data-wow-duration="1500ms">
                                                <div class="content">
                                                    <div class="icon"><img src={require('../../assets/images/icons/icon-9.png')} alt=""/></div>
                                                    <div class="count-outer count-box">
                                                        <CountUp
                                                            end={42}
                                                            redraw={true}
                                                        >
                                                            {({ countUpRef, start }) => (
                                                                <VisibilitySensor
                                                                    onChange={start}
                                                                    delayedCall
                                                                >
                                                                    <span class="count-text" ref={countUpRef} />
                                                                </VisibilitySensor>
                                                            )}
                                                        </CountUp>
                                                        <span>%</span>
                                                    </div>
                                                    <div class="counter-title">استشارات مالية  </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <!--Column--> */}
                                        <div class="column counter-column col-md-6">
                                            <div class="inner wow fadeInLeft" data-wow-delay="600ms" data-wow-duration="1500ms">
                                                <div class="content">
                                                    <div class="icon"><img src={require('../../assets/images/icons/icon-10.png')} alt=""/></div>
                                                    <div class="count-outer count-box">
                                                        <CountUp
                                                            end={69}
                                                            redraw={true}
                                                        >
                                                            {({ countUpRef, start }) => (
                                                                <VisibilitySensor
                                                                    onChange={start}
                                                                    delayedCall
                                                                >
                                                                    <span class="count-text" ref={countUpRef} />
                                                                </VisibilitySensor>
                                                            )}
                                                        </CountUp>
                                                        <span>%</span>
                                                    </div>
                                                    <div class="counter-title">تحليل البيانات  </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* <!--Column--> */}
                                        <div class="column counter-column col-md-6">
                                            <div class="inner wow fadeInLeft" data-wow-delay="900ms" data-wow-duration="1500ms">
                                                <div class="content">
                                                    <div class="icon"><img src={require('../../assets/images/icons/icon-11.png')} alt=""/></div>
                                                    <div class="count-outer count-box">
                                                        <CountUp
                                                            end={10}
                                                            redraw={true}
                                                        >
                                                            {({ countUpRef, start }) => (
                                                                <VisibilitySensor
                                                                    onChange={start}
                                                                    delayedCall
                                                                >
                                                                    <span class="count-text" ref={countUpRef} />
                                                                </VisibilitySensor>
                                                            )}
                                                        </CountUp>
                                                        <span>%</span>
                                                    </div>
                                                    <div class="counter-title">استراتيجية العمل  </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div class="author-box" style={{ backgroundImage: "url(" + authorbg1 + ")" }}>
                                    <div class="author-info">
                                        <div class="author-thumb"><img src={require('../../assets/images/resource/author-1.jpg')} alt=""/></div>
                                        <h2>رحمة الله  </h2>
                                        <div class="designation">مؤسس   </div>
                                        <div class="text">ركتنا هي واحدة من الشركات الرائدة في العالم في مجال الاستشارات الإدارية. الحصول على اتصال هنا في اسرع وقت ممكن. </div>
                                    </div>
                                    <div class="signature"><img src={require('../../assets/images/resource/signature.png')} alt=""/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Gallery Section --> */}
                <section class="gallery-section">
                    <div class="sortable-masonry">

                        <div class="auto-container">
                            <div class="row m-0 justify-content-md-between align-items-center">
                                <div class="sec-title order-2">
                                    <div class="sub-title">محفظة  </div>
                                    <h2>أعمالنا  </h2>
                                </div>
                                {/* <!--Filter--> */}
                                <div class="filters text-center">
                                    <ul class="filter-tabs filter-btns">
                                        <li class="active filter" data-role="button" data-filter=".all"><span>الأمور المالية  </span></li>
                                        <li class="filter" data-role="button" data-filter=".category-1"><span>الخدمات المصرفية  </span></li>
                                        <li class="filter" data-role="button" data-filter=".category-2"><span>تأمين   </span></li>
                                        <li class="filter" data-role="button" data-filter=".category-3"><span>عائلة  </span></li>
                                        <li class="filter" data-role="button" data-filter=".category-4"><span>اعمال  </span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="auto-container">
                            <div class="items-container row">
                                {/* <!-- Gallery Block One --> */}
                                <div class="col-lg-3 col-md-6 gallery-block-one all">
                                    <div class="inner-box">
                                        <div class="image">
                                            <img src={require('../../assets/images/gallery/gallery-10.jpg')} alt=""/>
                                        </div>
                                        <div class="caption-title">
                                            <h5>المالية  </h5>
                                            <h3><Link to={'/#'}>ميراندا هيليكس بار  </Link></h3>
                                            <div class="view-project"><Link data-fancybox="example gallery" to="assets/images/gallery/gallery-10.jpg" class="zoom-btn"><span>+</span></Link></div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Gallery Block One --> */}
                                <div class="col-lg-3 col-md-6 gallery-block-one all category-3 category-4">
                                    <div class="inner-box">
                                        <div class="image">
                                            <img src={require('../../assets/images/gallery/gallery-11.jpg')} alt=""/>
                                        </div>
                                        <div class="caption-title">
                                            <h5>المالية  </h5>
                                            <h3><Link to={'/#'}>ميراندا هيليكس بار  </Link></h3>
                                            <div class="view-project"><Link data-fancybox="example gallery" to="assets/images/gallery/gallery-11.jpg" class="zoom-btn"><span>+</span></Link></div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Gallery Block One --> */}
                                <div class="col-lg-3 col-md-6 gallery-block-one all category-1 category-4">
                                    <div class="inner-box">
                                        <div class="image">
                                            <img src={require('../../assets/images/gallery/gallery-12.jpg')} alt=""/>
                                        </div>
                                        <div class="caption-title">
                                            <h5>المالية  </h5>
                                            <h3><Link to={'/#'}>ميراندا هيليكس بار  </Link></h3>
                                            <div class="view-project"><Link data-fancybox="example gallery" to="assets/images/gallery/gallery-12.jpg" class="zoom-btn"><span>+</span></Link></div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Gallery Block One --> */}
                                <div class="col-lg-3 col-md-6 gallery-block-one all category-3 category-2">
                                    <div class="inner-box">
                                        <div class="image">
                                            <img src={require('../../assets/images/gallery/gallery-13.jpg')} alt=""/>
                                        </div>
                                        <div class="caption-title">
                                            <h5>المالية  </h5>
                                            <h3><Link to={'/#'}>ميراندا هيليكس بار  </Link></h3>
                                            <div class="view-project"><Link data-fancybox="example gallery" to="assets/images/gallery/gallery-13.jpg" class="zoom-btn"><span>+</span></Link></div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Gallery Block One --> */}
                                <div class="col-lg-3 col-md-6 gallery-block-one all category-3 category-2 category-5">
                                    <div class="inner-box">
                                        <div class="image">
                                            <img src={require('../../assets/images/gallery/gallery-14.jpg')} alt=""/>
                                        </div>
                                        <div class="caption-title">
                                            <h5>المالية  </h5>
                                            <h3><Link to={'/#'}>ميراندا هيليكس بار  </Link></h3>
                                            <div class="view-project"><Link data-fancybox="example gallery" to="assets/images/gallery/gallery-14.jpg" class="zoom-btn"><span>+</span></Link></div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Gallery Block One --> */}
                                <div class="col-lg-3 col-md-6 gallery-block-one all category-1 category-4">
                                    <div class="inner-box">
                                        <div class="image">
                                            <img src={require('../../assets/images/gallery/gallery-15.jpg')} alt=""/>
                                        </div>
                                        <div class="caption-title">
                                            <h5>المالية  </h5>
                                            <h3><Link to={'/#'}>ميراندا هيليكس بار  </Link></h3>
                                            <div class="view-project"><Link data-fancybox="example gallery" to="assets/images/gallery/gallery-15.jpg" class="zoom-btn"><span>+</span></Link></div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Gallery Block One --> */}
                                <div class="col-lg-3 col-md-6 gallery-block-one all category-3 category-2">
                                    <div class="inner-box">
                                        <div class="image">
                                            <img src={require('../../assets/images/gallery/gallery-16.jpg')} alt=""/>
                                        </div>
                                        <div class="caption-title">
                                            <h5>المالية  </h5>
                                            <h3><Link to={'/#'}>ميراندا هيليكس بار  </Link></h3>
                                            <div class="view-project"><Link data-fancybox="example gallery" to="assets/images/gallery/gallery-16.jpg" class="zoom-btn"><span>+</span></Link></div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Gallery Block One --> */}
                                <div class="col-lg-3 col-md-6 gallery-block-one all category-3 category-2 category-5">
                                    <div class="inner-box">
                                        <div class="image">
                                            <img src={require('../../assets/images/gallery/gallery-17.jpg')} alt=""/>
                                        </div>
                                        <div class="caption-title">
                                            <h5>المالية  </h5>
                                            <h3><Link to={'/#'}>ميراندا هيليكس بار  </Link></h3>
                                            <div class="view-project"><Link data-fancybox="example gallery" to="assets/images/gallery/gallery-17.jpg" class="zoom-btn"><span>+</span></Link></div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End block --> */}
                            </div>
                        </div>
                    </div>
                </section>

                <VideoPopup4/>

                {/* <!-- Why Choose Us Section --> */}
                <section class="why-chooseus-section">
                    <div class="auto-container">
                        <div class="row align-items-center">                
                            <div class="col-lg-6">
                                <div class="content-box">
                                    <div class="sec-title">
                                        <div class="sub-title">لماذا أخترتنا  </div>
                                        <h2>لماذا يجب عليك إختيارنا ؟  </h2>
                                    </div>
                                    <Tab.Container defaultActiveKey="first">
                                        <Nav variant="pills" className="nav nav-tabs tab-btn-style-one">
                                            <Nav.Item>
                                                <Nav.Link  eventKey="first"><span>مهمتنا</span></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link  eventKey="second"><span>رؤيتنا</span></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third"><span>رؤيتنا</span></Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content className="tabs-content">
                                            <Tab.Pane eventKey="first" className="fadeInUp animated">
                                                <div class="clearfix">
                                                    <div class="image"><img  src={require('../../assets/images/resource/image-4.jpg')}  alt=""/></div>
                                                <div class="text"><p>Lكتنا هي واحدة من الشركات الرائدة في العالم في مجال الاستشارات الإدارية. الحصول على اتصال هنا في اسرع وقت ممكن.</p><p>كتنا هي واحدة من الشركات الرائدة في العالم في مجال الاستشارات الإدارية. الحصول على اتصال هنا في اسرع وقت ممكن. كتنا هي واحدة من الشركات الرائدة في العالم في مجال الاستشارات الإدارية. الحصول على اتصال هنا في اسرع وقت ممكن. كتنا هي واحدة من الشركات الرائدة في العالم في مجال الاستشارات الإدارية. الحصول على اتصال هنا في اسرع وقت ممكن.</p></div>
                                                </div>                                              
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second" className="fadeInUp animated">
                                                <div class="clearfix">
                                                    <div class="image"><img  src={require('../../assets/images/resource/image-4.jpg')}  alt=""/></div>
                                                <div class="text"><p>Lكتنا هي واحدة من الشركات الرائدة في العالم في مجال الاستشارات الإدارية. الحصول على اتصال هنا في اسرع وقت ممكن.</p><p>كتنا هي واحدة من الشركات الرائدة في العالم في مجال الاستشارات الإدارية. الحصول على اتصال هنا في اسرع وقت ممكن. كتنا هي واحدة من الشركات الرائدة في العالم في مجال الاستشارات الإدارية. الحصول على اتصال هنا في اسرع وقت ممكن. كتنا هي واحدة من الشركات الرائدة في العالم في مجال الاستشارات الإدارية. الحصول على اتصال هنا في اسرع وقت ممكن.</p></div>
                                                </div>                                            
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third" className="fadeInUp animated">
                                                <div class="clearfix">
                                                    <div class="image"><img  src={require('../../assets/images/resource/image-4.jpg')}  alt=""/></div>
                                                <div class="text"><p>Lكتنا هي واحدة من الشركات الرائدة في العالم في مجال الاستشارات الإدارية. الحصول على اتصال هنا في اسرع وقت ممكن.</p><p>كتنا هي واحدة من الشركات الرائدة في العالم في مجال الاستشارات الإدارية. الحصول على اتصال هنا في اسرع وقت ممكن. كتنا هي واحدة من الشركات الرائدة في العالم في مجال الاستشارات الإدارية. الحصول على اتصال هنا في اسرع وقت ممكن. كتنا هي واحدة من الشركات الرائدة في العالم في مجال الاستشارات الإدارية. الحصول على اتصال هنا في اسرع وقت ممكن.</p></div>
                                                </div>                                               
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>                                            
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="image-wrapper">
                                    <div class="image-one"><img src={require('../../assets/images/resource/image-6.jpg')} alt=""/></div>
                                    <div class="image-two"><img src={require('../../assets/images/resource/image-5.jpg')} alt=""/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Team Section --> */}
                <section class="team-section" style={{ backgroundImage: "url(" + teambg + ")" }}>
                    <div class="auto-container">
                        <div class="sec-title text-center">
                            <div class="sub-title">فريقنا  </div>
                            <h2> فريق القيادة </h2>
                        </div>
                        <div class="row">
                            {/* <!-- Team Block One --> */}
                            <div class="col-lg-4 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class="inner-box">
                                    <div class="image"><img src={require('../../assets/images/resource/team-1.jpg')} alt=""/></div>
                                    <div class="content">
                                        <div class="designation">مؤسس  </div>
                                        <h3>رحمة الله  </h3>
                                        <div class="text">كتنا هي واحدة من الشركات الرائدة في العالم في مجال الاستشارات الإدارية. الحصول على اتصال هنا في اسرع وقت ممكن. </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Team Block One --> */}
                            <div class="col-lg-4 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class="inner-box">
                                    <div class="image"><img src={require('../../assets/images/resource/team-2.jpg')} alt=""/></div>
                                    <div class="content">
                                        <div class="designation">المدير التنفيذي  </div>
                                        <h3>فيلافوس هـ. دي  </h3>
                                        <div class="text">تنا هي واحدة من الشركات الرائدة في العالم في مجال الاستشارات الإدارية. الحصول على اتصال هنا في اسرع وقت ممكن. </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Team Block One --> */}
                            <div class="col-lg-4 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class="inner-box">
                                    <div class="image"><img src={require('../../assets/images/resource/team-3.jpg')} alt=""/></div>
                                    <div class="content">
                                        <div class="designation">مطور  </div>
                                        <h3>عبد الرحمن ج. </h3>
                                        <div class="text">تنا هي واحدة من الشركات الرائدة في العالم في مجال الاستشارات الإدارية. الحصول على اتصال هنا في اسرع وقت ممكن. </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Contact Section --> */}
                <section class="contact-section">
                    <div class="auto-container">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="sec-title">
                                    <div class="sub-title">اكتب هنا </div>
                                    <h2>ابقى على تواصل  </h2>
                                </div>
                                {/* <!-- Contact Form--> */}
                                <div class="contact-form">
                                    <form method="post" action="http://azim.commonsupport.com/Finandox/sendemail.php" id="contact-form">
                                        <div class="row clearfix">                                    
                                            <div class="col-md-12 form-group">
                                                <label for="name">أدخل أسمك  </label>
                                                <input type="text" name="username" id="name" placeholder="Enter name here......" required=""/>
                                                <i class="fas fa-user"></i>
                                            </div>
                                            
                                            <div class="col-md-12 form-group">
                                                <label for="email">أدخل بريدك الالكتروني  </label>
                                                <input type="email" name="email" id="email" placeholder="Enter email here......" required=""/>
                                                <i class="fas fa-envelope"></i>
                                            </div>
                    
                                            <div class="col-md-12 form-group">
                                                <label for="message">أدخل رسالتك  </label>
                                                <textarea name="message" id="message" placeholder="Enter message here......"></textarea>
                                                <i class="fas fa-edit"></i>
                                            </div>
                    
                                            <div class="col-md-12 form-group">
                                                <button class="theme-btn btn-style-one" type="submit" name="submit-form"><span class="btn-title">ابقى على تواصل  </span></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="sec-title">
                                    <div class="sub-title">احصل لنا هنا  </div>
                                    <h2>اتصل بنا  </h2>
                                </div>
                                <div class="contact-info">
                                    <div class="border-box">
                                        <div class="border_top"></div>
                                        <div class="border_middile"></div>
                                    </div>
                                    <div class="row">
                                        <div class="info-column col-md-6">
                                            <div class="icon-box">
                                                <div class="icon"><span class="flaticon-email-6"></span></div>
                                                <h3>عنوان البريد الإلكتروني</h3>
                                                <ul>
                                                    <li><Link to={'/mailto:info@webmail.com'}>info@webmail.com</Link></li>
                                                    <li><Link to={'/mailto:jobs@exampleco.com'}>jobs@exampleco.com</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="info-column col-md-6">
                                            <div class="icon-box">
                                                <div class="icon"><span class="flaticon-call-1"></span></div>
                                                <h3>رقم الهاتف</h3>
                                                <ul>
                                                    <li><Link to={'/tel:+8976765654654'}>+897 676 5654 654</Link></li>
                                                    <li><Link to={'/tel:+908(097)56476576'}>+908(097) 564 765 76</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="info-column col-md-6">
                                            <div class="icon-box">
                                                <div class="icon"><span class="flaticon-location"></span></div>
                                                <h3>عنوان المكتب</h3>
                                                <ul>
                                                    <li>12/A, Romania City Town Hall <br/>New Joursey, UK</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="info-column col-md-6">
                                            <div class="icon-box">
                                                <div class="icon"><span class="flaticon-worldwide"></span></div>
                                                <h3>شبكة الاتصال  </h3>
                                                <ul>
                                                    <li><Link to={'/http://example.com/'}>example.com</Link></li>
                                                    <li><Link to={'/http://jobs.example.com/'}>jobs.example.com</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>                        
                            </div>
                        </div>
                                
                    </div>
                </section>

                {/* <!-- News Section --> */}
                <section class="news-section">
                    <div class="sec-bg" style={{ backgroundImage: "url(" + newsbg + ")" }}></div>
                    <div class="auto-container">
                        <div class="sec-title text-center light">
                            <div class="sub-title">أخبار  </div>
                            <h2>أخبار من الموارد </h2>
                        </div>
                        <div class="row">
                            {/* <!-- News Block One --> */}
                            <div class="news-block-one col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class="inner-box">
                                    <div class="image"><Link to={'/#'}><img src={require('../../assets/images/resource/news-1.jpg')} alt=""/></Link></div>
                                    <div class="lower-content">
                                        <div class="category">اعمال  </div>
                                        <ul class="post-meta">
                                            <li><Link to={'/#'}><i class="far fa-calendar-alt"></i>24th March 2020</Link></li>
                                            <li><Link to={'/#'}><i class="far fa-user"></i>بواسطة الادارية  </Link></li>
                                        </ul>
                                        <h3><Link to={'/blog-details'}>هو أفضل حل لعملك التجاري وجعل الضوضاء. </Link></h3>
                                        <div class="text">كتنا هي واحدة من الشركات الرائدة في العالم في مجال الاستشارات الإدارية. الحصول على اتصال هنا في اسرع وقت ممكن. </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- News Block One --> */}
                            <div class="news-block-one col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class="inner-box">
                                    <div class="image"><Link to={'/#'}><img src={require('../../assets/images/resource/news-2.jpg')} alt=""/></Link></div>
                                    <div class="lower-content">
                                        <div class="category">اعمال  </div>
                                        <ul class="post-meta">
                                            <li><Link to={'/#'}><i class="far fa-calendar-alt"></i>26th March 2020</Link></li>
                                            <li><Link to={'/#'}><i class="far fa-user"></i>واسطة الادارية </Link></li>
                                        </ul>
                                        <h3><Link to={'/blog-details'}>هو أفضل حل لعملك التجاري وجعل الضوضاء. </Link></h3>
                                        <div class="text">كتنا هي واحدة من الشركات الرائدة في العالم في مجال الاستشارات الإدارية. الحصول على اتصال هنا في اسرع وقت ممكن. </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- News Block One --> */}
                            <div class="news-block-one col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class="inner-box">
                                    <div class="image"><Link to={'/#'}><img src={require('../../assets/images/resource/news-3.jpg')} alt=""/></Link></div>
                                    <div class="lower-content">
                                        <div class="category">اعمال  </div>
                                        <ul class="post-meta">
                                            <li><Link to={'/#'}><i class="far fa-calendar-alt"></i>28th March 2020</Link></li>
                                            <li><Link to={'/#'}><i class="far fa-user"></i>واسطة الادارية  </Link></li>
                                        </ul>
                                        <h3><Link to={'/blog-details'}>هو أفضل حل لعملك التجاري وجعل الضوضاء. </Link></h3>
                                        <div class="text">كتنا هي واحدة من الشركات الرائدة في العالم في مجال الاستشارات الإدارية. الحصول على اتصال هنا في اسرع وقت ممكن. </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Award Section --> */}
                <section class="award-section pt-0">
                    <div class="year">2020</div>
                    <div class="auto-container">
                        <div class="sec-title text-center">
                            <div class="sub-title">جوائز  </div>
                            <h2>الحصول على جوائز  </h2>
                        </div>
                        <div class="award-image">
                            <div class="row align-items-center">
                                <div class="col-lg-4">
                                    <div class="image wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms"><img src={require('../../assets/images/resource/award-1.png')} alt=""/></div>
                                    <div class="image wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms"><img src={require('../../assets/images/resource/award-2.png')} alt=""/></div>
                                </div>
                                <div class="col-lg-4 order-lg-2">
                                    <div class="image wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms"><img src={require('../../assets/images/resource/award-3.png')} alt=""/></div>
                                    <div class="image wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms"><img src={require('../../assets/images/resource/award-4.png')} alt=""/></div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="image wow zoomIn" data-wow-delay="200ms" data-wow-duration="1200ms"><img src={require('../../assets/images/resource/award-5.png')} alt=""/></div>
                                </div>
                                
                            </div>
                        </div>                
                        <div class="feature-image">
                            <div class="image-one"><img src={require('../../assets/images/resource/image-7.jpg')} alt=""/></div>
                            <div class="image-two"><img src={require('../../assets/images/resource/image-8.jpg')} alt=""/></div>
                            <div class="image-three"><img src={require('../../assets/images/resource/image-9.jpg')} alt=""/></div>
                        </div>
                    </div>
                </section>



                <Footer3/>
            </>
        )
    }
}
export default RtlHome;