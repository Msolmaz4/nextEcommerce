"use client"

import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href="/"> 
    <div className='bg-orange-700 px-2 py-1 rounded-md text-lg md:text-2xl cursor-pointer '>M<span >.Shop</span></div></Link>
  )
}

export default Logo