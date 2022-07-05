import React from 'react'
// import'./Navbar.css'

function Navbar() {
  return (
    <header className="templateux-navbar dark" role="banner">
      <div className="container aos-init aos-animate" data-aos="fade-down">
        <div className="row">
          <div className="col-3 templateux-logo">
            <a href="index.html" className="animsition-link">Atomic</a>
          </div>
          <nav className="col-9 site-nav">
            <button className="d-block d-md-none hamburger hamburger--spin templateux-toggle templateux-toggle-light ml-auto templateux-toggle-menu" data-toggle="collapse" data-target="#mobile-menu" aria-controls="mobile-menu" aria-expanded="false" aria-label="Toggle navigation">
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
            <ul className="sf-menu templateux-menu d-none d-md-block sf-js-enabled sf-arrows" style={{touchAction:' pan-y'}}>
              <li className="active">
                <a href="index.html" className="animsition-link">Home</a>
              </li>
              <li><a href="about.html" className="animsition-link">About</a></li>
              <li>
                <a href="services.html" className="animsition-link sf-with-ul">Services</a>
                <ul style={{display: 'none'}}>
                  <li><a href="#">Service 1</a></li>
                  <li><a href="#">Service 2</a></li>
                  <li>
                    <a href="#" className="sf-with-ul">Service 3</a>
                    <ul style={{display: 'none'}}>
                      <li><a href="#">Service 1</a></li>
                      <li><a href="#">Service 2</a></li>
                      <li>
                        <a href="#" className="sf-with-ul">Service 3</a>
                        <ul style={{display: 'none'}}>
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
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
