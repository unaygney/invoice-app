"use client";
import React from "react";
import { Select } from "antd";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
function FilterContainer({ dataLength }) {
  const router = useRouter();
  const handleChange = (e) => {
    console.log("degisti", e);
  };

  const handleNewClick = () => {
    router.push("/dashboard/create");
  };
  return (
    <section className="w-full h-11">
      <div className="w-full h-full flex justify-between">
        <div className="flex flex-col ">
          <h3 className="font-black ">Invoices</h3>
          <p className="text-xs text-[#888eb0]  font-bold">
            {dataLength === 0 ? "No invoices" : `${dataLength} invoices`}
          </p>
        </div>

        <div className="flex gap-4 items-center ">
          <Select
            defaultValue="Filter"
            style={{ width: 80 }}
            allowClear
            onChange={handleChange}
            options={[
              { value: "paid", label: "Paid" },
              { value: "pending", label: "Pending" },
              { value: "draft", label: "Draft" },
            ]}
          />

          <Button
            title="New"
            onClick={handleNewClick}
            variant="primary"
            className="w-[100px]"
          />
        </div>
      </div>
    </section>
  );
}

export default FilterContainer;
