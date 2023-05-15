import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { TiPlusOutline } from "react-icons/ti";
import { IoIosArrowDown } from "react-icons/io";
import ModelBox from "../../../ecommerce_frontend/src/Components/ModelBox";
import Login from "../Pages/Common/Login";
import SignUp from "../Pages/Common/SignUp";
import VerifyOtp from "../Pages/Common/VerifyOtp";

const MainHeader = () => {
  const [toggle, setToggle] = useState(false);
  const [model, setModel] = useState(false);
  const [modelToggle, setModelToggle] = useState("login");

  console.log(model, "model");
  return (
    <div className="header">
      <div className="h1">
        Flipkart
        <p className="text">
          Explore&nbsp;
          <span className="blue_text">Plus</span>
        </p>
      </div>
      <div className="search">
        <div className="header-search">
          <input
            type="text"
            placeholder=" Search for products, brands and more"
            name="search"
          />
        </div>
        <div className="header-icon">
          <FaSearch />
        </div>
      </div>
      <div>
        <button
          className="header-button"
          onMouseOver={() => setToggle(true)}
          onMouseLeave={() => setToggle(false)}
          onClick={() => setModel(true)}
        >
          Login
        </button>
      </div>
      {toggle && (
        <div
          className="drop-down"
          onMouseOver={() => setToggle(true)}
          onMouseLeave={() => setToggle(false)}
        >
          <div className="dropdownarrow"></div>
          <div className="drop-down-in1 ">
            <span>New Customer ?</span>
            <span>SignUp</span>
          </div>
          <div className="drop-down-in2">
            <ul>
              <li className="header-li">
                {" "}
                <CgProfile />
                &nbsp;&nbsp;MyProfile
              </li>
              <li>
                <TiPlusOutline />
                &nbsp;&nbsp;Flipkart Zone Plus
              </li>
              <li>Orders</li>
              <li>Wishlist</li>
              <li>Rewards</li>
              <li>Gift Cards</li>
            </ul>
          </div>
        </div>
      )}
      <div className="header-button2">Become a Seller</div>
      <div className="header-more">
        More
        <IoIosArrowDown className="header-more-arrow" />
      </div>
      {model && (
        <ModelBox>
          {modelToggle === "register" ? (
            <SignUp setModelToggle={setModelToggle} />
          ) : modelToggle === "login" ? (
            <Login setModelToggle={setModelToggle} />
          ) : modelToggle === "verifyotp" ? (
            <VerifyOtp setModelToggle={setModelToggle} />
          ) : (
            ""
          )}
        </ModelBox>
      )}
    </div>
  );
};

export default MainHeader;
