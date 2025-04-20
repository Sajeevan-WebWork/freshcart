import React from 'react'
import TopBar from '../Components/TopBar'
import HeroBanner from '../Components/Home/HeroBanner'
import TopCategories from '../Components/Home/TopCategories'
import ProductCategorie from '../Components/Home/ProductCategorie'
import FeaturedBrands from '../Components/Home/FeaturedBrands'
import Footer from '../Components/Home/Footer'

const Home = () => {
    return (
        <div>
            <HeroBanner />
            <div className="container m-auto">
                <TopCategories />

                <ProductCategorie title={'Supersaver Up to 50% off'} categoireType={'Supersaver_50_off'} />
                <ProductCategorie title={"Vegitables & Fruits"} categoireType={'Vegitables__Fruits'} />
                <FeaturedBrands title={'Featured Brands' } />
                <ProductCategorie title={"Cold Drinks & Juices"} categoireType={'Cold__Drinks__Juices'} />
                <ProductCategorie title={"Snacks & Munches"} categoireType={'Snacks__Munches'} />
            </div>

            <Footer />
        </div>
    )
}

export default Home
