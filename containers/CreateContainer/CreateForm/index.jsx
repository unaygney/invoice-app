"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { loginSchema } from "@/utils/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "@/components/Input";
import { INPUTS } from "./constant";
function CreateForm() {
  return (
    <form className="w-full h-full mb-20 ">
      {INPUTS.map((field) => (
        <>
          <div>
            <h3>{field?.areaName}</h3>
          </div>
          <div className="w-full">
            {field.fields.map((item) => (
              <Input
                placeholder={item.placeholder}
                type={item.type}
                name={item.name}
                label={item.label}
                className="bg-white border border-[#DFE3FA] dark:border-none dark:bg-[#1E2139]  "
              />
            ))}
          </div>
        </>
      ))}
    </form>
  );
}

export default CreateForm;
