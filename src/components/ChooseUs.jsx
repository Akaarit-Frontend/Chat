import React from 'react'

const ChooseUs = () => {
  return (
    <>
        {/* Start Choose Area */}
        <div className="agency-choose-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="agency-choose-content">
                            <div className="agency-choose-title">
                                <span>Why Choose Us</span>
                                <h2>Global Leader In Modern Business Innovation</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit et fames maecen amet est scelerisque lectus tortor sit lorem ipsum dolor sit amet adipiscing elit et fames lectus tortor sit.</p>
                            </div>
                            <div className="choose-list">
                                <ul>
                                    <li>
                                        <div className="icon">
                                            <i className="flaticon-checked"></i>
                                        </div>
                                        <h3>10+ Years of Experience</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit et fames maecen amet est scelerisque lectus tortor.</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="flaticon-checked"></i>
                                        </div>
                                        <h3>Team of Industry Experts</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit et fames maecen amet est scelerisque lectus tortor.</p>
                                    </li>
                                </ul>
                            </div>
                            <a href="#join" className="agency-default-btn style3 btn">Get in Tuch <i className="flaticon-right-arrow-3"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src="./images/about/choose-6.png" alt="Choose Us"/>
                    </div>
                </div>
                <img src="./images/shape/shape-14.png" className="choose-shape-1" alt="shape"/>
            </div>
        </div>
        {/* End Choose Area */}
    </>
  )
}

export default ChooseUs