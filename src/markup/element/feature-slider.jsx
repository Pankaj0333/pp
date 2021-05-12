import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const featurebg1 = require('./../../assets/images/background/image-12.jpg');

const Features_content = [
    {
        
        subtitle: 'Family Matter',
        heading1: 'Keep On Touch With',
        heading2: 'Us For Update.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
        link: 'Our Services',
 
    },
    {
        
        subtitle: 'Family Matter',
        heading1: 'Keep On Touch With',
        heading2: 'Us For Update.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
        link: 'Our Services',
 
    },


]


class Featureslide extends Component {


    render() {

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false
        };
        return (
            <>
                
                <section class="feature-section-two">
                    <Slider {...settings} className="theme_carousel">
                        {Features_content.map((item, id) => (
                            <div class="slide-item" key={id}>
                                <div class="slide-bg" style={{ backgroundImage: "url(" + featurebg1 + ")" }}></div>
                                <div class="auto-container">
                                    <div class="content-box">
                                        <div class="sec-title">
                                            <div class="sub-title"> {item.subtitle}</div>
                                            <h2>{item.heading1} <br/>{item.heading2}</h2>
                                        </div>
                                        <div class="text">{item.text}</div>
                                        <div class="btn-box"><Link to={'/#'} class="theme-btn btn-style-one"><span class="btn-title">{item.link}</span></Link></div>
                                        <div class="icon"><span class="flaticon-insurance"></span></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
  
                </section>

            </>
        )
    }
}
export default Featureslide;