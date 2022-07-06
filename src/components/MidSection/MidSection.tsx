import { IoBulbOutline } from "react-icons/io5";
import { IoInfiniteOutline } from "react-icons/io5";
import { IoIosNutrition } from "react-icons/io";
import React, { useEffect } from 'react'
import AOS from 'aos';
import "aos/dist/aos.css";
import './MidSection.css'

function MidSection() {
  return (    
      <div className="templateux-section">
          <div className="container">            
              <div className="row">
                  <div className="col-md-12 templateux-overlap">
                      <div className="row">
                          <div className="col-md-4" data-aos="fade-up" data-aos-delay="600">
                              <div className="media block-icon-1 d-block text-left">
                                  <div className="icon mb-3"><span ><IoBulbOutline/></span></div>
                                  <div className="media-body">
                                      <h3 className="h5 mb-4">Intuitive Thinking</h3>
                                      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-4" data-aos="fade-up" data-aos-delay="700">
                              <div className="media block-icon-1 d-block text-left">
                                  <div className="icon mb-3"><span ><IoIosNutrition/></span></div>
                                  <div className="media-body">
                                      <h3 className="h5 mb-4">Orange for Carrots</h3>
                                      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-4" data-aos="fade-up" data-aos-delay="800">
                              <div className="media block-icon-1 d-block text-left">
                                  <div className="icon mb-3"><span><IoInfiniteOutline/></span></div>
                                  <div className="media-body">
                                      <h3 className="h5 mb-4">Infinite Posibilities</h3>
                                      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default MidSection
