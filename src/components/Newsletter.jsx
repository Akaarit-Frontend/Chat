import React from 'react'

const Newsletter = () => {
  return (
    <>
        {/* Start Join Us Area */}
        <div id="join" class="join-us-area">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-7">
                        <div class="join-us-content">
                            <h2>Take Your Business to The Next Level</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit et fames maecen amet est scelerisque lectus tortor sit lorem.</p>
                            <div class="join-us-form">
                                <form>
                                    <div class="row g-0 align-items-center">
                                        <div class="col-lg-5">
                                            <div class="form-group">
                                                <input type="text" class="form-control redius" placeholder="Your Name"/>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="form-group">
                                                <input type="email" class="form-control" placeholder="Your Email"/>
                                            </div>
                                        </div>
                                        <div class="col-lg-3">
                                            <div class="form-group">
                                                <button type="submit" class="agency-default-btn btn">Join Us!</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="join-us-img">
                            <img src="./images/newsletter-img/join-us-1.png" alt="Join Us"/>
                            <img src="./images/newsletter-img/join-us-2.png" class="join-us-shape-1" alt="Shape"/>
                        </div>
                    </div>
                </div>
                <img src="./images/newsletter-img/shape-1.png" class="join-us-shape-2" alt="Shape"/>
            </div>
        </div>
        {/* End Join Us Area */}
    </>
  )
}

export default Newsletter