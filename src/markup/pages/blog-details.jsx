import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'

const aboutbg = require('./../../assets/images/background/image-11.jpg');
const addbg = require('./../../assets/images/background/image-15.jpg');


class BlogDestails extends Component {


    render() {
        return (
            <>
                <Header />



                {/* Search Popup */}
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
                {/* Page Banner Section */}
                <section class="page-banner">
                    <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
                    <div class="bottom-rotten-curve alternate"></div>

                    <div class="auto-container">
                        <h1>Blog Details</h1>
                        <ul class="bread-crumb clearfix">
                            <li><Link to={'/#'}>Home</Link></li>
                            <li class="active">Blog</li>
                        </ul>
                    </div>

                </section>

                {/* Sidebar Page Container */}
                <div class="sidebar-page-container">
                    <div class="auto-container">
                        <div class="row">
                            <div class="col-lg-8">
                            {/* News Block Two */}
                                <div class="news-block-two blog-single-post">
                                    <div class="inner-box">                            
                                        <div class="lower-content">
                                            <div class="category">Business</div>
                                            <ul class="post-meta">
                                                <li><Link to={'/#'}><i class="far fa-eye"></i>332 Views</Link></li>
                                                <li><Link to={'/#'}><i class="far fa-comments"></i>35 Comments</Link></li>
                                                <li><Link to={'/#'}><i class="far fa-calendar-alt"></i>26th March 2020</Link></li>
                                            </ul>
                                            <h2>Lorem ipsum dolor sit amet, consecte <br/>cing elit, sed do eiusmod tempor.</h2>
                                            <div class="text"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p></div>
                                            <div class="image"><Link to={'/#'}><img src={require('../../assets/images/resource/news-7.jpg')} alt=""/></Link></div>
                                            <div class="text-block-wrapper">
                                                <div class="text-block">
                                                    <h3>A cleansing hot shower or bath</h3>
                                                    <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. </div>
                                                </div>
                                                <div class="text-block">
                                                    <h3>Setting the mood with incense</h3>
                                                    <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. </div>
                                                </div>
                                                <div class="text-block">
                                                    <h3>Excepteur sint occaecat cupidatat</h3>
                                                    <ul class="list">
                                                        <li><i class="fas fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.</li>
                                                        <li><i class="fas fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.</li>
                                                        <li><i class="fas fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.</li>
                                                        <li><i class="fas fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.</li>
                                                        <li><i class="fas fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <blockquote>
                                                <h5>by Hetmayar</h5>
                                                <div class="text">Viral dreamcatcher keytar typewriter, aest hetic offal umami. Aesthetic polaroid pug pitchfork post-ironic.</div>
                                                <div class="quote-icon"><span class="fa fa-quote-left"></span></div>
                                            </blockquote>
                                            <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium. </div>
                                            <div class="row">
                                                <div class="col-md-5">
                                                    <div class="image"><Link to={'/#'}><img src={require('../../assets/images/resource/news-8.jpg')}  alt=""/></Link></div>
                                                </div>
                                                <div class="col-md-7">
                                                    <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</div>
                                                </div>
                                            </div>
                                            <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.  </div>
                                            <div class="post-share">
                                                <div class="left-column">
                                                    <h4>Releted Tags</h4>
                                                    <ul class="tag-list clearfix">
                                                        <li><Link to={'/blog-details'}><span>Popular</span></Link></li>
                                                        <li><Link to={'/blog-details'}><span>desgin</span></Link></li>
                                                        <li><Link to={'/blog-details'}><span>ux</span></Link></li>
                                                    </ul>
                                                </div>
                                                <div class="right-column">
                                                    <h4>Social Share</h4>
                                                    <ul class="social-links">
                                                        <li><Link to={'/#'}><span class="fab fa-facebook-f"></span></Link></li>
                                                        <li><Link to={'/#'}><span class="fab fa-twitter"></span></Link></li>
                                                        <li><Link to={'/#'}><span class="fab fa-behance"></span></Link></li>
                                                        <li><Link to={'/#'}><span class="fab fa-linkedin-in"></span></Link></li>
                                                        <li><Link to={'/#'}><span class="fab fa-youtube"></span></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="blog-post-pagination">
                                                <div class="wrapper-box">
                                                    
                                                    <div class="prev-post">
                                                        <h5> Previous Post</h5>
                                                        <h4>Tips On Minimalist</h4>
                                                    </div>

                                                    <div class="page-view"><span class="fa fa-th"></span></div>
                                                    
                                                    <div class="next-post">
                                                        <h5>Next Topic </h5>
                                                        <h4>Less Is More</h4>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            <div class="related-post">
                                                <div class="group-title">
                                                    <h3>Related Post</h3>
                                                </div>
                                                <div class="row">
                                                    <div class="news-block-five col-md-6">
                                                        <div class="inner-box">
                                                            <div class="image"><Link to={'/#'}><img src={require('../../assets/images/resource/news-10.jpg')} alt=""/></Link></div>
                                                            <div class="lower-content">
                                                                <ul class="post-meta">
                                                                    <li><Link to={'/#'}><i class="far fa-calendar-alt"></i>24th March 2020</Link></li>
                                                                </ul>
                                                                <h3><Link to={'/blog-details'}>A series of iOS 7 inspire vector icons sense.</Link></h3>
                                                                <div class="text">Lorem ipsum dolor sit amet, conse ctet ur adipisicing elit, sed doing.</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="news-block-five col-md-6">
                                                        <div class="inner-box">
                                                            <div class="image"><Link to={'/#'}><img src={require('../../assets/images/resource/news-11.jpg')} alt=""/></Link></div>
                                                            <div class="lower-content">
                                                                <ul class="post-meta">
                                                                    <li><Link to={'/#'}><i class="far fa-calendar-alt"></i>24th March 2020</Link></li>
                                                                </ul>
                                                                <h3><Link to={'/blog-details'}>A series of iOS 7 inspire vector icons sense.</Link></h3>
                                                                <div class="text">Lorem ipsum dolor sit amet, conse ctet ur adipisicing elit, sed doing.</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>                                        
                                            </div>
                                            <div class="author-box-two">
                                                <div class="wrapper-area">
                                                    <div class="img-box">
                                                        <img src={require('../../assets/images/resource/author-3.jpg')} alt="Awesome "/>
                                                    </div>
                                                    <div class="content">
                                                        <h5>Written by</h5>
                                                        <h3>Steve Anderson</h3>
                                                        <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation is enougn for today.</div>
                                                    </div>
                                                        
                                                </div>
                                            </div>
                                            <div class="comments-area">
                                                <div class="group-title">
                                                    <h3>03 Comments</h3>
                                                </div>
                                                {/* <!--Comment Box--> */}
                                                <div class="comment-box">
                                                    <div class="comment">
                                                        <div class="author-thumb"><img src={require('../../assets/images/resource/thumb-12.jpg')} alt=""/></div>
                                                        <div class="comment-inner">
                                                            <div class="comment-info"><h5>Rosalina Kelian</h5><span class="date">February 18, 2020</span></div>
                                                            <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                                                            <Link class="reply-btn" to={'/#'}><span class="fal fa-reply"></span> Reply</Link>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* <!--Comment Box--> */}
                                                <div class="comment-box comment-reply">
                                                    <div class="comment">
                                                        <div class="author-thumb"><img src={require('../../assets/images/resource/thumb-13.jpg')} alt=""/></div>
                                                        <div class="comment-inner">
                                                            <div class="comment-info"><h5>Steven Rich</h5><span class="date">February 20, 2020</span></div>
                                                            <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</div>
                                                            <Link class="reply-btn" to={'/#'}><span class="fal fa-reply"></span> Reply</Link>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* <!--Comment Box--> */}
                                                <div class="comment-box">
                                                    <div class="comment">
                                                        <div class="author-thumb"><img src={require('../../assets/images/resource/thumb-14.jpg')} alt=""/></div>
                                                        <div class="comment-inner">
                                                            <div class="comment-info"><h5>William Cobus</h5><span class="date">February 25, 2020</span></div>
                                                            <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                                                            <Link class="reply-btn" to={'/#'}><span class="fal fa-reply"></span> Reply</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="comment-form">
                                                <div class="group-title">
                                                    <h3>Post Comment</h3>
                                                </div>
                                                {/* Contact Form */}
                                                <div class="contact-form">
                                                    <form method="post" action="http://azim.commonsupport.com/Finandox/sendemail.php" id="contact-form">
                                                        <div class="row clearfix">                                    
                                                            <div class="col-md-12 form-group">
                                                                <textarea name="message" placeholder="Enter message here......"></textarea>
                                                                <i class="fas fa-edit"></i>
                                                            </div>

