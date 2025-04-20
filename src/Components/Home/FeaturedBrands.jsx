
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ChevronRight } from 'lucide-react'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import FeaturesBrandsCard from './FeaturesBrandsCard';
import FEATURESBRANS from '../../lib/FeaturesBrands';

const FeaturedBrands = ({ title }) => {
    return (
        <div>
            <div className='flex-col gap-6 py-16 relative'>
                <div className="flex items-center justify-between ">
                    <h2 className='categorietext text-4xl font-light border-b-2 inline-flex pb-4 border-r-green-600'>{title}</h2>
                    <div className="flex items-center">
                        <span className='text-base'>View All</span>
                        <ChevronRight size={22} className='text-green-600' />
                    </div>
                </div>

                <div className="pt-8">
                    {
                        FEATURESBRANS.map((item, i) => (
                            <FeaturesBrandsCard title={item.title} poster={item.poster} offer={item.offer} logo={item.logo} theme={item.theme} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default FeaturedBrands
