"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { loginSchema } from "@/utils/validation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const REDIRECT_TIME = 1000;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const onSubmit = (data) => postUserData(data);
  async function postUserData(data) {
    try {
      const response = await fetch("api/loginUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Successfully logged in!");
        reset();
        setTimeout(() => {
          router.push("/dashboard");
        }, REDIRECT_TIME);
      } else {
        toast.error(`Error encountered while logging in`);
      }
    } catch (error) {
      throw new Error("Failed fetching data : ", error);
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
          {...register("loginEmail")}
        />
        <p className="text-red pt-1 text-xs">{errors.loginEmail?.message}</p>
      </div>
      <div>
        <input
          className="w-full h-12 bg-custom-black-400 px-5 text-gray-300 outline-none"
          type="password"
          placeholder="Password"
          {...register("loginPassword")}
        />
        <p className="text-red pt-1 text-xs">{errors.loginPassword?.message}</p>
      </div>
      <button className="w-full h-12 bg-[#FC4747] text-white text-[18px]  font-bold mt-5 rounded-md hover:bg-white hover:text-[#161D2F] ">
        Login
      </button>
      <ToastContainer />
    </form>
  );
}
