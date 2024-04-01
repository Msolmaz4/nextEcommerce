import React from 'react'
import Logo from './Logo'
import Search from './Search'
import CardCount from './CardCount'
import User from './User'
import HamburgerMenu from './HamburgerMenu'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between gap-3 md:gap-10 px-3 md:px-10 h-16 bg-orange-400 '>
        <Logo/>
        <Search/>
        <CardCount/>
        <User/>
        <HamburgerMenu/>
    </div>
  )
}

export default Navbar