import clsx from "clsx";
import React from "react";

function Card({ data }) {
  console.log(data);
  return (
    <div className="px-6 py-[22px] bg-white dark:bg-[#1E2139] rounded-md">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between">
          <h6>
            <span className=" text-[#7E88C3] mr-0.5">#</span>
            {data.id}
          </h6>
          <h6>{data.clientName}</h6>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-1">
            <h5>Due {data.paymentDue}</h5>
            <h3>£{data.total}</h3>
          </div>
          <div
            className={clsx(
              `flex items-center justify-center gap-2 w-[104px] h-10 rounded-md`,
              { "bg-[#33D69F] bg-opacity-30 ": data.status === "paid" },
              { "bg-[#FF8F00] bg-opacity-30 ": data.status === "pending" },
              { "bg-[#979797] bg-opacity-30 ": data.status === "draft" }
            )}
          >
            <span
              className={clsx(
                `block w-1 h-1 rounded-full `,
                {
                  "bg-[#33d69f]": data.status === "paid",
                },
                {
                  "bg-[#FF8F00]": data.status === "pending",
                },
                {
                  "bg-[#979797]": data.status === "draft",
                }
              )}
            ></span>
            <p
              className={clsx(
                `font-bold capitalize `,
                {
                  "text-[#33d69f]": data.status === "paid",
                },
                {
                  "text-[#FF8F00]": data.status === "pending",
                },
                {
                  "text-[#979797]": data.status === "draft",
                }
              )}
            >
              {data.status}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
