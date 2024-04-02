
"use client"
import UseCart from '@/hooks/useCart';
import React from 'react'
import { FaBasketShopping } from "react-icons/fa6";


const CardCount = () => {
  const {cartPrd} = UseCart()
  return (
    <div className='hidden md:flex'>
    <FaBasketShopping size={24}  />{cartPrd?.length}
    </div>
  )
}

export default CardCount