import React from 'react'

const FeaturesBrandsCard = ({ theme, title, offer, poster, logo }) => {
    return (
        <div className={`flex items-center gap-2 p-8 rounded-4xl justify-between`}>
            <div className="flex items-cener flex-col gap-10">
                <img src={logo} alt={`Logo of ${title}`} className='w-35' />
                <h1 className="bg-blue-800 text-white p-4 text-xl rounded-xl">{title}</h1>
                <h2 className='text-4xl text-white'>UP to <span className='font-bold'>{offer}% OFF</span></h2>
            </div>

            <img src={poster} alt={`Poster of ${title}`} />
        </div>
    )
}

export default FeaturesBrandsCard