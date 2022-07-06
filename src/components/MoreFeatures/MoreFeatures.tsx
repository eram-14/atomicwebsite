import React, { useEffect } from 'react'
import AOS from 'aos';
import "aos/dist/aos.css";
import "./MoreFeatures.css";
import { IoBulbOutline } from "react-icons/io5";
import { IoInfiniteOutline } from "react-icons/io5";
import { IoIosNutrition } from "react-icons/io";
import { IoMdLock } from "react-icons/io";
import { IoVideocamOutline } from "react-icons/io5";
import { ImLoop2 } from "react-icons/im";


function MoreFeatures() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
  return (
      <div className="templateux-section bg-light">
          <div className="container">
              <div className="row mb-5">
                  <div className="col-md-4 mb-4" data-aos="fade-up">
                      <div className="media block-icon-1 d-block text-center">
                          <div className="icon mb-3"><span ><ImLoop2/></span></div>
                          <div className="media-body">
                              <h3 className="h5 mb-4">Regular Update</h3>
                              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="100">
                      <div className="media block-icon-1 d-block text-center">
                          <div className="icon mb-3"><span ><IoInfiniteOutline/></span></div>
                          <div className="media-body">
                              <h3 className="h5 mb-4">Infinite Posibilities</h3>
                              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="200">
                      <div className="media block-icon-1 d-block text-center">
                          <div className="icon mb-3"><span><IoMdLock/></span></div>
                          <div className="media-body">
                              <h3 className="h5 mb-4">Good Security</h3>
                              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="300">
                      <div className="media block-icon-1 d-block text-center">
                          <div className="icon mb-3"><span ><IoIosNutrition/></span></div>
                          <div className="media-body">
                              <h3 className="h5 mb-4">Orange for Carrots</h3>
                              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="400">
                      <div className="media block-icon-1 d-block text-center">
                          <div className="icon mb-3"><span><IoBulbOutline/></span></div>
                          <div className="media-body">
                              <h3 className="h5 mb-4">Intuitive Thinking</h3>
                              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="500">
                      <div className="media block-icon-1 d-block text-center">
                          <div className="icon mb-3"><span ><IoVideocamOutline/></span></div>
                          <div className="media-body">
                              <h3 className="h5 mb-4">Play Video</h3>
                              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-12 text-center" data-aos="fade-up" data-aos-delay="100">
                      <p><a href="#" className="btn btn-black py-3 px-4">More Features</a></p>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default MoreFeatures
