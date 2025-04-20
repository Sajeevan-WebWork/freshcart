import React from 'react'

const ProductCart = ({ poster, title, price, offprice, offer }) => {
    return (
        <div className='flex flex-col bg-blue-50 rounded-lg gap-4'>
            <div className="poster relative">
                {/* <span className='absolute right-0 px-2 py-4 bg-green-700 text-white rounded-tr-xl rounded-bl-xl'>{offer}% offer</span> */}
                <img className='rounded-lg w-full h-[20rem] object-cover' src={poster} alt={`Poster of ${title}`} />
            </div>

            <div className="block px-4 py-2">
                <h4 className='text-[20px] font-normal pb-6'>{title}</h4>

                <div className="flex items-center justify-between">
                    {/* <div className="flex items-center gap-6">
                        <h5 className='text-xl font-semibold'>${offprice}</h5>
                        <h5 className='text-xl font-semibold text-gray-500 line-through'>${price}</h5>
                    </div> */}

                    {/* <button className='p-2 cursor-pointer bg-green-600 text-white rounded-md px-4 text-base'>Add</button> */}
                </div>
            </div>
        </div>
    )
}

export default ProductCart
