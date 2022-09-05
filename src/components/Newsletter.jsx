import React from 'react'

const Newsletter = () => {
  return (
    <>
        {/* Start Join Us Area */}
        <div id="join" className="join-us-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="join-us-content">
                            <h2>Take Your Business to The Next Level</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit et fames maecen amet est scelerisque lectus tortor sit lorem.</p>
                            <div className="join-us-form">
                                <form>
                                    <div className="row g-0 align-items-center">
                                        <div className="col-lg-5">
                                            <div className="form-group">
                                                <input type="text" className="form-control redius" placeholder="Your Name"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <input type="email" className="form-control" placeholder="Your Email"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <button type="submit" className="agency-default-btn btn">Join Us!</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="join-us-img">
                            <img src="./images/newsletter-img/join-us-1.png" alt="Join Us"/>
                            <img src="./images/newsletter-img/join-us-2.png" className="join-us-shape-1" alt="Shape"/>
                        </div>
                    </div>
                </div>
                <img src="./images/newsletter-img/shape-1.png" className="join-us-shape-2" alt="Shape"/>
            </div>
        </div>
        {/* End Join Us Area */}
    </>
  )
}

export default Newsletter