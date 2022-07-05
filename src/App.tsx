import React from 'react'
import BgPrimary from './components/BgPrimary/BgPrimary'
import Cover from './components/Cover/Cover'
import Footer from './components/Footer/Footer'
import GoodDesign from './components/GoodDesign/GoodDesign'
import ImageGallary from './components/ImageGallary/ImageGallary'
import MidSection from './components/MidSection/MidSection'
import MoreFeatures from './components/MoreFeatures/MoreFeatures'
import Navbar from './components/Navbar/Navbar'
import Quote from './Quote/Quote'

function App() {
  return (
    <div className='main'>
      <Navbar/>
      <Cover/>
      <MidSection/>
      <GoodDesign/>
      <MoreFeatures/>
      <ImageGallary/>
      <BgPrimary/>
      <Quote/>
      <Footer/>
    </div>
  )
}

export default App
