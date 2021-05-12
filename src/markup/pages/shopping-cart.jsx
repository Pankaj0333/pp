import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'


const aboutbg = require('./../../assets/images/background/image-11.jpg');

class ShoppingCart extends Component {

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
        return (
            <>
                <Header/>


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
                                        <input type="submit" value="Search Now!" class="theme-btn"/>
                                    </fieldset>
                                </div>
                            </form>
                            <br/>
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
                        <h1>Shopping Cart</h1>
                        <ul class="bread-crumb clearfix">
                            <li><Link to={'/#'}>Home</Link></li>
                            <li class="active">Shop</li>
                        </ul>
                    </div>

                </section>
                {/* <!--End Banner Section --> */}
                {/* <!--Cart section--> */}
                <section class="cart-area">
                    <div class="auto-container">
                        <div class="row">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <ul class="total-item-info">
                                    <li><span>Your Cart:</span> 3 Items</li>
                                    <li><span>Total :</span> $94.97</li>
                                </ul>
                                <div class="table-outer">
                                    <table class="cart-table">
                                        <thead class="cart-header">
                                            <tr>
                                                <th class="prod-column">Products</th>
                                                <th class="hide-column"></th>
                                                <th>Quantity</th>
                                                <th class="availability">Availability</th>
                                                <th class="price">Price</th>
                                                <th>Total</th>
                                                <th>Remove</th>
                                            </tr>    
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td colspan="2" class="prod-column">
                                                    <div class="column-box">
                                                        <div class="prod-thumb">
                                                            <Link to={'/#'}><img src={require('../../assets/images/shop/1.jpg')} alt=""/></Link>
                                                        </div>
                                                        <div class="title">
                                                            <h3 class="prod-title">Power Remote</h3>
                                                        </div>    
                                                    </div>
                                                </td>
                                                <td class="qty">
                                                    <div class="quantity">
                                                        <button className="btn btn-primary" onClick={this.onAdderDecrease}>-</button>
                                                        <span>{this.state.adder}</span>
                                                        <button className="btn btn-primary" onClick={this.onAdderIncrease}>+</button>
                                                    </div>
                                                </td>
                                                <td class="unit-price">
                                                    <div class="available-info">
                                                        <span class="icon fa fa-check thm-bg-clr"></span>Item(s)<br/>Avilable Now
                                                    </div>
                                                </td>
                                                <td class="price">$34.99</td>
                                                <td class="sub-total">$69.98</td>
                                                <td>
                                                    <div class="remove">
                                                        <div class="checkbox">
                                                            <span class="flaticon-cross"></span>
                                                        </div>   
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="2" class="prod-column">
                                                    <div class="column-box">
                                                        <div class="prod-thumb">
                                                            <Link to={'/#'}><img src={require('../../assets/images/shop/2.jpg')} alt=""/></Link>
                                                        </div>
                                                        <div class="title">
                                                            <h3 class="prod-title">USB Power Bank</h3>
                                                        </div>    
                                                    </div>
                                                </td>
                                                <td class="qty">
                                                    <div class="quantity">
                                                        <button className="btn btn-primary" onClick={this.onAdderDecrease}>-</button>
                                                        <span>{this.state.adder}</span>
                                                        <button className="btn btn-primary" onClick={this.onAdderIncrease}>+</button>
                                                    </div>
                                                </td>
                                                <td class="unit-price">
                                                    <div class="available-info">
                                                        <span class="icon fa fa-check thm-bg-clr"></span>Item(s)<br/>Avilable Now
                                                    </div>
                                                </td>
                                                <td class="price">$29.99</td>
                                                <td class="sub-total">$87.97</td>
                                                <td>
                                                    <div class="remove">
                                                        <div class="checkbox">
                                                            <span class="flaticon-cross"></span>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>     
                        </div>
                        
                        <div class="row cart-middle">
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div class="apply-coupon">
                                    <input type="text" name="coupon-code" value="" placeholder="Enter Coupon Code..."/>
                                    <div class="apply-coupon-button">
                                        <button class="theme-btn btn-style-one" type="button"><span class="btn-title">Apply Coupon</span></button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div class="update-cart pull-right">
                                    <button class="theme-btn btn-style-one" type="button"><span class="btn-title">Update Cart</span></button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </section>


                <Footer/>
            </>
        )
    }
}
export default ShoppingCart;