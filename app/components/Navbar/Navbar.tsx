import React from 'react'
import Logo from './Logo'
import Search from './Search'
import CardCount from './CardCount'
import User from './User'
import HamburgerMenu from './HamburgerMenu'

const Navbar = () => {
  return (
    <div>
        <Logo/>
        <Search/>
        <CardCount/>
        <User/>
        <HamburgerMenu/>
    </div>
  )
}

export default Navbar