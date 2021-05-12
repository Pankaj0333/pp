import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class ArabicMenu extends Component {


    render() {
        return (
            <>
                <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                    <ul class="navigation clearfix">
                        <li><Link to={'/contact'}>اتصل  </Link></li>
                        <li class="dropdown"><Link to={'/#'}>صفحات  </Link>
                            <ul>
                                <li><Link to={'/careers'}>وظائف  </Link></li>
                                <li><Link to={'/team'}>الفريق  </Link></li>
                                <li><Link to={'/team-details'}>تفاصيل الفريق  </Link></li>

                                <li class="dropdown"><Link to={'/#'}>متجر </Link>
                                    <ul>
                                        <li><Link to={'/shop'}>منتجات  </Link></li>
                                        <li><Link to={'/product-details'}>تفاصيل المنتج  </Link></li>
                                        <li><Link to={'/shopping-cart'}>عربة التسوق  </Link></li>
                                        <li><Link to={'/checkout'}>الدفع  </Link></li>
                                    </ul>
                                </li>
                                <li><Link to={'/faq'}>التعليمات  </Link></li>
                                <li><Link to={'/404'}>404</Link></li>
                            </ul>
                        </li>
                        <li class="dropdown"><Link to={'/#'}>أخبار</Link>
                            <ul>
                                <li><Link to={'/blog-grid'}>شبكة بلوق</Link></li>
                                <li><Link to={'/blog-standard'}>المدونة القياسية </Link></li>
                                <li><Link to={'/blog-details'}>تفاصيل المدونة  </Link></li>
                            </ul>
                        </li>
                        <li class="dropdown"><Link to={'/#'}>محفظة  </Link>
                            <ul>
                                <li><Link to={'/portfolio-1'}>محفظة واحدة  </Link></li>
                                <li><Link to={'/portfolio-2'}>محفظة اثنين  </Link></li>
                                <li><Link to={'/portfolio-details'}>تفاصيل المحفظة  </Link></li>
                            </ul>
                        </li>
                        <li class="dropdown"><Link to={'/#'}>خدمات  </Link>
                            <ul>
                                <li><Link to={'/services-1'}>خدمات واحد  </Link></li>
                                <li><Link to={'/services-2'}>خدمات اثنين  </Link></li>
                                <li><Link to={'/services-details'}>تفاصيل الخدمات  </Link></li>
                            </ul>
                        </li>
                        <li><Link to={'/about'}>معلومات عنا  </Link></li>
                        <li class="dropdown"><Link to={'/#'}>الصفحة الرئيسية  </Link>
                            <ul>
                                <li><Link to={'/#'}>الصفحة الرئيسية 01 </Link></li>
                                <li><Link to={'/index-2'}>الصفحة الرئيسية 02 </Link></li>
                                <li><Link to={'/index-3'}>الصفحة الرئيسية 03 </Link></li>
                                <li><Link to={'/index-4'}>الصفحة الرئيسية 04 </Link></li>
                                <li><Link to={'/onepage'}>نسخة Onepage </Link></li>
                                <li><Link to={'/rtl-home'}>RTL الرئيسية  </Link></li>
                                <li class="dropdown"><Link to={'/#'}>أنماط الرأس   </Link>
                                    <ul>
                                        <li><Link to={'/#'}>رأس نمط واحد </Link></li>
                                        <li><Link to={'/index-2'}>نمط الرأس الثاني  </Link></li>
                                        <li><Link to={'/index-3'}>رأس نمط ثلاثة  </Link></li>
                                        <li><Link to={'/index-4'}>رأس نمط أربعة  </Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

            </>
        )
    }
}
export default ArabicMenu;