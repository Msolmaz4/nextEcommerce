import { getCurrentUser } from '@/app/actions/getCurrentUser';
import getProduct from '@/app/actions/getProducts';
import AuthContainer from '@/app/components/Container/AuthContanier';
import ManageCilent from '@/app/components/admin/ManageCilent';
import React from 'react'

const Manage = async() => {
     const products = await getProduct({category:null})
    const currentUser = await getCurrentUser();
    //console.log(currentUser)
    if(!currentUser || currentUser?.role != "ADMIN"){
      return " leider ADMIN"
    }
  return (
    <AuthContainer > 
   <ManageCilent products={products} />

    </AuthContainer>
  )
}

export default Manage