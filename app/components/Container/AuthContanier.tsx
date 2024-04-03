import React from 'react'

const AuthContainer = ({children}:{children:React.ReactNode}) => {
    //bunu register ve login de sayfayi direk ortlamak icin bur hayirbir contanier zaptim
  return (
    <div className='min-h-fit h-full w-full flex items-center justify-center'>{children}</div>
  )
}

export default AuthContainer