import React from 'react'
import TopBar from '../Components/TopBar'
import HeroBanner from '../Components/Home/HeroBanner'
import TopCategories from '../Components/Home/TopCategories'
import ProductCategorie from '../Components/Home/ProductCategorie'
import FeaturedBrands from '../Components/Home/FeaturedBrands'

const Home = () => {
    return (
        <div>
            <HeroBanner />
            <div className="container m-auto">
                <TopCategories />

                <ProductCategorie title={'Supersaver Up to 50% off'} />
                <ProductCategorie title={"Vegitables & Fruits"} />
                <FeaturedBrands title={'Featured Brands'} />
            </div>
        </div>
    )
}

export default Home
