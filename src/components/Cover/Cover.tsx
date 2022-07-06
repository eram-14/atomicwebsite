import React, { useEffect, useState } from 'react'
import './Cover.css'
import AOS from 'aos';
import "aos/dist/aos.css";
import { AiOutlineClose } from "react-icons/ai";


function Cover() {

    const [videoModal, setVideoModal] = useState(false);

    const showVideoModal = () => {
        setVideoModal(!videoModal);
    }

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className="templateux-cover" style={{ backgroundImage: "url(https://preview.colorlib.com/theme/atomic/images/xslider-1.jpg.pagespeed.ic.abj2HoBrGU.webp)" }}>
            <div className="container">
                <div className="row align-items-lg-center">
                    <div className="col-lg-6 text-center order-lg-2">
                        <div className="templateux-block-play" onClick={showVideoModal}><span className="iconify" data-icon="bx:play" style={{
                            fontSize: '47px',
                            position: 'relative',
                            top: '18px',
                            right: '-4px'
                        }}
                        ></span></div>
                        {videoModal ? (
                            <div className='video-container '>
                                <div className='video'>
                                    <iframe
                                        src='https://player.vimeo.com/video/93951774'
                                        title='YouTube video player'
                                        frameBorder='0'
                                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                        allowFullScreen></iframe>
                                </div>
                                <div
                                    className='close-btn'
                                    onClick={showVideoModal}>
                                    <AiOutlineClose />
                                </div>
                            </div>
                        ) : null}
                    </div>
                    <div className="col-lg-6 order-lg-1">
                        <h1 className="heading mb-3" data-aos="fade-up">Design a better website template.</h1>
                        <p className="lead mb-5" data-aos="fade-up" data-aos-delay="100">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p data-aos="fade-up" data-aos-delay="200"><a href="#" className="btn btn-primary py-3 px-4">Free Download</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cover
