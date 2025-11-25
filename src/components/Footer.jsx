import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="text-gray-400 bg-gray-900 flex items-center flex-col gap-5 py-5 px-[8vw] pt-20 mt-[100px]" id="contact-us">
      <div className="w-full flex flex-col sm:grid grid-cols-[2fr_1fr_1fr] gap-8.75 sm:gap-20">
        <div className="flex flex-col items-start gap-5">
          <Image src={assets.logo} alt="logo" width={173} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quae,
            quidem officia maxime officiis quia suscipit at iusto dolorum
            reiciendis quibusdam nulla totam error. Cupiditate quia eligendi
            quas dolore soluta.
          </p>
          <div className="flex">
            <Image
              src={assets.facebook_icon}
              alt="facebook"
              width={40}
              className="mr-[15px]"
            />
            <Image
              src={assets.twitter_icon}
              alt="twitter"
              width={40}
              className="mr-[15px]"
            />
            <Image
              src={assets.linkedin_icon}
              alt="linkedin"
              width={40}
              className="mr-[15px]"
            />
          </div>
        </div>

        <div className="flex flex-col items-start gap-5">
          <h2 className="text-white text-2xl font-semibold">COMPANY</h2>
          <ul>
            <li className="mb-2.5 cursor-pointer">Home</li>
            <li className="mb-2.5 cursor-pointer">About Us</li>
            <li className="mb-2.5 cursor-pointer">Delivery</li>
            <li className="mb-2.5 cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        <div className="flex flex-col items-start gap-5">
          <h2 className="text-white text-2xl font-semibold">GET IN TOUCH</h2>
          <ul>
            <li className="mb-2.5 cursor-pointer">+234-706-343-2983</li>
            <li className="mb-2.5 cursor-pointer">contact@tomato.com</li>
          </ul>
        </div>
      </div>
        <hr className="w-full h-0.5 my-5 bg-gray-400 border-none" />
        <p className="text-center">Copyright 2025 © Egbeleke Taiwo - All Right Reserved.</p>
    </div>
  );
};

export default Footer;
