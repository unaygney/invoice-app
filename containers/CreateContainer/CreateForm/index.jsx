"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { INPUTS } from "./constant";
import Button from "@/components/Button";
import { convertFormData } from "@/utils/convertFormData";

function CreateForm() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  // * go to api pages to create firebase add doc.

  const onSubmit = (data) => {
    const submitAction = data.submitAction;
    const convertedData = convertFormData(data, submitAction);
    console.log(convertedData);
  };

  const handleSaveAsDraft = () => {
    onSubmit({ ...getValues(), submitAction: "saveAsDraft" });
  };

  const handleSaveAndSend = () => {
    onSubmit({ ...getValues(), submitAction: "saveAndSend" });
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
                  className="w-full h-12 rounded-md border border-[#F2F2F2] dark:text-white px-5 outline-none text-black font-bold text-[15px] -tracking-wide dark:bg-[#1E2139] dark:border-[#20233C] "
                  {...register(item.name)}
                />
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="fixed bottom-0 left-0 right-0 h-[91px] bg-white dark:bg-[#1E2139]">
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
