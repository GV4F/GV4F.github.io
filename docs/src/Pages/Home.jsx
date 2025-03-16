import React from "react";
import "../Style/Home.css";
import MyCarousel from "../Components/MyCarousel";
import About from "../Components/About";
import Trending from "../Components/Trending";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <>    
      <MyCarousel />
      <Trending />
      <About />
      <Footer/>
    </>
  );
};