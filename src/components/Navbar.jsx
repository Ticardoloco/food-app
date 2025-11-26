"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import NextLink from "next/link";
import { StoreContext } from "@/context/StoreContext";

const Navbar = ({ setLoginPopup }) => {
  const [menuSlide, setMenuSlide] = useState("home");
  const {getTotalCart} = useContext(StoreContext);
  return (
    <div className="w-[80%] py-5 mx-auto">
      <div className="flex items-center justify-between">
        <NextLink href="/">
          <Image
            src={assets.logo}
            alt="logo"
            width={150}
            height={150}
            className="cursor-pointer w-[130px] sm:w-[150px]"
            onClick={() => setMenuSlide("home")}
          />
        </NextLink>
        <ul className="hidden gap-5 items-center text-gray-700 text-[17px] lg:flex font-medium">
          <li>
            <NextLink
              onClick={() => setMenuSlide("home")}
              className={
                menuSlide === "home" ? "border-b-2 border-gray-700 pb-1" : ""
              }
              href="/"
            >
              home
            </NextLink>
          </li>
          <li>
            <a
              onClick={() => setMenuSlide("menu")}
              className={
                menuSlide === "menu" ? "border-b-2 border-gray-700 pb-1" : ""
              }
              href="#menu"
            >
              menu
            </a>
          </li>
          <li>
            <a
              onClick={() => setMenuSlide("mobile-app")}
              className={
                menuSlide === "mobile-app"
                  ? "border-b-2 border-gray-700 pb-1"
                  : ""
              }
              href="#mobile-app"
            >
              mobile-app
            </a>
          </li>
          <li>
            <a
              onClick={() => setMenuSlide("contact-us")}
              className={
                menuSlide === "contact-us"
                  ? "border-b-2 border-gray-700 pb-1"
                  : ""
              }
              href="#contact-us"
            >
              contact us
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-3 sm:gap-[30px]">
          <Image
            src={assets.search_icon}
            alt="search-icon"
            width={30}
            height={30}
            className="cursor-pointer w-6 sm:w-7.5"
          />
          <div className="relative">
            <NextLink href={"/order"}>
              <Image
                src={assets.basket_icon}
                alt="basket icon"
                width={30}
                height={30}
                className="cursor-pointer w-6 sm:w-7.5"
              />
            </NextLink>
            <div className={` absolute w-2.5 h-2.5 bg-[tomato] -top-2 -right-2 rounded-[5px] ${getTotalCart()=== 0 ? "hidden":"block"}`}></div>
          </div>

          <button
            onClick={() => setLoginPopup(true)}
            className="py-2 px-6.25 sm:py-2.5 sm:px-7.5 text-xs sm:text-base text-gray-700 bg-transparent border border-[tomato] rounded-full cursor-pointer "
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
