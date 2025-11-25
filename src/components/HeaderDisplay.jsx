"use client";
import React, { useState } from "react";
import LoginPopup from "./LoginPopup";
import Navbar from "./Navbar";

const HeaderDisplay = () => {
  const [loginPopup, setLoginPopup] = useState(false);
  return(
    <>
    {loginPopup ? <LoginPopup setLoginPopup={setLoginPopup} /> : null}
    <Navbar setLoginPopup={setLoginPopup}/>
    </>
  )
};

export default HeaderDisplay;
