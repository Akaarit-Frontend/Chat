import React from 'react'

const Header = () => {
  return (
    <>
        {/* Start Navbar Area */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light nav-style5">
            <div className="container-fluid">
                <a className="navbar-brand" href="index-3.html">
                    <img src="assets/images/logo/logo-4.png" className="main-logo" alt="logo"/>
                    <img src="assets/images/logo/logo2.png" className="white-logo" alt="logo"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#features">Features</a></li>
                        <li className="nav-item"><a className="nav-link" href="#about">About Us</a></li>
                        <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
                        <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>
                        <li className="nav-item"><a className="nav-link" href="#testimonial">Testimonials</a></li>
                        <li className="nav-item"><a className="nav-link" href="#blog">Blog</a></li>
                    </ul>
                    <div className="others-options d-flex align-items-center style3">
                        <div className="option-item">
                            <a href="#join">Sign In/Up <i className="flaticon-right-arrow-3"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        {/* End Navbar Area */}
    </>
  )
}

export default Header