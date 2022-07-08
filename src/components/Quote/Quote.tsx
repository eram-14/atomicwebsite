import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import './Quotes.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

function Quote() {
  return (
    <div className="templateux-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 testimonial-wrap">
            <div className="quote">“</div>
            <Swiper
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="quotesSwiper"
            >
              <SwiperSlide><div className="item">
                <blockquote className="block-testomonial">
                  <p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</p>
                </blockquote>
              </div></SwiperSlide>
              <SwiperSlide>
                <div className="item">
                  <blockquote className="block-testomonial">
                    <p>“When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.”</p>
                  </blockquote>
                </div>
              </SwiperSlide>
              
              <SwiperSlide>
                <div className="item">
                  <blockquote className="block-testomonial">
                    <p>“A small river named Duden flows by their place and supplies it with the necessary regelialia.It is a paradisematic country, in which roasted parts of sentences fly into your mouth.”</p>
                  </blockquote>
                </div>
              </SwiperSlide>

            </Swiper>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Quote
