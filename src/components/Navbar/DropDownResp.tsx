import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";


const DropDownResp = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
 
  return (
      <div className=" show" id="mobile-menu" ><div className="container"><ul className="cloned-templateux-menu">
          <li className="active">
              <a href="index.html" className="animsition-link">Home</a>
          </li>
          <li><a href="about.html" className="animsition-link">About</a></li>
          <li ><span className=""  aria-expanded="false"></span>
              <a href="#" className="animsition-link sf-with-ul" onClick={() => setShow(!show)}>Services<span>{show ? <FaAngleUp className='' style={{ top: ' 21 %', }} /> : <FaAngleDown className='' style={{ top: ' 21 %', }} />}</span></a>
              {show?<>
                  <ul id="collapseItem0">
                      <li><a href="#">Service 1</a></li>
                      <li><a href="#">Service 2</a></li>
                      <li >
                          <a onClick={() => {
                              setShow2(!show2)
                          }} href="#" className="sf-with-ul">Service 3<span>{show2 ? <FaAngleUp className='' style={{ top: ' 21 %', }} /> : <FaAngleDown className='' style={{ top: ' 21 %', }} />}</span></a>

                          {show2 ? <>
                              <ul className=" show" id="collapseItem1">
                                  <li><a href="#">Service 1</a></li>
                                  <li><a href="#">Service 2</a></li>
                                  <li onClick={() => setShow3(!show3)}><span className="arrow-" ></span>
                                      <a href="#" className="sf-with-ul">Service 3<span>{show3 ? <FaAngleUp className='' style={{ top: ' 21 %', }} /> : <FaAngleDown className='' style={{ top: ' 21 %', }} />}</span></a>
                                      {show3 ?
                                          <><ul className="" id="collapseItem2">
                                              <li><a href="#">Service 1</a></li>
                                              <li><a href="#">Service 2</a></li>
                                              <li><a href="#">Service 3</a></li>
                                          </ul></>
                                          : null}
                                  </li>
                              </ul></>
                              : null}
                      </li>
                  </ul></>
                  :null}
          </li>
          <li><a href="gallery.html" className="animsition-link">Gallery</a></li>
          <li><a href="blog.html" className="animsition-link">Blog</a></li>
          <li><a href="contact.html" className="animsition-link">Contact</a></li>
      </ul></div></div>
  )
}

export default DropDownResp
