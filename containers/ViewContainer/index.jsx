import React from "react";
import NavigationBar from "./NavigationBar";
import ViewSection from "./ViewSection";
import ButtonContainer from "./ButtonContainer";

export default function ViewContainer({ params, data }) {
  return (
    <main className="px-6 py-8 bg-[#f8f8fb] dark:bg-custom-black-400 dark:text-white flex-1 ">
      <div className="max-w-[730px] w-full mx-auto">
        <NavigationBar />
        <ViewSection data={data} />
        <ButtonContainer params={params} />
      </div>
    </main>
  );
}
