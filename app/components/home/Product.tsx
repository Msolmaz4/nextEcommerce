"use client";

import React from "react";
import Heading from "../general/Heading";
import ProductCart from "./ProductCart";
import { products } from "@/utils/Products";

const Product = () => {
  console.log(products);
  return (
    <div>
      <Heading text="Alle Products" />
      <div className="flex items-center gap-3 md:gap-10 flex-wrap justify-center">
        {products?.map((product, i) => (
          <div key={i}>
           
            <ProductCart product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
