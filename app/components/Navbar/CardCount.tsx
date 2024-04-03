
"use client"
import UseCart from '@/hooks/useCart';
import Link from 'next/link';
import React from 'react'
import { FaBasketShopping } from "react-icons/fa6";


const CardCount = () => {
  const {cartPrd} = UseCart()
  return (
    <div className='hidden md:flex'>
      <Link href="/cart"><FaBasketShopping size={24}  />{cartPrd?.length} </Link>
    
    </div>
  )
}

export default CardCount