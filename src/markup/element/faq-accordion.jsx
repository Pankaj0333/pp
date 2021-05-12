import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';





class FaqAccordion extends Component {


    render() {
        return (
            <>
                

                {/* <!-- Faq Section --> */}
                <section class="faq-section">
                    <div class="auto-container">
                        <div class="row">
                            <div class="col-lg-5">
                                <div class="content mb-5 mr-lg-5">
                                    <div class="sec-title">
                                        <div class="sub-title">FREQUENTLY ASKED QUESTION</div>
                                        <h2>Got Any Questions?</h2>
                                        <div class="text">Veniam quis nostrud exercitation ullamco laboris nist  aute irure dolor in reprehenderit in voluptate velit esse nulla pariatur excepteur sint occaecat aboris nisi ut aliquip ex ea consequat uis aute.</div>
                                    </div>
                                    <div class="link-btn">
                                        <Link to={'/#'} class="theme-btn btn-style-one"><span class="btn-title">Get More Help</span></Link>
                                    </div>
                                </div>

                            </div>
                            <div class="col-lg-7">
                                <Accordion preExpanded={[0]} allowZeroExpanded >
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                How to analyze marketing strategies?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                Nostrud exercitation ullamco laboris nisi ut aliquip aute irure dolor indy reprehenderit in voluptate velit esse cillum dole Veniam quis nul pariatur excepteur sint nulla ipsum occaecat.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                What are latest updates and how to get it?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                Nostrud exercitation ullamco laboris nisi ut aliquip aute irure dolor indy reprehenderit in voluptate velit esse cillum dole Veniam quis nul pariatur excepteur sint nulla ipsum occaecat.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                How can I customize projects to add members?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                Nostrud exercitation ullamco laboris nisi ut aliquip aute irure dolor indy reprehenderit in voluptate velit esse cillum dole Veniam quis nul pariatur excepteur sint nulla ipsum occaecat.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Why you respond so much late?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                Nostrud exercitation ullamco laboris nisi ut aliquip aute irure dolor indy reprehenderit in voluptate velit esse cillum dole Veniam quis nul pariatur excepteur sint nulla ipsum occaecat.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                How to analyze marketing strategies?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                Nostrud exercitation ullamco laboris nisi ut aliquip aute irure dolor indy reprehenderit in voluptate velit esse cillum dole Veniam quis nul pariatur excepteur sint nulla ipsum occaecat.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                What are latest updates and how to get it?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                Nostrud exercitation ullamco laboris nisi ut aliquip aute irure dolor indy reprehenderit in voluptate velit esse cillum dole Veniam quis nul pariatur excepteur sint nulla ipsum occaecat.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                How can I customize projects to add members?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                Nostrud exercitation ullamco laboris nisi ut aliquip aute irure dolor indy reprehenderit in voluptate velit esse cillum dole Veniam quis nul pariatur excepteur sint nulla ipsum occaecat.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Why you respond so much late?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                Nostrud exercitation ullamco laboris nisi ut aliquip aute irure dolor indy reprehenderit in voluptate velit esse cillum dole Veniam quis nul pariatur excepteur sint nulla ipsum occaecat.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </section>



            </>
        )
    }
}
export default FaqAccordion;