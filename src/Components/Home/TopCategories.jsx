
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import ProductCart from './ProductCart'
import PRODUCTLIST from '../../lib/ProductCartList'


const TopCategories = () => {
    return (
        <div className='flex-col gap-6 py-16'>
            <div className="inline">
                <h2 className='text-4xl font-light border-b-2 inline-flex pb-4 border-r-green-600'>Shop From <span className='text-green-500'>Top Categories</span></h2>
            </div>


            <div className="pt-8">
                <Swiper pagination={true} modules={[Pagination]} className="mySwiper" slidesPerView={5} autoplay={true} spaceBetween={30}>
                    {
                        PRODUCTLIST.filter(item => item.categoire === "topCategrie").map((item, i) => (
                            <SwiperSlide key={i}>
                                <ProductCart
                                    poster={item.poster}
                                    title={item.title}
                                />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default TopCategories