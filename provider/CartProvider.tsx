import { CartContexProvider } from '@/hooks/useCart'
import React from 'react'

const CartProvider = ({children} : {children:React.ReactNode}) => {
  return (
   <CartContexProvider>{children} </CartContexProvider>
  )
}

export default CartProvider