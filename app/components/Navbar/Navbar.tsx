import React, { useEffect, useState } from 'react'
import Logo from './Logo'
import Search from './Search'
import CardCount from './CardCount'
import User from './User'
import HamburgerMenu from './HamburgerMenu'
import { getCurrentUser } from '@/app/actions/getCurrentUser'

interface curProps {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | undefined;
  id: string;
  name: string | null;
  email: string | null;
  image: string | null;
  hashedPassword: string | null;
  updateAt: Date;
  role?: $Enums.Role
}

const Navbar = () => {
  const [currentUser, setCurrentUser] = useState<curProps | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getCurrentUser();
      setCurrentUser(user);
    }

    fetchUser();
  }, []);

  return (
    <div className='flex items-center justify-between gap-3 md:gap-10 px-3 md:px-10 h-16 bg-orange-400 '>
        <Logo/>
        <Search/>
        {currentUser && <CardCount  currentUser = {currentUser}/>}
        {currentUser && <User currentUser = {currentUser}/>}
        <HamburgerMenu/>
    </div>
  )
}

export default Navbar
