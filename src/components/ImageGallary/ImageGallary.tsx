import React, { useEffect } from 'react'
import AOS from 'aos';
import "aos/dist/aos.css";
import "./ImageGallary.css";

function ImageGallary() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

  return (
      <div>
          <div className="d-flex flex-column flex-sm-row">
              <a href="#" className="block-thumbnail-1 one-third " style={{ backgroundImage:'url("https://preview.colorlib.com/theme/atomic/images/xslider-2.jpg.pagespeed.ic.r9N2neKBEW.webp")'}}>
                  <div className="block-thumbnail-content">
                      <h2>When she reached the first</h2>
                      <span className="post-meta">Design, Illustration</span>
                  </div>
              </a>
              <a href="#" className="block-thumbnail-1 two-third " style={{ backgroundImage: 'url("https://preview.colorlib.com/theme/atomic/images/xslider-1.jpg.pagespeed.ic.abj2HoBrGU.webp")' }}>
                  <div className="block-thumbnail-content">
                      <h2>Duden flows by their place</h2>
                      <span className="post-meta">Design, Illustration</span>
                  </div>
              </a>
          </div>
          <div className="d-flex flex-column flex-sm-row">
              <a href="#" className="block-thumbnail-1 two-third " style={{ backgroundImage: 'url("https://preview.colorlib.com/theme/atomic/images/xslider-3.jpg.pagespeed.ic.vCxQ_fqCHp.webp")' }}>
                  <div className="block-thumbnail-content">
                      <h2>Italic Mountains</h2>
                      <span className="post-meta">Design, Illustration</span>
                  </div>
              </a>
              <a href="#" className="block-thumbnail-1 one-third " style={{ backgroundImage: 'url("https://preview.colorlib.com/theme/atomic/images/xslider-4.jpg.pagespeed.ic.CLPVVMCFiR.webp")' }}>
                  <div className="block-thumbnail-content">
                      <h2>Behind the word mountains</h2>
                      <span className="post-meta">Design, Illustration</span>
                  </div>
              </a>
          </div>
      </div>
  )
}

export default ImageGallary
