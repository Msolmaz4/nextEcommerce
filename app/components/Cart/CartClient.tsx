"use client"

import React from 'react'
import PageContainer from '../Container/PageContainer'
import UseCart from '@/hooks/useCart'
import Button from '../general/Button'

const CartClient = () => {
const {cartPrd} = UseCart()
//console.log(cartPrd)

if(!cartPrd || cartPrd.length == 0 ){
  return <div> Leider is t leer</div>
}

  return (
    <div className='my-3 md:my-10'>

      <PageContainer>
        <div className='flex items  gap-3'> 
        <div className='w-1/5'>Image</div>
          <div className='w-1/5'>Title</div>
          <div className='w-1/5'>Quantity</div>
          <div className='w-1/5'>Price</div>
          <div className='w-1/5'></div>
        </div>
        <div>
          {
            cartPrd?.map((pr,i)=>(
              <div key={i} className='flex items  gap-3 justify-between my-5'>
                    <div className='w-1/5'>Image</div>
                    <div className='w-1/5'>{pr.title}</div>
                    <div className='w-1/5'>{pr.quantity}</div>
                    <div className='w-1/5 text-orange-500 text-2xl text-bold'>{pr.price}</div>   
                    <div className='w-1/5'><Button text='delete'/></div>   
              </div>
            ))
          }
        </div>
      </PageContainer>
    </div>
  )
}

export default CartClient