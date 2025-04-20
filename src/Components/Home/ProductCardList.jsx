import React from 'react'

const ProductCardList = ({ poster, title, price, offprice, offer }) => {
    return (
        <div className='flex flex-col rounded-xl border border-gray-200 cursor-pointer hover:shadow-2xl  transition-all duration-500'>
            <div className="poster relative bg-emerald-50 rounded-xl">
                <span className='absolute right-0 px-2 py-4 bg-green-700 text-white rounded-tr-xl text-sm font-semibold rounded-bl-xl'>{offer}% offer</span>
                <img className='rounded-lg w-full h-[15rem] object-cover' src={poster} alt={`Poster of ${title}`} />
            </div>

            <div className="block px-4 py-6 bg-white rounded-xl">
                <h4 className='text-[20px] font-normal pb-6'>{title}</h4>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <h5 className='text-xl font-semibold'>${offprice}</h5> -
                        <h5 className='text-xl font-semibold text-gray-500 line-through'>${price}</h5>
                    </div>

                    <button className='p-2 cursor-pointer bg-green-600 text-white rounded-md px-4 text-base'>Add</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCardList
