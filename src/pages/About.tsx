import React from 'react'
import CoverCommon from '../components/CoverCommon/CoverCommon'
import GoodDesign from '../components/GoodDesign/GoodDesign'
import GoodTeam from '../components/GoodTeam/GoodTeam'
import MoreFeatures from '../components/MoreFeatures/MoreFeatures'

const About = () => {
  return (
    <>
      <CoverCommon coln='col-md-8' heading='About' subheading='When she reached the first hills of the italic mountains.'/>
      <GoodDesign/>
      <GoodTeam />
      <MoreFeatures heading='Features' dispbtn={'none'} disppara={'none'}/>
    </>
  )
}

export default About
