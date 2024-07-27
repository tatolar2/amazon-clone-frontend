import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import Category from "../../components/Category/Category";
import Product from "../../components/Product/Product";
import LayOut from "../../components/LayOut/LayOut";
import Footer from "../../components/Footer/Footer";

function Landing() {
  return (
    <div>
      <LayOut />
      <Carousel />
      <Category />
      <Product />
      <Footer/>
    </div>
  );
}

export default Landing;
