import React, { useEffect } from 'react'
import AOS from 'aos';
import "aos/dist/aos.css";
import './GoodDesign.css'
import Slider from './Slider'


function GoodDesign() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className="templateux-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 block-heading-wrap " data-aos="fade-up">
                        <h2 className="heading mb-5 text-center">Good Design is a Good Start</h2>
                    </div>
                </div>
                <div className="row mb-5 " data-aos="fade-up">
                    <div className="col-md-6">
                        <p className="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. <a href="#">Separated they live in Bookmarksgrove</a> right at the coast of the Semantics, a large language ocean.</p>
                    </div>
                    <div className="col-md-6">
                        <p> When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <Slider/>
            </div>
        </div>
    )
}

export default GoodDesign
