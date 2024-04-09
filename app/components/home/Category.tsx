"use client"

import React, { useContext, useState } from 'react'
import { GiElectric } from "react-icons/gi";
import { FaLaptop } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { PiStudentDuotone } from "react-icons/pi";
import UseCart from '@/hooks/useCart';


const categoryList= [
    {
        name:"Electronics",
        icon: GiElectric 
    },
    {
        name:"Laptop",
        icon: FaLaptop 
    },
    {
        name:"Furnitures",
        icon: BsFillTelephoneFill
    },
    {
        name:"Men's Shoes",
        icon: FaLaptop 
    },
    {
        name:"T-shirts",
        icon: GiElectric 
    },
    {
        name:"Cycles",
        icon: PiStudentDuotone
    }
]

const Category = () => {

const {setCat}= UseCart()
const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
const handleCategoryClick = (categoryName: string) => {

      setCat(categoryName)
    setSelectedCategory(prev => prev === categoryName ? null : categoryName)
   if(selectedCategory){ 
    console.log("renk giiti")
    setCat(null)}
  

   
    
  }

return(
    <div className='flex items-center justify-center gap-3 md:gap-10 my-5 md:my-10 md:py-1 md:px-10 overflow-x-auto cursor-pointer'>

{
    categoryList?.map((ert,i)=>(
        <div key={i} 

        // onClick={()=>{setCat(ert.name) , setSelectedCategory(ert.name)}}
              onClick={() => handleCategoryClick(ert.name)}
        
        className={`border text-slate-500 rounded-full min-w-[120px] flex items-center justify-center px-4 py-2 text-center ${selectedCategory === ert.name ? " bg-cyan-300" : ""}`}>{ert.name}</div>
    ))
}

    </div>
  )
}

export default Category
