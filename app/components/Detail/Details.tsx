import React from 'react'
import PageContainer from '../Container/PageContainer'
import Image from 'next/image'

const Details = ({product}:{product:any}) => {
    let imageUrl;
  if (product.images) {
    imageUrl = product.images[0].replace(/[\[\]"]+/g,''); // remove brackets and quotes
  }
  imageUrl = imageUrl || "/fallback-image.png"; // if imageUrl is undefined, use fallback image
  return (
    <div className='my-10'>
       <PageContainer>
        <div className='md:flex block'>
            <div className='relative h-[400px] w-[200px] flex-1'>
                <Image src={imageUrl} fill alt=""/>
            </div>
            <div className='w-3/4'>right</div>
        </div>
       </PageContainer>
    </div>
  )
}

export default Details