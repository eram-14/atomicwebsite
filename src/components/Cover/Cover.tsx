import React from 'react'
// import './Cover.css'

function Cover() {
  return (
    <div className="templateux-cover" style={{ backgroundImage: "url(https://preview.colorlib.com/theme/atomic/images/xslider-1.jpg.pagespeed.ic.abj2HoBrGU.webp)" }}>
      <div className="container">
        <div className="row align-items-lg-center">
          <div className="col-lg-6 text-center order-lg-2">
            <a href="https://vimeo.com/channels/staffpicks/93951774" data-fancybox="" className="templateux-block-play"><span className="iconify" data-icon="bx:play" style={{
              fontSize: '47px',
              position: 'relative',
              top: '15px',
              right: '-4px'
            }}></span></a>
          </div>
          <div className="col-lg-6 order-lg-1">
            <h1 className="heading mb-3 aos-init aos-animate" data-aos="fade-up">Design a better website template.</h1>
            <p className="lead mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <p data-aos="fade-up" data-aos-delay="200" className="aos-init aos-animate"><a href="#" className="btn btn-primary py-3 px-4">Free Download</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cover
