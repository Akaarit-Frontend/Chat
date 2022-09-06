import React from 'react'
import { Link } from 'react-router-dom'

const SIgnIn = () => {
    return (
        <>
            <div className='pt-100 padding-top-mobile'>
                <div id="vendor_form_area" className="pt-100 pb-100 bg-color-f9f5f4">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="vendor_form_heading">
                                    <h2 style={{color:'#f4732a'}}>Sign In</h2>
                                    <p>Eu sint minim tempor anim aliqua officia voluptate incididunt deserunt.
                                        <br/> Velitgo quis Lorem culpa qui pariatur occaecat.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="sign_form">
                                    <div className="sign_form_box">
                                        <form action="!#" id="tour_bookking_form_item">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control bg_input" placeholder="Email/Phone"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <select className="form-control form-select bg_input">
                                                            <option value="1">Manager</option>
                                                            <option value="1">Employee</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <input type="password" className="form-control bg_input" placeholder="Password*"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="booking_tour_form_submit pt-4">
                                        <div className="form-check write_spical_check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefaultf1"/>
                                            <label className="form-check-label" for="flexCheckDefaultf1">
                                                I have read and accept the <a href="terms-service.html">Terms and
                                                    conditions</a> and <a href="privacy-policy.html">Privacy policy</a>
                                            </label>
                                        </div>
                                        <Link to="/" className="agency-default-btn btn mt-3">Sign In</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="vendor_img">
                                    <img src="./images/banner/login.png" alt="Login"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SIgnIn