import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/layouts/Layout";
import Home from '../pages/home'
import AboutUs from '../pages/aboutUs'
import Features from '../pages/features'
import LoginSignup from '../pages/loginSignup'
import Services from '../pages/services'

const Routers = () => {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/features" element={<Features />} />
      <Route path='/loginSignup' element={<LoginSignup/>}/>
      <Route path='/services' element={<Services/>}/>

    </Route>
    </Routes>
  )
}

export default Routers;
