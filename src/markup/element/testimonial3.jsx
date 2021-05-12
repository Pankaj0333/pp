import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Testimonial3_content = [
    {
        description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.',
        title: 'Design & Development Quality',
        thumb: require('../../assets/images/resource/thumb-1.jpg'),
        author: 'Alexer Valvin',
        designation: 'Founder, Coxer IT',
    },
    {
        description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.',
        title: 'Design & Development Quality',
        thumb: require('../../assets/images/resource/thumb-1.jpg'),
        author: 'Alexer Valvin',
        designation: 'Founder, Coxer IT',
    },
    {   
        description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.',
        title: 'Design & Development Quality',
        thumb: require('../../assets/images/resource/thumb-1.jpg'),
        author: 'Alexer Valvin',
        designation: 'Founder, Coxer IT',
        
        

    },
]


class Testimonial3 extends Component {


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


                {/* <!-- Testimonial Section Two --> */}
                <section class="testimonial-section-two">
                    <div class="auto-container">
                        <div class="sec-title text-center">
                            <div class="sub-title">Testimonials</div>
                            <h2>Clients Feedback</h2>
                        </div>
                        <div class="row justify-content-center">
                            <div className="col-lg-10">
                                <Slider {...settings} className="theme_carousel">
                                    {Testimonial3_content.map((item, id) => (
                                        <div class="slide-item" key={id}>
                                            {/* <!-- Testimonial-block Two --> */}
                                            <div class="testimonial-block-two">
                                                <div class="inner-box">
                                                    <div class="icon"><span class="fal fa-star"></span></div>
                                                    <div class="quote"><span class="fal fa-quote-left"></span></div>
                                                        <h2>{item.title}</h2>
                                                    <div class="text">{item.description}</div>
                                                </div>
                                                <div class="author-info">
                                                    <div class="thumb"><img src={item.thumb} alt=""/></div>
                                                    <h4>{item.author}</h4>
                                                    <div class="designation">{item.designation}</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>

            </>
        )
    }
}
export default Testimonial3;