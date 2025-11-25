"use client"
import AppDownload from '@/components/AppDownload'
import ExploreMenu from '@/components/ExploreMenu'
import FoodDisplay from '@/components/FoodDisplay'
import Hero from '@/components/Hero'
import React, { useState } from 'react'

const HomePage = () => {
  const [category, setCategory] = useState('All')
  return (
    <div className='w-[80%] mx-auto'>
      <Hero/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default HomePage
