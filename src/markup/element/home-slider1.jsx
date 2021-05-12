import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import '../../assets/css/slider.css';

const slides = [
    {
        title: 'Making Your Business Idea',
        description: 'Our company is one of the world’s leading management consulting firms. Get in touch here asap.',
        btnLearn: "-- Learn More --",
        finan: "Finan",
        dox: "dox",
        btnService: "-- Our Services --",
        image: require('./../../assets/images/main-slider/1.jpg'),
    },
    {
        title: 'Making Your Business Idea',
        description: 'Our company is one of the world’s leading management consulting firms. Get in touch here asap.',
        btnLearn: "-- Learn More --",
        finan: "Finan",
        dox: "dox",
        btnService: "-- Our Services --",
        image: require('./../../assets/images/main-slider/1.jpg'),
    },
    {
        title: 'Making Your Business Idea',
        description: 'Our company is one of the world’s leading management consulting firms. Get in touch here asap.',
        btnLearn: "-- Learn More --",
        finan: "Finan",
        dox: "dox",
        btnService: "-- Our Services --",
        image: require('./../../assets/images/main-slider/1.jpg'),
    },

];


class HomeSlider1 extends Component {


    render() {
        return (
            <>
                <Slider className="slider-wrapper" autoplay >
                    {slides.map((slide, index) =>
                        <div key={index} className="slider-content" style={{ background: `url('${slide.image}') no-repeat center center` }}>
                            <div className="inner">
                                <h1>{slide.title}</h1>
                                <h2>{slide.finan}<span>{slide.dox} </span></h2>
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
                                    <h3>Making Your Business Idea</h3>
                                    <h2>Finan<span>dox </span></h2>
                                    <div class="text">Our company is one of the world’s leading management <br />consulting firms. Get in touch here asap.</div>
                                    <div class="btn-box"><Link to={'/#'} class="theme-btn btn-style-one"><span class="btn-title">-- Our Services --</span></Link><Link to={'/#'} class="theme-btn btn-style-two"><span class="btn-title">-- Learn More --</span></Link></div>
                                </div>
                            </div>
                        </div>

                        
                        <div class="slide-item">
                            <div class="image-layer lazy-image" data-bg="url('assets/images/main-slider/5.jpg')"></div>

                            <div class="auto-container">
                                <div class="content-box">
                                    <h3>Making Your Business Idea</h3>
                                    <h2>Finan<span>dox </span></h2>
                                    <div class="text">Our company is one of the world’s leading management <br />consulting firms. Get in touch here asap.</div>
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
export default HomeSlider1;