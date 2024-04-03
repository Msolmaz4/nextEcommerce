"use client";
import React from "react";
//burda duyenleme icin bubnu cairdim
import AuthContainer from "../Container/AuthContanier";
import Heading from "../general/Heading";
import Input from "../general/Input";
import { error } from "console";
import Button from "../general/Button";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { FaGoogleDrive } from "react-icons/fa";
import Link from "next/link";

const LoginClient = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>();
  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);

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
          text="Google gogin"
          outline
        
          icon={FaGoogleDrive}
        />
      </div>
    </AuthContainer>
  );
};

export default LoginClient;