import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer3 extends Component {
    render() {
        return (
            <>
                {/* <!-- Main Footer --> */}
                <footer class="main-footer">
                    <div class="auto-container">
                        {/* <!--Widgets Section--> */}
                        <div class="widgets-section">
                            <div class="row clearfix">
                                
                                {/* <!--Column--> */}
                                <div class="column col-lg-4">
                                    <div class="footer-widget logo-widget">
                                        <div class="widget-content">
                                            <div class="footer-logo">
                                                <Link to={'/#'}><img class="" src={require('../../assets/images/footer-logo.png')} alt="" /></Link>
                                            </div>
                                            <div class="text">تنا هي واحدة من الشركات الرائدة في العالم في مجال الاستشارات الإدارية. الحصول على اتصال هنا في اسرع وقت ممكن. تنا هي واحدة من الشركات الرائدة في العالم في مجال الاستشارات الإدارية. الحصول على اتصال هنا في اسرع وقت ممكن. </div>
                                            <ul class="social-links clearfix">
                                                <li><Link to={'/#'}><span class="fab fa-facebook-f"></span></Link></li>
                                                <li><Link to={'/#'}><span class="fab fa-twitter"></span></Link></li>
                                                <li><Link to={'/#'}><span class="fab fa-vimeo-v"></span></Link></li>
                                                <li><Link to={'/#'}><span class="fab fa-instagram"></span></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* <!--Column--> */}
                                <div class="column col-lg-4">
                                    <div class="footer-widget links-widget">
                                        <div class="widget-content">
                                            <h3>الروابط  </h3>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <ul>
                                                        <li><Link to={'/#'}>الصفحة الرئيسية </Link></li>
                                                        <li><Link to={'/#'}>حول  </Link></li>
                                                        <li><Link to={'/#'}>خدمات  </Link></li>
                                                        <li><Link to={'/#'}>محفظة  </Link></li>
                                                        <li><Link to={'/#'}>التسعير  </Link></li>
                                                        <li><Link to={'/#'}>اتصل  </Link></li>
                                                    </ul>
                                                </div>
                                                <div class="col-md-6">
                                                    <ul>
                                                        <li><Link to={'/#'}>أخبار</Link></li>
                                                        <li><Link to={'/#'}>خبر صحفى  </Link></li>
                                                        <li><Link to={'/#'}>دراسة الحالة</Link></li>
                                                        <li><Link to={'/#'}>شروط  </Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>	
                                    </div>
                                </div>
                                
                                {/* <!--Column--> */}
                                <div class="column col-lg-4">
                                    <div class="footer-widget instagram-widget">
                                        <h3>معرض الصور  </h3>
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
                                            {/* <!-- /.gallery-wrapper --> */}
                                        </div>	
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                    
                    {/* <!-- Footer Bottom --> */}
                    <div class="auto-container">				
                        <div class="footer-bottom">
                            <div class="copyright">حقوق الطبع ل  <Link to={'/#'}>Webtend</Link> - 2020</div>
                        </div>
                    </div>
                </footer>


            </>
        );
    }
}

export default Footer3;