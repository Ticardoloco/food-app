"use client";
import { StoreContext } from "@/context/StoreContext";
import Image from "next/image";
import React, { useContext, useState } from "react";

const ExploreMenu = ({ category, setCategory }) => {
  const { menu_list } = useContext(StoreContext);
  return (
    <div className="flex flex-col gap-5" id="menu">
      <h1 className="text-gray-900 font-medium text-3xl">Explore our menu</h1>

      <p className="max-w-full text-gray-700 lg:max-w-[60%] text-sm lg:text-base">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings and elevate your dining experience,
        one delicious meal at a time.
      </p>

      <div className="flex flex-row gap-[30px] justify-between items-center my-5 overflow-x-scroll no-scrollbar">
        {menu_list.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
            >
              <Image
                src={item.menu_image}
                alt="menu image"
                width={200}
                height={200}
                className={`min-w-20 w-[7.5vw] rounded-full cursor-pointer ${
                  category === item.menu_name
                    ? "border-4 border-[tomato] rounded-full"
                    : ""
                }`}
              />
              <p className="text-gray-700 mt-2.5 text-base cursor-pointer text-center">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="h-0.5 bg-gray-300 my-2.5 border-none" />
    </div>
  );
};

export default ExploreMenu;
