import React, { useEffect, useState } from 'react'
import './Navbar.css'
import AOS from 'aos';
import "aos/dist/aos.css";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

import DropDownResp from './DropDownResp';
import { Link, NavLink } from 'react-router-dom';



function Navbar() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [showDrop, setShowDrop] = useState(false);


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
                  {showDrop ? <AiOutlineClose style={{ fontSize: 'xx-large', color: 'white' }} /> : <GiHamburgerMenu style={{ fontSize: 'xx-large', color: 'white' }} />}
                </div>

              </div>

              <ul className="sf-menu templateux-menu d-none d-md-block sf-js-enabled sf-arrows">
                <li className="">
                  <NavLink
                    style={({ isActive }) => ({
                      color: isActive ? 'black' : 'gray',
                    })}
                    to="/" className="animsition-link">Home</NavLink>
                </li>
                <li><NavLink style={({ isActive }) => ({
                  color: isActive ? 'black' : 'gray',
                })} to='/about' className="animsition-link">About</NavLink></li>
                <li className='listsub1'>
                  <NavLink style={({ isActive }) => ({
                    color: isActive ? 'black' : 'gray',
                  })} to='/services' className="animsition-link sf-with-ul">Services
                    <span><FaAngleDown className='arrowdown' /></span></NavLink>

                  <ul className='submenu'>
                    <li><a href="#">Service 1</a></li>
                    <li><a href="#">Service 2</a></li>
                    <li className='listsub2'>
                      <a href="#" className="sf-with-ul">Service 3<span className='droparr' style={{ float: 'right' }}><FaAngleRight /></span></a>

                      <ul className='submenu2' >
                        <li><a href="#">Service 1</a></li>
                        <li><a href="#">Service 2</a></li>
                        <li className='listsub3'>
                          <a href="#" className="sf-with-ul">Service 3<span style={{ float: 'right' }}><FaAngleRight /></span></a>

                          <ul className='submenu3' >
                            <li><a href="#">Service 1</a></li>
                            <li><a href="#">Service 2</a></li>
                            <li><a href="#">Service 3</a></li>
                          </ul>
                        </li>
                      </ul>

                    </li>
                  </ul>

                </li>
                <li><NavLink style={({ isActive }) => ({
                  color: isActive ? 'black' : 'gray',
                })} to='/gallery' className="animsition-link">Gallery</NavLink></li>
                <li><NavLink
                  style={({ isActive }) => ({
                    color: isActive ? 'black' : 'gray',
                  })}
                  to='/blog' className="animsition-link">Blog</NavLink></li>
                <li><NavLink
                  style={({ isActive }) => ({
                    color: isActive ? 'black' : 'gray',
                  })}
                  to='/contact' className="animsition-link">Contact</NavLink></li>
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
