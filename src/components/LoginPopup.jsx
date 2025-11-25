"use client"
import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useState } from 'react'

const LoginPopup = ({setLoginPopup}) => {
    const [title, setTitle]= useState(true);
  return (
    <div className='absolute z-1 w-full h-full bg-[#00000090] grid'>
      <form className="place-self-center w-3xl max-w-[max(23vw,330px)] text-gray-700 bg-white flex flex-col gap-6.25 py-6.25 px-7.5 rounded-lg text-sm fade-on">
        <div className="flex justify-between items-center text-xl font-semibold text-black">
          <p>{title ? 'Sign Up': 'Login'}</p>
          <Image
          src={assets.cross_icon}
          alt='cross'
          width={16}
          onClick={()=>setLoginPopup(false)}
          className='cursor-pointer'
          />
        </div>
        <div className="flex flex-col gap-5">
          {title ? <input type="text" placeholder='Your name' required className='outline-none border border-[#c9c9c9] p-2.5 rounded-sm' />: null}
          <input type="email" placeholder='Your email' required className='outline-none border border-[#c9c9c9] p-2.5 rounded-sm' />
          <input type="password" placeholder='Password' required className='outline-none border border-[#c9c9c9] p-2.5 rounded-sm' />
        </div>
          <button className='border-none p-2.5 rounded-sm text-white bg-[tomato] text-[15px] cursor-pointer'>{title ? "Create Account" : "Login"}</button>
          <div className="flex items-start gap-2 -mt-3.75">
            <input className='mt-[5px]' type="checkbox" required/>
            <p className='text-gray-700 leading-4.5'>By continuing, i agree to the terms of use & privacy policy.</p>
          </div>
          <p>Already have an account? <span onClick={()=>setTitle(!title)} className='text-[tomato] cursor-pointer font-medium'>Click here</span></p>
      </form>
    </div>
  )
}

export default LoginPopup
