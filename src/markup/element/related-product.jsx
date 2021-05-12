import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Product1_content = [
    {
        thumb: require('./../../assets/images/shop/1.jpg'),
        price: '$250',
        btn: 'Add To Cart',
        tag: 'Business',
        title: 'Office Chair',

    },
    {
        thumb: require('./../../assets/images/shop/2.jpg'),
        price: '$250',
        btn: 'Add To Cart',
        tag: 'Business',
        title: 'One of the best ux book',

    },
    {
        thumb: require('./../../assets/images/shop/3.jpg'),
        price: '$250',
        btn: 'Add To Cart',
        tag: 'Business',
        title: 'Office Chair',

    },
    {
        thumb: require('./../../assets/images/shop/4.jpg'),
        price: '$250',
        btn: 'Add To Cart',
        tag: 'Business',
        title: 'Office Chair',

    },
    {
        thumb: require('./../../assets/images/shop/1.jpg'),
        price: '$250',
        btn: 'Add To Cart',
        tag: 'Business',
        title: 'Office Chair',

    },
    {
        thumb: require('./../../assets/images/shop/2.jpg'),
        price: '$250',
        btn: 'Add To Cart',
        tag: 'Business',
        title: 'One of the best ux book',

    },
    {
        thumb: require('./../../assets/images/shop/3.jpg'),
        price: '$250',
        btn: 'Add To Cart',
        tag: 'Business',
        title: 'Office Chair',

    },
    {
        thumb: require('./../../assets/images/shop/4.jpg'),
        price: '$250',
        btn: 'Add To Cart',
        tag: 'Business',
        title: 'Office Chair',

    },

]


class Product1 extends Component {


    render() {

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: false
        };
        return (
            <>

                <section class="related-product">
                    <div class="auto-container">
                        <div class="sec-title">
                            <div class="sub-title">Products</div>
                            <h2>Releted Products</h2>
                        </div>
                        <div class="row">
                            <div className="col-lg-12">
                                <Slider {...settings} className="theme_carousel">
                                    {Product1_content.map((item, id) => (
                                        <div class="slide-item" key={id}>
                                            <div class="single-product-item">
                                                <div class="img-holder">
                                                    <img src={item.thumb} alt="Awesome Product"/>
                                                    <div class="price">{item.price}</div>
                                                    <div class="overlay-btn"><Link to={'/#'} class="theme-btn btn-style-one"><span class="btn-title">{item.btn}</span></Link></div>
                                                </div>
                                                <div class="title-holder">
                                                    <div class="static-content">
                                                        <div class="category">{item.tag}</div>
                                                        <h3 class="title"><Link to="shop-single.html">{item.title}</Link></h3>
                                                        <div class="rating">
                                                            <span class="fa fa-star"></span>
                                                            <span class="fa fa-star"></span>
                                                            <span class="fa fa-star"></span>
                                                            <span class="fa fa-star"></span>
                                                            <span class="fa fa-star"></span>
                                                        </div>
                                                    </div>
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
export default Product1;