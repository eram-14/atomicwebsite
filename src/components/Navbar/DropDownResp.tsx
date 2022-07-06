import React from 'react'
import { FaAngleDown } from "react-icons/fa";


const DropDownResp = () => {
  return (
      <div className="collapse show" id="mobile-menu" ><div className="container"><ul className="cloned-templateux-menu">
          <li className="active">
              <a href="index.html" className="animsition-link">Home</a>
          </li>
          <li><a href="about.html" className="animsition-link">About</a></li>
          <li><span className="arrow-collapse collapsed" data-toggle="collapse" data-target="#collapseItem0" aria-expanded="false"></span>
              <a href="services.html" className="animsition-link sf-with-ul">Services<span><FaAngleDown className='' style={{ top:' 21 %',}}/></span></a>
              <ul  className="collapse" id="collapseItem0">
                  <li><a href="#">Service 1</a></li>
                  <li><a href="#">Service 2</a></li>
                  <li><span className="arrow-collapse active" data-toggle="collapse" data-target="#collapseItem1" aria-expanded="true"></span>
                      <a href="#" className="sf-with-ul">Service 3</a>
                      <ul  className="collapse show" id="collapseItem1">
                          <li><a href="#">Service 1</a></li>
                          <li><a href="#">Service 2</a></li>
                          <li><span className="arrow-collapse" data-toggle="collapse" data-target="#collapseItem2"></span>
                              <a href="#" className="sf-with-ul">Service 3</a>
                              <ul  className="collapse" id="collapseItem2">
                                  <li><a href="#">Service 1</a></li>
                                  <li><a href="#">Service 2</a></li>
                                  <li><a href="#">Service 3</a></li>
                              </ul>
                          </li>
                      </ul>
                  </li>
              </ul>
          </li>
          <li><a href="gallery.html" className="animsition-link">Gallery</a></li>
          <li><a href="blog.html" className="animsition-link">Blog</a></li>
          <li><a href="contact.html" className="animsition-link">Contact</a></li>
      </ul></div></div>
  )
}

export default DropDownResp
