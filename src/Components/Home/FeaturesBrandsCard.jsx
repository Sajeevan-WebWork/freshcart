import React from 'react'

const FeaturesBrandsCard = ({ theme, title, offer, poster, logo }) => {
    return (
        <div className={`flex items-center gap-2 p-8 rounded-4xl justify-between`} style={{ backgroundColor: theme }}>
            <div className="flex items-start justify-between flex-col gap-10">
                <img src={logo} alt={`Logo of ${title}`} className='w-20' />
                <h1 className="text-white p-4 text-xl rounded-xl uppercase font-semibold"
                    style={{
                        backgroundColor:
                            theme === "#115414" ? "rgb(17 129 22)" :
                                theme === "#102861" ? "rgb(22 64 165)" :
                                    "rgb(72 129 8)"
                    }}

                >{title}</h1>
                <h2 className='text-4xl text-white'>UP to <span className='font-bold'>{offer}% OFF</span></h2>
            </div>

            <img src={poster} alt={`Poster of ${title}`} className='w-40' />
        </div>
    )
}

export default FeaturesBrandsCard