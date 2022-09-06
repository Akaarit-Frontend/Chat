import React,{useLayoutEffect} from 'react';
import {Routes, Route, useLocation } from "react-router-dom";
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Pricing from '../pages/Pricing';


const routes = () => {
  const Wrapper = ({children}) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
  }

  return (
    <>
      <Wrapper>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/sign-in' element={<SignIn/>}/>
          <Route exact path='/sign-up' element={<SignUp/>}/>
          <Route exact path='/pricing' element={<Pricing/>}/>
        </Routes>
      </Wrapper>
    </>
  )
}

export default routes;