import { useTheme } from "@/context/Theme/ThemeContext";
import React from "react";
export default function SideBar() {
  const { theme, setTheme } = useTheme();
  console.log(theme);
  const handleClick = () => {
    setTheme(!theme);
  };

  return (
    <aside>
      <button
        onClick={handleClick}
        className="bg-gray-600 dark:bg-green-500 rounded-lg w-40 h-10"
      >
        change theme{" "}
      </button>
    </aside>
  );
}
