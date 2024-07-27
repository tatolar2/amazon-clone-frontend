import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
function LayOut({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default LayOut;
