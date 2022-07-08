import React from 'react'
import BgPrimary from '../components/BgPrimary/BgPrimary'
import Cover from '../components/Cover/Cover'
import GoodDesign from '../components/GoodDesign/GoodDesign'
import ImageGallary from '../components/ImageGallary/ImageGallary'
import MidSection from '../components/MidSection/MidSection'
import MoreFeatures from '../components/MoreFeatures/MoreFeatures'
import Quote from '../components/Quote/Quote'

function Home() {
    return (
        <>
            <Cover />
            <MidSection />
            <GoodDesign />
            <MoreFeatures subheading='More Features' bg='bg-light' dispbtn='block' disppara={'none'}/>
            <ImageGallary />
            <BgPrimary />
            <Quote />
        </>
    )
}

export default Home
