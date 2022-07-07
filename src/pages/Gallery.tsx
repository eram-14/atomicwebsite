import React from 'react'
import CoverCommon from '../components/CoverCommon/CoverCommon'
import GalleryImage from '../components/GalleryImage/GalleryImage'

const Gallery = () => {
  return (
    <>
      <CoverCommon coln='col-md-6' heading='GALLERY' subheading='A small river named Duden flows' />
      <GalleryImage/>
    </>
  )
}

export default Gallery
