"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "@/utils/validation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

export default function SignupForm() {
  const router = useRouter();
  const REDIRECT_TIME = 1000;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => createUserData(data);
  // post data to api page
  async function createUserData(data) {
    try {
      const response = await fetch("/api/createUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const userData = await response.json();
      if (response.ok) {
        toast.success("User created successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
        });
        reset();
        //redirect login page in 500ms
        setTimeout(() => {
          router.push("/login");
        }, REDIRECT_TIME);
      } else {
        toast.error(`An error was encountered while creating the user`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
        });
      }
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
      <div>
        <input
          className="w-full h-12 bg-custom-black-400 px-5 text-gray-300 outline-none"
          type="password"
          placeholder="re-password"
          {...register("rePassword")}
        />
        <p className="text-red pt-1 text-xs">{errors.rePassword?.message}</p>
      </div>
      <button className="w-full h-12 bg-[#FC4747] text-white text-[18px]  font-bold mt-5 rounded-md hover:bg-white hover:text-[#161D2F] ">
        Sign Up!
      </button>
      <ToastContainer />
    </form>
  );
}
