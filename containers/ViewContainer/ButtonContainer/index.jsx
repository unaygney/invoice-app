"use client";
import React from "react";
import Button from "@/components/Button";
import { getUserData } from "@/context/Theme/AuthContext";

function ButtonContainer() {
  const { setEdit, isEdit } = getUserData();
  const handleEditClick = () => {
    setEdit(true);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 h-[91px] bg-white dark:bg-[#1E2139]">
      <div className="w-full h-full flex items-center justify-center gap-2 px-6">
        {isEdit ? (
          "deneme"
        ) : (
          <div className="w-full h-full flex items-center justify-center gap-2 px-6">
            <Button
              variant="dark-mini"
              title="Edit"
              onClick={handleEditClick}
            />
            <Button variant="danger" title="Delete" />
            <Button variant="secondary" title="Mark as Paid" />
          </div>
        )}
      </div>
    </div>
  );
}

export default ButtonContainer;
