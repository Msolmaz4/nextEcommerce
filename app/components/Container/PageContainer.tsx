import React from 'react'

const PageContainer = ({children}:{children:React.ReactNode}) => {
    //bunu detail da kullandim bunda gemen bir duyenleme yi gibi dusunebiliriy
  return (
    <div className='px-30 md:px-10'>{children}</div>
  )
}

export default PageContainer