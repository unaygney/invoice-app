"use client";
import { getUserData } from "@/context/Theme/AuthContext";
import React from "react";

export default function DashboardContainer() {
  const { userData, setUserData } = getUserData();

  return (
    <main className="bg-light-bg dark:bg-custom-black-400 flex-1  ">
      'test'
    </main>
  );
}
