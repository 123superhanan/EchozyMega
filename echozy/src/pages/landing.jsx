
import React, { useState } from 'react';
import Hero from '../components/landing/hero';
import Navbar from '../components/landing/navbar';
import { Link } from "react-router-dom";
import Slider from '../components/landing/slider';
import Info from '../components/landing/info';
import Feature from "../components/landing/feature"
import Testimonials from "../components/landing/testimonail"
import PricingSlider from '../components/landing/Price';
import Footer from '../components/landing/footer';
import TaylorAlbumsSpotlight from '../components/landing/TaylorAlbumsSpotlight';
import IntroAnimation from '../components/landing/Intro';
const Landing = () => {
  const [showMain, setShowMain] = useState(false);
  return (
    <div className="min-h-screen bg-background p-4 ">
      <Navbar />
      {!showMain && <IntroAnimation onFinish={() => setShowMain(true)} />}
      {showMain && <Hero />}
      <Slider/>
      <Info/>
      <Feature/>
      <TaylorAlbumsSpotlight/>
      <Testimonials/>
      <PricingSlider/>
      
      
      <Footer/>
    </div>
  );
};

export default Landing;
