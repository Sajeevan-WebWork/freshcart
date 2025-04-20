import { MessageCircle } from 'lucide-react'
import React from 'react'

const Footer = () => {
    return (
        <div className='bg-[#F7F7F7] py-10'>
            <div className="flex flex-col container m-auto">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="flex">
                        <img src="" alt="" />
                        <div className="flex">
                            <h5>Contact us</h5>

                            <div className="flex gap-2">
                                <MessageCircle />
                                <div className="flex flex-col">
                                    <span>What App</span>
                                    <a href="+1 202-918--2132">+1 202-918--2132</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
