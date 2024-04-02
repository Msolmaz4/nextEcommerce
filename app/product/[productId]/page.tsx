import Details from '@/app/components/Detail/Details'
import { products } from '@/utils/Products'
import React from 'react'
type DetailProps = {

    productId?: string | number
}

const Detail = ({params} : {params:DetailProps}) => {
    console.log(params)
    const {productId} = params
    console.log(productId)
    const data = products?.find(item => item.id == productId) 
    console.log(data)
  return (
    <div><Details  product={data}/></div>
  )
}

export default Detail