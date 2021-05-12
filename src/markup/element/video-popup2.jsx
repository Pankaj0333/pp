import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css';

const videobg2 = require('./../../assets/images/background/teamprofile1.png');


class VideoPopup2 extends Component {

    constructor() {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }

    openModal() {
        this.setState({ isOpen: true })
    }

    render() {
        return (
            <>

                <section class="video-section style-two" style={{ backgroundImage: "url(" + videobg2 + ")" }}>
                    <div class="auto-container">
                        <div class="sec-title text-center">
                            <div class="sub-title">Intro Video</div>
                            <h2>Our Latest Insights <br />& Overview.</h2>
                        </div>
                        <div class="default-video-box text-center wow zoomIn" data-wow-delay="200ms" data-wow-duration="1200ms">
                            <Link onClick={this.openModal} class="overlay-link lightbox-image video-fancybox ripple"><span class="fas fa-play"></span></Link>
                        </div>
                    </div>
                </section>

                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='yBkDwi4JGnc' onClose={() => this.setState({ isOpen: false })} />


            </>
        )
    }
}
export default VideoPopup2;