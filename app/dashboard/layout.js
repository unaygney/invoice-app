"use client";
import SideBar from "@/components/Sidebar";
import { ThemeContextProvider } from "@/context/Theme/ThemeContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`flex flex-col lg:flex-row overflow-hidden `}>
        <SideBar />
        {children}
      </body>
    </html>
  );
}
