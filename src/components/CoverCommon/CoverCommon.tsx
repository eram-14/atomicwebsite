import Aos from 'aos';
import React, { useEffect } from 'react'
import './CoverCommon.css'

type propsCover = {
    heading: string,
    subheading: string,
    coln:string
}

const CoverCommon = ({heading,subheading,coln}:propsCover) => {

    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);
  return (
      <div className="templateux-cover" style={{backgroundImage:"url(https://preview.colorlib.com/theme/atomic/images/xslider-1.jpg.pagespeed.ic.abj2HoBrGU.webp)"}}>
          <div className="container">
              <div className="row align-items-center">
                  <div className={coln}>
                      <h6 data-aos="fade-up" className="">{heading}</h6>
                      <h1 className="heading mb-3" data-aos="fade-up">{subheading}</h1>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default CoverCommon
