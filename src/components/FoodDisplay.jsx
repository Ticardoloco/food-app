"use client";
import { StoreContext } from "@/context/StoreContext";
import React, { useContext } from "react";
import Foodlist from "./FoodList";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="mt-7.5">
      <h2 className="text-3xl font-medium text-gray-900">
        Top dishes near you
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  mt-7.5 gap-7.5 gap-y-12.5">
        {food_list.map((item, index) => {
          if (item.category === category || category === 'All') {
            return (
              <Foodlist
                key={index}
                id={item._id}
                name={item.name}
                image={item.image}
                description={item.description}
                price={item.price}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
