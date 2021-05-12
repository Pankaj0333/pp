import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Menu extends Component {


    render() {
        return (
            <>
                <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                    <ul class="navigation clearfix">
                        <li><Link to={'/index-2'}>Home</Link>
                        </li>
                        <li><Link to={'/about'}>About Us</Link></li>

                        <li class="dropdown"><Link to={'/investment'}>Investments</Link>
                        <ul>
                        <li><Link to={'/offshoreinvestment'}>Offshore Investments</Link></li>
                        <li><Link to={'/regularsaving'}>Regular Savings</Link></li>
                        <li><Link to={'/planningforretirement'}>Planning for Retirement</Link></li>
                        <li><Link to={'/investingforchildren'}>Investing For Children</Link></li>
                        <li><Link to={'/Offshorebanking'}>Offshore Banking</Link></li>

                            </ul>
                            </li>
                            <li class="dropdown"><Link to={'/pensions'}>Pensions</Link>
                            <ul>
                            <li><Link to={'/uaepensiontransfer'}>UAE Pension Scheme</Link></li>
                            <li><Link to={'/ukpensiontransfer'}>Uk Pension Transfer</Link></li>
                            <li><Link to={'/australiansuperannuation'}>Australian Superannuation</Link></li>

                                </ul>
                                </li>


                        <li><Link to={'/contact'}>Contact</Link></li>
                    </ul>
                </div>

            </>
        )
    }
}
export default Menu;