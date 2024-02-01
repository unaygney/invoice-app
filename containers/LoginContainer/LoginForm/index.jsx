"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "@/utils/validation";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => postUserData(data);
  // post data to api page
  async function postUserData(data) {
    try {
      const response = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const userData = await response.json();
      return userData;
    } catch (error) {
      console.error("Error while posting user data:", error);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-4 bg-transparent "
    >
      <div>
        <input
          className="w-full h-12 bg-custom-black-400 px-5 text-gray-300 outline-none"
          type="email"
          placeholder="Email address"
          {...register("email")}
        />
        <p className="text-red pt-1 text-xs">{errors.email?.message}</p>
      </div>
      <div>
        <input
          className="w-full h-12 bg-custom-black-400 px-5 text-gray-300 outline-none"
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <p className="text-red pt-1 text-xs">{errors.password?.message}</p>
      </div>
      <button className="w-full h-12 bg-[#FC4747] text-white text-[18px]  font-bold mt-5 rounded-md hover:bg-white hover:text-[#161D2F] ">
        Login
      </button>
    </form>
  );
}
