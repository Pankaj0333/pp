import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css';




class VideoPopup3 extends Component {

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


                {/* <!-- Video Section Two --> */}
                <section class="video-section-two">
                    <div class="auto-container">
                        <div class="video-box">
                            <img src={require('../../assets/images/background/image-13.jpg')} alt=""/>
                            <div class="default-video-box text-center">
                                <Link onClick={this.openModal} class="overlay-link lightbox-image video-fancybox ripple"><span class="fas fa-play"></span></Link>
                            </div>
                        </div>
                    </div>
                </section>

                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({ isOpen: false })} />


            </>
        )
    }
}
export default VideoPopup3;