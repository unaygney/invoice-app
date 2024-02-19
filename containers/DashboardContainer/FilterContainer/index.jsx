"use client";
import React from "react";
import { Select } from "antd";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { getUserData } from "@/context/AuthContext";
function FilterContainer({ data }) {
  const { setUserData } = getUserData();
  const router = useRouter();
  const handleChange = (e) => {
    const filteredData = data.filter((element) => element.status === e);
    setUserData(filteredData);
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
            {data.length === 0 ? "No invoices" : `${data.length} invoices`}
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
              { value: "all", label: "All " },
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
