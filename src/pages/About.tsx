import React from 'react'
import CoverAbout from '../components/CoverAbout/CoverAbout'
import GoodDesign from '../components/GoodDesign/GoodDesign'
import GoodTeam from '../components/GoodTeam/GoodTeam'
import MoreFeatures from '../components/MoreFeatures/MoreFeatures'

const About = () => {
  return (
    <>
      <CoverAbout/>
      <GoodDesign/>
      <GoodTeam />
      <MoreFeatures heading='Features' />
    </>
  )
}

export default About
