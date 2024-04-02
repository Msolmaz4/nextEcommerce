import React from 'react'

interface CounterProps {
    cardProduct:any,
    increaseFunc:()=>void,
    decreaseFun:()=>void
}

const Counter:React.FC<CounterProps> = ({cardProduct,increaseFunc,decreaseFun}) => {
  return (
    <div>
        <div onClick={decreaseFun}>-</div>
        <div>{cardProduct?.quantity}</div>
      
        <div onClick={increaseFunc}>+</div>
    </div>
  )
}

export default Counter