"use client";
import React from "react";
import Button from "@/components/Button";
function ButtonContainer({ params }) {
  const handleDelete = () => {
    const response = fetch("/api/deleteData", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params),
    });

    if (response.ok) {
      console.log("data silindi");
    }
  };
  return (
    <div className="fixed bottom-0 left-0 right-0 h-[91px] bg-white dark:bg-[#1E2139]">
      <div className="w-full h-full flex items-center justify-center gap-2 px-6">
        <div className="w-full h-full flex items-center justify-center gap-2 px-6">
          <Button variant="danger" title="Delete" onClick={handleDelete} />
          <Button variant="secondary" title="Mark as Paid" />
        </div>
      </div>
    </div>
  );
}

export default ButtonContainer;
