import React, { useState } from "react";
import { Link } from 'react-router-dom';

const gallerybg = require('./../../assets/images/background/image-14.jpg');

const images = [
    {
        id: 1,
        name: "mountains",
        banking: true,
        imgUrl: require('../../assets/images/gallery/gallery-12.jpg')
    },
    {
        id: 2,
        name: "lights",
        banking: true,
        imgUrl: require('../../assets/images/gallery/gallery-15.jpg')
    },
    {
        id: 3,
        name: "forest",
        insurance: true,
        imgUrl: require('../../assets/images/gallery/gallery-13.jpg')
    },
    {
        id: 4,
        name: "retro",
        insurance: true,
        imgUrl: require('../../assets/images/gallery/gallery-14.jpg')
    },
    {
        id: 5,
        name: "fast",
        insurance: true,
        imgUrl: require('../../assets/images/gallery/gallery-16.jpg')
    },
    {
        id: 6,
        name: "classic",
        insurance: true,
        imgUrl: require('../../assets/images/gallery/gallery-17.jpg')
    },
    {
        id: 7,
        name: "girl",
        family: true,
        imgUrl: require('../../assets/images/gallery/gallery-11.jpg')
    },
    {
        id: 8,
        name: "man",
        family: true,
        imgUrl: require('../../assets/images/gallery/gallery-13.jpg')
    },
    {
        id: 9,
        name: "woman",
        family: true,
        imgUrl: require('../../assets/images/gallery/gallery-14.jpg')
    },
    {
        id: 10,
        name: "girl",
        family: true,
        imgUrl: require('../../assets/images/gallery/gallery-17.jpg')
    },
    {
        id: 11,
        name: "man",
        business: true,
        imgUrl: require('../../assets/images/gallery/gallery-11.jpg')
    },
    {
        id: 12,
        name: "woman",
        business: true,
        imgUrl: require('../../assets/images/gallery/gallery-15.jpg')
    }
];

const FILTER_DEFS = {
    BANKING: image => image.banking,
    INSURANCE: image => image.insurance,
    FAMILY: image => image.family,
    BUSINESS: image => image.business,
    NONE: image => image
};

const ServiceFilter1 = props => {
    const [state, setState] = useState({
        list: images,
        filterKey: "NONE"
    });

    const { list, filterKey } = state;
    const filteredList = list.filter(FILTER_DEFS[filterKey]);
    return (
        <>
            <section class="gallery-section">
                <div class="sec-bg" style={{ backgroundImage: "url(" + gallerybg + ")" }}></div>
                <div class="sortable-masonry">

                    <div class="auto-container">
                        <div class="sec-title light text-center">
                            <div class="sub-title">Portfolio</div>
                            <h2>See What Kind Of <br />Work We Have Done</h2>
                        </div>
                        {/* <!--Filter--> */}
                        <div class="filters text-center light">
                            <ul class="filter-tabs filter-btns">
                                <li class="active filter" onClick={() => setState({ ...state, filterKey: "NONE" })}><span>Financial</span></li>
                                <li class="filter" onClick={() => setState({ ...state, filterKey: "BANKING" })}><span>Banking</span></li>
                                <li class="filter" onClick={() => setState({ ...state, filterKey: "INSURANCE" })}><span>Insurance </span></li>
                                <li class="filter" onClick={() => setState({ ...state, filterKey: "FAMILY" })}><span>Family</span></li>
                                <li class="filter" onClick={() => setState({ ...state, filterKey: "BUSINESS" })}><span>Business</span></li>
                            </ul>
                        </div>
                    </div>
                    <div class="auto-container">
                        <div class="items-container row">
                            {/* <!-- Gallery Block One --> */}
                            {filteredList.map(image => (
                                <div class="col-lg-4 col-md-6 gallery-block-one" key={image.id}>
                                    <div class="inner-box">
                                        <div class="image">
                                            <img src={image.imgUrl} alt="" />
                                        </div>
                                        <div class="caption-title">
                                            <h5>{image.name}</h5>
                                            <h3><Link to={'/#'}>Miranda Hilix Bar</Link></h3>
                                            <div class="view-project"><Link data-fancybox="example gallery" to="assets/images/gallery/gallery-10.jpg" class="zoom-btn"><span>+</span></Link></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceFilter1;
