"use client";
import React from "react";
import FilterContainer from "./FilterContainer";
import CardContainer from "./CardContainer";
import { getUserData } from "@/context/AuthContext";

export default function DashboardContainer({ data }) {
  const { userData } = getUserData();
  const invoices = data.invoices;

  return (
    <main className="bg-light-bg dark:bg-custom-black-400 text-custom-black-400 dark:text-white flex-1 px-6 py-8  overflow-scroll   ">
      <div className="max-w-[730px] w-full mx-auto">
        <FilterContainer data={invoices} />
        <CardContainer data={userData.length > 0 ? userData : invoices} />
      </div>
    </main>
  );
}
