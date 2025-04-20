import { CirclePercent, MapPin, Truck } from 'lucide-react'
import React from 'react'

const TopBar = () => {
    return (
        <div className='bg-amber-300'>
            <div className="container flex-col flex md:flex-row justify-between items-center  md:gap-0 gap-4 p-4 m-auto">
                <span className='text-base font-semibold'>
                    Devlivery in 10 minutes
                </span>
                <div className="flex items-center">
                    <div className="md:flex-row flex-col flex justify-center text-center gap-2 items-center border-r-2 border-white pr-5">
                        <MapPin className='text-white' size={20} />
                        <span className='text-base font-semibold'>Delivery to 411017</span>
                    </div>
                    <div className="md:flex-row flex-col flex justify-center text-center gap-2 items-center border-r-2 border-white px-5">
                        <Truck className='text-white' size={20} />
                        <span className='text-base font-semibold'>Track your order</span>
                    </div>
                    <div className="md:flex-row flex-col flex justify-center text-center gap-2 items-center pl-5">
                        <CirclePercent className='text-white' size={20} />
                        <span className='text-base font-semibold'>All offers</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar
