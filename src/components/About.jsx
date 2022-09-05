import React from 'react'

const About = () => {
  return (
    <>
        {/* Start About Agency Area */}
        <div id="about" className="agency-about-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="agency-about-image pr-20">
                            <img src="./images/about/about-img-1.png" alt="About us"/>
                            <img src="./images/shape/shape-16.png" className="about-shape-1" alt="shape"/>
                            <img src="./images/shape/shape-17.png" className="about-shape-2" alt="shape"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="agency-about-content pl-20">
                            <div className="agency-about-title">
                                <span>About Our Company</span>
                                <h2>Honesty And Hard Work Are Our Beliefs</h2>
                                <div className="agency-text">
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit et fames maecen amet est scelerisque lectus tortor sit lorem ipsum dolor sit amet       adipiscing elit et fames lectus tortor sit.</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit et fames maecen amet est scelerisque lectus tortor sit lorem ipsum dolor sit amet .</p>
                                </div>
                                <a href="#services" className="agency-default-btn btn">Read More <i className="flaticon-right-arrow-3"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src="./images/shape/shape-24.png" className="about-shape-3" alt="shape"/>
        </div>
        {/* End About Agency Area */}
    </>
  )
}

export default About