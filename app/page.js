import React from "react";
import Button from "@/components/Button";

export default function Home() {
  return (
    <>
      <div>
        <Button title="New Invoice" variant="primary" />
      </div>
      <div>
        <Button title="Mark as Paid" variant="secondary" />
      </div>
      <div>
        <Button title="Edit" variant="mini" />
      </div>
    </>
  );
}
