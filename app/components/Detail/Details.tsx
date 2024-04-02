
"use client"
import React, { useState } from 'react'
import PageContainer from '../Container/PageContainer'
import Image from 'next/image'
import Counter from '../general/Counter';

 export type CardProductProps = {
    id:string
    title?:string
    description?:string
    price? :number | string,  
    imageSrc?:string
    quantity?:number
    image?:string
    stock?:number
 }

const Details = ({product}:{product:any}) => {
  const [cardProduct ,setCardProduct]= useState<CardProductProps>({
    id:product.id,
    title: product.title,
    description: product.description,
    price: product.price,
    imageSrc: product.image?.url,
    quantity:1    
   
    
    
  })

const increaseFunc =()=>{
  setCardProduct(prevProd=>({...prevProd,quantity: prevProd.quantity +1}))

}
const decreaseFun = ()=>{
  if(cardProduct.quantity  == 1 ) return
  setCardProduct(prevProd=>({...prevProd,quantity: prevProd.quantity -1}))
}

    let imageUrl;
  if (product.images) {
    imageUrl = product.images[0].replace(/[\[\]"]+/g,''); // remove brackets and quotes
  }
  imageUrl = imageUrl || "/fallback-image.png"; // if imageUrl is undefined, use fallback image
  return (
    <div className='my-10'>
       <PageContainer>
        <div className='md:flex block gap-10 justify-center'>
            <div className='relative h-[400px] w-[400px] '>
                <Image src={imageUrl} fill alt=""/>
            </div>
            <div className='w-1/2'>
                <div className='text-xl md:text-2xl'>{product?.title} </div>
                <div className='text-slate-500'>{product?.description}</div>
                <Counter decreaseFun={decreaseFun} increaseFunc={increaseFunc} cardProduct={cardProduct}/>
            </div>
        </div>
       </PageContainer>
    </div>
  )
}

export default Details