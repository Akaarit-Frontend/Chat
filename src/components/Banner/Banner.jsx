import React from 'react';
import OwlCarousel from 'react-owl-carousel';

const Banner = () => {
    const settings = {

        loop:true,
        margin:20,
        nav:false,
        dots:false,
        autoplay:true,
        smartSpeed: 1000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:2, 
            },
            768:{
                items:3,
            },
            992:{
                items:4,
            },
            1200:{
                items:6,
            },
                
        }
    }

  return (
    <>
        {/* Strat Banner Area */}
        <div id="home" className="agency-banner-area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-5" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                        <div className="agency-banner-content">
                            <span>Best Creative Agency</span>
                            <h1>Dedicated To Bring Our Ideas To Your Life</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua. Ut enim ad minim veniamquis.</p>
                            <a href="#join" className="agency-default-btn btn mr-20">Get A Quote <i className="flaticon-right-arrow-3"></i></a>
                            <a href="#join" className="agency-default-btn style2 btn">Learn More <i className="flaticon-right-arrow-3"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-7" data-aos="fade-down" data-aos-duration="1200" data-aos-delay="200">
                        <div className="agency-banner-image">
                            <img src="./images/banner/banner-img-3.png" alt="Banner"/>
                        </div>
                    </div>
                </div>

                <div className="trasted-content">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <div className="trasted-text">
                                <h3>Trusted by The Best Companies</h3>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <OwlCarousel className='trasted-slider owl-carousel owl-theme' {...settings}>
                                <div className="trasted-logo">
                                    <img src="./images/partner/partner9.png" alt="partner"/>
                                </div>
                                <div className="trasted-logo">
                                    <img src="./images/partner/partner10.png" alt="partner"/>
                                </div>
                                <div className="trasted-logo">
                                    <img src="./images/partner/partner11.png" alt="partner"/>
                                </div>
                                <div className="trasted-logo">
                                    <img src="./images/partner/partner12.png" alt="partner"/>
                                </div>
                                <div className="trasted-logo">
                                    <img src="./images/partner/partner13.png" alt="partner"/>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* End Banner Area */}
    </>
  )
}

export default Banner