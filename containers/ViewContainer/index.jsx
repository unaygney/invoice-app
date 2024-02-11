import Link from "next/link";
import React from "react";
import IconLeft from "@/public/icon-arrow-left.svg";
import clsx from "clsx";
import Button from "@/components/Button";

export default function ViewContainer({ params, data }) {
  let strData = JSON.stringify(data);
  return (
    <main className="px-6 py-8 bg-[#f8f8fb] dark:bg-custom-black-400 dark:text-white flex-1">
      {/*  go back button */}
      <div>
        <Link
          className="flex  items-center gap-6 font-bold text-[15px]"
          href={"/dashboard"}
        >
          <IconLeft />
          Go Back
        </Link>
      </div>
      {/* main container */}
      <section className="flex flex-col gap-4 mt-8">
        <div className="w-full h-[91px] rounded-lg flex justify-between items-center bg-white dark:bg-[#1E2139] px-6">
          <h6 className="text text-[#858BB2]">Status</h6>
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
        {/* invoices info bar */}
        <div className="w-full  rounded-lg   bg-white dark:bg-[#1E2139] p-6">
          infoices info bar
        </div>
      </section>
      {/* button container */}
      <div className="fixed bottom-0 left-0 right-0 h-[91px] bg-white dark:bg-[#1E2139]">
        <div className="w-full h-full flex items-center justify-center gap-2 px-6">
          <Button variant="dark-mini" title="Edit" />
          <Button variant="danger" title="Delete" />
          <Button variant="secondary" title="Mark as Paid" />
        </div>
      </div>
    </main>
  );
}
