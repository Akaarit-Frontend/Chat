import React from 'react';
import {Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Pricing from '../pages/Pricing';


const routes = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/sign-in' element={<SignIn/>}/>
        <Route exact path='/sign-up' element={<SignUp/>}/>
        <Route exact path='/pricing' element={<Pricing/>}/>
      </Routes>
    </>
  )
}

export default routes;