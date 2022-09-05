import React from 'react'

function Footer() {
  return (
    <>
        {/* Start Footer Area */}
        <div class="agency-footer-area bg-color-f9f5f4 pt-100 pb-70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-sm-6">
                        <div class="logo-area style2">
                            <a href="index-3.html">
                                <img src="./images/logo/logo-4.png" class="logo-1" alt="Logo"/>
                                <img src="./images/logo/logo-6.png" class="logo-2" alt="Logo"/>
                            </a>
                            <p>Duis cursus, mi quis viverra ornare, eros dolor interdum nulla utimp erdiet commodo diam libero vitae nibh et jus cursus id rutrum lore imperdiet ut sem vitae risus tristique posuere </p>

                            <div class="social-links">
                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com" target="_blank"><i class="flaticon-facebook-1"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://www.twitter.com" target="_blank"><i class="flaticon-twitter-3"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://google.com" target="_blank"><i class="flaticon-google-plus"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://linkedin.com/?lang=en" target="_blank"><i class="flaticon-linkedin-1"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 col-sm-6">
                        <div class="footer-widjet style2">
                            <h3>Company</h3>
                            <div class="link-list">
                                <ul>
                                    <li><a href="#"><i class="flaticon-next"></i>About Us</a></li>
                                    <li><a href="#"><i class="flaticon-next"></i>Contact Us</a></li>
                                    <li><a href="#"><i class="flaticon-next"></i>Core Services</a></li>
                                    <li><a href="#"><i class="flaticon-next"></i>Our Team</a></li>
                                    <li><a href="#"><i class="flaticon-next"></i>Pricing Plan</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="footer-widjet style2 pl-30">
                            <h3>Useful Links</h3>
                            <div class="link-list">
                                <ul>
                                    <li><a href="#"><i class="flaticon-next"></i>Contact Us</a></li>
                                    <li><a href="#"><i class="flaticon-next"></i>Privacy Policy</a></li>
                                    <li><a href="#"><i class="flaticon-next"></i>App Download</a></li>
                                    <li><a href="#"><i class="flaticon-next"></i>How It Works</a></li>
                                    <li><a href="#"><i class="flaticon-next"></i>Terms & Conditions</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="agency-subscribe">
                            <h3>Subscribe Newsletter</h3>
                            <form class="newsletter-form" data-toggle="validator">
                                <input type="email" class="form-control" placeholder="Your Email" name="EMAIL" required autocomplete="off"/>
                    
                                <button class="agency-default-btn btn" type="submit">
                                    Join Us!
                                </button>
                    
                                <div id="validator-newsletter" class="form-result"></div>
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