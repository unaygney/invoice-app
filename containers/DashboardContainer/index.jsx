import React from "react";
import FilterContainer from "./FilterContainer";
import CardContainer from "./CardContainer";

export default function DashboardContainer({ data }) {
  console.log(data.invoice.length);
  return (
    <main className="bg-light-bg dark:bg-custom-black-400 text-custom-black-400 dark:text-white flex-1 px-6 py-8  ">
      <FilterContainer dataLength={data.invoice.length} />
      <CardContainer data={data.invoice} />
    </main>
  );
}
