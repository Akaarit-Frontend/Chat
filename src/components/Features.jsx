import React from 'react';
import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <>
        {/* Start Features Area */}
        <div id="features" className="agency-features-area bg-color-f9f5f4 pt-100 pb-70">
            <div className="container">
                <div className="agency-section-title ">
                    <span>Our Features</span>
                    <h2>Our Specialization</h2>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                        <div className="agency-single-features-card">
                            <div className="icon">
                                <i className="flaticon-vector"></i>
                            </div>
                            <h3>Web Design</h3>
                            <p>Lorem ipsum dolor sit amet, ectetur do pis cing elit. Susp endisse varius enim varius enim eros elementum tristique.</p>
                            <Link to='#' className="btn">Contact Us <i className="flaticon-right-arrow-3"></i></Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
                        <div className="agency-single-features-card">
                            <div className="icon">
                                <i className="flaticon-strategy"></i>
                            </div>
                            <h3>Strategy & Research</h3>
                            <p>Lorem ipsum dolor sit amet, ectetur do pis cing elit. Susp endisse varius enim varius enim eros elementum tristique.</p>
                            <Link to='#' className="btn">Contact Us <i className="flaticon-right-arrow-3"></i></Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="600">
                        <div className="agency-single-features-card">
                            <div className="icon">
                                <i className="flaticon-megaphone"></i>
                            </div>
                            <h3>SEO & Marketing</h3>
                            <p>Lorem ipsum dolor sit amet, ectetur do pis cing elit. Susp endisse varius enim varius enim eros elementum tristique.</p>
                            <Link to='#' className="btn">Contact Us <i className="flaticon-right-arrow-3"></i></Link>
                        </div>
                    </div>
                </div>
                <img src="./images/shape/shape-14.png" className="features-shape-1" alt="Shape"/>
                <img src="./images/shape/shape-15.png" className="features-shape-2" alt="Shape"/>
            </div>
        </div>
        {/* End Features Area */}
    </>
  )
}

export default Features