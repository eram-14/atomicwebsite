import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";

function Slider() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="slider"
            >
                <SwiperSlide>
                    <div className="item">
                        <img src="https://preview.colorlib.com/theme/atomic/images/xslider-2.jpg.pagespeed.ic.r9N2neKBEW.webp" alt="Free template by TemplateUX.com" className="img-fluid" data-pagespeed-url-hash="3580452251" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item">
                        <img src="https://preview.colorlib.com/theme/atomic/images/xslider-3.jpg.pagespeed.ic.vCxQ_fqCHp.webp" alt="Free template by TemplateUX.com" className="img-fluid" data-pagespeed-url-hash="3580452251" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item">
                        <img src="https://preview.colorlib.com/theme/atomic/images/xslider-4.jpg.pagespeed.ic.CLPVVMCFiR.webp" alt="Free template by TemplateUX.com" className="img-fluid" data-pagespeed-url-hash="3580452251" />
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </>
    );
}


export default Slider

