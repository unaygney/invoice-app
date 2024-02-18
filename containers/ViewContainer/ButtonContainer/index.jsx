"use client";
import React from "react";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
function ButtonContainer({ params, data }) {
  const router = useRouter();
  const REDIRECT_TIME = 1000;
  const status = data.status;

  // * To delete invoice
  const handleDelete = async () => {
    const response = await fetch("/api/deleteData", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params),
    });

    if (response.ok) {
      toast.success("Deleted invoice successfully!");
      setTimeout(() => {
        router.push("/dashboard");
      }, REDIRECT_TIME);
    } else {
      toast.error("Encountered a error while deleting data!");
    }
  };

  // * To Handle Update status 'Paid'
  const handleUpdate = async () => {
    const response = await fetch("/api/dataUpdate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params),
    });

    if (response.ok) {
      toast.success("Invoice status changed successfully.");
      setTimeout(() => {
        router.push("/dashboard");
      }, REDIRECT_TIME);
    } else {
      toast.error("Encounted a error while update invoice status.");
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 h-[91px] bg-white dark:bg-[#1E2139]">
      <div className="w-full h-full flex items-center justify-center gap-2 px-6">
        <div className="w-full h-full flex items-center justify-center gap-2 px-6">
          {status !== "paid" ? (
            <>
              <Button variant="danger" title="Delete" onClick={handleDelete} />
              <Button
                variant="secondary"
                title="Mark as Paid"
                onClick={handleUpdate}
              />
            </>
          ) : (
            <Button variant="danger" title="Delete" onClick={handleDelete} />
          )}
        </div>
      </div>
    </div>
  );
}

export default ButtonContainer;
