
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import PRODUCTLIST from '../../lib/ProductCartList';
import ProductCardList from './ProductCardList';
import { ChevronRight } from 'lucide-react';

const ProductCategorie = ({ title, categoireType }) => {
    return (
        <div className='flex-col gap-6 py-16 relative'>
            <div className="flex items-center justify-between ">
                <h2 className='categorietext text-4xl font-light border-b-2 inline-flex pb-4 border-r-green-600'>{title}</h2>
                <div className="flex items-center">
                    <span className='text-base'>View All</span>
                    <ChevronRight size={22} className='text-green-600' />
                </div>
            </div>

            <div className="pt-8">

                <Swiper pagination={false} modules={[Pagination]} className="mySwiper" loop={true} slidesPerView={5} autoplay={true} spaceBetween={30}>
                    {
                        PRODUCTLIST
                            .filter(item => item.categoire === categoireType) // ✅ use `===` if showing that category
                            .map((item, i) => (
                                <SwiperSlide key={i}>
                                    <ProductCardList
                                        poster={item.poster}
                                        title={item.title}
                                        price={item.price}
                                        offprice={(item.price - (item.price * item.offer / 100)).toFixed(2)}
                                        offer={item.offer}
                                    />
                                </SwiperSlide>
                            ))
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default ProductCategorie
