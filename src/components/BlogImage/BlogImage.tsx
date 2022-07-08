import React from 'react'
import './BlogImage.css'
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import SingleSlide from './SingleSlide';

const BlogImage = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };
    return (
        <div className="blog">
            <div className="container">
                <Swiper
                    cssMode={true}
                    loop={true}
                    navigation={true}
                    pagination={pagination}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="swiperBlog"
                >
                    <SwiperSlide>
                        <SingleSlide/>
                    </SwiperSlide>
                    <SwiperSlide> <SingleSlide /></SwiperSlide>
                    <SwiperSlide> <SingleSlide /></SwiperSlide>
                </Swiper>
            </div>
        </div >
    )
}

export default BlogImage
