import React from 'react'
import Image from 'next/image'
import Rating from '@mui/material/Rating';
import TextClip from '@/utils/TextClip';
import { useRouter } from 'next/navigation';

const ProductCart = ({product}:{product:any}) => {
  const [value, setValue] = React.useState<number | null>(2);
const router = useRouter()

  let imageUrl;
  if (product.images) {
    imageUrl = product.images[0].replace(/[\[\]"]+/g,''); // remove brackets and quotes
  }
  imageUrl = imageUrl || "/fallback-image.png"; // if imageUrl is undefined, use fallback image
  
  let productRating = product?.rewiews?.reduce((acc:number,item:any)=>acc +item.rating ,0)/product?.rewiews?.length


  return (
    <div className='w-[240px] shadow-lg p-2 cursor-pointer flex flex-col flex-1 rounded-md'  onClick={()=>router.push(`/product/${product.id}`)}  >
      <div className='relative h-[150px]'>
   
        <Image src={imageUrl} alt={product.name}  fill /> 
      </div>
      <div> <TextClip text={product.title}/>    </div>
      <Rating name="read-only" value={productRating} readOnly />
      <div className='text-orange-500 text-lg md:text-xl'>${product.price}</div>
    </div>
  )
}

export default ProductCart

