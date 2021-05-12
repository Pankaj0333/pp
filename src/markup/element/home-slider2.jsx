import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import '../../assets/css/slider.css';

const slides = [
    {
        title: 'Making Your future here',
        btnLearn: " Investments ",
        finan: "Prosper In This",
        dox: "Volatile Fund",
        btnService: "  Our Services ",
        image: require('./../../assets/images/main-slider/2.jpg'),
    },
    {
        title: 'Making Your Business Idea',
        btnLearn: " Learn More ",
        finan: "Prosper In This",
        dox: "Volatile Fund",
        btnService: " Investments ",
        image: require('./../../assets/images/main-slider/2.jpg'),
    },
    {
        title: 'Making Your Business Idea',
        btnLearn: " Investments ",
        finan: "Prosper In This",
        dox: "Volatile Fund",
        btnService: " Our Services ",
        image: require('./../../assets/images/main-slider/2.jpg'),
    },

];


class HomeSlider2 extends Component {


    render() {
        return (
            <>
                <Slider className="slider-wrapper" duration="6000" autoplay>
                    {slides.map((slide, index) =>
                        <div key={index} className="slider-content" style={{ background: `url('${slide.image}') no-repeat center center` }}>
                            <div className="inner text-center inner-2">
                                <h1>{slide.title}</h1>
                                <h2>{slide.finan} <span>{slide.dox} </span></h2>
                                <div class="btn-box">
                                    <Link to={'/investment'} class="theme-btn btn-style-one"><span class="btn-title">{slide.btnService}</span>
                                    </Link><Link to={'/about'} class="theme-btn btn-style-two"><span class="btn-title">{slide.btnLearn}</span></Link></div>
                            </div>
                        </div>)}
                </Slider>

                
                {/* <section class="banner-section style-two">
                    <div class="banner-carousel theme_carousel owl-theme owl-carousel" data-options='{"loop": true, "margin": 0, "autoheight":true, "lazyload":true, "nav": true, "dots": true, "autoplay": true, "autoplayTimeout": 6000, "smartSpeed": 300, "responsive":{ "0" :{ "items": "1" }, "768" :{ "items" : "1" } , "1000":{ "items" : "1" }}}'>

                        <div class="slide-item">
                            <div class="image-layer lazy-image" data-bg="url('assets/images/main-slider/2.jpg')"></div>

                            <div class="auto-container">
                                <div class="content-box">
                                    <h3>Making Your Business Idea</h3>
                                    <h2>Prosper In This <br />Volatile Fund</h2>
                                    <div class="btn-box"><Link to={'/#'} class="theme-btn btn-style-one"><span class="btn-title">-- Our Services --</span></Link><Link to={'/#'} class="theme-btn btn-style-two"><span class="btn-title">-- Learn More --</span></Link></div>
                                </div>
                            </div>
                        </div>

                        <div class="slide-item">
                            <div class="image-layer lazy-image" data-bg="url('assets/images/main-slider/6.jpg')"></div>

                            <div class="auto-container">
                                <div class="content-box">
                                    <h3>Making Your Business Idea</h3>
                                    <h2>Prosper In This <br />Volatile Fund</h2>
                                    <div class="btn-box"><Link to={'/#'} class="theme-btn btn-style-one"><span class="btn-title">-- Our Services --</span></Link><Link to={'/#'} class="theme-btn btn-style-two"><span class="btn-title">-- Learn More --</span></Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                



            </>
        )
    }
}
export default HomeSlider2;