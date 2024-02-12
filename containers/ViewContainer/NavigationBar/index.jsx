import React from "react";
import IconLeft from "@/public/icon-arrow-left.svg";
import Link from "next/link";
function NavigationBar() {
  return (
    <div className="flex items-center">
      <Link
        className="flex  items-center gap-6 font-bold text-[15px]"
        href={"/dashboard"}
      >
        <IconLeft />
        Go Back
      </Link>
    </div>
  );
}

export default NavigationBar;
