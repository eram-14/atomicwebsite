import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'
import { FaHeart } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';


function Footer() {
  return (
    <footer className="footer bg-light">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-4 pr-md-5">
            <div className="block-footer-widget">
              <h3>About</h3>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            </div>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-3">
                <div className="block-footer-widget">
                  <h3>Learn More</h3>
                  <ul className="list-unstyled">
                    <li><a href="#">How it works?</a></li>
                    <li><a href="#">Useful Tools</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Sitemap</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="block-footer-widget">
                  <h3>Support</h3>
                  <ul className="list-unstyled">
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Help Desk</a></li>
                    <li><a href="#">Knowledgebase</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="block-footer-widget">
                  <h3>About Us</h3>
                  <ul className="list-unstyled">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="block-footer-widget">
                  <a href="#" className="btn btn-primary mb-3">Download for free</a>
                  <p>Connect With Us</p>
                  <ul className="list-unstyled block-social">
                    <li><a href="#" className="p-1"><span><FaFacebookSquare/></span></a></li>
                    <li><a href="#" className="p-1"><span><FaTwitter/></span></a></li>
                    <li><a href="#" className="p-1"><span><FaGithub/></span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-5 text-left">
          <div className="col-md-12 text-left"><p>

            Copyright ©<script>document.write(new Date().getFullYear());</script>2022 All rights reserved | This template is made with <FaHeart/> by <a href="https://colorlib.com" target="_blank" className="text-primary">Colorlib</a>

          </p></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
