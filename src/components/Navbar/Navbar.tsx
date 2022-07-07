import React, { useEffect, useState } from 'react'
import './Navbar.css'
import AOS from 'aos';
import "aos/dist/aos.css";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

import DropDownResp from './DropDownResp';
import { Link } from 'react-router-dom';



function Navbar() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [showDrop, setShowDrop] = useState(false);

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const drop1 = () => {
    if (show3 === true || show2 === true) {
      setShow(false)
    }
  }
  const drop2 = () => {
    if (show3 === true) {
      setShow2(false)
    }
  }

  return (
    <>
      <header className="templateux-navbar dark" role="banner">
        <div className="container" data-aos="fade-down">
          <div className="row">
            <div className="col-3 templateux-logo">
              <a href="index.html" className="animsition-link">Atomic</a>
            </div>
            <nav className="col-9 site-nav">
              <div className="navbar-toggle" style={{ float: 'right', border: 'none' }}
                onClick={(() => setShowDrop(!showDrop))}
              >
                <div className='resp'>
                {showDrop ? <AiOutlineClose style={{ fontSize: 'xxx-large', color: 'white' }} /> : <GiHamburgerMenu style={{ fontSize: 'xxx-large', color: 'white' }} />}
                </div>

              </div>

              <ul className="sf-menu templateux-menu d-none d-md-block sf-js-enabled sf-arrows">
                <li className="active">
                  <Link to="/" className="animsition-link">Home</Link>
                </li>
                <li><Link to='/about' className="animsition-link">About</Link></li>
                <li
                  onMouseEnter={() => setShow(true)}
                  onMouseLeave={drop1}
                >
                  <a href="services.html" className="animsition-link sf-with-ul">Services<span><FaAngleDown className='arrowdown' /></span></a>
                  {show ?
                    <>
                      <ul className='submenu'>
                        <li><a href="#">Service 1</a></li>
                        <li><a href="#">Service 2</a></li>
                        <li
                          onMouseEnter={() => setShow2(true)}
                          onMouseLeave={drop2}
                        >
                          <a href="#" className="sf-with-ul">Service 3<span className='droparr'  style={{ float: 'right' ,marginTop:'6px'}}><FaAngleRight /></span></a>
                          {show2 ? <>
                            <ul className='submenu2' >
                              <li><a href="#">Service 1</a></li>
                              <li><a href="#">Service 2</a></li>
                              <li
                                onMouseEnter={() => setShow3(true)}
                                onMouseLeave={() => setShow3(false)}
                              >
                                <a href="#" className="sf-with-ul">Service 3<span  style={{ float: 'right' }}><FaAngleRight /></span></a>
                                {show3 ?
                                  <>
                                    <ul className='submenu3' >
                                      <li><a href="#">Service 1</a></li>
                                      <li><a href="#">Service 2</a></li>
                                      <li><a href="#">Service 3</a></li>
                                    </ul>
                                  </> :
                                  null
                                }
                              </li>
                            </ul>
                          </>
                            : null}
                        </li>
                      </ul>
                    </> : null}
                </li>
                <li><a href="gallery.html" className="animsition-link">Gallery</a></li>
                <li><a href="blog.html" className="animsition-link">Blog</a></li>
                <li><a href="contact.html" className="animsition-link">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      {showDrop ? <DropDownResp /> : null}
    </>
  )
}

export default Navbar
