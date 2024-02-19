"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { INPUTS } from "./constant";
import Button from "@/components/Button";
import { convertFormData } from "@/utils/convertFormData";
import { yupResolver } from "@hookform/resolvers/yup";
import { invoiceFormSchema } from "@/utils/validation";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

function CreateForm() {
  const router = useRouter();
  //  create yup for form validation (√)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(invoiceFormSchema) });

  // * go to api pages to create firebase add doc.

  const onSubmit = async (data) => {
    const submitAction = await data.submitAction;
    const convertedData = convertFormData(data, submitAction);
    const response = await fetch("/api/dataCreate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(convertedData),
    });

    if (response.ok) {
      toast.success("Data created Successfully!");
      setTimeout(() => {
        reset();
      }, 500);
      router.push("/dashboard");
    } else {
      toast.error("encountered error while creating data.. ");
    }
  };

  const handleSaveAsDraft = async () => {
    await handleSubmit((data) =>
      onSubmit({ ...data, submitAction: "saveAsDraft" })
    )();
  };

  const handleSaveAndSend = async () => {
    await handleSubmit((data) =>
      onSubmit({ ...data, submitAction: "saveAndSend" })
    )();
  };

  return (
    <form className="w-full h-full mb-20" onSubmit={handleSubmit(onSubmit)}>
      {INPUTS.map((field, index) => (
        <div key={index}>
          <div className="my-6">
            <h3 className="text-[#7C5DFA] text-[15px] tracking-[-0.25px] leading-4 font-bold  ">
              {field?.areaName}
            </h3>
          </div>
          <div className="w-full">
            {field.fields.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-[9px]">
                <label
                  className="text-[#7E88C3] text-[13px] font-medium tracking-[-0.1px] leading-4 mt-6 "
                  htmlFor={item.name}
                >
                  {item.label}
                </label>
                <input
                  name={item.name}
                  id={item.id}
                  type={item.type}
                  placeholder={item.placeholder}
                  className="w-full h-12 rounded-md border border-[#F2F2F2] dark:text-white px-5 outline-none text-black font-bold text-[15px] -tracking-wide dark:bg-[#1E2139] dark:border-[#20233C]"
                  {...register(item.name)}
                />
                {errors[item.name] && (
                  <span className="text-xs text-red font-normal">
                    {errors[item.name]?.message}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="fixed bottom-0 left-0 right-0 h-[91px] bg-white dark:bg-[#1E2139] lg:left-[103px] ">
        <div className="w-full h-full flex items-center justify-center gap-2 px-6">
          <div className="w-full h-full flex items-center justify-center gap-2 px-6">
            <Button variant="dark-mini" title="Discard" type="button" />
            <Button
              variant="dark"
              title="Save as Draft"
              type="button"
              onClick={handleSaveAsDraft}
            />
            <Button
              variant="secondary"
              title="Save & Send"
              type="button"
              onClick={handleSaveAndSend}
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default CreateForm;
