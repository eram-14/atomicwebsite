import Aos from 'aos';
import React, { useEffect } from 'react'
import './CoverAbout.css'

const CoverAbout = () => {

    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);
  return (
      <div className="templateux-cover" style={{backgroundImage:"url(https://preview.colorlib.com/theme/atomic/images/xslider-1.jpg.pagespeed.ic.abj2HoBrGU.webp)"}}>
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-md-8">
                      <h6 data-aos="fade-up" className="">About</h6>
                      <h1 className="heading mb-3" data-aos="fade-up">When she reached the first hills of the italic mountains.</h1>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default CoverAbout
