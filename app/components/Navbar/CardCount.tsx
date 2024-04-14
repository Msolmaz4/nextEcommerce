
"use client"
import { getCurrentUser } from '@/app/actions/getCurrentUser';
import UseCart from '@/hooks/useCart';
import { User } from '@prisma/client';
import Link from 'next/link';
import React from 'react'
import { FaBasketShopping } from "react-icons/fa6";

interface UserProps {
  currentUser :User |null |undefined
}

const CardCount:React.FC<UserProps> = ({currentUser}) => {
  const {cartPrd} = UseCart()
 
  
  return (
    <div className='hidden md:flex'>
      {
        currentUser && <Link href="/cart"><FaBasketShopping size={24}  />{cartPrd?.length} </Link>
      }
      
    
    </div>
  )
}

export default CardCount