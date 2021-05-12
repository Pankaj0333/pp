import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const testimonialbg1 = require('./../../assets/images/background/image-9.jpg');

const caseStudy_content = [
    {
        image: require('./../../assets/images/gallery/gallery-24.jpg'),
        h5: 'Business Consultancy',
        h2: 'Brixer Donald Company Busines',
    },
    {
        image: require('./../../assets/images/gallery/gallery-24.jpg'),
        h5: 'Business Consultancy',
        h2: 'Brixer Donald Company Busines',
    },
    {
        image: require('./../../assets/images/gallery/gallery-24.jpg'),
        h5: 'Business Consultancy',
        h2: 'Brixer Donald Company Busines',
    },
    {
        image: require('./../../assets/images/gallery/gallery-24.jpg'),
        h5: 'Business Consultancy',
        h2: 'Brixer Donald Company Busines',
    },
    {
        image: require('./../../assets/images/gallery/gallery-24.jpg'),
        h5: 'Business Consultancy',
        h2: 'Brixer Donald Company Busines',
    },
    {
        image: require('./../../assets/images/gallery/gallery-24.jpg'),
        h5: 'Business Consultancy',
        h2: 'Brixer Donald Company Busines',
    },
    {
        image: require('./../../assets/images/gallery/gallery-24.jpg'),
        h5: 'Business Consultancy',
        h2: 'Brixer Donald Company Busines',
    }
]


class CaseStudy extends Component {


    render() {

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        };
        return (
            <>

                <Slider {...settings}>
                    {caseStudy_content.map((item, id) => (
                        <div class="case-block-one">
                            <div class="inner-box">
                                <div class="image"><img src={item.image} alt="" /></div>
                                <div class="overlay">
                                    <div>
                                        <h5>{item.h5}</h5>
                                        <h2>{item.h2}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </>
        )
    }
}
export default CaseStudy;