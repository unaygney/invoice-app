"use client";
import React, { useEffect } from "react";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Modal, Space } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";

const { confirm } = Modal;

function ButtonContainer({ params, data }) {
  const router = useRouter();
  const REDIRECT_TIME = 1000;
  const status = data.status;

  // * To delete invoice
  const handleDelete = async () => {
    confirm({
      title: "Confirm Deletion",
      icon: <ExclamationCircleFilled />,
      content: `Are you sure you want to delete invoice ${data.id} This action cannot be undone.`,
      cancelText: "Cancel",
      okText: "Delete",
      okType: "danger",
      onOk: async () => {
        return new Promise(async (res, rej) => {
          try {
            const response = await fetch("/api/deleteData", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(params),
            });

            if (response.ok) {
              res();
              toast.success("Deleted invoice successfully!");
              setTimeout(() => {
                window.location.href = "/dashboard";
              }, REDIRECT_TIME);
            } else {
              rej();
              toast.error("Encountered a error while deleting data!");
            }
          } catch (error) {
            console.error(error);
            rej(error);
          }
        });
      },

      onCancel() {},
    });
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
        window.location.href = "/dashboard";
      }, REDIRECT_TIME);
    } else {
      toast.error("Encounted a error while update invoice status.");
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 h-[91px]  bg-white dark:bg-[#1E2139] lg:left-[103px] ">
      <div className="w-full h-full flex items-center justify-center gap-2 px-6">
        <div className="w-full h-full flex items-center justify-center gap-2 px-6">
          {status !== "paid" ? (
            <>
              <Space wrap>
                <Button
                  variant="danger"
                  title="Delete"
                  onClick={handleDelete}
                />
              </Space>
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
