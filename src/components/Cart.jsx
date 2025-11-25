"use client";
import { StoreContext } from "@/context/StoreContext";
import Image from "next/image";
import React, { useContext } from "react";
import NextLink from "next/link";

const Cart = () => {
  const { food_list, cart, removeCart, getTotalCart } =
    useContext(StoreContext);
  return (
    <div className="mt-[100px]">
      <div>
        <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-700 text-[max(1vw,12px)]">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr className="h-px bg-gray-300 border-none " />
      </div>
      {food_list.map((item, index) => {
        return (
          <div key={index}>
            {cart[item._id] > 0 ? (
              <div>
                {" "}
                <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-black my-2.5 text-[max(1vw,12px)]">
                  <Image src={item.image} alt="item" width={50} />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cart[item._id]}</p>
                  <p>${item.price * cart[item._id]}</p>
                  <p
                    className="cursor-pointer"
                    onClick={() => removeCart(item._id)}
                  >
                    x
                  </p>
                </div>
                <hr className="h-px bg-gray-300 border-none" />
              </div>
            ) : null}
          </div>
        );
      })}
      <div className="mt-20 flex flex-col sm:flex-row justify-between gap-[max(12vw,20px)]">
        <div className="flex-1 flex flex-col gap-5">
          <h2 className="text-2xl font-bold">Cart Totals</h2>
          <div>
            <div className="flex justify-between text-[#555]">
              <p>Subtotal</p>
              <p>${getTotalCart()}</p>
            </div>
            <hr className="h-px bg-[#e2e2e2] border-none my-2.5" />

            <div className="flex justify-between text-[#555]">
              <p>Delivery Fee</p>
              <p>${getTotalCart() === 0 ? 0 : 2}</p>
            </div>
            <hr className="h-px bg-[#e2e2e2] border-none my-2.5" />

            <div className="flex justify-between text-[#555]">
              <b>Total</b>
              <b>
                ${getTotalCart() === 0 ? getTotalCart() : getTotalCart() + 2}
              </b>
            </div>
          </div>
          <NextLink href="/placeOrder">
            <button className="none text-white bg-[tomato] w-[max(15vw,200px)] py-3 rounded-sm cursor-pointer text-[13px]">
              PROCEED TO CHECKPOINT
            </button>
          </NextLink>
        </div>
        <div className="flex-1">
          <div>
            <p className="text-[#555]">
              If you have a promo code, Enter it here
            </p>
            <div className="mt-2.5 flex justify-between items-center bg-[#eaeaea] rounded-sm">
              <input
                type="text"
                placeholder="promo code"
                className="pl-2.5 border-none outline-none bg-transparent"
              />
              <button className="w-[max(10vw,150px)] py-3 px-1.25 bg-black border-none text-white rounded-sm cursor-pointer">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
