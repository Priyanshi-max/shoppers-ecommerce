import React from "react";
import { Link } from "react-router-dom";
import { logo, cartImg } from "../assets/index";
import { useSelector } from "react-redux";

const Header = () => {
  const { productData } = useSelector((state) => state.shopper);
  const userInfo = useSelector((state) => state.shopper.userInfo);

  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <div>
            {/* <img className="w-20" src={logo} alt="shoppers" /> */}
            <p>
              <span className="text-3xl text-black font-semibold w-1">shoppers</span>
            </p>
          </div>
        </Link>
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex items-center gap-8">
           <Link to="/">
           <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration -[1px] cursor-pointer">
              Home
            </li>
           </Link>
            {/* <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
              Pages
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration -[1px] cursor-pointer">
              Shop
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration -[1px] cursor-pointer">
              Element
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration -[1px] cursor-pointer">
              Blog
            </li> */}
          </ul>
          <Link to="/cart">
            <div className="relative">
              <img className="w-10" src={cartImg} alt="cart" />
              <span className="absolute w-8 top-2 left-0 text-sm flex items-center justify-center font-semibold font-titleFont">
                {productData.length}
              </span>
            </div>
          </Link>
          <Link to="/login">
            <img
              className="w-8 h-8 rounded-full"
              src={
                userInfo
                  ? userInfo.image
                  : "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
              }
              alt=""
            />
          </Link>
          {userInfo && (
            <p className="text-base font-titleFont font-semibold underline underline-offset-2">
              {userInfo.name}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
