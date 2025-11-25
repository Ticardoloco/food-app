"use client"
import { StoreContext } from '@/context/StoreContext'
import React, { useContext } from 'react'

const PlaceOrder = () => {
    const {getTotalCart} = useContext(StoreContext)
  return (
    <div className='flex flex-col sm:flex-row justify-between items-start gap-12.5 mt-[100px] '>
      <div className="w-full max-w-[max(30%,500px)]">
        <p className="text-3xl font-semibold mb-12.5">Delivery Information</p>
       <div className="flex gap-2.5">
            <input type="text" placeholder='First name' className='mb-3.75 w-full p-2.5 outline-[tomato] border border-[#c5c5c5] rounded-sm'/>
            <input type="text" placeholder='Last name' className='mb-3.75 w-full p-2.5 outline-[tomato] border border-[#c5c5c5] rounded-sm'/>
        </div>

        <input type="email" placeholder='Email address' className='mb-3.75 w-full p-2.5 outline-[tomato] border border-[#c5c5c5] rounded-sm'/>
        <input type="text" placeholder='Street' className='mb-3.75 w-full p-2.5 outline-[tomato] border border-[#c5c5c5] rounded-sm'/>

        <div className="flex gap-2.5">
            <input type="text" placeholder='City' className='mb-3.75 w-full p-2.5 outline-[tomato] border border-[#c5c5c5] rounded-sm'/>
            <input type="text" placeholder='State' className='mb-3.75 w-full p-2.5 outline-[tomato] border border-[#c5c5c5] rounded-sm'/>
        </div>

        <div className="flex gap-2.5">
            <input type="text" placeholder='Zip code' className='mb-3.75 w-full p-2.5 outline-[tomato] border border-[#c5c5c5] rounded-sm'/>
            <input type="text" placeholder='Country' className='mb-3.75 w-full p-2.5 outline-[tomato] border border-[#c5c5c5] rounded-sm'/>
        </div>

         <input type="text" placeholder='Phone' className='mb-3.75 w-full p-2.5 outline-[tomato] border border-[#c5c5c5] rounded-sm'/>
      </div>

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
                  <button className="none text-white bg-[tomato] w-[max(15vw,200px)] py-3 rounded-sm cursor-pointer text-[13px]">
                    PROCEED TO PAYMENT
                  </button>
              </div>
    </div>
  )
}

export default PlaceOrder
