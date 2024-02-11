import React from "react";
import FilterContainer from "./FilterContainer";
import CardContainer from "./CardContainer";

export default function DashboardContainer({ data }) {
  const invoices = data.invoices;
  return (
    <main className="bg-light-bg dark:bg-custom-black-400 text-custom-black-400 dark:text-white flex-1 px-6 py-8  ">
      <div className="max-w-[730px] w-full mx-auto">
        <FilterContainer dataLength={invoices.length} />
        <CardContainer data={invoices} />
      </div>
    </main>
  );
}
