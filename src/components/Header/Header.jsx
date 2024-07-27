// header code that not include authontication

import { IoIosSearch } from "react-icons/io"; //   https://react-icons.github.io/react-icons/
import { IoMdCart } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import "./Header.css";
import LowerHeader from "./LowerHeader";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../Utility/firebase";

function Header() {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  console.log(basket);
  return (
    <section className="fixed_header">
      <section>
        <div className="header_container">
          {/* logo section */}
          <div className="logo_container">
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
                alt="amazon logo"
              />
            </Link>
          </div>

          {/* delivery */}
          <span>
            <CiLocationOn />
          </span>
          <div>
            <p className="delivery"> Deliver to</p>
            <span>Ethiopia</span>
          </div>
          <div className="search">
            {/* search section      */}
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="kjkl" />
            <IoIosSearch size={38} />
          </div>
          {/* right side link */}
          <div className="order_container">
            <Link to="" className="language">
              <img
                style={{ width: "40px", height: "25px" }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_the_United_States.png/1200px-Flag_of_the_United_States.png?20110131151900"
                alt="united_states_flag"
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </Link>
            <Link to={!user && "/auth"}>
              <div>
            {user ? (
              <>
                <p>Hello {user?.email?.split("@")[0]}</p>
                <span onClick={() => auth.signOut()}>Sign Out</span>
              </>
            ) : (
              <>
                <p>Hello, Sign In</p>
                <span>Account & Lists</span>
              </>
            )}
          </div>
            </Link>
            {/* orders */}
            <Link to="/Orders">
              <p>Returns</p>
              <span>& Orders</span>
            </Link>
            {/* cart */}
            <Link to="/Cart" className="cart">
              <IoMdCart size={35} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
}

export default Header;
