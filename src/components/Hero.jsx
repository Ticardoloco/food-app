import React from 'react'

const Hero = () => {
  return (
    <div className='h-[34vw] my-7 mx-auto bg-contain bg-center bg-no-repeat relative'   style={{ backgroundImage: "url('/header_img.png')" }}>
     <div className="absolute flex flex-col items-start gap-[1.5vw] max-w-[65%] md:max-w-[45%] lg:max-w-[50%] bottom-[10%] left-[6vw] fade-in">
        <h2 className=" text-[max(4.5vw,22px)] text-white font-medium leading-7 sm:leading-10.5 md:leading-11.25 lg:leading-15.75 xl:leading-18">Order your favourite food here</h2>
        <p className="hidden md:block text-white text-[1vw]">Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        <button className="border-none text-gray-700 font-medium  py-[1vw] px-[2.5vw] bg-white text-sm rounded-full cursor-pointer">View Menu</button>
     </div>
    </div>
  )
}

export default Hero
