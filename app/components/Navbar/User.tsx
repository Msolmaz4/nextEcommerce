"use client"

import React, { useState } from 'react'
import { User as PrismaUser } from '@prisma/client';

import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
interface UserProps {
  currentUser: PrismaUser | null | undefined;
}

const User:React.FC<UserProps> = ({currentUser}) => {
  console.log("currentUser",currentUser)
  const [open,setOpen] = useState(false);
  const router = useRouter()

  const menuFunc = (text:string)=>{
    if(text == "logout"){
       setOpen(false)
    signOut()
    router.push("/login")
    }else if(text=="register"){
      setOpen(false)
      router.push("/register")
    }
    else if(text=="login"){
      setOpen(false)
      router.push("/login")
    }
    else if(text=="admin"){
      setOpen(false)
      router.push("/admin")
    }
    else if(text=="profile"){
      setOpen(false)
      router.push("/profile")
    }
   
  }
  return (
    <div className='hidden md:flex relative'>
      <div onClick={()=>setOpen(!open)}>
        {currentUser ? currentUser.name : "User"}
      </div>
      {
        open && (
          <div className='absolute w-[200px] top-10 bg-white shadow-lg right-0 p-2 rounded-md'>
            {
              currentUser ? (
                <div>
                 {currentUser?.role == "ADMIN" ? <div className='text-slate-600' onClick={()=>menuFunc("admin")}>Admin</div> : <div className='text-slate-600' onClick={()=>menuFunc("profile")}> Profile </div> } 
                  <div className='text-slate-600' onClick={()=>menuFunc("logout")}>Logout</div>
                </div>
              ):(
                <div>
                  <div className='text-slate-600' onClick={()=>menuFunc("register")}> Register</div>
                  <div className='text-slate-600' onClick={()=>menuFunc("login")}>Login</div>
                </div>
              )
            }
          </div>
        )
      }
      </div>
  )
}

export default User