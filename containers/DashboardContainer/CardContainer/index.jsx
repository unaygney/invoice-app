import Card from "@/components/Card";
import React from "react";
import EmptyImage from "./images/illustration-empty.svg";
function CardContainer({ data }) {
  if (data.length === 0) {
    return (
      <section className="mt-[102px] flex justify-center items-center">
        <div className="flex flex-col items-center ">
          <EmptyImage />
          <div className="mt-11 flex flex-col gap-6 text-center">
            <h2 className="font-bold text-2xl text-custom-black-400 ">
              There is nothing here
            </h2>
            <p className="text text--variant">
              Create an invoice by clicking the <span>New</span> button and get
              started
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="flex flex-col gap-4 mt-2">
      {data.map((item, k) => (
        <Card key={k} data={item} />
      ))}
    </section>
  );
}

export default CardContainer;
