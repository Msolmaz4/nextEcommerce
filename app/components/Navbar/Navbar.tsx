import React from 'react'
import Logo from './Logo'
import Search from './Search'
import CardCount from './CardCount'
import User from './User'
import HamburgerMenu from './HamburgerMenu'
import { getCurrentUser } from '@/app/actions/getCurrentUser'

const Navbar =  async () => {
  const currentUser = await getCurrentUser()
  return (
    <div className='flex items-center justify-between gap-3 md:gap-10 px-3 md:px-10 h-16 bg-orange-400 '>
        <Logo/>
        <Search/>
        <CardCount  currentUser = {currentUser}/>
        <User currentUser = {currentUser}/>
        <HamburgerMenu/>
    </div>
  )
}

export default Navbar