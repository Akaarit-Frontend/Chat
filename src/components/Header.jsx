import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const [stickyClass, setStickyClass] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);
    
        return () => {
          window.removeEventListener('scroll', stickNavbar);
        };
    }, []);

    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 120 ? setStickyClass(true) : setStickyClass(false);
        }
    };

  return (
    <>
        {/* Start Navbar Area */}
        <nav className={`navbar navbar-expand-lg navbar-light bg-light nav-style5 ${stickyClass ? 'is-sticky' : ''}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    {/* <img src="assets/images/logo/logo-4.png" className="main-logo" alt="logo"/>
                    <img src="assets/images/logo/logo2.png" className="white-logo" alt="logo"/> */}
                    <h2 className='mb-0'>Anonymous Chat</h2>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                        <li className="nav-item"><a className="nav-link" href="/#about">About Us</a></li>
                        <li className="nav-item"><Link className="nav-link" to="/pricing">Pricing</Link></li>
                    </ul>
                    <div className="others-options d-flex align-items-center style3">
                        <div className="option-item">
                            <Link to="/sign-up">Sign In/Up <i className="flaticon-right-arrow-3"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        {/* End Navbar Area */}
    </>
  )
}

export default Header