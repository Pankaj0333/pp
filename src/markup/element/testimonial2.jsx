import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonialbg1 = require('./../../assets/images/background/image-9.jpg');

const Testimonial2_content = [
    {
        thumb: require('./../../assets/images/resource/thumb-1.jpg'),
        author: 'Alexer Valvin',
        designation: 'Founder, Coxer IT',
        title: 'Design Quality',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ',

    },
    {
        thumb: require('./../../assets/images/resource/thumb-2.jpg'),
        author: 'Alexer Valvin',
        designation: 'Founder, Coxer IT',
        title: 'Design Quality',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ',

    },
    {
        thumb: require('./../../assets/images/resource/thumb-3.jpg'),
        author: 'Alexer Valvin',
        designation: 'Founder, Coxer IT',
        title: 'Design Quality',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ',

    },
    {
        thumb: require('./../../assets/images/resource/thumb-4.jpg'),
        author: 'Alexer Valvin',
        designation: 'Founder, Coxer IT',
        title: 'Design Quality',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ',

    },
    {
        thumb: require('./../../assets/images/resource/thumb-5.jpg'),
        author: 'Alexer Valvin',
        designation: 'Founder, Coxer IT',
        title: 'Design Quality',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ',

    },
    {
        thumb: require('./../../assets/images/resource/thumb-6.jpg'),
        author: 'Alexer Valvin',
        designation: 'Founder, Coxer IT',
        title: 'Design Quality',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ',

    },
]


class Testimonial2 extends Component {


    render() {

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false
        };
        return (
            <>
                <section class="testimonial-section  style-two" style={{ backgroundImage: "url(" + testimonialbg1 + ")" }}>
                    <div class="auto-container">
                        <div class="sec-title light">
                            <div class="sub-title">Testimonials</div>
                            <h2>Clients Feedback</h2>
                        </div>
                        <div class="row">
                            <div className="col-xl-12">
                                <Slider {...settings} className="theme_carousel">
                                    {Testimonial2_content.map((item, id) => (
                                        <div class="slide-item" key={id}>
                                            {/* <!-- Testimonial-block --> */}
                                            <div class="testimonial-block">
                                                <div class="inner-box">
                                                    <div class="icon"><span class="fal fa-star"></span></div>
                                                    <div class="quote"><span class="fal fa-quote-left"></span></div>
                                                    <h4>{item.title}</h4>
                                                    <div class="text">{item.description} </div>
                                                </div>
                                                <div class="author-info">
                                                    <div class="thumb"><img src={item.thumb} alt="" /></div>
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
export default Testimonial2;