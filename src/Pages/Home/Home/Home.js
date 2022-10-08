import React from "react";
import Banner from "../Banner/Banner";
import BlueGlass from "../BlueGlass/BlueGlass";
import Footer from "../Footer/Footer";
import Mans from "../Mans/Mans";
import Products from "../Products/Products";
import Review from "../Review/Review";
import Header from "../Shared/Header/Header";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Products></Products>
      <BlueGlass></BlueGlass>
      <Mans></Mans>
      <Review></Review>
      <Footer></Footer>
    </div>
  );
};

export default Home;
