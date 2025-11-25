import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const AppDownload = () => {
  return (
    <div className='mt-25 mx-auto mb-auto text-[22px] sm:text-[33px] text-center font-medium leading-6.25 md:leading-10.5' id='mobile-app'>
      <p>For Better Experience Download <br /> Tomato App</p>
      <div className="flex justify-center mt-10 gap-3 sm:gap-[22px]">
        <Image
        src={assets.play_store}
        alt='play store'
        width={300}
        className='w-[max(30vw,120px)] max-w-[180px] hover:scale-[1.05] transition-[0.5s] cursor-pointer'
        />

        <Image
        src={assets.app_store}
        alt='play store'
        width={300}
        className='w-[max(30vw,120px)] max-w-[180px] hover:scale-[1.05] transition-[0.5s] cursor-pointer'
        />
      </div>
    </div>
  )
}

export default AppDownload