                                                            <div class="col-md-12 form-group">
                                                                <input type="text" name="username" placeholder="Enter name here......" required=""/>
                                                                <i class="fas fa-user"></i>
                                                            </div>
                                                            
                                                            <div class="col-md-12 form-group">
                                                                <input type="email" name="email" placeholder="Enter email here......" required=""/>
                                                                <i class="fas fa-envelope"></i>
                                                            </div> 

                                                            <div class="col-md-12 form-group">
                                                                <input type="email" name="email" placeholder="Type your website...." required=""/>
                                                                <i class="fas fa-globe"></i>
                                                            </div>                        
                                    
                                                            <div class="col-md-12 form-group">
                                                                <button class="theme-btn btn-style-one" type="submit" name="submit-form"><span class="btn-title">Post Comment</span></button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <aside class="sidebar">

                                    {/* <!-- About Widget --> */}
                                    <div class="sidebar-widget about-me">
                                        <div class="sidebar-title"><h3>About Me</h3></div>
                                        <div class="widget-content">
                                            <div class="image"><img src={require('../../assets/images/resource/author-2.jpg')} alt=""/></div>
                                            <h4>Rosalina D. Willaimson</h4>
                                            <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</div>
                                            <ul class="social-links">
                                                <li><Link to={'/#'}><span class="fab fa-facebook-f"></span></Link></li>
                                                <li><Link to={'/#'}><span class="fab fa-twitter"></span></Link></li>
                                                <li><Link to={'/#'}><span class="fab fa-behance"></span></Link></li>
                                                <li><Link to={'/#'}><span class="fab fa-linkedin-in"></span></Link></li>
                                                <li><Link to={'/#'}><span class="fab fa-youtube"></span></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    {/* <!-- Search --> */}
                                    <div class="sidebar-widget search-box">
                                        <div class="sidebar-title"><h3>Search Objects</h3></div>
                                        <form method="post" action="http://azim.commonsupport.com/Finandox/contact.html">
                                            <div class="form-group">
                                                <input type="search" name="search-field" value="" placeholder="Search your keyword..." required=""/>
                                                <button type="submit"><span class="icon far fa-search"></span></button>
                                            </div>
                                        </form>
                                    </div>

