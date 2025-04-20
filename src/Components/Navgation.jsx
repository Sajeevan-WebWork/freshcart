import { ChevronDown, Search, ShoppingCart, User } from 'lucide-react'
import React from 'react'
import navMenuItems from '../lib/NavList'
import { NavLink } from 'react-router-dom'
import { li } from 'framer-motion/client'

const Navgation = () => {
    return (
        <>
            <div className="container m-auto">
                <header className="py-2 flex items-center justify-between">
                    <div className="logo w-full">
                        <img src="/web-logo.webp" alt="logo" className='md:w-40' />
                    </div>

                    <div className='flex items-center relative w-full'>
                        <Search className='absolute left-4' />
                        <input type="text" className='p-4 bg-[#F3F9FB] focus:outline focus:border-0 flex-1 rounded-xl px-14' placeholder='Search Essentials groceries and more' />
                    </div>

                    <div className="flex items-center justify-end w-full">
                        <div className="flex items-center gap-2 border-r-2 pr-5 border-gray-400">
                            <User className='text-green-500' />
                            <span className='text-base font-normal'>Login</span>
                        </div>

                        <div className="flex items-center gap-2 pl-5">
                            <ShoppingCart className='text-green-500' />
                            <span className='text-base font-normal'>Cart</span>
                        </div>
                    </div>
                </header>

                <header className='py-3 flex items-center justify-between'>
                    {navMenuItems.map((item, i) => (
                        <div key={i} className="relative group w-max bg-[#F3F9FB] py-2 px-4 rounded-2xl">
                            <div className="flex gap-2 cursor-pointer items-center">
                                <span>{item.item}</span>
                                <ChevronDown className="text-green-600" />
                            </div>

                            {/* Submenu */}
                            <ul className="absolute top-full left-0 bg-white shadow-md rounded mt-1 opacity-0 invisible translate-y-5 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-10">
                                {item.subMenu && item.subMenu.map((listItem, j) => (
                                    <li key={j} className="px-4 py-2 hover:bg-green-100 cursor-pointer whitespace-nowrap">
                                        {listItem}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </header>
            </div>
        </>
    )
}

export default Navgation
