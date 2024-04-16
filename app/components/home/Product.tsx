"use client";

import React, { useEffect, useState } from "react";
import Heading from "../general/Heading";
import ProductCart from "./ProductCart";
import { products } from "@/utils/Products";
import UseCart from "@/hooks/useCart";
import getProduct from "@/app/actions/getProducts";


const Product = () => {
  const [product, setProducts] = useState(null);
  const {search} = UseCart()
  

 


  // console.log(products);
  const { cater } = UseCart();
  //console.log(products);
 // console.log(cater, "productcater");
 useEffect(() => {
  const fetchProducts = async () => {
    try {
      console.log("useefcetcakisyor")
      
      const product = await getProduct({category:"",search});
      setProducts(product);

    } catch (error) {
      console.error(error);
    }
  };

  fetchProducts();
}, [search]);
console.log(product,"gettden fele")
 console.log(products, "product");
 
  return (
    <div>
      <div className="flex items-center gap-3 md:gap-10 flex-wrap justify-center">
        {!cater && (
          <div className="flex items-center gap-3 md:gap-10 flex-wrap justify-center ">
            <div>
              <Heading text="Alle Product" />
            </div>
            <div className="flex items-center gap-3 md:gap-10 flex-wrap justify-center ">
              {products?.map((product, i) => (
                <div key={i}>
                  <ProductCart product={product} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="flex items-center gap-3 md:gap-10 flex-wrap justify-center">
        {cater && (
          <div>
            <div className="flex items-center gap-3 md:gap-10 flex-wrap justify-center ">
              <Heading text={`${cater}`} />
            </div>
            <div className="flex items-center gap-3 md:gap-10 flex-wrap justify-center ">
              {products?.map((item) => {
                if (item?.category.name === `${cater}`) {
                  return (
                    <div key={item.id}>
                      <ProductCart product={item} />
                    </div>
                  );
                }
                return;
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
