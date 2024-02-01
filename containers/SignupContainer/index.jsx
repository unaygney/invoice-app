import React from "react";
import Link from "next/link";
import SignupForm from "./SignupForm";

export default function SignupContainer() {
  return (
    <main className="w-screen h-screen bg-[#10141E] px-6 py-12 flex flex-col gap-10 items-center justify-center">
      <div className="w-full max-w-[400px] p-8  bg-[#161D2F] flex flex-col gap-10 rounded-[20px]">
        <h1 className="text-white text-4xl font-light tracking-[0.5px] leading-normal ">
          Sign Up
        </h1>
        <SignupForm />
        <Link
          className="text-[15px] font-light leading-normal text-white text-center "
          href={"/login"}
        >
          Already have an account?
          <span className="text-[#FC4747] ml-2 ">Login</span>
        </Link>
      </div>
    </main>
  );
}
