"use client";
import React, { useEffect } from "react";
//burda duyenleme icin bubnu cairdim
import AuthContainer from "../Container/AuthContanier";
import Heading from "../general/Heading";
import Input from "../general/Input";
import { error } from "console";
import Button from "../general/Button";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { FaGoogleDrive } from "react-icons/fa";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { User } from "@prisma/client";
import { cookies } from "next/headers";

interface LoginProps {
  currentUser :User |null |undefined
}



const LoginClient:React.FC<LoginProps> = ({currentUser}) => {
    const router = useRouter()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
     signIn("credentials",{
      ...data,
        redirect:false}).then((callback)=>{
            if(callback?.ok){
                router.push("/")
                router.refresh()
                toast.success("login okey")
            }
            if(callback?.error){
                toast.error(callback.error)
            }
        })
  };
    
  useEffect(()=>{
    if(currentUser){
      router.push('/')
      router.refresh()
    }
  },[])
  const derleme = ()=>{
    signIn("google")
    router.push("/")
    
  }
   
  return (
    <AuthContainer>
      <div className="w-full md:w-[500px] p-3 shadow-lg rounded-md">
        <Heading text="Login" />
   
        <Input
          placeholder="Email"
          type="email"
          id="email"
          register={register}
          errors={errors}
          required
        />
        <Input
          placeholder="Password"
          type="password"
          id="password"
          register={register}
          errors={errors}
          required
        />
        <Button text="Login" onClick={handleSubmit(onSubmit)} />
        <Link href="/register" className="underline">Sign In</Link>
        <div className="text-center my-2 font-bold text-lg">OR</div>
        <Button
          text="Google login"
          outline
          onClick={derleme}
          icon={FaGoogleDrive} 
        />
      </div>
    </AuthContainer>
  );
};

export default LoginClient;