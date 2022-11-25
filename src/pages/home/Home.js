import React from "react";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import Info from "../../components/info/Info";
import "./home.scss";

const Home = () => {
  return (
    <div>
      
      <Hero />
      <Info />
      <Banner />
      
    </div>
  );
};

export default Home;
