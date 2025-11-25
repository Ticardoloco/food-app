"use client"
import { assets } from '@/assets/assets'
import { StoreContext } from '@/context/StoreContext'
import Image from 'next/image'
import React, { useContext, useState } from 'react'

const Foodlist = ({id, image, name, description, price}) => {
   
    const {cart, addToCart, removeCart} = useContext(StoreContext);
  return (
    <div className="w-full m-auto rounded-[15px] transition-[.3s] fade-it">
      <div className="relative ">
        <Image
        src={image}
        alt={name}
        width={200}
        height={200}
        className='w-full rounded-tl-[15px] rounded-tr-[15px]'
        />
        {!cart[id] ? (<Image onClick={()=>addToCart(id)} src={assets.add_icon_white} alt='add icon' width={25} height={25} className='w-[35px] absolute bottom-[15px] right-[15px] cursor-pointer rounded-full'/>) : (<div className='absolute bottom-[15px] right-[15px] flex justify-between items-center gap-2.5 p-1.5 rounded-[50px] bg-white'>
          <Image onClick={()=>removeCart(id)} src={assets.remove_icon_red}
          alt='remove icon' width={25} height={25} className='w-[30px] cursor-pointer'/>
          <p>{cart[id]}</p>
          <Image onClick={()=>addToCart(id)} src={assets.add_icon_green}
          alt='remove icon' width={25} height={25} className='w-[30px] cursor-pointer'/>
        </div>) }
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2.5">
          <p className="text-[18px] font-medium">{name}</p>
          <Image
          src={assets.rating_starts}
          alt='rating star'
          width={70}
          height={70}
          className='w-[70px]'
          />
        </div>
        <p className="text-[12px] text-gray-700">{description}</p>
        <p className="text-[tomato] text-[22px] font-medium my-2.5">${price}</p>
      </div>
    </div>
  )
}

export default Foodlist