                                    {/* <!-- Post Widget --> */}
                                    <div class="sidebar-widget popular-posts">
                                        <div class="sidebar-title"><h3>Popular Feeds</h3></div>
                                        <div class="widget-content">
                                            
                                            {/* <!--News Post--> */}
                                            <div class="news-post">
                                                <div class="post-thumb"><Link to={'/blog-details'}><img src={require('../../assets/images/resource/thumb-8.jpg')} data-src="" alt=""/></Link></div>
                                                <div class="date"><span class="fa fa-calendar-alt"></span> Feb 25, 2020</div>
                                                <h4><Link to={'/blog-details'}>Lorem ipsum dolor sit <br/>cing elit, sed do. </Link></h4>
                                            </div>
                                            {/* <!--News Post--> */}
                                            <div class="news-post">
                                                <div class="post-thumb"><Link to={'/blog-details'}><img src={require('../../assets/images/resource/thumb-9.jpg')} alt=""/></Link></div>
                                                <div class="date"><span class="fa fa-calendar-alt"></span> Feb 20, 2020</div>
                                                <h4><Link to={'/blog-details'}>Lorem ipsum dolor sit <br/>cing elit, sed do.</Link></h4>
                                            </div>
                                            {/* <!--News Post--> */}
                                            <div class="news-post">
                                                <div class="post-thumb"><Link to={'/blog-details'}><img src={require('../../assets/images/resource/thumb-10.jpg')} alt=""/></Link></div>
                                                <div class="date"><span class="fa fa-calendar-alt"></span> Feb 14, 2020</div>
                                                <h4><Link to={'/blog-details'}>Lorem ipsum dolor sit <br/> cing elit, sed do.</Link></h4>
                                            </div>
                                            {/* <!--News Post--> */}
                                            <div class="news-post">
                                                <div class="post-thumb"><Link to={'/blog-details'}><img src={require('../../assets/images/resource/thumb-11.jpg')}  alt=""/></Link></div>
                                                <div class="date"><span class="fa fa-calendar-alt"></span> Feb 14, 2020</div>
                                                <h4><Link to={'/blog-details'}>Lorem ipsum dolor sit <br/> cing elit, sed do.</Link></h4>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Category Widget --> */}
                                    <div class="sidebar-widget categories">
                                        <div class="sidebar-title"><h3>Categories</h3></div>
                                        <div class="widget-content">
                                            <ul>
                                                <li class="current"><Link to={'/blog-details'}>Business</Link> <span class="total-post">26</span></li>
                                                <li><Link to={'/blog-details'}>Consultant</Link> <span class="total-post">30</span></li>
                                                <li><Link to={'/blog-details'}>Creative</Link> <span class="total-post">71</span></li>
                                                <li><Link to={'/blog-details'}>UI/UX</Link> <span class="total-post">68</span></li>
                                                <li><Link to={'/blog-details'}>Technology</Link><span class="total-post">70</span></li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* <!-- Social Icon --> */}
                                    <div class="sidebar-widget social-links-widget">
                                        <div class="sidebar-title"><h3>Never Miss News</h3></div>
                                        <div class="widget-content">
                                            <ul class="social-links">
                                                <li><Link to={'/#'}><span class="fab fa-facebook-f"></span></Link></li>
                                                <li><Link to={'/#'}><span class="fab fa-twitter"></span></Link></li>
                                                <li><Link to={'/#'}><span class="fab fa-behance"></span></Link></li>
                                                <li><Link to={'/#'}><span class="fab fa-linkedin-in"></span></Link></li>
                                                <li><Link to={'/#'}><span class="fab fa-pinterest-p"></span></Link></li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* <!-- Twitter Widget --> */}
                                    <div class="sidebar-widget twitter-widget">
                                        <div class="sidebar-title"><h3>Twitter Feeds</h3></div>
                                        <div class="widget-content">
                                            <div class="post">
                                                <div class="icon"><span class="fab fa-twitter"></span></div>
                                                <div class="text">Rescue - #Gutenberg ready @ wordpress Theme for Creative Bloggers available on @ ThemeForest https://t.co/2r1POjOjgV C… https://t.co/rDAnPyClu1</div>
                                                <div class="date">Jan 25, 2020</div>
                                            </div>
                                            <div class="post">
                                                <div class="icon"><span class="fab fa-twitter"></span></div>
                                                <div class="text">Rescue - #Gutenberg ready @ wordpress Theme for Creative Bloggers available on @ ThemeForest https://t.co/2r1POjOjgV C… https://t.co/rDAnPyClu1</div>
                                                <div class="date">Jan 25, 2020</div>
                                            </div>
                                            <div class="post">
                                                <div class="icon"><span class="fab fa-twitter"></span></div>
                                                <div class="text">Rescue - #Gutenberg ready @ wordpress Theme for Creative Bloggers available on @ ThemeForest https://t.co/2r1POjOjgV C… https://t.co/rDAnPyClu1</div>
                                                <div class="date">Jan 25, 2020</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Gallery Widget --> */}
                                    <div class="sidebar-widget instagram-widget">
                                        <div class="sidebar-title"><h3>Instagram Feeds</h3></div>
                                        <div class="inner-box">
                                            <div class="wrapper-box">
                                                <div class="image">
                                                    <img  src={require('../../assets/images/gallery/instagram-1.jpg')} alt=""/>
                                                    <div class="overlay-link"><Link to={'/assets/images/gallery/instagram-1.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div class="image">
                                                    <img  src={require('../../assets/images/gallery/instagram-2.jpg')} alt=""/>
                                                    <div class="overlay-link"><Link to={'/assets/images/gallery/instagram-2.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div class="image">
                                                    <img  src={require('../../assets/images/gallery/instagram-3.jpg')} alt=""/>
                                                    <div class="overlay-link"><Link to={'/assets/images/gallery/instagram-3.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div class="image">
                                                    <img  src={require('../../assets/images/gallery/instagram-4.jpg')} alt=""/>
                                                    <div class="overlay-link"><Link to={'/assets/images/gallery/instagram-4.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div class="image">
                                                    <img  src={require('../../assets/images/gallery/instagram-5.jpg')} alt=""/>
                                                    <div class="overlay-link"><Link to={'/assets/images/gallery/instagram-5.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div class="image">
                                                    <img  src={require('../../assets/images/gallery/instagram-6.jpg')} alt=""/>
                                                    <div class="overlay-link"><Link to={'/assets/images/gallery/instagram-6.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div class="image">
                                                    <img  src={require('../../assets/images/gallery/instagram-7.jpg')} alt=""/>
                                                    <div class="overlay-link"><Link to={'/assets/images/gallery/instagram-7.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div class="image">
                                                    <img  src={require('../../assets/images/gallery/instagram-8.jpg')} alt=""/>
                                                    <div class="overlay-link"><Link to={'/assets/images/gallery/instagram-8.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div class="image">
                                                    <img  src={require('../../assets/images/gallery/instagram-9.jpg')} alt=""/>
                                                    <div class="overlay-link"><Link to={'/assets/images/gallery/instagram-9.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                            </div>
                                            {/* <!-- /.gallery-wrapper --> */}
                                        </div>
                                    </div>

                                    {/* <!-- Tags Widget --> */}
                                    <div class="sidebar-widget popular-tags">
                                        <div class="sidebar-title"><h3>Popular Tags</h3></div>
                                        <div class="widget-content">
                                            <ul class="clearfix">
                                                <li><Link to={'/blog-details'}><span>Popular</span></Link></li>
                                                <li><Link to={'/blog-details'}><span>desgin</span></Link></li>
                                                <li><Link to={'/blog-details'}><span>ux</span></Link></li>
                                                <li><Link to={'/blog-details'}><span>usability</span></Link></li>
                                                <li><Link to={'/blog-details'}><span>develop</span></Link></li>
                                                <li><Link to={'/blog-details'}><span>icon</span></Link></li>
                                                <li><Link to={'/blog-details'}><span>business</span></Link></li>
                                                <li><Link to={'/blog-details'}><span>consult</span></Link></li>
                                                <li><Link to={'/blog-details'}><span>kit</span></Link></li>
                                                <li><Link to={'/blog-details'}><span>keyboard</span></Link></li>
                                                <li><Link to={'/blog-details'}><span>mouse</span></Link></li>
                                                <li><Link to={'/blog-details'}><span>tech</span></Link></li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* <!-- Add Banner Widget --> */}
                                    <div class="sidebar-widget">
                                        <div class="add-banner-widget" style={{ backgroundImage: "url(" + addbg + ")" }}>
                                            <div class="content">
                                                <h5>350x600</h5>
                                                <h3>Add Banner</h3>
                                            </div>
                                        </div>
                                    </div>              
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </>
        )
    }
}
export default BlogDestails;