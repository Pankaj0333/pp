import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import '../../assets/css/slider.css';

const slides = [
    {
        title: 'So You Can Focus on the Presen',
        btnLearn: "-- Learn More --",
        finan: "Digital Agency",
        dox: "& Solutions.",
        btnService: "-- Our Services --",
        image: require('./../../assets/images/main-slider/8.jpg'),
    },
    {
        title: 'So You Can Focus on the Presen',
        btnLearn: "-- Learn More --",
        finan: "Digital Agency",
        dox: "& Solutions.",
        btnService: "-- Our Services --",
        image: require('./../../assets/images/main-slider/4.jpg'),
    },
    {
        title: 'So You Can Focus on the Presen',
        btnLearn: "-- Learn More --",
        finan: "Digital Agency",
        dox: "& Solutions.",
        btnService: "-- Our Services --",
        image: require('./../../assets/images/main-slider/8.jpg'),
    },

];


class HomeSlider4 extends Component {


    render() {
        return (
            <>
                <section class="banner-section style-four sec-padd-s2">
                    <Slider className="slider-wrapper" autoplay >
                        {slides.map((slide, index) =>
                            <div key={index} className="slider-content" style={{ background: `url('${slide.image}') no-repeat center center` }}>
                                <div className="inner content-box">
                                    <h1>{slide.title}</h1>
                                    <h2>{slide.finan}<span>{slide.dox} </span></h2>
                                    <div class="btn-box">
                                        <Link to={'/#'} class="theme-btn btn-style-one"><span class="btn-title">{slide.btnService}</span>
                                        </Link><Link to={'/#'} class="theme-btn btn-style-two"><span class="btn-title">{slide.btnLearn}</span></Link></div>
                                </div>
                            </div>)}
                    </Slider>
                </section> 

                {/* <section class="banner-section style-four sec-padd-s2">
                    <div class="banner-carousel theme_carousel owl-theme owl-carousel" data-options='{"loop": true, "margin": 0, "autoheight":true, "lazyload":true, "nav": true, "dots": true, "autoplay": true, "autoplayTimeout": 6000, "smartSpeed": 300, "responsive":{ "0" :{ "items": "1" }, "768" :{ "items" : "1" } , "1000":{ "items" : "1" }}}'>
                        
                        <div class="slide-item">
                            <div class="image-layer lazy-image" data-bg="url('assets/images/main-slider/4.jpg')"></div>

                            <div class="auto-container">
                                <div class="content-box">
                                    <h3>So You Can Focus on the Presen</h3>
                                    <h2>Digital Agency <br/>& Solutions.</h2>
                                    <div class="btn-box"><Link to={'/#'} class="theme-btn btn-style-one"><span class="btn-title"> Our Services </span></Link><Link to={'/#'} class="theme-btn btn-style-two"><span class="btn-title"> Learn More </span></Link></div>
                                </div>
                            </div>
                        </div>

                        
                        <div class="slide-item">
                            <div class="image-layer lazy-image" data-bg="url('assets/images/main-slider/8.jpg')"></div>

                            <div class="auto-container">
                                <div class="content-box">
                                    <h3>So You Can Focus on the Presen</h3>
                                    <h2>Digital Agency <br/>& Solutions.</h2>
                                    <div class="btn-box"><Link to={'/#'} class="theme-btn btn-style-one"><span class="btn-title">Our Services</span></Link><Link to={'/#'} class="theme-btn btn-style-two"><span class="btn-title">Learn More </span></Link></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section> */}



            </>
        )
    }
}
export default HomeSlider4;