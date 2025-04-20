import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css"; // Swiper styles

// import required modules
import { Pagination } from 'swiper/modules';

const HeroBanner = () => {
    return (
        <div className='mt-4'>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                <SwiperSlide>
                    <img src="/Home-hero-banner.png" alt="Hero banner" width={"100%"} height={'100%'} />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default HeroBanner
