import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from './pages/index';
import Index2 from './pages/index-2';
import Index3 from './pages/index-3';
import Index4 from './pages/index-4';
import Onepage from './pages/onepage';
import RtlHome from './pages/rtl-home';
import Error404 from './pages/404';
import About from './pages/about'
import BlogDestails from './pages/blog-details'
import BlogGrid from './pages/blog-grid'
import BlogStandard from './pages/blog-standard'
import Careers from './pages/careers'
import Checkout from './pages/checkout'
import Contact from './pages/contact'
import Faq from './pages/faq'
import Portfolio1 from './pages/portfolio-1'
import Portfolio2 from './pages/portfolio-2'
import PortfolioDetails from './pages/portfolio-details'
import ProductDetails from './pages/product-details'
import Services1 from './pages/services-1'
import Services2 from './pages/services-2'
import ServicesDetails from './pages/services-details'
import Shop from './pages/shop'
import ShoppingCart from './pages/shopping-cart'
import TeamDetails from './pages/team-details'
import Team from './pages/team';
import Testimonial1 from './element/testimonial1'
import BackToTop from './layout/backToTop'
import Investment from './pages/investment'
import Offshoreinvestment from './pages/offshoreinvestment'
import Regularsaving from './pages/regularsaving'
import Planningforretirement from './pages/planningforretirement'
import Investingforchildren from './pages/investingforchildren'
import Offshorebanking from './pages/offshorebanking'
import Pensions from './pages/pensions'
import Uaepensiontransfer from './pages/uaepensiontransfer';
import Ukpensiontransfer from './pages/ukpensiontransfer';
import Australiansuperannuation from './pages/australiansuperannuation'
class Router extends Component {
    render() {
        return (
            <BrowserRouter basename={'/demo/fianandox/'}>
            {/* <BrowserRouter> */}
                <div class="page-wrapper">

                    <Switch>
                        <Route path='/' exact component={Index2} />
                        <Route path='/index-2' component={Index2} />
                        <Route path='/index-3' component={Index3} />
                        <Route path='/index-4' component={Index4} />
                        <Route path='/onepage' component={Onepage} />
                        <Route path='/rtl-home' component={RtlHome} />
                        <Route path='/404' component={Error404} />
                        <Route path='/about' component={About} />
                        <Route path='/blog-details' component={BlogDestails} />
                        <Route path='/blog-grid' component={BlogGrid} />
                        <Route path='/blog-standard' component={BlogStandard} />
                        <Route path='/careers' component={Careers} />
                        <Route path='/checkout' component={Checkout} />
                        <Route path='/contact' component={Contact} />
                        <Route path='/faq' component={Faq} />
                        <Route path='/portfolio-1' component={Portfolio1} />
                        <Route path='/portfolio-2' component={Portfolio2} />
                        <Route path='/portfolio-details' component={PortfolioDetails} />
                        <Route path='/product-details' component={ProductDetails} />
                        <Route path='/services-1' component={Services1} />
                        <Route path='/services-2' component={Services2} />
                        <Route path='/services-details' component={ServicesDetails} />
                        <Route path='/shop' component={Shop} />
                        <Route path='/shopping-cart' component={ShoppingCart} />
                        <Route path='/team-details' component={TeamDetails} />
                        <Route path='/team' component={Team} />
                        <Route path='/test' component={Testimonial1} />
                        <Route path='/investment' component={Investment} />
                        <Route path='/offshoreinvestment' component= {Offshoreinvestment} />
                        <Route path='/regularsaving' component= {Regularsaving} />
                        <Route path='/planningforretirement' component={Planningforretirement} />
                        <Route path='/investingforchildren' component={Investingforchildren} />
                        <Route path='/offshorebanking' component={Offshorebanking} />
                        <Route path='/pensions' component={Pensions} />
                        <Route path='/uaepensiontransfer' component={Uaepensiontransfer} />
                        <Route path='/ukpensiontransfer' component={Ukpensiontransfer} />
                        <Route path='/australiansuperannuation' component={Australiansuperannuation} />
                        </Switch> 

                    <BackToTop />

                </div>
            </BrowserRouter>

        )
    }
}

export default Router;