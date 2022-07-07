import Aos from 'aos';
import React, { useEffect } from 'react'
import './GoodTeam.css'

const GoodTeam = () => {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);
  return (
      <div className="temnplateux-section">
          <div className="container">
              <div className="row mb-5">
                  <div className="col-md-12 block-heading-wrap" data-aos="fade-up">
                      <h2 className="heading mb-5 text-center">Good Team, Good Company</h2>
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-6 col-lg-4" data-aos="fade-up">
                      <div className="block-person-1">
                          <img src="https://preview.colorlib.com/theme/atomic/images/xperson_1.jpg.pagespeed.ic.j3Z9sx7Glx.webp" alt="Free template by TemplateUX" className="img-fluid" data-pagespeed-url-hash="4182138276"/>
                              <div className="block-content">
                                  <h3 className="heading">William Oates</h3>
                                  <p className="subheading">CEO, Co-Founder</p>
                                  <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                              </div>
                      </div>
                  </div>
                  <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
                      <div className="block-person-1">
                          <img src="https://preview.colorlib.com/theme/atomic/images/xperson_2.jpg.pagespeed.ic.8_IXbD8EO0.webp" className="img-fluid" data-pagespeed-url-hash="181670901"/>
                              <div className="block-content">
                                  <h3 className="heading">Joshua Kesling</h3>
                                  <p className="subheading">Co-Founder, Creative</p>
                                  <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                              </div>
                      </div>
                  </div>
                  <div className="col-md-12 col-lg-4" data-aos="fade-up" data-aos-delay="200">
                      <div className="block-person-1">
                          <img src="https://preview.colorlib.com/theme/atomic/images/xperson_3.jpg.pagespeed.ic.CHwHmQxRm3.webp" alt="Free template by TemplateUX" className="img-fluid" data-pagespeed-url-hash="476170822" />
                              <div className="block-content">
                                  <h3 className="heading">Dave Magnus</h3>
                                  <p className="subheading">Co-Founder, Development</p>
                                  <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                              </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default GoodTeam
