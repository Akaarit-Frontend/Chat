import React from 'react';
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <>
        {/* Start Footer Area */}
        <div className="agency-footer-area bg-color-f9f5f4 pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="logo-area style2">
                            <a href="index-3.html">
                                {/* <img src="./images/logo/logo-4.png" className="logo-1" alt="Logo"/>
                                <img src="./images/logo/logo-6.png" className="logo-2" alt="Logo"/> */}
                                <h2>Anonymous Chat</h2>
                            </a>
                            <p>Duis cursus, mi quis viverra ornare, eros dolor interdum nulla utimp erdiet commodo diam libero vitae nibh et jus cursus id rutrum lore imperdiet ut sem vitae risus tristique posuere </p>

                            <div className="social-links">
                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://google.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-google-plus-g"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://linkedin.com/?lang=en" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-6">
                        <div className="footer-widjet style2">
                            <h3>Company</h3>
                            <div className="link-list">
                                <ul>
                                    <li><Link to="#"><i className="flaticon-next"></i>About Us</Link></li>
                                    <li><Link to="#"><i className="flaticon-next"></i>Contact Us</Link></li>
                                    <li><Link to="#"><i className="flaticon-next"></i>Core Services</Link></li>
                                    <li><Link to="#"><i className="flaticon-next"></i>Our Team</Link></li>
                                    <li><Link to="#"><i className="flaticon-next"></i>Pricing Plan</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="footer-widjet style2 pl-30">
                            <h3>Useful Links</h3>
                            <div className="link-list">
                                <ul>
                                    <li><Link to="#"><i className="flaticon-next"></i>Contact Us</Link></li>
                                    <li><Link to="#"><i className="flaticon-next"></i>Privacy Policy</Link></li>
                                    <li><Link to="#"><i className="flaticon-next"></i>App Download</Link></li>
                                    <li><Link to="#"><i className="flaticon-next"></i>How It Works</Link></li>
                                    <li><Link to="#"><i className="flaticon-next"></i>Terms & Conditions</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="agency-subscribe">
                            <h3>Subscribe Newsletter</h3>
                            <form className="newsletter-form" data-toggle="validator">
                                <input type="email" className="form-control" placeholder="Your Email" name="EMAIL" required autocomplete="off"/>
                    
                                <button className="agency-default-btn btn" type="submit">
                                    Join Us!
                                </button>
                    
                                <div id="validator-newsletter" className="form-result"></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* End Footer Area */}
    </>
  )
}

export default Footer