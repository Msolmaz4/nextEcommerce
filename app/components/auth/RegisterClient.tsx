"use client";
import React, { useEffect } from "react";
//burda duyenleme icin bubnu cairdim
import AuthContainer from "../Container/AuthContanier";
import Heading from "../general/Heading";
import Input from "../general/Input";

import Button from "../general/Button";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { FaGoogleDrive } from "react-icons/fa";
import Link from "next/link";
import axios from "axios"
import toast from "react-hot-toast";
import {signIn} from "next-auth/react"
import { useRouter } from "next/navigation";
import { User } from "@prisma/client";


interface RegisterProps {
  currentUser :User |null |undefined
}

const RegisterClient:React.FC<RegisterProps> = ({currentUser}) => {
    const router = useRouter()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    axios.post("/api/register",data).then(()=>{
        toast.success("register OKEY")
        //burda bir sigin olayi olusturmak gerekiyor
        signIn("credentials",{
            email:data.email,
            password:data.password ,
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
    }).catch((err)=>{
      console.log(err,"dddddddddddddddddd");
    })
  };

  useEffect(()=>{
    if(currentUser){
      router.push('/')
      router.refresh()
    }
  },[])

  return (
    <AuthContainer>
      <div className="w-full md:w-[500px] p-3 shadow-lg rounded-md">
        <Heading text="Register" />
        <Input
          placeholder="Name"
          type="text"
          id="name"
          register={register}
          errors={errors}
          required
        />
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
        <Button text="Register" onClick={handleSubmit(onSubmit)} />
        <Link href="/login" className="underline">Login </Link>
        <div className="text-center my-2 font-bold text-lg">OR</div>
        <Button
          text="Google  Sign In"
          outline
          onClick={() => alert("google sign in")}
          icon={FaGoogleDrive}
        />
      </div>
    </AuthContainer>
  );
};

export default RegisterClient;
