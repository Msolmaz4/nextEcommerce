"use Client"

import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='h-[237px] bg-emerald-950 flex items-center justify-center'>
        <div className='h-[237px] relative w-full'>

            <Image src={"/banner.jpg"} fill alt='' className='object-cover'/>
        </div>
        
        </div>
  )
}

export default Banner