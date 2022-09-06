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
                                <i className="flaticon-bubble-chat"></i>
                            </div>
                            <h3>Anonymus Chat</h3>
                            <p>Anonymous chat has the features you need.Whether you choose to text chat or participate in an anonymous video chat.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
                        <div className="agency-single-features-card">
                            <div className="icon">
                                <i className="flaticon-corporation"></i>
                            </div>
                            <h3>Company Development</h3>
                            <p>In simplest terms, business development can be summarized as the ideas, initiatives, and activities that help make a business better.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="600">
                        <div className="agency-single-features-card">
                            <div className="icon">
                                <i className="flaticon-job-satisfaction"></i>
                            </div>
                            <h3>Employee Satisfaction</h3>
                            <p>Employee satisfaction is a broad term used by the HR industry to describe how satisfied employees are with elements like their jobs.</p>
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

export default Features;