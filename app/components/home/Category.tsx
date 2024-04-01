"use client"

import React from 'react'

const categoryList= [
    {
        name:"Electornic"
    },
    {
        name:"Laptop"
    },
    {
        name:"Telefon"
    },
    {
        name:"Computer"
    },
    {
        name:"Home"
    },
    {
        name:"Students"
    },

]

const Category = () => {
  return (
    <div className='flex items-center justify-center gap-3 md:gap-10 my-5 md:my-10 md:py-1 md:px-10 overflow-x-auto'>

{
    categoryList?.map((ert,i)=>(
        <div key={i} className='border text-slate-500 rounded-full min-w-[120px] flex items-center justify-center px-4 py-2 text-center'>{ert.name}</div>
    ))
}

    </div>
  )
}

export default Category
