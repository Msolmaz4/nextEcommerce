"use client";
import React, { useEffect, useState } from "react";
import PageContainer from "../Container/PageContainer";
import Image from "next/image";
import Counter from "../general/Counter";
import Rating from "@mui/material/Rating";
import Button from "../general/Button";
import UseCart from "@/hooks/useCart";

export type CardProductProps = {
  id: string;
  title?: string;
  description?: string;
  price?: number ;
  imageSrc?: string;
  quantity: number;
  image?: string;
  stock?: number;
};

const Details = ({ product }: { product: any }) => {
  
  const {productCartQty,addToBasket,cartPrd} = UseCart()
//console.log(cartPrd,"useCart")
//burda sepete ekli ise bunu gostermek isititoum ussefffecte onu gosdteridm
const [dispaly,setDispaly] = useState(false)
  const [cardProduct, setCardProduct] = useState<CardProductProps>({
    id: product.id,
    title: product.title,
    description: product.description,
    price: product.price,
    imageSrc: product.image?.url,
    quantity: 1,
  });

  useEffect(()=>{
    setDispaly(false)
    let controlDis :any = cartPrd?.findIndex(cart=>cart.id == product.id)
    if(controlDis > -1){
      setDispaly(true)
    }
  },[cartPrd])
  const increaseFunc = () => {
    setCardProduct((prevProd) => ({
      ...prevProd,
      quantity: prevProd.quantity  + 1,
    }));
  };
  const decreaseFun = () => {
    if (cardProduct.quantity == 1) return;
    setCardProduct((prevProd) => ({
      ...prevProd,
      quantity: prevProd.quantity - 1,
    }));
  };

  let imageUrl;
  if (product.images) {
    imageUrl = product.images[0].replace(/[\[\]"]+/g, ""); // remove brackets and quotes
  }
  imageUrl = imageUrl || "/fallback-image.png"; // if imageUrl is undefined, use fallback image

  let productRating =
    product?.rewiews?.reduce((acc: number, item: any) => acc + item.rating, 0) /
    product?.rewiews?.length;

  return (
    <div className="my-10">
      <PageContainer>
        <div className="md:flex block gap-10 justify-center">
          <div className="relative h-[200px] md:h-[400px] w-[200px] md:w-[400px] mb-3 md:mb-0 ">
            <Image src={imageUrl} fill alt="" />
          </div>
          <div className="w-1/2">
            <div className="text-xl md:text-2xl">{product?.title} </div>
            <div className="text-slate-500">{product?.description}</div>
            <Rating name="read-only" value={productRating} readOnly />
            <div className="text-lg md:text-2xl text-orange-600 font-bold">
              {product?.price}$
            </div>
          
            {
              dispaly ? <> <Button text="Hinzugefugt" small  /></> : <> 
                <Counter
              decreaseFun={decreaseFun}
              increaseFunc={increaseFunc}
              cardProduct={cardProduct}
            />
              
              <Button text="Hinyufugen" small onClick={() => addToBasket(cardProduct)} /></>
            }
           
          </div>
        </div>
      </PageContainer>
    </div>
  );
};

export default Details;
