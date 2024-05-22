import React from 'react'
import Category from '../components/hero/Category'
import Carousel from '../components/hero/Carousel'
import BrowseByCategory from '../components/hero/BrowseByCategory'

const Hero = () => {
    return <>
        
            <div className=''>
            <Carousel />
            <Category />
            <BrowseByCategory />
            </div>
    
    </>
}

export default Hero
