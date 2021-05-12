import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Navlink } from "react-router-dom";
const helpbg = require("./../../assets/images/background/image-18.jpg");
const percentage1 = 80;

class Investp extends Component {
  render() {
    return (
      <>
        <investp class="main-invester">
          <div class="sidebar-page-container">
            <div class="auto-container">
              <div class="row">
                <aside class="sidebar">
                  {/* <!-- Category Widget --> */}
                  <div class="sidebar-widget-two categories-widget-two">
                    <div class="widget-content">
                      <ul>
                        <li>
                          <NavLink activeClassName='active' to={"/offshoreinvestment"}>
                            Offshore Investments{" "}
                            <i class="fa fa-angle-right"></i>
                            </NavLink>
                          
                        </li>
                        <li>
                          <NavLink activeClassName='active' to={"/regularsaving"}>
                            Regular Savings <i class="fa fa-angle-right"></i>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink activeClassName='active' to={"/planningforretirement"}>
                            Planning For Retirement{" "}
                            <i class="fa fa-angle-right"></i>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink activeClassName='active' to={"/investingforchildren"}>
                            Investing For Children{" "}
                            <i class="fa fa-angle-right"></i>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink activeClassName='active' to={"/Offshorebanking"}>
                            Offshore Banking <i class="fa fa-angle-right"></i>
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* <!-- Contact Form Widget --> */}
                  <div class="sidebar-widget-two contact-form-widget">
                    <div class="inner-box">
                      <h3>Contact Form</h3>
                      {/* <!-- Contact Form--> */}
                      <div class="contact-form">
                        <form
                          method="post"
                          action="http://azim.commonsupport.com/Finandox/sendemail.php"
                          id="contact-form"
                        >
                          <div class="row clearfix">
                            <div class="col-md-12 form-group">
                              <input
                                type="text"
                                name="username"
                                placeholder="Enter name here......"
                                required=""
                              />
                              <i class="fal fa-user"></i>
                            </div>

                            <div class="col-md-12 form-group">
                              <input
                                type="email"
                                name="email"
                                placeholder="Enter email here......"
                                required=""
                              />
                              <i class="fal fa-envelope"></i>
                            </div>

                            <div class="col-md-12 form-group">
                              <input
                                type="email"
                                name="email"
                                placeholder="Enter Phone Number......"
                                required=""
                              />
                              <i class="fal fa-phone"></i>
                            </div>

                            <div class="col-md-12 form-group text-center">
                              <button
                                class="theme-btn btn-style-one"
                                type="submit"
                                name="submit-form"
                              >
                                <span class="btn-title">Submit Now</span>
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Contact Info Widget --> */}
                  <div class="sidebar-widget-two contact-info-widget">
                    <div
                      class="inner-box"
                      style={{ backgroundImage: "url(" + helpbg + ")" }}
                    >
                      <h3>Need Help?</h3>
                      <ul>
                        <li>
                          <Link to={"/mailto:info@webmail.com"}>
                            info@webmail.com
                          </Link>
                        </li>
                        <li>
                          <Link to={"/tel:+98787676576"}>+987 876 765 76</Link>
                        </li>
                        <li>
                          <Link to={"/mailto:support.example.com"}>
                            support.example.com
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </aside>

                {/*<div class="col-lg-8">
                        <div class="services-details pl-lg-5">
                            <div class="image-box"><img src={require('../../assets/images/resource/service-1.jpg')} alt=""/></div>
                            <div class="content">
                                <div class="sec-title">
                                    <div class="sub-title">Financial Planning</div>
                                    <h2>We Support Our Clients Five <br/> Working Days.</h2>
                                </div>
                                <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto . Lorem ipsum dolor sit amet, consectetur adipisicing elit,.</div>
                                <blockquote>
                                    <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                                    <h4>Rosalina D. William</h4>
                                </blockquote>
                                <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.</div>
                            </div>
                            <div class="graph">
                                <div class="row">
                                    <div class="col-md-8">
                                        <img src={require('../../assets/images/resource/graph-2.png')} alt=""/>
                                    </div>
                                    <div class="col-md-4">
                                    <div class="progress-block">
                                        <div class="inner-box">
                                            <CircularProgressbar value={percentage1} text={`${percentage1}%`} />;
                                        </div>
                                        <div class="counter-title">Affairs Advisors</div>
                                    </div>
                                </div>
                                </div>
                            </div>
                           
                        </div>
        </div>*/}
              </div>
            </div>
          </div>
        </investp>
      </>
    );
  }
}

export default Investp;
