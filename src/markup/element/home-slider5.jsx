import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import '../../assets/css/slider.css';

const slides = [
    {
        title: 'صنع فكرة عملك   ',
        description: 'شركتنا هي واحدة من الشركات الرائدة في العالم في مجال الاستشارات الإدارية. الحصول على اتصال هنا في اسرع وقت ممكن. ',
        btnLearn: "-- أعرف أكثر   --",
        finan: "فننظكس   ",
        btnService: "-- خدماتنا  --",
        image: require('./../../assets/images/main-slider/1.jpg'),
    },
    {
        title: 'صنع فكرة عملك   ',
        description: 'شركتنا هي واحدة من الشركات الرائدة في العالم في مجال الاستشارات الإدارية. الحصول على اتصال هنا في اسرع وقت ممكن. ',
        btnLearn: "-- أعرف أكثر   --",
        finan: "فننظكس   ",
        btnService: "-- خدماتنا  --",
        image: require('./../../assets/images/main-slider/1.jpg'),
    },
    {
        title: 'صنع فكرة عملك   ',
        description: 'شركتنا هي واحدة من الشركات الرائدة في العالم في مجال الاستشارات الإدارية. الحصول على اتصال هنا في اسرع وقت ممكن. ',
        btnLearn: "-- أعرف أكثر   --",
        finan: "فننظكس   ",
        btnService: "-- خدماتنا  --",
        image: require('./../../assets/images/main-slider/1.jpg'),
    },

];


class HomeSlider5 extends Component {


    render() {
        return (
            <>
                <Slider className="slider-wrapper" autoplay >
                    {slides.map((slide, index) =>
                        <div key={index} className="slider-content" style={{ background: `url('${slide.image}') no-repeat center center` }}>
                            <div className="inner">
                                <h1>{slide.title}</h1>
                                <h2>{slide.finan}</h2>
                                <div class="text">{slide.description}</div>
                                <div class="btn-box">
                                    <Link to={'/#'} class="theme-btn btn-style-one"><span class="btn-title">{slide.btnService}</span>
                                    </Link><Link to={'/#'} class="theme-btn btn-style-two"><span class="btn-title">{slide.btnLearn}</span></Link></div>
                            </div>
                        </div>)}
                </Slider>

                {/* <section class="banner-section">
                    <div class="banner-carousel theme_carousel owl-theme owl-carousel" data-options='{"loop": true, "margin": 0, "autoheight":true, "lazyload":true, "nav": true, "dots": true, "autoplay": true, "autoplayTimeout": 6000, "smartSpeed": 300, "responsive":{ "0" :{ "items": "1" }, "768" :{ "items" : "1" } , "1000":{ "items" : "1" }}}'>
                        
                        <div class="slide-item">
                            <div class="image-layer lazy-image" data-bg="url('assets/images/main-slider/1.jpg')"></div>

                            <div class="auto-container">
                                <div class="content-box">
                                    <h3>صنع فكرة عملك   </h3>
                                    <h2>فننظكس   </h2>
                                    <div class="text">شركتنا هي واحدة من الشركات الرائدة في العالم في مجال الاستشارات الإدارية. الحصول على اتصال هنا في اسرع وقت ممكن. </div>
                                    <div class="btn-box"><Link to={'/#'} class="theme-btn btn-style-one"><span class="btn-title">-- خدماتنا  --</span></Link><Link to={'/#'} class="theme-btn btn-style-two"><span class="btn-title">-- أعرف أكثر   --</span></Link></div>
                                </div>
                            </div>
                        </div>

                        
                        <div class="slide-item">
                            <div class="image-layer lazy-image" data-bg="url('assets/images/main-slider/1.jpg')"></div>

                            <div class="auto-container">
                                <div class="content-box">
                                    <h3>صنع فكرة عملك   </h3>
                                    <h2>فننظكس   </h2>
                                    <div class="text">شركتنا هي واحدة من الشركات الرائدة في العالم في مجال الاستشارات الإدارية. الحصول على اتصال هنا في اسرع وقت ممكن. </div>
                                    <div class="btn-box"><Link to={'/#'} class="theme-btn btn-style-one"><span class="btn-title">-- خدماتنا  --</span></Link><Link to={'/#'} class="theme-btn btn-style-two"><span class="btn-title">-- أعرف أكثر   --</span></Link></div>
                                </div>
                            </div>
                        </div>

                        
                        <div class="slide-item">
                            <div class="image-layer lazy-image" data-bg="url('assets/images/main-slider/1.jpg')"></div>

                            <div class="auto-container">
                                <div class="content-box">
                                    <h3>صنع فكرة عملك   </h3>
                                    <h2>فننظكس   </h2>
                                    <div class="text">شركتنا هي واحدة من الشركات الرائدة في العالم في مجال الاستشارات الإدارية. الحصول على اتصال هنا في اسرع وقت ممكن. </div>
                                    <div class="btn-box"><Link to={'/#'} class="theme-btn btn-style-one"><span class="btn-title">-- خدماتنا  --</span></Link><Link to={'/#'} class="theme-btn btn-style-two"><span class="btn-title">-- أعرف أكثر   --</span></Link></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section> */}



            </>
        )
    }
}
export default HomeSlider5;