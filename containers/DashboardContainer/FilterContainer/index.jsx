import React from "react";

function FilterContainer({ dataLength }) {
  return (
    <section className="w-full h-11">
      <div className="w-full h-full flex justify-between">
        <div className="flex flex-col ">
          <h3 className="font-black ">Invoices</h3>
          <p className="text-xs text-[#888eb0]  font-bold">
            {dataLength ?? undefined} invoices
          </p>
        </div>

        <div>butonlar gelicek</div>
      </div>
    </section>
  );
}

export default FilterContainer;
