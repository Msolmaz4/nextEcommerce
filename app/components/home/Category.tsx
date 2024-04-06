"use client"

import React from 'react'
import { GiElectric } from "react-icons/gi";
import { FaLaptop } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { PiStudentDuotone } from "react-icons/pi";


const categoryList= [
    {
        name:"Electornic",
        icon: GiElectric 
    },
    {
        name:"Laptop",
        icon: FaLaptop 
    },
    {
        name:"Telefon",
        icon: BsFillTelephoneFill
    },
    {
        name:"Computer",
        icon: FaLaptop 
    },
    {
        name:"Home",
        icon: GiElectric 
    },
    {
        name:"Students",
        icon: PiStudentDuotone
    }
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
