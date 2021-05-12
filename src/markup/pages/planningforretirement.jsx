import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../layout/navbar";
import Footer from "../layout/footer";
import "../../assets/css/color-2.css";
import Investp from '../layout/investp';
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const counterbg1 = require("./../../assets/images/background/image-5.jpg");
const touchbg = require("./../../assets/images/background/image-8.jpg");

class Planningforretirement extends Component {
  render() {
    return (
      <>
        <Navbar />

        {/* <!--Search Popup--> */}
        <div id="search-popup" class="search-popup">
          <div class="close-search theme-btn">
            <span class="flaticon-cancel"></span>
          </div>
          <div class="popup-inner">
            <div class="overlay-layer"></div>
            <div class="search-form">
              <form
                method="post"
                action="http://azim.commonsupport.com/Finandox/index.html"
              >
                <div class="form-group">
                  <fieldset>
                    <input
                      type="search"
                      class="form-control"
                      name="search-input"
                      value=""
                      placeholder="Search Here"
                      required
                    />
                    <input
                      type="submit"
                      value="Search Now!"
                      class="theme-btn"
                    />
                  </fieldset>
                </div>
              </form>
              <br />
              <h3>Recent Search Keywords</h3>
              <ul class="recent-searches">
                <li>
                  <Link to={"/#"}>Finance</Link>
                </li>
                <li>
                  <Link to={"/#"}>Idea</Link>
                </li>
                <li>
                  <Link to={"/#"}>Service</Link>
                </li>
                <li>
                  <Link to={"/#"}>Growth</Link>
                </li>
                <li>
                  <Link to={"/#"}>Plan</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <!-- Feature Section --> */}
        {/* <!-- About Section Two --> */}
        <section class="main-container">
          <div class="col-lg-4">
            <Investp />
          </div>
          <div class="col-lg-8" style={{ marginTop: "11px" }}>
            {/* <!-- About Section Two --> */}
            <section class="about-section-two">
              <div class="auto-container">
                <div class="row ">
                  <div class="col-lg-12">
                    <div
                      class="content-box wow fadeInUp"
                      data-wow-delay="200ms"
                      data-wow-duration="1200ms"
                    >
                      <div class="sec-title">
                      <div class="sub-title">Planningforretirement</div>
                      <h2>We’ll put you on the right track for retirement.</h2>
                      <p><strong>Whether you’re in the early stages of planning your pension or you’re approaching retirement, we’re here to help you navigate the right path to reach your goals and make the necessary adjustments along the way.</strong></p>
                      <p>It’s important to be clear how much savings you will require to ensure you have sufficient funds when you slow down or stop working. We take a two-tiered approach to planning your post-working future – one that caters towards your desires and dreams and one that takes into account your needs, should anything unexpected happen.</p>
                      <p>Our straightforward guidance and investment partnerships are geared specifically towards the needs of expats – we are here to help you navigate complex issues such as tax, pension transfers and repatriation. </p>
                      <h3>Have you saved enough?</h3>
                      <p>Approaching retirement can be a daunting time for many people. Often there is a big worry that you haven’t save enough. Our advisors can review your portfolio to make sure you are on track. If you’re falling short, there are many options, such as the benefits of compounding the interest on your savings, that will help you reach your retirement target. </p>
                      <h3>Your pension options</h3>
                      <p>Many expats have pensions scattered around the world. As you approach retirement, it’s a good idea to consolidate these pensions, so that you know exactly what you have.</p>
                      <p>Learn more about <a href="http://www.Theclaimconsultaint.com">QROPS, SIPP and UK pension transfers</a>. </p>
                      <h3>Reassessing your risk profile and rebalancing your investments</h3>
                      <p>Before you retire, complete a risk profile questionnaire to ensure that your investments still reflect your attitude towards risk.</p>
                      <h3>Inheritance tax and trust planning</h3>
                      <p>There are many complexities surrounding inheritance tax, but with careful planning it may be possible to avoid paying unnecessary tax and minimise uncertainties surrounding how your estate will be managed. Planning your estate is also vital if you wish for your beneficiaries to inherit your entire estate, rather than the government.</p>
                      <h3>Long term care and disability</h3>
                      <p>By taking a two-tiered approach to planning your post-working future, you will be able to plan for your retirement dreams, as well as cater for your medical needs, should the unexpected happen.</p>
                      <p>Paying for care can be incredibly expensive but with the right insurance in place, you can avoid using your remaining pension or estate, and ensure you don’t become a burden for your family. </p>            
                                            </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>


        {/* <!-- Services Section Two --> */}

        <Footer />
      </>
    );
  }
}
export default Planningforretirement;
