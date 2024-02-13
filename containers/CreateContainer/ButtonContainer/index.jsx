import React from "react";
import Button from "@/components/Button";
function index() {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-[91px] bg-white dark:bg-[#1E2139]">
      <div className="w-full h-full flex items-center justify-center gap-2 px-6">
        <div className="w-full h-full flex items-center justify-center gap-2 px-6">
          <Button variant="dark-mini" title="Discard" />
          <Button variant="dark" title="Save as Draft" />
          <Button variant="secondary" title="Save & Send" />
        </div>
      </div>
    </div>
  );
}

export default index;
