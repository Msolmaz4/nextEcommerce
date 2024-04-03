"use client"

import React from 'react'
import PageContainer from '../Container/PageContainer'
import UseCart from '@/hooks/useCart'
import Button from '../general/Button'
import {CardProductProps} from "../Detail/Details"
import Counter from '../general/Counter'
const CartClient = () => {
const {cartPrd,deleteToBasket,removeAll,addToBasketIncer,deleteBasketDes} = UseCart()
//console.log(cartPrd)

if(!cartPrd || cartPrd.length == 0 ){
  return <div> Leider is t leer</div>
}
let totalPrice = cartPrd?.reduce((acc:any,item:CardProductProps) =>acc+item.quantity*item.price ,0 )
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
                    <div className='w-1/5'>
                      <Counter cardProduct={pr} increaseFunc={()=>addToBasketIncer(pr)} decreaseFun={()=>deleteBasketDes(pr)}/>
                    </div>
                    <div className='w-1/5 text-orange-500 text-2xl text-bold'>{pr.price}</div> 

                    <div className='w-1/5 flex justify-center'><Button text='delete' onClick={()=>deleteToBasket(pr)} /></div>   
              </div>
            ))
          }
        </div>
        <div className='flex items-center justify-between my-5 py-5 border-t'>
          <button className='w-1/5 underline text-sm' onClick={removeAll}>Baket all Delete</button>
          <button>{totalPrice}</button>
        </div>
      </PageContainer>
    </div>
  )
}

export default CartClient