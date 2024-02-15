import React from "react";
import Link from "next/link";
import CreateForm from "./CreateForm";
import ArrowImg from "@/public/icon-arrow-left.svg";

function CreateContainer() {
  return (
    <main className="bg-light-bg dark:bg-custom-black-400 text-custom-black-400 dark:text-white flex-1 px-6 py-8  ">
      <div className="max-w-[730px] w-full mx-auto">
        <div>
          <Link className="flex  items-center gap-2" href={"/dashboard"}>
            <ArrowImg /> Go Back
          </Link>
          <h2>New Invoice</h2>
        </div>
        <CreateForm />
      </div>
    </main>
  );
}

export default CreateContainer;
