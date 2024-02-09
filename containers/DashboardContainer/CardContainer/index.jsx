import Card from "@/components/Card";
import React from "react";

function CardContainer({ data }) {
  return (
    <section className="flex flex-col gap-4 mt-2">
      {data.map((item, k) => (
        <Card key={k} data={item} />
      ))}
    </section>
  );
}

export default CardContainer;
