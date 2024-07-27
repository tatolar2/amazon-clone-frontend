import React from "react";
import { CiMenuBurger } from "react-icons/ci";
import "./Header.css"

function LowerHeader() {
  return (
    <div className="lower_container">
      <CiMenuBurger/>
      <ul>
        <li>All</li>
        <li>Today's Deals</li>
        <li>Customer Service</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </div>
  );
}

export default LowerHeader;
