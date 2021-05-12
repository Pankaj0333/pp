import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Nav, Tab, } from 'react-bootstrap';
import Header from '../layout/header'
import Footer from '../layout/footer'
import Product1 from '../element/related-product'


const aboutbg = require('./../../assets/images/background/image-11.jpg');


const Product_content = [
    {
        thumb: require('./../../assets/images/shop/single-product.jpg'),
    },
    {
        thumb: require('./../../assets/images/shop/single-product.jpg'),
    },
]



class ProductDetails extends Component {
    state = {
        adder: 0,
    }

    onAdderIncrease = () => {
        this.setState({
            adder: this.state.adder + 1,
        })
    }
    onAdderDecrease = () => {
        this.setState({
            adder: this.state.adder - 1,
        })
    }

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
                <Header />

                {/* <!--Search Popup--> */}
                <div id="search-popup" class="search-popup">
                    <div class="close-search theme-btn"><span class="flaticon-cancel"></span></div>
                    <div class="popup-inner">
                        <div class="overlay-layer"></div>
                        <div class="search-form">
                            <form method="post" action="http://azim.commonsupport.com/Finandox/index.html">
                                <div class="form-group">
                                    <fieldset>
                                        <input type="search" class="form-control" name="search-input" value="" placeholder="Search Here" required />
                                        <input type="submit" value="Search Now!" class="theme-btn" />
                                    </fieldset>
                                </div>
                            </form>
                            <br />
                            <h3>Recent Search Keywords</h3>
                            <ul class="recent-searches">
                                <li><Link to={'/#'}>Finance</Link></li>
                                <li><Link to={'/#'}>Idea</Link></li>
                                <li><Link to={'/#'}>Service</Link></li>
                                <li><Link to={'/#'}>Growth</Link></li>
                                <li><Link to={'/#'}>Plan</Link></li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* <!-- Page Banner Section --> */}
                <section class="page-banner">
                    <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
                    <div class="bottom-rotten-curve alternate"></div>

                    <div class="auto-container">
                        <h1>Product Details</h1>
                        <ul class="bread-crumb clearfix">
                            <li><Link to={'/#'}>Home</Link></li>
                            <li class="active">Shop</li>
                        </ul>
                    </div>

                </section>
                {/* <!--End Banner Section --> */}


                {/* <!--Single Product section--> */}
                <section id="shop-area" class="single-shop-area">
                    <div class="auto-container">
                        <div class="row">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <div class="shop-content">
                                    {/* <!--Start single shop content--> */}
                                    <div class="single-shop-content">
                                        <div class="row align-items-center">
                                            <div class="col-lg-6 pr-lg-5">
                                                <Slider {...settings} className="theme_carousel">
                                                    {Product_content.map((item, id) => (
                                                        <div class="single-product-image-holder" key={id}>
                                                            <Link data-fancybox="example gallery" to={'/assets/images/shop/single-product.jpg'}><span class="flaticon-search"></span></Link>
                                                            <img src={item.thumb} alt="Awesome " />
                                                        </div>
                                                    ))}
                                                </Slider>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="content-box">
                                                    <div class="top-content">
                                                        <div class="category">Business, UX Design</div>
                                                        <div class="review">
                                                            <span>(200+ Reviews)  </span>
                                                            <div class="rating">
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h2>One of the best ux book</h2>
                                                    <div class="price"><span>$600</span> <del>$799</del></div>
                                                    <div class="text">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                    </div>
                                                    <div class="cart-wrapper">
                                                        <div class="cart-btn">
                                                            <Link to={'/#'} class="theme-btn btn-style-one"><span class="btn-title">Add To Cart</span></Link>
                                                        </div>
                                                        <div class="qity">
                                                            <div class="quantity">
                                                                <button className="btn btn-primary" onClick={this.onAdderDecrease}>-</button>
                                                                <span>{this.state.adder}</span>
                                                                <button className="btn btn-primary" onClick={this.onAdderIncrease}>+</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--End single shop content--> */}
                                    {/* <!--Start product tab box--> */}
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="product-tab-box tabs-box">
                                                <Tab.Container defaultActiveKey="first">
                                                    <Nav variant="pills" className="tab-btns tab-buttons clearfix">
                                                        <Nav.Item className="tab-btn">
                                                            <Nav.Link eventKey="first">
                                                                <span >Descriprion</span>
                                                            </Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item className="tab-btn">
                                                            <Nav.Link eventKey="second">
                                                                <span>Aditional Details</span>
                                                            </Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item className="tab-btn">
                                                            <Nav.Link eventKey="third">
                                                                <span>Reviews (2)</span>
                                                            </Nav.Link>
                                                        </Nav.Item>
                                                    </Nav>
                                                    <Tab.Content className="tabs-content">
                                                        <Tab.Pane eventKey="first">
                                                            <div class="product-details-content">
                                                                <div class="desc-content-box">
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo cons equat. Duis aute irure dolor in reprehenderit.</p>
                                                                </div>
                                                            </div>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="second">
                                                            <div class="product-details-content">
                                                                <div class="desc-content-box">
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo cons equat. Duis aute irure dolor in reprehenderit.</p>
                                                                </div>
                                                            </div>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="third">
                                                            <div class="review-box-holder">
                                                                <div class="review-area">
                                                                    {/* <!--Start single review box--> */}
                                                                    <div class="column">
                                                                        <div class="single-review-box">
                                                                            <div class="image-holder">
                                                                                <img src={require('../../assets/images/shop/review-1.png')} alt="Awesome " />
                                                                            </div>
                                                                            <div class="text-holder">
                                                                                <div class="top">
                                                                                    <div class="name">
                                                                                        <h3>Steven Rich <span>– Jan 17, 2020:</span></h3>
                                                                                    </div>
                                                                                    <div class="review-box">
                                                                                        <div class="rating">
                                                                                            <i class="fa fa-star"></i>
                                                                                            <i class="fa fa-star"></i>
                                                                                            <i class="fa fa-star"></i>
                                                                                            <i class="fa fa-star"></i>
                                                                                            <i class="fa fa-star"></i>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="text">
                                                                                    <p>Value for money , I use it from long time and it is very useful and good product.</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    {/* <!--End single review box--> */}
                                                                    {/* <!--Start single review box--> */}
                                                                    <div class="column">
                                                                        <div class="single-review-box">
                                                                            <div class="image-holder">
                                                                                <img src={require('../../assets/images/shop/review-2.png')} alt="Awesome " />
                                                                            </div>
                                                                            <div class="text-holder">
                                                                                <div class="top">
                                                                                    <div class="name">
                                                                                        <h3>William Cobus <span>– Jan 17, 2020:</span></h3>
                                                                                    </div>
                                                                                    <div class="rating">
                                                                                        <i class="fa fa-star"></i>
                                                                                        <i class="fa fa-star"></i>
                                                                                        <i class="fa fa-star"></i>
                                                                                        <i class="fa fa-star"></i>
                                                                                        <i class="fa fa-star"></i>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="text">
                                                                                    <p>We denounce with righteous indignation and dislike men who are so beguiled & demoralized.</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    {/* <!--End single review box--> */}
                                                                </div>
                                                            </div>
                                                            <div class="review-form">
                                                                <div class="shop-page-title">
                                                                    <div class="title">Add Your <span>Comments</span></div>
                                                                    <p>Your email address will not be published. Required fields are marked <b>*</b></p>
                                                                </div>
                                                                <form id="review-form" action="#">
                                                                    <div class="row">
                                                                        <div class="col-md-6">
                                                                            <div class="input-box">
                                                                                <p>Name<span>*</span></p>
                                                                                <input type="text" name="fname" placeholder="" required="" />
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-md-6">
                                                                            <div class="input-box">
                                                                                <p>Email<span>*</span></p>
                                                                                <input type="email" name="email" placeholder="" required="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row">
                                                                        <div class="col-md-12">
                                                                            <div class="add-rating-box">
                                                                                <div class="add-rating-title">
                                                                                    <h4>Your Rating</h4>
                                                                                </div>
                                                                                <div class="review-box">
                                                                                    <ul>
                                                                                        <li><i class="fa fa-star"></i></li>
                                                                                        <li><i class="fa fa-star"></i></li>
                                                                                        <li><i class="fa fa-star"></i></li>
                                                                                        <li><i class="fa fa-star"></i></li>
                                                                                        <li><i class="fa fa-star"></i></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row">
                                                                        <div class="col-md-12">
                                                                            <div class="input-box">
                                                                                <p>Your Review<span>*</span></p>
                                                                                <textarea name="review" placeholder="" required=""></textarea>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row">
                                                                        <div class="col-md-12">
                                                                            <button class="theme-btn btn-style-one" type="submit"><span class="btn-title">Submit</span></button>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </Tab.Pane>
                                                    </Tab.Content>
                                                </Tab.Container>
                                                <div class="tabs-content">
                                                    <div class="tab">

                                                    </div>
                                                    <div class="tab active-tab" >

                                                    </div>
                                                    <div class="tab">

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--End product tab box--> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Product1 />

                <Footer />
            </>
        )
    }
}
export default ProductDetails;