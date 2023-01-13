import React from 'react'
import Categories from '../../components/categories/Categories'
import FtProducts from '../../components/ftProducts/FtProducts'
import SlideShow from "../../components/slider/SlideShow"

const Home = () => {
    return (
        <div className='home'>
            <SlideShow />
            <FtProducts type="Featured" />
            <Categories/>
            <FtProducts type="Trending" />
        </div>
    )
}

export default Home
