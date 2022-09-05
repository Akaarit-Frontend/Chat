import React from 'react';
import OwlCarousel from 'react-owl-carousel';

function Testimonial() {

    const options = {
        loop:true,
        margin:20,
        nav:true,
        dots:false,
        autoplay:true,
        smartSpeed: 1000,
        autoplayHoverPause:true,
        navText: [
            '<i class="fa-regular fa-arrow-left"></i>',
            '<i class="fa-regular fa-arrow-right"></i>'
        ],
        responsive:{
            0:{
                items:1, 
            },
            768:{
                items:2,
            },
            992:{
                items:2,
            },
            1200:{
                items:2,
            },
                
        }
    }

  return (
    <>
        {/* Start Testimonial Area */}
        <div id="testimonial" class="agency-testimonial-area pb-100 pt-100">
            <div class="container">
                <div class="agency-section-title ">
                    <span>Testimonials</span>
                    <h2>Hear What Our Amazing Customers Say</h2>
                </div>
                <OwlCarousel class="agency-testimonial-slider owl-carousel owl-theme" {...options}>
                    <div class="agency-testimonial-card">
                        <div class="row align-items-center">
                            <div class="col-lg-8">
                                <div class="testimonial-content">
                                    <div class="rating-star">
                                        <ul>
                                            <li><i class="flaticon-star"></i></li>
                                            <li><i class="flaticon-star"></i></li>
                                            <li><i class="flaticon-star"></i></li>
                                            <li><i class="flaticon-star"></i></li>
                                            <li><i class="flaticon-star"></i></li>
                                        </ul>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consec tetur adipiscing elit et fames maecen amet est scelerisque lectus tortor sit</p>
                                    <h3>John Carter</h3>
                                    <span>CEO at Company</span>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="testimonial-image">
                                    <img src="./images/reviews/reviews-5.png" alt="Reviewer"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="agency-testimonial-card">
                        <div class="row align-items-center">
                            <div class="col-lg-8">
                                <div class="testimonial-content">
                                    <div class="rating-star">
                                        <ul>
                                            <li><i class="flaticon-star"></i></li>
                                            <li><i class="flaticon-star"></i></li>
                                            <li><i class="flaticon-star"></i></li>
                                            <li><i class="flaticon-star"></i></li>
                                            <li><i class="flaticon-star"></i></li>
                                        </ul>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consec tetur adipiscing elit et fames maecen amet est scelerisque lectus tortor sit</p>
                                    <h3>Alexander Hills</h3>
                                    <span>CEO Twitter</span>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="testimonial-image">
                                    <img src="./images/reviews/reviews-5.png" alt="Reviewer"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="agency-testimonial-card">
                        <div class="row align-items-center">
                            <div class="col-lg-8">
                                <div class="testimonial-content">
                                    <div class="rating-star">
                                        <ul>
                                            <li><i class="flaticon-star"></i></li>
                                            <li><i class="flaticon-star"></i></li>
                                            <li><i class="flaticon-star"></i></li>
                                            <li><i class="flaticon-star"></i></li>
                                            <li><i class="flaticon-star"></i></li>
                                        </ul>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consec tetur adipiscing elit et fames maecen amet est scelerisque lectus tortor sit</p>
                                    <h3>John Carter</h3>
                                    <span>CEO at Company</span>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="testimonial-image">
                                    <img src="./images/reviews/reviews-5.png" alt="Reviewer"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
                <img src="./images/shape/shape-23.png" class="testimonial-shape-1" alt="Shape"/>
                <img src="./images/shape/shape-24.png" class="testimonial-shape-2" alt="Shape"/>
                <img src="./images/shape/shape-19.png" class="testimonial-shape-3" alt="Shape"/>
            </div>
        </div>
        {/* End Testimonial Area */}
    </>
  )
}

export default Testimonial