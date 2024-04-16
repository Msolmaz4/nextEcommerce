"use client"
import { CardProductProps } from "@/app/components/Detail/Details";
import { createContext, useCallback, useContext, useEffect, useState } from "react"
import toast from "react-hot-toast";


interface  CartContextProps {
    productCartQty:number
    cartPrd:CardProductProps[] | null
    addToBasket:(product:CardProductProps)=>void;
    deleteToBasket:(product:CardProductProps)=>void;
    removeAll:()=>void
    addToBasketIncer:(product:CardProductProps)=>void;
    deleteBasketDes:(product:CardProductProps)=>void;
    search: string; // bu satırı ekleyin
    setSearch: (search: string) => void; // bu satırı ekleyin
}

const  CartContext = createContext<CartContextProps | null>(null)

interface Props {
    [propName:string] :any
}
export const CartContexProvider= (props:Props) =>{
    const [search, setSearch] = useState<string>("");
    const [productCartQty,setProductCartQty] = useState(0)
    const [cartPrd,setCartPrd] = useState<CardProductProps[] | null>()
    const [cater,setCat] = useState<string>("")
    console.log(cater,"cattttttttttttttttt")
    //localstorg yukledikce sonra acilirken datayi cekiyorum
    useEffect(()=>{
        let getItem : any = localStorage.getItem("cart")
        let getItemParse :CardProductProps[] | null = JSON.parse(getItem)
        setCartPrd(getItemParse)
    },[])
    
    const addToBasket = useCallback((product:CardProductProps)=>{
        setCartPrd(prev=>{
            let updateCart;
            if(prev){
                updateCart=[...prev,product]
            }else{
                updateCart=[product]
            }
            localStorage.setItem("cart",JSON.stringify(updateCart))
            toast.success('Successfully basket')
            return updateCart
        })
    },[cartPrd])

    const deleteToBasket = useCallback((product:CardProductProps)=>{
        if(cartPrd){
            const filterData = cartPrd?.filter(cart =>cart.id !== product.id)
            setCartPrd(filterData)
            localStorage.setItem("cart",JSON.stringify(filterData))
            toast('deleted', {
                icon: '👏',
              })
        }
    },[cartPrd])


    const removeAll = useCallback(()=>{
        setCartPrd(null) 
        localStorage.setItem("cart",JSON.stringify(null))
    },[])


//burda ben cartclinete ekleme ve cikarmda degisikligi kontrol edecegim
 const addToBasketIncer= useCallback((product:CardProductProps)=>{
  let updateCart;
  if(product.quantity == 10) {
    return toast.error("leider kanst du nichr extra hinzufugen")
  }
  //burda icinde varmi sonra indexliyorum
  updateCart = [...cartPrd]
  const existItem = cartPrd?.findIndex(item => item.id == product.id);
  if (existItem > -1){
    updateCart[existItem].quantity  = ++updateCart[existItem].quantity
  }
  setCartPrd(updateCart)
  localStorage.setItem("cart",JSON.stringify(updateCart))
 },[cartPrd])


 const deleteBasketDes= useCallback((product:CardProductProps)=>{
    let updateCart;
    if(product.quantity == 1) {
      return toast.error("leider kanst du nichr extra weg")
    }
    //burda icinde varmi sonra indexliyorum
    updateCart = [...cartPrd]
    const existItem = cartPrd?.findIndex(item => item.id == product.id);
    if (existItem > -1){
      updateCart[existItem].quantity  = --updateCart[existItem].quantity
    }
    setCartPrd(updateCart)
    localStorage.setItem("cart",JSON.stringify(updateCart))
   },[cartPrd])

  console.log(search,"secartdan gelen")


    let value ={
        productCartQty,
        addToBasket,
        cartPrd,
        deleteToBasket,
        removeAll,
        addToBasketIncer,
        deleteBasketDes,
      setSearch,
      search,
        cater,setCat
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