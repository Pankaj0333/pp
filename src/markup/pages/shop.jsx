import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'
import RangeSliderBar from '../element/rangeSlider';

const aboutbg = require('./../../assets/images/background/image-11.jpg');
const addbg = require('./../../assets/images/background/image-15.jpg');

class Shop extends Component {


    render() {
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
                        <h1>Product Showcase</h1>
                        <ul class="bread-crumb clearfix">
                            <li><Link to={'/#'}>Home</Link></li>
                            <li class="active">Shop</li>
                        </ul>
                    </div>

                </section>
                {/* <!--End Banner Section --> */}

                {/* <!--Product section--> */}
                <section id="shop-area" class="main-shop-area">
                    <div class="auto-container">
                        <div class="row">
                            <div class="col-lg-9 col-md-12">
                                <div class="shop-content">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="showing-result-shorting">
                                                <div class="showing">
                                                    <p>Showing 1-9 of 35 results</p>
                                                </div>
                                                <div class="shorting">
                                                    <select class="selectmenu">
                                                        <option selected="selected">Default Sorting</option>
                                                        <option>Default Sorting one</option>
                                                        <option>Default Sorting Two</option>
                                                        <option>Default Sorting Three</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        {/* <!--Start single product item--> */}
                                        <div class="col-lg-4 col-md-6">
                                            <div class="single-product-item text-center wow fadeInUp" data-wow-delay="300ms">
                                                <div class="img-holder">
                                                    <img src={require('../../assets/images/shop/1.jpg')} alt="Awesome Product " />
                                                    <div class="price">$250</div>
                                                    <div class="overlay-btn"><Link to={'/#'} class="theme-btn btn-style-one"><span class="btn-title">Add To Cart</span></Link></div>
                                                </div>
                                                <div class="title-holder">
                                                    <div class="static-content">
                                                        <div class="category">Business</div>
                                                        <h3 class="title"><Link to={'/shop'}>Office Chair</Link></h3>
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
                                        {/* <!--End single product item--> */}
                                        {/* <!--Start single product item--> */}
                                        <div class="col-lg-4 col-md-6">
                                            <div class="single-product-item wow fadeInUp" data-wow-delay="500ms">
                                                <div class="img-holder">
                                                    <img src={require('../../assets/images/shop/2.jpg')} alt="Awesome Product " />
                                                    <div class="price">$250</div>
                                                    <div class="overlay-btn"><Link to={'/#'} class="theme-btn btn-style-one"><span class="btn-title">Add To Cart</span></Link></div>
                                                </div>
                                                <div class="title-holder">
                                                    <div class="static-content">
                                                        <div class="category">Business</div>
                                                        <h3 class="title"><Link to={'/shop'}>One of the best ux book</Link></h3>
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
                                        {/* <!--End single product item--> */}
                                        {/* <!--Start single product item--> */}
                                        <div class="col-lg-4 col-md-6">
                                            <div class="single-product-item wow fadeInUp" data-wow-delay="700ms">
                                                <div class="img-holder">
                                                    <img src={require('../../assets/images/shop/3.jpg')} alt="Awesome Product " />
                                                    <div class="price">$250</div>
                                                    <div class="overlay-btn"><Link to={'/#'} class="theme-btn btn-style-one"><span class="btn-title">Add To Cart</span></Link></div>
                                                </div>
                                                <div class="title-holder">
                                                    <div class="static-content">
                                                        <div class="category">Business</div>
                                                        <h3 class="title"><Link to={'/shop'}>Office Chair</Link></h3>
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
                                        {/* <!--End single product item--> */}
                                        {/* <!--Start single product item--> */}
                                        <div class="col-lg-4 col-md-6">
                                            <div class="single-product-item wow fadeInUp" data-wow-delay="900ms">
                                                <div class="img-holder">
                                                    <img src={require('../../assets/images/shop/4.jpg')} alt="Awesome Product " />
                                                    <div class="price">$250</div>
                                                    <div class="overlay-btn"><Link to={'/#'} class="theme-btn btn-style-one"><span class="btn-title">Add To Cart</span></Link></div>
                                                </div>
                                                <div class="title-holder">
                                                    <div class="static-content">
                                                        <div class="category">Business</div>
                                                        <h3 class="title"><Link to={'/shop'}>Office Chair</Link></h3>
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
                                        {/* <!--End single product item--> */}
                                        {/* <!--Start single product item--> */}
                                        <div class="col-lg-4 col-md-6">
                                            <div class="single-product-item wow fadeInUp" data-wow-delay="1100ms">
                                                <div class="img-holder">
                                                    <img src={require('../../assets/images/shop/5.jpg')} alt="Awesome Product " />
                                                    <div class="price">$250</div>
                                                    <div class="overlay-btn"><Link to={'/#'} class="theme-btn btn-style-one"><span class="btn-title">Add To Cart</span></Link></div>
                                                </div>
                                                <div class="title-holder">
                                                    <div class="static-content">
                                                        <div class="category">Business</div>
                                                        <h3 class="title"><Link to={'/shop'}>Study Lamp</Link></h3>
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
                                        {/* <!--End single product item--> */}
                                        {/* <!--Start single product item--> */}
                                        <div class="col-lg-4 col-md-6">
                                            <div class="single-product-item wow fadeInUp" data-wow-delay="1300ms">
                                                <div class="img-holder">
                                                    <img src={require('../../assets/images/shop/6.jpg')} alt="Awesome Product " />
                                                    <div class="price">$250</div>
                                                    <div class="overlay-btn"><Link to={'/#'} class="theme-btn btn-style-one"><span class="btn-title">Add To Cart</span></Link></div>
                                                </div>
                                                <div class="title-holder">
                                                    <div class="static-content">
                                                        <div class="category">Business</div>
                                                        <h3 class="title"><Link to={'/shop'}>Office Chair</Link></h3>
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
                                        {/* <!--End single product item--> */}

                                        {/* <!--Start single product item--> */}
                                        <div class="col-lg-4 col-md-6">
                                            <div class="single-product-item text-center wow fadeInUp" data-wow-delay="1500ms">
                                                <div class="img-holder">
                                                    <img src={require('../../assets/images/shop/7.jpg')} alt="Awesome Product " />
                                                    <div class="price">$250</div>
                                                    <div class="overlay-btn"><Link to={'/#'} class="theme-btn btn-style-one"><span class="btn-title">Add To Cart</span></Link></div>
                                                </div>
                                                <div class="title-holder">
                                                    <div class="static-content">
                                                        <div class="category">Business</div>
                                                        <h3 class="title"><Link to={'/shop'}>Office Chair</Link></h3>
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
                                        {/* <!--End single product item--> */}
                                        {/* <!--Start single product item--> */}
                                        <div class="col-lg-4 col-md-6">
                                            <div class="single-product-item text-center wow fadeInUp" data-wow-delay="1700ms">
                                                <div class="img-holder">
                                                    <img src={require('../../assets/images/shop/8.jpg')} alt="Awesome Product " />
                                                    <div class="price">$250</div>
                                                    <div class="overlay-btn"><Link to={'/#'} class="theme-btn btn-style-one"><span class="btn-title">Add To Cart</span></Link></div>
                                                </div>
                                                <div class="title-holder">
                                                    <div class="static-content">
                                                        <div class="category">Business</div>
                                                        <h3 class="title"><Link to={'/shop'}>Office Chair</Link></h3>
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
                                        {/* <!--End single product item--> */}
                                        {/* <!--Start single product item--> */}
                                        <div class="col-lg-4 col-md-6">
                                            <div class="single-product-item text-center wow fadeInUp" data-wow-delay="1900ms">
                                                <div class="img-holder">
                                                    <img src={require('../../assets/images/shop/9.jpg')} alt="Awesome Product " />
                                                    <div class="price">$250</div>
                                                    <div class="overlay-btn"><Link to={'/#'} class="theme-btn btn-style-one"><span class="btn-title">Add To Cart</span></Link></div>
                                                </div>
                                                <div class="title-holder">
                                                    <div class="static-content">
                                                        <div class="category">Business</div>
                                                        <h3 class="title"><Link to={'/shop'}>Office Chair</Link></h3>
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
                                        {/* <!--End single product item--> */}
                                        {/* <!--Start single product item--> */}
                                        <div class="col-lg-4 col-md-6">
                                            <div class="single-product-item text-center wow fadeInUp" data-wow-delay="1900ms">
                                                <div class="img-holder">
                                                    <img src={require('../../assets/images/shop/10.jpg')} alt="Awesome Product " />
                                                    <div class="price">$250</div>
                                                    <div class="overlay-btn"><Link to={'/#'} class="theme-btn btn-style-one"><span class="btn-title">Add To Cart</span></Link></div>
                                                </div>
                                                <div class="title-holder">
                                                    <div class="static-content">
                                                        <div class="category">Business</div>
                                                        <h3 class="title"><Link to={'/shop'}>Office Chair</Link></h3>
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
                                        {/* <!--End single product item--> */}
                                        {/* <!--Start single product item--> */}
                                        <div class="col-lg-4 col-md-6">
                                            <div class="single-product-item text-center wow fadeInUp" data-wow-delay="1900ms">
                                                <div class="img-holder">
                                                    <img src={require('../../assets/images/shop/11.jpg')} alt="Awesome Product " />
                                                    <div class="price">$250</div>
                                                    <div class="overlay-btn"><Link to={'/#'} class="theme-btn btn-style-one"><span class="btn-title">Add To Cart</span></Link></div>
                                                </div>
                                                <div class="title-holder">
                                                    <div class="static-content">
                                                        <div class="category">Business</div>
                                                        <h3 class="title"><Link to={'/shop'}>Office Chair</Link></h3>
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
                                        {/* <!--End single product item--> */}
                                        {/* <!--Start single product item--> */}
                                        <div class="col-lg-4 col-md-6">
                                            <div class="single-product-item text-center wow fadeInUp" data-wow-delay="1900ms">
                                                <div class="img-holder">
                                                    <img src={require('../../assets/images/shop/12.jpg')} alt="Awesome Product " />
                                                    <div class="price">$250</div>
                                                    <div class="overlay-btn"><Link to={'/#'} class="theme-btn btn-style-one"><span class="btn-title">Add To Cart</span></Link></div>
                                                </div>
                                                <div class="title-holder">
                                                    <div class="static-content">
                                                        <div class="category">Business</div>
                                                        <h3 class="title"><Link to={'/shop'}>Office Chair</Link></h3>
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
                                        {/* <!--End single product item--> */}
                                    </div>
                                    {/* <!--Start post pagination--> */}
                                </div>
                            </div>

                            {/* <!--Start sidebar Wrapper--> */}
                            <div class="col-lg-3 col-md-8">
                                <div class="sidebar-wrapper">
                                    {/* <!--Start single sidebar--> */}
                                    <div class="single-sidebar-box-two">
                                        <form class="search-form" action="#">
                                            <input placeholder="Search..." type="text" />
                                            <button type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
                                        </form>
                                    </div>
                                    {/* <!--End single sidebar--> */}
                                    {/* <!--Start single sidebar--> */}
                                    <div class="single-sidebar-box">
                                        <div class="sidebar-title">
                                            <h3>Categories</h3>
                                        </div>
                                        <ul class="categories clearfix">
                                            <li><Link to={'/#'}>Furnitures</Link></li>
                                            <li><Link to={'/#'}>Wall Posters</Link></li>
                                            <li><Link to={'/#'}>Kitchen</Link></li>
                                            <li><Link to={'/#'}>Living Room</Link></li>
                                        </ul>
                                    </div>
                                    {/* <!--End single sidebar--> */}
                                    {/* <!--Start single sidebar-->  */}
                                    <div class="single-sidebar-box">
                                        <div class="sidebar-title">
                                            <h3>Filter by Price</h3>
                                        </div>
                                        <div class="price-ranger">
                                            <RangeSliderBar />
                                            {/* <div class="ranger-min-max-block">
                                                <span>Price:</span>
                                                <input type="text" readonly class="min" />
                                                <span>-</span>
                                                <input type="text" readonly class="max" />
                                                <input type="submit" value="Filter By" />
                                            </div> */}
                                        </div>
                                    </div>
                                    {/* <!--End single sidebar--> */}
                                    {/* <!--Start single sidebar--> */}
                                    <div class="single-sidebar-box">
                                        <div class="sidebar-title">
                                            <h3>Popular Products</h3>
                                        </div>
                                        <ul class="products-post">
                                            <li>
                                                <div class="img-holder">
                                                    <img src={require('../../assets/images/shop/popular-product-1.jpg')} alt="Awesome " />
                                                    <div class="overlay-style-one">
                                                        <div class="box">
                                                            <div class="content">
                                                                <Link to={'/#'}><span class="fa fa-link"></span></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="title-holder">
                                                    <h5 class="post-title"><Link to={'/#'}>Office Chair</Link></h5>
                                                    <span>$34.99</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="img-holder">
                                                    <img src={require('../../assets/images/shop/popular-product-2.jpg')} alt="Awesome " />
                                                    <div class="overlay-style-one">
                                                        <div class="box">
                                                            <div class="content">
                                                                <Link to={'/#'}><span class="fa fa-link"></span></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="title-holder">
                                                    <h5 class="post-title"><Link to={'/#'}>Garden Chair</Link></h5>
                                                    <span>$29.00</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="img-holder">
                                                    <img src={require('../../assets/images/shop/popular-product-3.jpg')} alt="Awesome " />
                                                    <div class="overlay-style-one">
                                                        <div class="box">
                                                            <div class="content">
                                                                <Link to={'/#'}><span class="fa fa-link"></span></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="title-holder">
                                                    <h5 class="post-title"><Link to={'/#'}>Study Lamp</Link></h5>
                                                    <span>$24.99</span>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                    {/* <!--End single sidebar--> */}
                                    {/* <!--Start single sidebar-->  */}
                                    <div class="single-sidebar-box-two">
                                        <div class="add-banner-widget" style={{ backgroundImage: "url(" + addbg + ")" }}>
                                            <div class="content">
                                                <h5>350x600</h5>
                                                <h3>Add Banner</h3>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--End single sidebar--> */}
                                </div>
                            </div>
                            {/* <!--End Sidebar Wrapper--> */}

                        </div>
                    </div>
                </section>
                {/* <!--End Shop Section--> */}



                <Footer />
            </>
        )
    }
}
export default Shop;