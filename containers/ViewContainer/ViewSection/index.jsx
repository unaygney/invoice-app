"use client";
import React from "react";
import clsx from "clsx";
import ButtonContainer from "../ButtonContainer";
function ViewSection({ data, params }) {
  return (
    <section className="flex flex-col gap-4 mt-8 overflow-scroll scroll-smooth no-scrollbar">
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
      <div className="w-full  rounded-lg mb-20  bg-white dark:bg-[#1E2139] p-6  ">
        <div className="w-full h-full">
          <div className="flex flex-col gap-8">
            <div className="">
              <h3 className="heading-s">{data.id}</h3>
              <p className="body text-[#7E88C3]">{data.description}</p>
            </div>

            <div className="mb-8">
              <address className="body text-[#7E88C3]">
                {data.senderAddress.street} <br />
                {data.senderAddress.city} <br />
                {data.senderAddress.postCode} <br />
                {data.senderAddress.country} <br />
              </address>
            </div>
          </div>

          <div className="flex justify-between mb-8">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <h4 className="body text-[#7E88C3]">Invoice Date</h4>
                <p className="heading-s">{data.createdAt}</p>
              </div>

              <div className="flex flex-col gap-3">
                <h4 className="body text-[#7E88C3]">Payment Date</h4>
                <p className="heading-s">{data.paymentDue}</p>
              </div>

              <div className="flex flex-col gap-3">
                <h6 className="body text-[#7E88C3]">Sent to</h6>
                <p className="heading-s">{data.clientEmail}</p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="body text-[#7E88C3]">Bill to</h4>
              <h3 className="heading-s">{data.clientName}</h3>
              <div>
                <address className="body text-[#7E88C3]">
                  {data.clientAddress.street} <br />
                  {data.clientAddress.city} <br />
                  {data.clientAddress.postCode} <br />
                  {data.clientAddress.country} <br />
                </address>
              </div>
            </div>
          </div>

          <div className=" bg-[#F9FAFE] dark:bg-[#252945] rounded-t-lg ">
            <div className="mb-6 p-6">
              {data.items.map((item, i) => (
                <div key={i} className=" flex justify-between items-center">
                  <div className="flex flex-col gap-2">
                    <h5 className="heading-s">{item.name}</h5>
                    <p className="body text-[#7E88C3]">
                      {item.quantity} x £ {item.price}
                    </p>
                  </div>
                  <div>
                    <h6 className="heading-s">{item.total}</h6>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#373B53] dark:bg-custom-black-400 text-white rounded-b-lg px-6 py-8 flex items-center  justify-between ">
              <h3 className="text">Amount Due</h3>
              <h3 className="heading-m">£ {data.total}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ViewSection;
