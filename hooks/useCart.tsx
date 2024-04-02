"use client"
import { CardProductProps } from "@/app/components/Detail/Details";
import { createContext, useCallback, useContext, useState } from "react"


interface  CartContextProps {
    productCartQty:number
    cartPrd:CardProductProps[] | null
    addToBasket:(product:CardProductProps)=>void;
}

const  CartContext = createContext<CartContextProps | null>(null)

interface Props {
    [propName:string] :any
}
export const CartContexProvider= (props:Props) =>{
    const [productCartQty,setProductCartQty] = useState(0)
    const [cartPrd,setCartPrd] = useState<CardProductProps[] | null>()
    
    const addToBasket = useCallback((product:CardProductProps)=>{
        setCartPrd(prev=>{
            let updateCart;
            if(prev){
                updateCart=[...prev,product]
            }else{
                updateCart=[product]
            }
            return updateCart
        })
    },[cartPrd])

    let value ={
        productCartQty,
        addToBasket,
        cartPrd,
    }
    return (
        <CartContext.Provider value={value} {...props}></CartContext.Provider>
    )   
}

const UseCart = ()=>{
    const context = useContext(CartContext)
    if(!context){
        throw new Error('Use cart must be used within the provider')
    }   
    return context;
}

export default UseCart